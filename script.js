var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues'));
if (checkboxValues === null){
  checkboxValues = {};
}
console.log(checkboxValues);
$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
});

$(document).on("change", "input[type='checkbox']", function () {
  $.each($("input[type='checkbox']"), function(){
    checkboxValues[this.id] = $(this).is(':checked');
  });
  console.log(checkboxValues);

  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});
