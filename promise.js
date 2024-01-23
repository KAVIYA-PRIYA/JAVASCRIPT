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

//promise
function isLocationValid(loc) {
  var v = "namakkal";
  if (v == loc) {
    return true;
  } else {
    return false;
  }
}
function location() {
  return new Promise(
    setTimeOut(function () {
      loc = "namakkal";
      console.log(loc);
      if (isLocationValid(loc))
        return response(loc, "Location found");
      else
        return errorMessage("Location not found");
    }, 2000)
  );
}
location()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (errorMessage) {
    console.log(errorMessage);
  });*/

  function isLocationValid(loc) {
    var validLocation = "namakkal";
    return loc === validLocation;
  }
  
  function location() {
    return new Promise((resolve, reject)=>{
      setTimeout(function () {
        var loc = "namakkal";
        console.log(loc);
        if (isLocationValid(loc)) {
          resolve("Location found");
        } else {
          reject("Location not found");
        }
      }, 2000);
    });
  }
  
  location()
    .then((response) =>{
      console.log(response);
    })
    .catch((errorMessage) =>{
      console.log(errorMessage);
    });
  
//Callback


function database(){
    console.log("Form submitted successfully..!!")
 }
 
 function submitForm(buttonClick,db){ // function definition
    setTimeout(()=>{
     console.log(buttonClick)
         db()
    },2000)
 }
 submitForm("Form submit button clicked",database) // Function calling

 //Async await
 async function asAw() {
    var promise = new Promise(
        function (response) {
            setTimeout(function () {
                //console.log(response)
                response("Example for async/Await");
            }, 1000)
        }
    );
    console.log(await promise);
}
asAw()