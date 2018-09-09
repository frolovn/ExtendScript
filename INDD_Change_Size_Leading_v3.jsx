//changelog v3
//prompts for min font size and leading

//changelog v2
//prompts for changing size and leading
//checks if tables exist and applies reduction if yes

var title = "Enter Values";  
var changePointSize = Number(prompt ("Enter font size change value in pt, use dot as decimal separator.\n\ne.g. '-1.25' or '1.25'.\nUse 0 to leave font size as it is.", -1, title));  
var changeLeading = Number(prompt ("Enter leading change value in pt, use dot as decimal separator.\n\ne.g. '-2.25' or '2.25'.\nUse 0 to leave leading as it is.", -1, title));  
var tablescount = app.documents[0].stories.everyItem().tables.length;
var minimumPointSize = Number(prompt ("Enter minimum font size.\nFont size will NOT be reduced below this value.", 3, title));  
var minimumLeadingSize = Number(prompt ("Enter minimum leading value.\nLeading will NOT be reduced below this value.", 3, title));  

//alert(tablescount);

var counter = tablescount;

if (counter == 0) 
{      
var myTexts = app.activeDocument.stories.everyItem().textStyleRanges.everyItem().getElements();  
//myTexts = myTexts.concat(app.activeDocument.stories.everyItem().textStyleRanges.everyItem().getElements());  
var newLeading, newPointSize, newPointSize1, newPointSize1;  
for (var n=myTexts.length-1; n>=0; n--){  
     newPointSize = myTexts[n].pointSize+changePointSize;  
     newLeading = myTexts[n].leading+changeLeading;  
     newPointSize1 = minimumPointSize;  
     newLeading1 = minimumLeadingSize;  
if  (myTexts[n].pointSize > minimumPointSize)
            {     
            myTexts[n].pointSize = (newPointSize<(minimumPointSize))? newPointSize1: myTexts[n].pointSize;  
            }
     myTexts[n].pointSize = (newPointSize>(minimumPointSize-0.1))? newPointSize: myTexts[n].pointSize;  
if  (myTexts[n].leading > minimumLeadingSize)
            {
            myTexts[n].leading = (newLeading<(minimumLeadingSize)&&myTexts[n].leading!=Leading.AUTO)? newLeading1: myTexts[n].leading;  
            }   
     myTexts[n].leading = (newLeading>(minimumLeadingSize-0.1)&&myTexts[n].leading!=Leading.AUTO)? newLeading: myTexts[n].leading;  
}  }


if (counter > 0) 
{
var myTexts = app.activeDocument.stories.everyItem().textStyleRanges.everyItem().getElements();  

myTexts = myTexts.concat(app.activeDocument.stories.everyItem().tables.everyItem().cells.everyItem().textStyleRanges.everyItem().getElements());  
var newLeading, newPointSize, newPointSize1, newPointSize1;  
for (var n=myTexts.length-1; n>=0; n--){  
     newPointSize = myTexts[n].pointSize+changePointSize;  
     newLeading = myTexts[n].leading+changeLeading;  
     newPointSize1 = minimumPointSize;  
     newLeading1 = minimumLeadingSize;  
if  (myTexts[n].pointSize > minimumPointSize)
            {     
            myTexts[n].pointSize = (newPointSize<(minimumPointSize))? newPointSize1: myTexts[n].pointSize;  
            }
     myTexts[n].pointSize = (newPointSize>(minimumPointSize-0.1))? newPointSize: myTexts[n].pointSize;  
if  (myTexts[n].leading > minimumLeadingSize)
            {
            myTexts[n].leading = (newLeading<(minimumLeadingSize)&&myTexts[n].leading!=Leading.AUTO)? newLeading1: myTexts[n].leading;  
            }   
     myTexts[n].leading = (newLeading>(minimumLeadingSize-0.1)&&myTexts[n].leading!=Leading.AUTO)? newLeading: myTexts[n].leading;  
}  }


alert("Font size changed by " + changePointSize + " pt, leading changed by "+ changeLeading +" pt." + "\nMinimum font size is: " + minimumPointSize + " pt, minimum leading is: " + minimumLeadingSize + " pt.");