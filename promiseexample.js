function doTask() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            reject("Boom :=(");
        }, 2000);
    });
}

doTask().then( res => {
    console.log("Success ", res);
},
rej => {
  console.log("Error :" , rej);
});


console.log("End!!!");

