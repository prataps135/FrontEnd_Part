"use strict";

function Divide(num1,num2){
    var promise = new Promise(function(resolve,reject){
        if(num2 != 0){
            resolve(num1/num2);
        }
        else{
            reject("Divide by zero is not allowed.");
        }
    });
    return promise;
}

Divide(5,0).then(
    function (result){
        console.log(result);
    },
    function (err){
        console.log(err);
    }
);