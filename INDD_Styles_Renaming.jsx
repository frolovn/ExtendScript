
if (confirm('Renames all paragraph and character styles?'))
{


var before = prompt("Enter the Prefix","XX_","Enter the Prefix");

var allParaStyles = app.activeDocument.allParagraphStyles;

//var before = "TH_";

for (var i = 2; i < allParaStyles.length; i++) {
  var curStyle = allParaStyles[i];
  var curName = curStyle.name;
  if (curName.indexOf(before) == -1) {
    var newName = before + curName;
    curStyle.name = newName;
  }
}




var allCharStyles = app.activeDocument.allCharacterStyles;


for (var i = 1; i < allCharStyles.length; i++) {
  var curStyle = allCharStyles[i];
  var curName = curStyle.name;
  if (curName.indexOf(before) == -1) {
    var newName = before + curName;
    curStyle.name = newName;
  }
}

alert("Done!")
}

