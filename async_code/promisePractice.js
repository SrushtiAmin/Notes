// holding promise in variable 

const promiseOne = new Promise(function (resolve, reject) {
    // do async task 
    // db task 

    setTimeout(function () {
        console.log("Async task Completed");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promised Consumed ")
});

//without variable '

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Promise done")
})

//getting data as parameter

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Srushti" })
    }, 1000)
})

promiseThree.then(function (user) { // it receive promise as an argument named user, user is just parameter name 
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;

        if (!error) {
            resolve({ username: "Srushti", password: "none" })
        } else {
            reject("error happens");
        }
    }, 1000)

})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(()=>{
    console.log("The promise is resolved or rejected")
})


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;

        if (!error) {
            resolve({ username: "Srus", password: "2401" })
        } else {
            reject("error happens");
        }
    }, 1000)

});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();


async function getAllUsers(){

    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
    }catch(error){
        console.log(error)
    }
}

getAllUsers();