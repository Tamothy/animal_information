$(document).ready(function () {
  var animal = prompt("What kind of animals do you want to learn about: african, alaskan, or caribbean?");

  if (animal === "african") {
    $("#african_animals").show();
  } else if (animal === "alaskan") {
    $("#alaskan_animals").show();
  } else if (animal === "caribbean") {
    $("#caribbean_animals").show();
  } else {
    alert("Please check your spelling! Try again!");
  }
});
