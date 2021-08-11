function celsiusToFahrenheit(Celsius) {
	return ((Celsius * 1.8) + 32);
}

function fahrenheitToCelsius(Fahrenheit) {
	return ((Fahrenheit-32) * (5/9));
}

function gallonsToLiters(gallons) {
  return (gallons * 3.78541);
}

function litersToGallons(liters) {
  return (liters * 0.264172);
}

function gramsToOunces(grams) {
  return (grams * 0.035274);
}

function ouncesToGrams(ounces) {
  return (ounces * 28.3495);
}

$(document).ready(function() {
  $("form#CtoF").submit(function(event) {
    event.preventDefault();
    const convert = parseInt($("#C").val());
    const result = celsiusToFahrenheit(convert);
    $(".CtoF-output").text(result);
  });
});

$(document).ready(function() {
  $("form#FtoC").submit(function(event) {
    event.preventDefault();
    const convert = parseInt($("#F").val());
    const result = fahrenheitToCelsius(convert);
    $(".FtoC-output").text(result);
  });
});

$(document).ready(function() {
  $("form#GtoL").submit(function(event) {
    event.preventDefault();
    const convert = parseInt($("#G").val());
    const result = gallonsToLiters(convert);
    $(".GtoL-output").text(result);
  });
});

$(document).ready(function() {
  $("form#LtoG").submit(function(event) {
    event.preventDefault();
    const convert = parseInt($("#L").val());
    const result = litersToGallons(convert);
    $(".LtoG-output").text(result);
  });
});

$(document).ready(function() {
  $("form#GrtoO").submit(function(event) {
    event.preventDefault();
    const convert = parseInt($("#Gr").val());
    const result = gramsToOunces(convert);
    $(".GrtoO-output").text(result);
  });
});

$(document).ready(function() {
  $("form#OtoGr").submit(function(event) {
    event.preventDefault();
    const convert = parseInt($("#O").val());
    const result = ouncesToGrams(convert);
    $(".OtoGr-output").text(result);
  });
});