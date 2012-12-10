$(document).bind('pageinit', init)

function init ()
{
  log("pageinit");
  $("#button").click(onPress);
  $("#buttonOk").click(onOk);
  $("#buttonCancel").click(onCancel);
}
function onOk ()
{
  $("#popupBasic").popup("close");
  log("Ok!");
}
function onLoadAccess()
{
  $("#popupBasic").popup("close");
}
function onCancel ()
{
  $("#popupBasic").popup("close");
  log("Cancel =(");
}
function onPress ()
{
  //$("#popupBasic").popup("open");
  loadJson();
  log("Hola desde jQuery Mobile!");
}

function log(message)
{
  console.log(message);
  //alert(message);
}

function loadJson()
{
$.ajax({
  url: "./assets/data/locations.json"
  }).done(function(data) { 
  log(data)
  });
}