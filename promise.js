/*function ramusomu(){
    return new Promise(function(){
     setTimeout(function(){
        if(mattikitta raja)
    })
}
function miniAni(){
    console.log("odi poiru thambi vanthudatha")
}
ramusomu("hello ramu and somu",miniAni)
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
*/
//promise
function isLocationValid(loc) {
    var v = "namakkal";
    if (v == loc) {
      return true;
    } else {
      return false;
    }
  }
  function location(response, errorMessage) {
    return new Promise(
      setTimeOut(function (response,errorMsg) {
        loc = "namakkal";
        console.log(loc);
        if (isLocationValid(loc)) return response(loc, "Location found");
        else return errorMessage("Location not found");
      }, 2000)
    );
  }
  location()
    .then(function (response) {
      console.log(response);
    })
    .catch(function (errorMessage) {
      console.log(errorMessage);
    });
  
  