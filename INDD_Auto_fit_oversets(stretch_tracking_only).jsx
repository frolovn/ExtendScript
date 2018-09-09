///v1
//automatically apply necessary stretch and tracking to fit overset text in text frames and tables



var title = "Enter Main Text Values";//setting prompt titles and values
var titletab = "Enter Table Text Values";//setting prompt titles and values

var minimumScaleMain = Number(prompt("Enter minimum horizontal scale value for main text.", 60, title));
var minimumTrackingMain = Number(prompt("Enter minimum tracking value for main text.", -50, title));
var minimumScale = Number(prompt("Enter minimum horizontal scale value for text in tables.", 50, titletab));
var minimumTracking = Number(prompt("Enter minimum tracking value for text in tables.", -50, titletab));

for (var i = 0; i < app.activeDocument.pages.count(); i++) {
    for (var b = 0; b < app.activeDocument.pages[i].textFrames.count(); b++) {

        var tframe = app.activeDocument.pages[i].textFrames[b];
        var scalevalue = tframe.parentStory.texts[0].horizontalScale; //we have to check current scale value to not go below 1%
        var trackingvalueorig = tframe.parentStory.texts[0].tracking;

        for (var c = 0; c < scalevalue - 1; c++) {

            if (app.activeDocument.pages[i].textFrames[b].overflows == true) {

                var trackingvalue = tframe.parentStory.texts[0].tracking; //check current tracking value

                if (trackingvalue > (minimumTrackingMain + 5)) {                 //tracking will not go below given value
                    tframe.parentStory.texts[0].tracking -= 5;
                    app.activeDocument.recompose();

                }


                var scalevaluen = tframe.parentStory.texts[0].horizontalScale;

                if (scalevaluen > minimumScaleMain) {                //scale will not go below given value
                    tframe.parentStory.texts[0].horizontalScale -= 1;
                    app.activeDocument.recompose();

                }
            }
        }

        //if the frame still overflows revert
        if (app.activeDocument.pages[i].textFrames[b].overflows == true) {

            tframe.parentStory.texts[0].tracking = trackingvalueorig;
            tframe.parentStory.texts[0].horizontalScale = scalevalue;

        }
    }
}

//tables

var storiescount = app.activeDocument.stories.length; //amount of stories

for (sti = 0; sti < storiescount; sti++) //go into first story[0]
{
    var tablecount = app.activeDocument.stories[sti].tables.length; //set amount of tables in story
    if (tablecount > 0) //if more than 0 tables
    {
        for (ti = 0; ti < tablecount; ti++) //go to first table[0]
        {
            
            var allcellslength = app.activeDocument.stories[sti].tables[ti].cells.length; //determing amount of cells in given table

            
            for (cyclelength = 0; cyclelength < allcellslength; cyclelength++) { //cycle to go through cells

                var changecell = app.activeDocument.stories[sti].tables[ti].cells[cyclelength]; //set cell

               

                if (changecell.overflows == true) { //we set values if overflows only

                    var cellscalevalue = changecell.texts[0].horizontalScale;//original cell values
                    var celltrackingvalue = changecell.texts[0].tracking;
                    var currcellscalevalue = changecell.texts[0].horizontalScale;//updatable cell values
                    var currcelltrackingvalue = changecell.texts[0].tracking;
                }

                for (lcounter = 0; lcounter < 60; lcounter++) { //60 iterations should be enough (wonderful "hack") - try to get rid

                    if (changecell.overflows == true) {

                        if (currcellscalevalue > minimumScale) {
                            changecell.texts[0].horizontalScale -= 1; //change by -1%
                        }

                        if (currcelltrackingvalue > minimumTracking) {
                            changecell.texts[0].tracking -= 5;//change by -5 pt
                        }

                        app.activeDocument.recompose(); //redraw
                        var currcellscalevalue = changecell.texts[0].horizontalScale; //set new values
                        var currcelltrackingvalue = changecell.texts[0].tracking;
                    }
                }

                app.activeDocument.recompose(); //redraw

                if (changecell.overflows == true) { //if it still overflows revert to original settings

                    changecell.texts[0].tracking = celltrackingvalue;

                    changecell.texts[0].horizontalScale = cellscalevalue;
                }

            }
        }
    }
}



alert("Done! Oversets were fixed where possible.");