const databaseType = {
    userType: "adimin",
    typeData: "local",
}

async function connectToDatabase (dataName) {
    console.log("Conectado ao banco: " + dataName);
}

async function disconectDatabase (){
    console.log("Desconectando do banco de dados...");
}

//export default connectToDatabase; para exportar apenas 1 arquivo

export { // para exportar mais de 1 subprograma
    connectToDatabase,
    disconectDatabase,
    databaseType,
}