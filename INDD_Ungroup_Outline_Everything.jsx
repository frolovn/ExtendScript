
var length = app.activeDocument.pages.length;


for (i=0; i<length; i++)
{

myPage = app.activeDocument.pages[i];
 app.activeDocument.pages[i].groups.everyItem().ungroup();
app.activeDocument.pages[i].groups.everyItem().ungroup();
app.activeDocument.pages[i].groups.everyItem().ungroup();
app.activeDocument.pages[i].groups.everyItem().ungroup();
app.activeDocument.pages[i].groups.everyItem().ungroup();

for (j=myPage.textFrames.length- 1; j >= 0; j--){
	try{
		
        myPage.textFrames[j].createOutlines();
		myPage.textFrames[j].remove();
		}catch(e){}
	}

}