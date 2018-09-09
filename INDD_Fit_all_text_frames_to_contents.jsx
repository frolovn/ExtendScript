
if (confirm('Fit all text frames to content (within page limits) in all opened files?'))


var lengthN = app.documents.length;

    for (var counter = 0; counter < lengthN; counter++)

{var pst = app.documents[counter].pasteboardPreferences.pasteboardMargins;

var hor = pst[0];
var ver = pst[1]
                 app.documents[counter].pasteboardPreferences.pasteboardMargins = [0, 0];
  
      app.documents[counter].textFrames.everyItem().fit(FitOptions.FRAME_TO_CONTENT);

                 app.documents[counter].pasteboardPreferences.pasteboardMargins = [hor, ver];


}

