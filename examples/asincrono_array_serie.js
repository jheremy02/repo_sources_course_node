//llamar a la funcion fn con cada elemento del array

const number=[1,2,3,4,5]

function escribeDespues2s(texto,callback) {
    setTimeout(()=>{console.log(`Hello node course ${texto}`)
    callback();
},2000)
}

function serie(arr,fn,callbackEnd) {
    if (arr.length==0) {
        callbackEnd();
        return
    }

    
    fn(`element ${arr.shift()}`,()=>{serie(arr,fn,callbackEnd)})

}

serie(number,escribeDespues2s,()=>{console.log('END!!!!')})