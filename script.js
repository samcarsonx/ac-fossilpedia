var checkboxValues = JSON.parse(localStorage.getItem("checkboxValues"));
if (checkboxValues === null){
  checkboxValues = {};
};
console.log(checkboxValues);

$(document).on("change", "input[type='checkbox']", function () {
  $.each($("input[type='checkbox']"), function(){
    checkboxValues[this.id] = $("#" + this.id).is(':checked');
  });

  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));

  console.log(checkboxValues);
});

var selectedLang = localStorage.getItem("selectedLang");
if (selectedLang === null){
  selectedLang = "en";
};
$(document).on("change", "select[id='lang']", function () {
  var selectedLang = $(this).children("option:selected").val();
  changeText(selectedLang);
});

var changeText = function(lang) {
  selectedLang = lang;
  $("select[id='lang']").val(selectedLang);

  if(selectedLang == "de") {
    $(".de").show();
    $(".es").hide();
    $(".en").hide();
  };
  if(selectedLang == "es") {
    $(".de").hide();
    $(".es").show();
    $(".en").hide();
  };
  if(selectedLang == "en") {
    $(".de").hide();
    $(".es").hide();
    $(".en").show();
  };

  console.log(selectedLang);

  localStorage.setItem("selectedLang", selectedLang);
};

$(window).on("load", function() {
  $.each(checkboxValues, function(key, value) {
    $("#" + key).prop("checked", value);
  });
  changeText(selectedLang);
});

var reset = function() {
  location.reload();
  localStorage.clear();
};

var resetDialogue = function() {
  var resetText = "";
  if (selectedLang == "en") { resetText = "Are you sure? This action cannot be undone." };
  if (selectedLang == "de") { resetText = "Bist du sicher? Diese Aktion kann nicht rückgängig gemacht werden." };
  if (selectedLang == "es") { resetText = "¿Estás seguro? Esta acción no se puede deshacer." };

  if(confirm(resetText)) {
    reset();
  };
};
