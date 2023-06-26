const axios = require("axios");

const url = require("url");

async function makeRequest() {
    let payload = { name: "Jhon", email: "jhonny@santex.com" };

    /*const params = new url.URLSearchParams(payload);

    let config = {
        method: "get",
        url: `http://localhost:8080/user?${params}`,
    };


    let config = {
        method: "post",
        url: `http://localhost:8080/user`,
        data: payload,
    };

    let response = await axios(config);*/
    const response = await axios.post("http://localhost:8080/user", payload);
    
    console.log("Datos del server:", response.data);
}

makeRequest();

/*axios.get('http://localhost:8080/user/1234').then(res => {
    console.log('Datos del Server:', res.data)
});*/