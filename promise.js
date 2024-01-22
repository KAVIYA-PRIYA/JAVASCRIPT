/*function ramusomu(){
    return new Promise(function(){
     setTimeout(function(){
        if(mattikitta raja)
    })
}
function miniAni(){
    console.log("odi poiru thambi vanthudatha")
}
ramusomu("hello ramu and somu",miniAni)*/
function display(s) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(s);
            resolve('completed');
            //reject('function incomplete');
        }, 2000);
    });
}

display('hey').then(function(status) {
    if (status === 'completed')
     { return display('hi'); }
}).then(function(status) {
    if (status === 'completed') {
        return display('hola');
    }
});