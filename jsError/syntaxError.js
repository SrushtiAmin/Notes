//syntaxError
try{
    eval("let a === 5")
}catch(error){
    console.log("Error Name:", error.name);
    console.log("Message:", error.message);
}