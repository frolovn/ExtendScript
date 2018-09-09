//the script will change the font size and use the same new value for leading


var changePointSize = -1;  
var changeLeading = 0;  

var minimumPointSize = 6; 
var minimumLeadingSize =6;

 

///////////DO NOT CHANGE ANYTHING BELOW////////////


var tablescount = app.documents[0].stories.everyItem().tables.length;
 


var counter = tablescount;

if (counter == 0) 
{      
var myTexts = app.activeDocument.stories.everyItem().textStyleRanges.everyItem().getElements();  

var newLeading, newPointSize, newPointSize1, newPointSize1;  
for (var n=myTexts.length-1; n>=0; n--){  
     newPointSize = myTexts[n].pointSize+changePointSize;  
     newLeading = newPointSize;  
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
     newLeading = newPointSize;  
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
