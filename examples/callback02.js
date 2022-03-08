         
function escribeDespues2s(texto,callback) {
    setTimeout(()=>{console.log(`Hello node course ${texto}`)
    callback();
},2000)
}


// LLAMAR N VECES A LA FUNCION FN

function serie(n,fn,callbackEnd) {
    if (n==0) {
        callbackEnd();
        return;
    }

    n=n-1;
    fn(`texto ${n}`,()=>{
        serie(n,fn,callbackEnd)
    })
       

}

serie(8,escribeDespues2s,()=>{console.log("END!!")})