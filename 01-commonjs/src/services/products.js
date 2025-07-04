//todas as funções que lidam com produtos
const productType = {
    version: "digital",
    tax: "x1",
}

const productExpiration = {
    lote: "10-02-2025",
    expiration: "30-02-2026",
}
async function getFullName(codeId, productName){
    console.log("Product: " + codeId + " -- " + productName);
}

module.exports = {
    getFullName,
    productType,
    productExpiration,
} 