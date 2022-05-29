const axios = require('axios')
const types_request = require("./request")

class Cotizacion {

    constructor(){
        this.urlDB = "https://api-dolar-argentina.herokuapp.com/api/dolarblue"
        this.urlDO = "https://api-dolar-argentina.herokuapp.com/api/dolaroficial"
        this.urlDMEP = "https://api-dolar-argentina.herokuapp.com/api/dolarbolsa"
    }

    async DolarBlue(){
        const req = await axios.get(this.urlDB).then((res) => console.log(res.data.venta))
        return req
    }

    async DolarOficial(){
        const req = await axios.get(this.urlDO).then((res) => console.log(res.data.venta))
        return req
    }

    async DolarMep(){
        const req = await axios.get(this.urlDMEP).then((res) => console.log(res.data.venta))
        return req
    }


}

const cotizacion = new Cotizacion()


module.exports = cotizacion;

