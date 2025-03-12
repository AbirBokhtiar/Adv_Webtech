console.log("first");

// JavaScript is single-threaded, but uses an event loop to handle asynchronous tasks.
function a() {
    setTimeout(() => { //setTimeout does not pause the execution; it schedules the function and continues running the rest of the code.
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        console.log(sum);
    }, 2000);
}

a();
console.log("end");


//Promises are used to handle asynchronous operations in JavaScript.

const prom = new Promise((resolve, reject)=>{
    let success = true;
    if(success){ 
            resolve("Done") 
    }
    else{
        reject("Not done") 
    }
})

prom
.then((message) => console.log(message))
.catch((error) => console.log(error))


//Async and Await is the standard way to handle asynchronous data
async function a3(){
    await new Promise((resolve) => {
        setTimeout(() => {
            let sum = 0
            for(i = 0; i < 1000000000; i++){
                sum += i
            }
            console.log(sum)
        }, 1);
    })
}

a3()
console.log("End")
