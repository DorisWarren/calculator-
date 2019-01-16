function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
};

$(document).ready(function() {
   $("form#add").submit(function(event){
     event.preventDefault();
     var num1 = parseInt($("#add1").val());
     var num2 = parseInt($("#add2").val());
     var result = add(num1, num2);
     $("#outputAdd").text(result);
   });

   $("form#sub").submit(function(event){
     event.preventDefault();
     var num1 = parseInt($("#sub1").val());
     var num2 = parseInt($("#sub2").val());
     var result = subtract(num1, num2);
     $("#outputSub").text(result);
   });

   $("form#mult").submit(function(event){
     event.preventDefault();
     var num1 = parseInt($("#mult1").val());
     var num2 = parseInt($("#mult2").val());
     var result = multiply(num1, num2);
     $("#outputMult").text(result);
   });

   $("form#divide").submit(function(event){
     event.preventDefault();
     var num1 = parseInt($("#divide1").val());
     var num2 = parseInt($("#divide2").val());
     var result = divide(num1, num2);
     $("#outputDivide").text(result);
   });
});
