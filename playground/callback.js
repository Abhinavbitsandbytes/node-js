const doWorkCallback = (callback) => {
    setTimeout(() =>{
        callback(undefined, [1,4,7])
    }, 2000)
}
doWorkCallback((error, result) => {
    if(error){
        return console.log(error);
    }
    console.log(result);
})

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
       reject('Things went wrong') 
    })
})

doWorkPromise.then((result)=>{
console.log(result);
}).catch((error)=>{
    console.log('error', error)
})