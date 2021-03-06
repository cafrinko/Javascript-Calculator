var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result
    if (operator === "add"){
      $("#answer").text(add(number1, number2));
      $("#output").show();
    } else if (operator === "subtract"){
      $("#answer").text(subtract(number1, number2));
      $("#output").show();
    } else if (operator === "multiply"){
      $("#answer").text(multiply(number1, number2));
      $("#output").show();
    } else {
      $("#answer").text(divide(number1, number2));
      $("#output").show();
    }
  });
});
