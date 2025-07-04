//export default
exports.connectToDatabase = async (dataName) => { //export default async
    console.log("Conectando ao Dataset: " + dataName);
}

exports.desconectToDatabase = () =>{ //export default sync
    console.log("Desconectando...");
}