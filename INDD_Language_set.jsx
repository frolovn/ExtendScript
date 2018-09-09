var myCounter = 0;

var w = new Window ("dialog");
w.add ("statictext", undefined, "Select the language: ");
var myDropdown = w.add ("dropdownlist", undefined, ["Arabic","Bengali (India)","Bulgarian","Catalan","Croatian","Czech","Danish","Dutch: 2005 Reform","English: UK","English: USA","Estonian","Finnish","French","German: 2006 Reform","Greek","Hebrew","Hungarian","Italian","Latvian","Lithuanian","Norwegian: Bokmål","Polish","Portuguese","Romanian","Russian","Slovak","Slovenian","Spanish","Swedish","Turkish","Ukranian"]);
myDropdown.selection = 8;

var buttons = w.add ("group")
var OK = buttons.add ("button", undefined, "OK");
var Close = buttons.add ("button", undefined, "Cancel");


OK.onClick = function () {
w.close ();



myCounter++;

}

Close.onClick = function () {
w.close ();







}


w.show ();

if (myCounter==1)

{
    var myLang = myDropdown.selection.text;

var tablescount = app.activeDocument.stories.everyItem().tables.length
var footnotecount = app.activeDocument.stories.everyItem().footnotes.length


//alert(tablescount);

var counter = tablescount;
var counterf = footnotecount;

if (counter == 0) 
{      
app.activeDocument.stories.everyItem().appliedLanguage=myLang; 
} 

if (counter > 0) 
{
app.activeDocument.stories.everyItem().appliedLanguage=myLang; 
app.activeDocument.stories.everyItem().tables.everyItem().cells.everyItem().texts[0].appliedLanguage=myLang;  
} 

if (counterf > 0) 
{
app.activeDocument.stories.everyItem().footnotes.everyItem().texts[0].appliedLanguage=myLang;
} 

 alert("All texts are set to "+myLang);
}

else

{
    }


