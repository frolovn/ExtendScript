
if (confirm('Export all books in selected folder to PDFs?'))

{
var doclength = app.documents.length;

var booklength = app.books.length;


if (doclength+booklength == 0) 


{
    
function exportPdf(theDocument)
{
      myFilePath = myFolder + "/" +  theDocument.name.split(".indb").join(".pdf");
        myFile = new File(myFilePath);
          theDocument.exportFile(ExportFormat.pdfType, myFile, false, app.pdfExportPresets.item('[Smallest File Size]'));
theDocument.close(SaveOptions.no)
}


var fileFilters = "InDesign:*.indb*";
var myFolder = Folder.selectDialog ("Choose Folder with InDesign book files", fileFilters, false);
var files = myFolder.getFiles("*.indb");
for(i = 0; i < files.length; i++)
    {
       var theDocument = app.open(File(files[i]), true);
         with ( theDocument ) {
             exportPdf(theDocument)
                }
   }
 

alert ( i + ' book(s) was(were) exported to PDF(s).');
}

else 
{
alert ( 'Please close all documents/books before running the script');
    
    
   }
}

