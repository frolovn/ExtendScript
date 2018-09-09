
app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

myDlg = new Window('dialog', 'Choose format');
myDlg.orientation = 'row';

// Add action buttons
myDlg.btn1 = myDlg.add('button', undefined, '*.AI files');
myDlg.btn2 = myDlg.add('button', undefined, '*.EPS files');
myDlg.closeBtn = myDlg.add('button', undefined, 'Close');

// Add button functions
myDlg.btn1.onClick = function() {
 //myDlg.close();

////////////////AI EXPORT///////

function AIexport() {
    
    
    

   
//unlock layers

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myLayers = myDoc.layers;

for (a=0; a<myLayers.length; a++){
     myLayer = myLayers[a];
     myLayer.locked = false;
}




//change all text frames to variables
var myVar = 0;

for (i=0; i<myDoc.textFrames.length; i++)  
     {  
         var itext = myDoc.textFrames[i];  
          var myVar = myDoc.variables.add();  
          myVar.kind = VariableKind.TEXTUAL;  
          itext.contentVariable = myVar;  
     }  



 
 
//capture data set
var ds1 = myDoc.dataSets.add();
ds1.display();



//export files
var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFile = new File(myPath + "/Export/" + myName + ".xml"); 
myDoc.exportVariables(newFile);
var newFileAI = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new IllustratorSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 


}

    
    
    }




////////////////AI EXPORT///////



////////////////AI EXPORT 2017///////
function AIexport2017() {



   
//unlock layers

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myLayers = myDoc.layers;

for (a=0; a<myLayers.length; a++){
     myLayer = myLayers[a];
     myLayer.locked = false;
}




//change all text frames to variables
var myVar = 0;

for (i=0; i<myDoc.textFrames.length; i++)  
     {  
         var itext = myDoc.textFrames[i];  
          var myVar = myDoc.variables.add();  
          myVar.kind = VariableKind.TEXTUAL;  
          itext.contentVariable = myVar;  
     }  



 
 
//capture data set
var ds1 = myDoc.dataSets.add();
ds1.display();



//export files
var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFile = new File(myPath + "/Export/" + myName + ".xml"); 
myDoc.exportVariables(newFile);
var newFileAI = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new IllustratorSaveOptions();  
//saveOpts.compatibility = Compatibility.ILLUSTRATOR21; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 


}


}
////////////////AI EXPORT 2017///////



