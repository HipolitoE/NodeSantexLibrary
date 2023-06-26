const passport = require('passport');
const passportJwt = require('passport-jwt');
const { READCOMMITTED } = require('sequelize/types/table-hints');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = 'claveSecretaQueSoloConoceElServer';


passport.use(
    new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    }, (jwtPayload, done) => {
        const user = jwtPayload;
        return done(null, user);
    }
  )
);

const authIsAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === "Admin") {
        return next();
    }
    res.status(401).json({ error: 'Autentificacion fallida'});
}

const authMiddleware = passport.authenticate('jwt', { session: false });

module.exports = { secret, authMiddleware, authIsAdmin };