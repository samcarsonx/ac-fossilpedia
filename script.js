var checkboxValues = JSON.parse(localStorage.getItem("checkboxValues"));
if (checkboxValues === null){
  checkboxValues = {};
}
console.log(checkboxValues);

$(window).on("load", function() {
  $.each(checkboxValues, function(key, value) {
    $("#" + key).prop("checked", value);
  });
});

$(document).on("change", "input[type='checkbox']", function () {
  $.each($("input[type='checkbox']"), function(){
    checkboxValues[this.id] = $("#" + this.id).is(':checked');
  });

  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));

  console.log(checkboxValues);
});

var reset = function() {
  location.reload();
  localStorage.clear();
};
