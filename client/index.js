const axios = require("axios");

const url = require("url");

async function makeRequest() {
    let payload = { name: "admin", email: "admin" };
    const response = await axios.post("http://localhost:8080/user", payload);
    console.log("Datos del server:", response.data);
}

makeRequest();
