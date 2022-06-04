const axios = require("axios")
const { DB, DO, DMEP } = require("../urls.js")

class DolarService {

    constructor(){
        this.DB = DB
        this.DO = DO
        this.DMEP = DMEP
    }


    async dolar_blue(){
       try{
        const req = await axios.get(this.DB).then(res => res.data.venta)
        return req;
       }catch(err){
           console.log(err)
       }
    }

    async dolar_oficial(){
        try{
         const req = await axios.get(this.DO).then(res => res.data.venta)
         return req;
        }catch(err){
            console.log(err)
        }
     }

    async dolar_mep(){
        try{
         const req = await axios.get(this.DMEP).then(res => res.data.venta)
         return req;
        }catch(err){
            console.log(err)
        }
    }


}

module.exports = DolarService;