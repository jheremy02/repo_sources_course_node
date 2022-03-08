function suma(n1,n2,callback) {
    let resultado=n1+n2;
    callback(resultado)
}

suma(6,8,(res)=>(console.log(` example of callbak ${res}`)))