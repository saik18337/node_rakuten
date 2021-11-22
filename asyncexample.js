async function doTask() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("All Done!!");
        }, 2000);
    });
}

async function sometask() {
    let data = await doTask();
    console.log(data.toUpperCase());
}

sometask();
console.log("End!!!");

