app.doScript(main, ScriptLanguage.JAVASCRIPT, undefined, UndoModes.ENTIRE_SCRIPT, "Set document measurements to mm and adjust pasteboard");

function main() {
    var win = app.dialogs.add({
        name: "Set document measurements to mm and adjust pasteboard"
    });
    with(win.dialogColumns.add()) {
        staticTexts.add({
            staticLabel: "Change measurements to mm and pasteboards in all opened documents?"
        });

        staticTexts.add({
            staticLabel: "Top/bottom pasteboard (in mm):"
        });
        staticTexts.add({
            staticLabel: "Left/right pasteboard (in mm):"
        });
    }

    with(win.dialogColumns.add()) {

        staticTexts.add({
            staticLabel: "                          "
        });
        var tbMarginField = textEditboxes.add({
            editContents: "100"
        });
        var lrMarginField = textEditboxes.add({
            editContents: "100"
        });
    }


    if (win.show() != 1) {
        exit()
    }
    var tbMargin = lrMarginField.editContents;
    var lrMargin = tbMarginField.editContents;

    var lengthN = app.documents.length;

    for (var counter = 0; counter < lengthN; counter++)

    {
        app.documents[counter].properties = {
            viewPreferences: {
                horizontalMeasurementUnits: MeasurementUnits.MILLIMETERS,
                verticalMeasurementUnits: MeasurementUnits.MILLIMETERS,

            }
        };

        app.documents[counter].pasteboardPreferences.pasteboardMargins = [tbMargin, lrMargin];
    }

}