////////////////TidyUp_AI///////
function TidyUp_AI() {

var myLength = app.documents.length;



for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var dSet = app.documents[0].dataSets[0];
dSet.display();

function removeDataSetsAndVariables() {  
    if (app.documents.length > 0) {  
        var doc = app.documents[0];  
        var dS = doc.dataSets.length;  
        var v = doc.variables.length;  
        var curV;  
        if (v > 0) {  
            for (var i = v - 1; i >= 0; i--) {  
                curV = doc.variables[i];  
                curV.remove();  
            }  
        }  
        if (dS > 0) {  
            doc.dataSets.removeAll();  
        }  
    }  
}  
removeDataSetsAndVariables();  


var myPath = decodeURI(myDoc.path.parent);  

//needed for Temp removal
var myPathForDel = decodeURI(myDoc.path);  

var myName = myDoc.name;
var f = new Folder(myPath + "/Finalized"); 
f.create();
var newFileAI = new File(myPath + "/Finalized/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}


//delete the TEMP folder
var inFolderDeletion = new Folder(myPathForDel);
var fileListDelete = inFolderDeletion.getFiles();
for (i=0; i<fileListDelete.length;i++){
var MyFileDel = fileListDelete[i];
MyFileDel.remove();  
}
inFolderDeletion.remove();  
  


 
  


}
////////////////TidyUp_AI///////

////////////////TidyUp_AI2017///////
function TidyUp_AI2017() {
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var dSet = app.documents[0].dataSets[0];
dSet.display();

function removeDataSetsAndVariables() {  
    if (app.documents.length > 0) {  
        var doc = app.documents[0];  
        var dS = doc.dataSets.length;  
        var v = doc.variables.length;  
        var curV;  
        if (v > 0) {  
            for (var i = v - 1; i >= 0; i--) {  
                curV = doc.variables[i];  
                curV.remove();  
            }  
        }  
        if (dS > 0) {  
            doc.dataSets.removeAll();  
        }  
    }  
}  
removeDataSetsAndVariables();  

var myPath = decodeURI(myDoc.path.parent);  
//needed for Temp removal
var myPathForDel = decodeURI(myDoc.path);  

var myName = myDoc.name;
var f = new Folder(myPath + "/Finalized"); 
f.create();
var newFileAI = new File(myPath + "/Finalized/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
//saveOpts.compatibility = Compatibility.ILLUSTRATOR21; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}


//delete the TEMP folder
var inFolderDeletion = new Folder(myPathForDel);
var fileListDelete = inFolderDeletion.getFiles();
for (i=0; i<fileListDelete.length;i++){
var MyFileDel = fileListDelete[i];
MyFileDel.remove();  
}
inFolderDeletion.remove();  
  


}
////////////////TidyUp_AI2017///////


////////////////AI_import///////
function AI_import() {
    
    
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;

var xmlFile = new File(myPath + "/" + myName + ".xml"); 





app.documents[0].importVariables(xmlFile);

var f = new Folder(myPath + "/Temp"); 
f.create();

var newFileAI = new File(myPath + "/Temp/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}

var inFolder20 = new Folder(f);
if(inFolder20 != null){
var fileList = inFolder20.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}
}
////////////////AI_import///////

////////////////AI_import2017///////
function AI_import2017() {
    
    
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;

var xmlFile = new File(myPath + "/" + myName + ".xml"); 





app.documents[0].importVariables(xmlFile);

var f = new Folder(myPath + "/Temp"); 
f.create();

var newFileAI = new File(myPath + "/Temp/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
//saveOpts.compatibility = Compatibility.ILLUSTRATOR21; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}

    var inFolder10 = new Folder(f);
    if(inFolder10 != null){
    var fileList = inFolder10.getFiles(/\.(ai|)$/i);
     }
    for(var a = 0 ;a < fileList.length; a++)
    {
    var docRef = open(fileList[a]);
 
}
    
}
////////////////AI_import2017///////



////////////EPS_IMPORT/////////
function EPS_import() {
    
    
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;

var xmlFile = new File(myPath + "/" + myName + ".xml"); 





app.documents[0].importVariables(xmlFile);

var f = new Folder(myPath + "/Temp"); 
f.create();

var newFileAI = new File(myPath + "/Temp/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}

var inFolder20 = new Folder(f);
if(inFolder20 != null){
var fileList = inFolder20.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}
    
}
////////////EPS_IMPORT/////////

////////////EPS_IMPORT2017/////////
function EPS_import2017() {

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;

var xmlFile = new File(myPath + "/" + myName + ".xml"); 





app.documents[0].importVariables(xmlFile);

var f = new Folder(myPath + "/Temp"); 
f.create();

var newFileAI = new File(myPath + "/Temp/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
//saveOpts.compatibility = Compatibility.ILLUSTRATOR21; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}

    var inFolder10 = new Folder(f);
    if(inFolder10 != null){
    var fileList = inFolder10.getFiles(/\.(ai|)$/i);
     }
    for(var a = 0 ;a < fileList.length; a++)
    {
    var docRef = open(fileList[a]);
 
}    
    
}
////////////EPS_IMPORT2017/////////


////////////EPS_TidyUp/////////
function EPS_TidyUp() {

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var dSet = app.documents[0].dataSets[0];
dSet.display();

function removeDataSetsAndVariables() {  
    if (app.documents.length > 0) {  
        var doc = app.documents[0];  
        var dS = doc.dataSets.length;  
        var v = doc.variables.length;  
        var curV;  
        if (v > 0) {  
            for (var i = v - 1; i >= 0; i--) {  
                curV = doc.variables[i];  
                curV.remove();  
            }  
        }  
        if (dS > 0) {  
            doc.dataSets.removeAll();  
        }  
    }  
}  
removeDataSetsAndVariables();  

var myPath = decodeURI(myDoc.path.parent);  

//needed for Temp removal
var myPathForDel = decodeURI(myDoc.path);  

var myName = myDoc.name;
var f = new Folder(myPath + "/Finalized"); 
f.create();
var newFileAI = new File(myPath + "/Finalized/" + myName); 

var saveOpts = new EPSSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;


app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}


//delete the TEMP folder
var inFolderDeletion = new Folder(myPathForDel);
var fileListDelete = inFolderDeletion.getFiles();
for (i=0; i<fileListDelete.length;i++){
var MyFileDel = fileListDelete[i];
MyFileDel.remove();  
}
inFolderDeletion.remove();  
}
////////////EPS_TidyUp/////////


////////////EPS_TidyUp20117/////////
function EPS_TidyUp2017() {
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var dSet = app.documents[0].dataSets[0];
dSet.display();

function removeDataSetsAndVariables() {  
    if (app.documents.length > 0) {  
        var doc = app.documents[0];  
        var dS = doc.dataSets.length;  
        var v = doc.variables.length;  
        var curV;  
        if (v > 0) {  
            for (var i = v - 1; i >= 0; i--) {  
                curV = doc.variables[i];  
                curV.remove();  
            }  
        }  
        if (dS > 0) {  
            doc.dataSets.removeAll();  
        }  
    }  
}  
removeDataSetsAndVariables();  

var myPath = decodeURI(myDoc.path.parent);  

//needed for Temp removal
var myPathForDel = decodeURI(myDoc.path);  

var myName = myDoc.name;
var f = new Folder(myPath + "/Finalized"); 
f.create();
var newFileAI = new File(myPath + "/Finalized/" + myName); 

var saveOpts = new EPSSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR17; 
    saveOpts.embedAllFonts = true;


	
app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}


//delete the TEMP folder
var inFolderDeletion = new Folder(myPathForDel);
var fileListDelete = inFolderDeletion.getFiles();
for (i=0; i<fileListDelete.length;i++){
var MyFileDel = fileListDelete[i];
MyFileDel.remove();  
}
inFolderDeletion.remove();  
}
////////////EPS_TidyUp2017/////////


////////////EPS_EXPORT/////////
function EPS_export() {
    

   
//unlock layers

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myLayers = myDoc.layers;

for (a=0; a<myLayers.length; a++){
     myLayer = myLayers[a];
     myLayer.locked = false;
}




//change all text frames to variables
var myVar = 0;

for (i=0; i<myDoc.textFrames.length; i++)  
     {  
         var itext = myDoc.textFrames[i];  
          var myVar = myDoc.variables.add();  
          myVar.kind = VariableKind.TEXTUAL;  
          itext.contentVariable = myVar;  
     }  



 
 
//capture data set
var ds1 = myDoc.dataSets.add();
ds1.display();



//export files
var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFile = new File(myPath + "/Export/" + myName + ".xml"); 
myDoc.exportVariables(newFile);
var newFileAI = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new EPSSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;




app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 


}

}
////////////EPS_export/////////

////////////EPS_export2017/////////
function EPS_export2017() {


   
//unlock layers

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myLayers = myDoc.layers;

for (a=0; a<myLayers.length; a++){
     myLayer = myLayers[a];
     myLayer.locked = false;
}




//change all text frames to variables
var myVar = 0;

for (i=0; i<myDoc.textFrames.length; i++)  
     {  
         var itext = myDoc.textFrames[i];  
          var myVar = myDoc.variables.add();  
          myVar.kind = VariableKind.TEXTUAL;  
          itext.contentVariable = myVar;  
     }  



 
 
//capture data set
var ds1 = myDoc.dataSets.add();
ds1.display();



//export files
var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFile = new File(myPath + "/Export/" + myName + ".xml"); 
myDoc.exportVariables(newFile);
var newFileAI = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new EPSSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR17;
    saveOpts.embedAllFonts = true;




app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 


}
    
    
}
////////////EPS_export20177/////////


var box = new Window('dialog', "EPS/AI exporting/importing tool");  
 
/*

box.panel1 = box.add('panel', undefined, "*.EPS files");  
box.panel1.text1 = box.panel1.add('statictext', [0,0,390,20], 'Link to EPS/XML files:', {multiline: false});
box.panel1.input = box.panel1.add('edittext', [100,15,490,35], "");  
box.panel1.text4 = box.panel1.add('statictext', [0,0,390,0], '', {multiline: false});

box.panel1.group = box.panel1.add('group', undefined );  
box.panel1.group.orientation='row';  
  
box.panel1.group.exportEPSBtn = box.panel1.group.add('button',undefined, "Export", {name:'exportEPS'});  
box.panel1.group.importEPSBtn = box.panel1.group.add('button',undefined, "Import", {name:'importEPS'});  
var radio1 = box.panel1.group.add ("radiobutton", undefined, "CS6");
var radio2 = box.panel1.group.add ("radiobutton", undefined, "CC2017");
radio1.value = true;
var check1 = box.panel1.group.add ("checkbox", undefined, "generate PDFs");
check1.value = false;

box.sep = box.add('statictext', [0,0,390,0], '', {multiline: false});
 */
  
box.panel2 = box.add('panel', undefined, "*.AI files");  

box.panel2.text2 = box.panel2.add('statictext', [0,0,390,20], 'Link to AI/XML files:', {multiline: false});
box.panel2.input = box.panel2.add('edittext', [100,15,490,35], "");  
box.panel2.text3 = box.panel2.add('statictext', [0,0,390,0], '', {multiline: false});

box.panel2.group = box.panel2.add('group', undefined );  
box.panel2.group.orientation='row';  
  
box.panel2.group.exportAIBtn = box.panel2.group.add('button',undefined, "Export", {name:'exportAI'});  
box.panel2.group.importAIBtn = box.panel2.group.add('button',undefined, "Import", {name:'importAI'}); 

var radio3 = box.panel2.group.add ("radiobutton", undefined, "CS6");
var radio4 = box.panel2.group.add ("radiobutton", undefined, "CC2017");
radio3.value = true;
var check2 = box.panel2.group.add ("checkbox", undefined, "generate PDFs");
check2.value = false;

box.sep = box.add('statictext', [0,0,420,0], '', {multiline: false});

box.groupL = box.add('group', undefined );  
box.groupL.orientation='row';  
box.groupL.alignment ='right';  

//box.doNot = box.groupL.add('button',undefined, "do not click me! am here for testing only", {name:'donot'});  

box.helpBtn = box.groupL.add('button',undefined, "Help", {name:'help'});  
box.closeBtn = box.groupL.add('button',undefined, "Close", {name:'close'}); 



/*
box.panel1.group.exportEPSBtn.onClick = function(){  
//grab the link to the files and adapt 
 var EPSLink = box.panel1.input.text;
           var EPSLink = EPSLink.replace(/C:/g, '\/C');
          var EPSLink = EPSLink.replace(/\\/g, '\/');
              //open all EPS files
var inFolder = new Folder(EPSLink);
if(inFolder != null){

var fileList = inFolder.getFiles(/\.(eps|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}
  //if CS6 selected
   
  if (radio1.value == true) { 
      



//EPS_export();
EPS_export();
alert("test");       

}
  
  else {
      
    


//if 2017 selected
EPS_export2017();
                 
      }
      
      
      //printing PDFs
if (check1.value == true){
    //open all files
   if(inFolder != null){

var fileList = inFolder.getFiles(/\.(eps|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}

//cycle through files and exporting to PDFs
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {

var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFilePDF = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new PDFSaveOptions();  
saveOpts.compatibility = PDFCompatibility.ACROBAT5; 

app.documents[0].saveAs(newFilePDF, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 
    
    }
    
    }
      
      
      //box.close()
  alert("Success."); 
  

}    

box.panel1.group.importEPSBtn.onClick = function(){  
  
//grab the link to the files and adapt 
 var EPSLink = box.panel1.input.text;
           var EPSLink = EPSLink.replace(/C:/g, '\/C');
          var EPSLink = EPSLink.replace(/\\/g, '\/');
          //open all EPS files
var inFolder = new Folder(EPSLink);
if(inFolder != null){


var fileList = inFolder.getFiles(/\.(eps|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}  
 //if cs6
 
   if (radio1.value == true) { 

EPS_import();

EPS_TidyUp();
}

else

{
EPS_import2017();

EPS_TidyUp2017();
    }
  
   //printing PDFs
if (check1.value == true){

//open all files (but we pick up these from new Finalized folder)
var inFolder2 = new Folder(inFolder + "/Finalized"); 
    
   if(inFolder2 != null){

var fileList = inFolder2.getFiles(/\.(eps|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}

//cycle through files and exporting to PDFs
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {

var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;


var myName = myDoc.name;
var f = new Folder(myPath); 
f.create();

var newFilePDF = new File(myPath + "/" + myName); 

//save new file


var saveOpts = new PDFSaveOptions();  
saveOpts.compatibility = PDFCompatibility.ACROBAT5; 

app.documents[0].saveAs(newFilePDF, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 
    
    }
    
    }  
  
  
  //box.close();  

  alert("Success!"); 

}   









*/

box.panel2.group.exportAIBtn.onClick = function(){  
//grab the link to the files and adapt 
 var AILink = box.panel2.input.text;
           var AILink = AILink.replace(/C:/g, '\/C');
          var AILink = AILink.replace(/\\/g, '\/');
          //open all EPS files
var inFolder3 = new Folder(AILink);
if(inFolder3 != null){

var fileList = inFolder3.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}
  //if CS6 selected
  if (radio3.value == true) { 
      

AIexport();

//var scriptFile = File('/c/ExportImport_AIEPS/AI_export.jsx');
//var script = '#include' + scriptFile.fullName;
 
//eval(script);
        

}
  
  else {
      
    


//if 2017 selected
//var scriptFile = File('/c/ExportImport_AIEPS/AI_export_CC2017.jsx');
//var script = '#include' + scriptFile.fullName;
 
//\eval(script);

AIexport2017();

                 
      }
      
      
      //printing PDFs
if (check2.value == true){
    //open all files
   if(inFolder3 != null){

var fileList = inFolder3.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}

//cycle through files and exporting to PDFs
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {

var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFilePDF = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new PDFSaveOptions();  
saveOpts.compatibility = PDFCompatibility.ACROBAT5; 

app.documents[0].saveAs(newFilePDF, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 
    
    }
    
    }
      
      
      //box.close()
  alert("Success."); 
  

}    

box.panel2.group.importAIBtn.onClick = function(){  
  
//grab the link to the files and adapt 
 var AILink = box.panel2.input.text;
           var AILink = AILink.replace(/C:/g, '\/C');
          var AILink = AILink.replace(/\\/g, '\/');

//open all AI files
var inFolder4 = new Folder(AILink);
if(inFolder4 != null){


var fileList = inFolder4.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}  
 //if cs6
 
   if (radio3.value == true) { 

AI_import();


TidyUp_AI();



}

else

{
AI_import2017();


TidyUp_AI2017();
    }
  
   //printing PDFs
if (check2.value == true){

//open all files (but we pick up these from new Finalized folder)
var inFolder5 = new Folder(inFolder4 + "/Finalized"); 
    
   if(inFolder5 != null){

var fileList = inFolder5.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}

//cycle through files and exporting to PDFs
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {

var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;


var myName = myDoc.name;
var f = new Folder(myPath); 
f.create();

var newFilePDF = new File(myPath + "/" + myName); 

//save new file


var saveOpts = new PDFSaveOptions();  
saveOpts.compatibility = PDFCompatibility.ACROBAT5; 

app.documents[0].saveAs(newFilePDF, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 
    
    }
    
    }  
  
  
  //box.close();  

  alert("Success."); 

}   






box.helpBtn.onClick = function(){  


alert("1. Paste the link to the files into the relevant section.\nAll files within a folder will be processed, files in any parent folders will NOT be processed.\n\n2. During exporting folder \"Export\" will be created.\nDo NOT delete the AI/EPS files from there as these will be needed for importing translations back.\n\n3. During importing \"Finalized\" and \"Temp\" folders will be created, \"Temp\" folder can be deleted.\n\n\n\nDetailed instructions are available at the following location:\nfile://gbrtef01fs001/Vol2/DTP/Production_Specific/DTP_Tools/Illustrator_XML","Help"); 
  


}    
  
box.closeBtn.onClick = function(){  
  box.close(); 
     


}  
  

  
box.show()  
  
}

myDlg.btn2.onClick = function() {


//myDlg.close();

////////////////AI EXPORT///////

function AIexport() {
    
    
    

   
//unlock layers

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myLayers = myDoc.layers;

for (a=0; a<myLayers.length; a++){
     myLayer = myLayers[a];
     myLayer.locked = false;
}




//change all text frames to variables
var myVar = 0;

for (i=0; i<myDoc.textFrames.length; i++)  
     {  
         var itext = myDoc.textFrames[i];  
          var myVar = myDoc.variables.add();  
          myVar.kind = VariableKind.TEXTUAL;  
          itext.contentVariable = myVar;  
     }  



 
 
//capture data set
var ds1 = myDoc.dataSets.add();
ds1.display();



//export files
var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFile = new File(myPath + "/Export/" + myName + ".xml"); 
myDoc.exportVariables(newFile);
var newFileAI = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new IllustratorSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 


}

    
    
    }




////////////////AI EXPORT///////



////////////////AI EXPORT 2017///////
function AIexport2017() {



   
//unlock layers

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myLayers = myDoc.layers;

for (a=0; a<myLayers.length; a++){
     myLayer = myLayers[a];
     myLayer.locked = false;
}




//change all text frames to variables
var myVar = 0;

for (i=0; i<myDoc.textFrames.length; i++)  
     {  
         var itext = myDoc.textFrames[i];  
          var myVar = myDoc.variables.add();  
          myVar.kind = VariableKind.TEXTUAL;  
          itext.contentVariable = myVar;  
     }  



 
 
//capture data set
var ds1 = myDoc.dataSets.add();
ds1.display();



//export files
var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFile = new File(myPath + "/Export/" + myName + ".xml"); 
myDoc.exportVariables(newFile);
var newFileAI = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new IllustratorSaveOptions();  
//saveOpts.compatibility = Compatibility.ILLUSTRATOR21; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 


}


}
////////////////AI EXPORT 2017///////



////////////////TidyUp_AI///////
function TidyUp_AI() {

var myLength = app.documents.length;



for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var dSet = app.documents[0].dataSets[0];
dSet.display();

function removeDataSetsAndVariables() {  
    if (app.documents.length > 0) {  
        var doc = app.documents[0];  
        var dS = doc.dataSets.length;  
        var v = doc.variables.length;  
        var curV;  
        if (v > 0) {  
            for (var i = v - 1; i >= 0; i--) {  
                curV = doc.variables[i];  
                curV.remove();  
            }  
        }  
        if (dS > 0) {  
            doc.dataSets.removeAll();  
        }  
    }  
}  
removeDataSetsAndVariables();  


var myPath = decodeURI(myDoc.path.parent);  

//needed for Temp removal
var myPathForDel = decodeURI(myDoc.path);  

var myName = myDoc.name;
var f = new Folder(myPath + "/Finalized"); 
f.create();
var newFileAI = new File(myPath + "/Finalized/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}


//delete the TEMP folder
var inFolderDeletion = new Folder(myPathForDel);
var fileListDelete = inFolderDeletion.getFiles();
for (i=0; i<fileListDelete.length;i++){
var MyFileDel = fileListDelete[i];
MyFileDel.remove();  
}
inFolderDeletion.remove();  
  


 
  


}
////////////////TidyUp_AI///////

////////////////TidyUp_AI2017///////
function TidyUp_AI2017() {
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var dSet = app.documents[0].dataSets[0];
dSet.display();

function removeDataSetsAndVariables() {  
    if (app.documents.length > 0) {  
        var doc = app.documents[0];  
        var dS = doc.dataSets.length;  
        var v = doc.variables.length;  
        var curV;  
        if (v > 0) {  
            for (var i = v - 1; i >= 0; i--) {  
                curV = doc.variables[i];  
                curV.remove();  
            }  
        }  
        if (dS > 0) {  
            doc.dataSets.removeAll();  
        }  
    }  
}  
removeDataSetsAndVariables();  

var myPath = decodeURI(myDoc.path.parent);  
//needed for Temp removal
var myPathForDel = decodeURI(myDoc.path);  

var myName = myDoc.name;
var f = new Folder(myPath + "/Finalized"); 
f.create();
var newFileAI = new File(myPath + "/Finalized/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
//saveOpts.compatibility = Compatibility.ILLUSTRATOR21; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}


//delete the TEMP folder
var inFolderDeletion = new Folder(myPathForDel);
var fileListDelete = inFolderDeletion.getFiles();
for (i=0; i<fileListDelete.length;i++){
var MyFileDel = fileListDelete[i];
MyFileDel.remove();  
}
inFolderDeletion.remove();  
  


}
////////////////TidyUp_AI2017///////


////////////////AI_import///////
function AI_import() {
    
    
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;

var xmlFile = new File(myPath + "/" + myName + ".xml"); 





app.documents[0].importVariables(xmlFile);

var f = new Folder(myPath + "/Temp"); 
f.create();

var newFileAI = new File(myPath + "/Temp/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}

var inFolder20 = new Folder(f);
if(inFolder20 != null){
var fileList = inFolder20.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}
}
////////////////AI_import///////

////////////////AI_import2017///////
function AI_import2017() {
    
    
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;

var xmlFile = new File(myPath + "/" + myName + ".xml"); 





app.documents[0].importVariables(xmlFile);

var f = new Folder(myPath + "/Temp"); 
f.create();

var newFileAI = new File(myPath + "/Temp/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
//saveOpts.compatibility = Compatibility.ILLUSTRATOR21; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}

    var inFolder10 = new Folder(f);
    if(inFolder10 != null){
    var fileList = inFolder10.getFiles(/\.(ai|)$/i);
     }
    for(var a = 0 ;a < fileList.length; a++)
    {
    var docRef = open(fileList[a]);
 
}
    
}
////////////////AI_import2017///////



////////////EPS_IMPORT/////////
function EPS_import() {
    
    
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;

var xmlFile = new File(myPath + "/" + myName + ".xml"); 





app.documents[0].importVariables(xmlFile);

var f = new Folder(myPath + "/Temp"); 
f.create();

var newFileAI = new File(myPath + "/Temp/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}

var inFolder20 = new Folder(f);
if(inFolder20 != null){
var fileList = inFolder20.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}
    
}
////////////EPS_IMPORT/////////

////////////EPS_IMPORT2017/////////
function EPS_import2017() {

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;

var xmlFile = new File(myPath + "/" + myName + ".xml"); 





app.documents[0].importVariables(xmlFile);

var f = new Folder(myPath + "/Temp"); 
f.create();

var newFileAI = new File(myPath + "/Temp/" + myName); 

var saveOpts = new IllustratorSaveOptions();  
//saveOpts.compatibility = Compatibility.ILLUSTRATOR21; 
    saveOpts.embedAllFonts = true;

app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}

    var inFolder10 = new Folder(f);
    if(inFolder10 != null){
    var fileList = inFolder10.getFiles(/\.(ai|)$/i);
     }
    for(var a = 0 ;a < fileList.length; a++)
    {
    var docRef = open(fileList[a]);
 
}    
    
}
////////////EPS_IMPORT2017/////////


////////////EPS_TidyUp/////////
function EPS_TidyUp() {

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var dSet = app.documents[0].dataSets[0];
dSet.display();

function removeDataSetsAndVariables() {  
    if (app.documents.length > 0) {  
        var doc = app.documents[0];  
        var dS = doc.dataSets.length;  
        var v = doc.variables.length;  
        var curV;  
        if (v > 0) {  
            for (var i = v - 1; i >= 0; i--) {  
                curV = doc.variables[i];  
                curV.remove();  
            }  
        }  
        if (dS > 0) {  
            doc.dataSets.removeAll();  
        }  
    }  
}  
removeDataSetsAndVariables();  

var myPath = decodeURI(myDoc.path.parent);  

//needed for Temp removal
var myPathForDel = decodeURI(myDoc.path);  

var myName = myDoc.name;
var f = new Folder(myPath + "/Finalized"); 
f.create();
var newFileAI = new File(myPath + "/Finalized/" + myName); 

var saveOpts = new EPSSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;


app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}


//delete the TEMP folder
var inFolderDeletion = new Folder(myPathForDel);
var fileListDelete = inFolderDeletion.getFiles();
for (i=0; i<fileListDelete.length;i++){
var MyFileDel = fileListDelete[i];
MyFileDel.remove();  
}
inFolderDeletion.remove();  
}
////////////EPS_TidyUp/////////


////////////EPS_TidyUp20117/////////
function EPS_TidyUp2017() {
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var dSet = app.documents[0].dataSets[0];
dSet.display();

function removeDataSetsAndVariables() {  
    if (app.documents.length > 0) {  
        var doc = app.documents[0];  
        var dS = doc.dataSets.length;  
        var v = doc.variables.length;  
        var curV;  
        if (v > 0) {  
            for (var i = v - 1; i >= 0; i--) {  
                curV = doc.variables[i];  
                curV.remove();  
            }  
        }  
        if (dS > 0) {  
            doc.dataSets.removeAll();  
        }  
    }  
}  
removeDataSetsAndVariables();  

var myPath = decodeURI(myDoc.path.parent);  

//needed for Temp removal
var myPathForDel = decodeURI(myDoc.path);  

var myName = myDoc.name;
var f = new Folder(myPath + "/Finalized"); 
f.create();
var newFileAI = new File(myPath + "/Finalized/" + myName); 

var saveOpts = new EPSSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR17; 
    saveOpts.embedAllFonts = true;


	
app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 

}


//delete the TEMP folder
var inFolderDeletion = new Folder(myPathForDel);
var fileListDelete = inFolderDeletion.getFiles();
for (i=0; i<fileListDelete.length;i++){
var MyFileDel = fileListDelete[i];
MyFileDel.remove();  
}
inFolderDeletion.remove();  
}
////////////EPS_TidyUp2017/////////


////////////EPS_EXPORT/////////
function EPS_export() {
    

   
//unlock layers

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myLayers = myDoc.layers;

for (a=0; a<myLayers.length; a++){
     myLayer = myLayers[a];
     myLayer.locked = false;
}




//change all text frames to variables
var myVar = 0;

for (i=0; i<myDoc.textFrames.length; i++)  
     {  
         var itext = myDoc.textFrames[i];  
          var myVar = myDoc.variables.add();  
          myVar.kind = VariableKind.TEXTUAL;  
          itext.contentVariable = myVar;  
     }  



 
 
//capture data set
var ds1 = myDoc.dataSets.add();
ds1.display();



//export files
var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFile = new File(myPath + "/Export/" + myName + ".xml"); 
myDoc.exportVariables(newFile);
var newFileAI = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new EPSSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR16; 
    saveOpts.embedAllFonts = true;




app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 


}

}
////////////EPS_export/////////

////////////EPS_export2017/////////
function EPS_export2017() {


   
//unlock layers

var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {
var myDoc = app.documents[0];

var myLayers = myDoc.layers;

for (a=0; a<myLayers.length; a++){
     myLayer = myLayers[a];
     myLayer.locked = false;
}




//change all text frames to variables
var myVar = 0;

for (i=0; i<myDoc.textFrames.length; i++)  
     {  
         var itext = myDoc.textFrames[i];  
          var myVar = myDoc.variables.add();  
          myVar.kind = VariableKind.TEXTUAL;  
          itext.contentVariable = myVar;  
     }  



 
 
//capture data set
var ds1 = myDoc.dataSets.add();
ds1.display();



//export files
var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFile = new File(myPath + "/Export/" + myName + ".xml"); 
myDoc.exportVariables(newFile);
var newFileAI = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new EPSSaveOptions();  
saveOpts.compatibility = Compatibility.ILLUSTRATOR17;
    saveOpts.embedAllFonts = true;




app.documents[0].saveAs(newFileAI, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 


}
    
    
}
////////////EPS_export20177/////////


var box = new Window('dialog', "EPS/AI exporting/importing tool");  
 


box.panel1 = box.add('panel', undefined, "*.EPS files");  
box.panel1.text1 = box.panel1.add('statictext', [0,0,390,20], 'Link to EPS/XML files:', {multiline: false});
box.panel1.input = box.panel1.add('edittext', [100,15,490,35], "");  
box.panel1.text4 = box.panel1.add('statictext', [0,0,390,0], '', {multiline: false});

box.panel1.group = box.panel1.add('group', undefined );  
box.panel1.group.orientation='row';  
  
box.panel1.group.exportEPSBtn = box.panel1.group.add('button',undefined, "Export", {name:'exportEPS'});  
box.panel1.group.importEPSBtn = box.panel1.group.add('button',undefined, "Import", {name:'importEPS'});  
var radio1 = box.panel1.group.add ("radiobutton", undefined, "CS6");
var radio2 = box.panel1.group.add ("radiobutton", undefined, "CC2017");
radio1.value = true;
var check1 = box.panel1.group.add ("checkbox", undefined, "generate PDFs");
check1.value = false;

box.sep = box.add('statictext', [0,0,390,0], '', {multiline: false});
 
  /*
box.panel2 = box.add('panel', undefined, "*.AI files");  

box.panel2.text2 = box.panel2.add('statictext', [0,0,390,20], 'Link to AI/XML files:', {multiline: false});
box.panel2.input = box.panel2.add('edittext', [100,15,490,35], "");  
box.panel2.text3 = box.panel2.add('statictext', [0,0,390,0], '', {multiline: false});

box.panel2.group = box.panel2.add('group', undefined );  
box.panel2.group.orientation='row';  
  
box.panel2.group.exportAIBtn = box.panel2.group.add('button',undefined, "Export", {name:'exportAI'});  
box.panel2.group.importAIBtn = box.panel2.group.add('button',undefined, "Import", {name:'importAI'}); 

var radio3 = box.panel2.group.add ("radiobutton", undefined, "CS6");
var radio4 = box.panel2.group.add ("radiobutton", undefined, "CC2017");
radio3.value = true;
var check2 = box.panel2.group.add ("checkbox", undefined, "generate PDFs");
check2.value = false;

box.sep = box.add('statictext', [0,0,420,0], '', {multiline: false});
*/
box.groupL = box.add('group', undefined );  
box.groupL.orientation='row';  
box.groupL.alignment ='right';  

//box.doNot = box.groupL.add('button',undefined, "do not click me! am here for testing only", {name:'donot'});  

box.helpBtn = box.groupL.add('button',undefined, "Help", {name:'help'});  
box.closeBtn = box.groupL.add('button',undefined, "Close", {name:'close'}); 




box.panel1.group.exportEPSBtn.onClick = function(){  
//grab the link to the files and adapt 
 var EPSLink = box.panel1.input.text;
           var EPSLink = EPSLink.replace(/C:/g, '\/C');
          var EPSLink = EPSLink.replace(/\\/g, '\/');
              //open all EPS files
var inFolder = new Folder(EPSLink);
if(inFolder != null){

var fileList = inFolder.getFiles(/\.(eps|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}
  //if CS6 selected
   
  if (radio1.value == true) { 
      



//EPS_export();
EPS_export();
//alert("test");       

}
  
  else {
      
    


//if 2017 selected
EPS_export2017();
                 
      }
      
      
      //printing PDFs
if (check1.value == true){
    //open all files
   if(inFolder != null){

var fileList = inFolder.getFiles(/\.(eps|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}

//cycle through files and exporting to PDFs
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {

var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFilePDF = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new PDFSaveOptions();  
saveOpts.compatibility = PDFCompatibility.ACROBAT5; 

app.documents[0].saveAs(newFilePDF, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 
    
    }
    
    }
      
      
      //box.close()
  alert("Success."); 
  

}    

box.panel1.group.importEPSBtn.onClick = function(){  
  
//grab the link to the files and adapt 
 var EPSLink = box.panel1.input.text;
           var EPSLink = EPSLink.replace(/C:/g, '\/C');
          var EPSLink = EPSLink.replace(/\\/g, '\/');
          //open all EPS files
var inFolder = new Folder(EPSLink);
if(inFolder != null){


var fileList = inFolder.getFiles(/\.(eps|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}  
 //if cs6
 
   if (radio1.value == true) { 

EPS_import();

EPS_TidyUp();
}

else

{
EPS_import2017();

EPS_TidyUp2017();
    }
  
   //printing PDFs
if (check1.value == true){

//open all files (but we pick up these from new Finalized folder)
var inFolder2 = new Folder(inFolder + "/Finalized"); 
    
   if(inFolder2 != null){

var fileList = inFolder2.getFiles(/\.(eps|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}

//cycle through files and exporting to PDFs
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {

var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;


var myName = myDoc.name;
var f = new Folder(myPath); 
f.create();

var newFilePDF = new File(myPath + "/" + myName); 

//save new file


var saveOpts = new PDFSaveOptions();  
saveOpts.compatibility = PDFCompatibility.ACROBAT5; 

app.documents[0].saveAs(newFilePDF, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 
    
    }
    
    }  
  
  
  //box.close();  

  alert("Success!"); 

}   












/*
box.panel2.group.exportAIBtn.onClick = function(){  
//grab the link to the files and adapt 
 var AILink = box.panel2.input.text;
           var AILink = AILink.replace(/C:/g, '\/C');
          var AILink = AILink.replace(/\\/g, '\/');
          //open all EPS files
var inFolder3 = new Folder(AILink);
if(inFolder3 != null){

var fileList = inFolder3.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}
  //if CS6 selected
  if (radio3.value == true) { 
      

AIexport();

//var scriptFile = File('/c/ExportImport_AIEPS/AI_export.jsx');
//var script = '#include' + scriptFile.fullName;
 
//eval(script);
        

}
  
  else {
      
    


//if 2017 selected
//var scriptFile = File('/c/ExportImport_AIEPS/AI_export_CC2017.jsx');
//var script = '#include' + scriptFile.fullName;
 
//\eval(script);

AIexport2017();

                 
      }
      
      
      //printing PDFs
if (check2.value == true){
    //open all files
   if(inFolder3 != null){

var fileList = inFolder3.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}

//cycle through files and exporting to PDFs
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {

var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;
var myName = myDoc.name;
var f = new Folder(myPath + "/Export"); 
f.create();
var newFilePDF = new File(myPath + "/Export/" + myName); 

//save new file


var saveOpts = new PDFSaveOptions();  
saveOpts.compatibility = PDFCompatibility.ACROBAT5; 

app.documents[0].saveAs(newFilePDF, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 
    
    }
    
    }
      
      
      //box.close()
  alert("Success."); 
  

}    

box.panel2.group.importAIBtn.onClick = function(){  
  
//grab the link to the files and adapt 
 var AILink = box.panel2.input.text;
           var AILink = AILink.replace(/C:/g, '\/C');
          var AILink = AILink.replace(/\\/g, '\/');

//open all AI files
var inFolder4 = new Folder(AILink);
if(inFolder4 != null){


var fileList = inFolder4.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}  
 //if cs6
 
   if (radio3.value == true) { 

AI_import();


TidyUp_AI();



}

else

{
AI_import2017();


TidyUp_AI2017();
    }
  
   //printing PDFs
if (check2.value == true){

//open all files (but we pick up these from new Finalized folder)
var inFolder5 = new Folder(inFolder4 + "/Finalized"); 
    
   if(inFolder5 != null){

var fileList = inFolder5.getFiles(/\.(ai|)$/i);
 }
for(var a = 0 ;a < fileList.length; a++)
{
var docRef = open(fileList[a]);
 
}

//cycle through files and exporting to PDFs
var myLength = app.documents.length;

for (var nDoc = 0; nDoc < myLength; nDoc++) {

var myDoc = app.documents[0];

var myPath = myDoc.path.fsName;


var myName = myDoc.name;
var f = new Folder(myPath); 
f.create();

var newFilePDF = new File(myPath + "/" + myName); 

//save new file


var saveOpts = new PDFSaveOptions();  
saveOpts.compatibility = PDFCompatibility.ACROBAT5; 

app.documents[0].saveAs(newFilePDF, saveOpts);
app.documents[0].close(SaveOptions.DONOTSAVECHANGES); 
    
    }
    
    }  
  
  
  //box.close();  

  alert("Success."); 

}   








*/

box.helpBtn.onClick = function(){  


alert("1. Paste the link to the files into the relevant section.\nAll files within a folder will be processed, files in any parent folders will NOT be processed.\n\n2. During exporting folder \"Export\" will be created.\nDo NOT delete the AI/EPS files from there as these will be needed for importing translations back.\n\n3. During importing \"Finalized\" and \"Temp\" folders will be created, \"Temp\" folder can be deleted.\n\n\n\nDetailed instructions are available at the following location:\nfile://gbrtef01fs001/Vol2/DTP/Production_Specific/DTP_Tools/Illustrator_XML","Help"); 
  


}    
  
box.closeBtn.onClick = function(){  
  box.close();  

}  
  

  
box.show()  
  



}

myDlg.closeBtn.onClick = function() {
  this.parent.close(1);
}

result = myDlg.show();

   app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;