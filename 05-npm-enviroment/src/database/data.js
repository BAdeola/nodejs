async function connectToDatabase(user, password){
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        console.log("connection with database suceed.");
    } else {
        console.log("connection failed.");
    }
};

export default connectToDatabase;