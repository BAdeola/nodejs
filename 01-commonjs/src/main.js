const { getFullName, productType } = require("./services/products"); //dessa maneira, apenas as funções desejada serão chamadas
const products = require("./services/products") //assim, todas as funções do módulo são chamadas
const config = require("./services/config")
const database = require("./services/database")

async function main(){
    getFullName(501, "maçã");
    products.getFullName(604, "pêra");
    console.log(config.production);
    console.log(productType.version);
    console.log(database.connectToDatabase());
}

main();
