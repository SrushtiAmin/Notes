//reference error
try{
    console.log(username);
}catch(error){
  console.log("Error Name:", error.name);
  console.log("Message:", error.message);
  console.log("Stack:", error.stack);
}

