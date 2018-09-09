      myDlg = new Window('dialog', 'PSD to TXT');
      myDlg.orientation = 'row';
      myDlg.btn1 = myDlg.add('button', undefined, 'Export');
      myDlg.btn2 = myDlg.add('button', undefined, 'Import');
      myDlg.closeBtn = myDlg.add('button', undefined, 'Close');
      myDlg.closeBtn.onClick = function() {
       myDlg.close();
      }
      myDlg.btn1.onClick = function() {
       myDlg.close();

       function initTextConvertExport() {
        if ($.os.search(/windows/i) != -1)
         fileLineFeed = "windows";
        else
         fileLineFeed = "macintosh";
        if (app.documents.length === 0) {
         alert("Please open a file", "PSD to TXT", true);
         return;
        }
        if (app.documents.length > 1) {
         var runMultiple = confirm("Multiple Files detected.\nRun the script on all opened files?", true, "PSD to TXT");
         if (runMultiple === true) {
          docs = app.documents;
         } else {
          docs = [app.activeDocument];
         }
        } else {
         runMultiple = false;
         docs = [app.activeDocument];
        }
        for (var i = 0; i < docs.length; i++) {
         filePath = docs[i].fullName.parent.fsName + '/' + docs[i].name + '.txt';
         var fileOut = new File(filePath);
         fileOut.linefeed = fileLineFeed;
         fileOut.encoding = "UTF8"
         fileOut.open("w", "TEXT", "????");
         app.activeDocument = docs[i];
         goTextExport2(app.activeDocument, fileOut, '/');
         fileOut.close();
        }
        if (runMultiple === true) {
         alert("Parsed " + documents.length + " files;\nFiles were saved in relevant folder(s)", "PSD to TXT");
        } else {
         fileOut.execute();
        }
       }

       function goTextExport2(el, fileOut, path) {
        var layers = el.layers;
        for (var layerIndex = layers.length; layerIndex > 0; layerIndex--) {
         var currentLayer = layers[layerIndex - 1];
         if (currentLayer.typename == "LayerSet") {
          goTextExport2(currentLayer, fileOut, path + currentLayer.name + '/');
         } else {
          if ((currentLayer.visible) && (currentLayer.kind == LayerKind.TEXT)) {
           fileOut.writeln('');
           fileOut.writeln('');
           fileOut.writeln('');
           fileOut.writeln('');
           fileOut.writeln('[BEGIN ' + path + currentLayer.name + ' ]');
           fileOut.writeln(currentLayer.textItem.contents);
           fileOut.writeln('[END ' + path + currentLayer.name + ' ]');
          }
         }
        }
       }
       initTextConvertExport();
      }
      myDlg.btn2.onClick = function() {
       myDlg.close();

       function Array_IndexOf(arr, elem) {
        var len = arr.length;
        var from = Number(arguments[2]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
         from += len;
        }
        for (; from < len; from++) {
         if (from in arr && arr[from] === elem) {
          return from;
         }
        }
        return -1;
       }

       function Array_RemoveAtIndex(arr, idx) {
        if (idx !== -1) {
         arr.splice(idx, 1);
        }
       }
       var tKeys = [];
       var tValues = [];
       var numReplaced = 0;

       function initTextConvertImport() {
        if ($.os.search(/windows/i) != -1)
         fileLineFeed = "windows";
        else
         fileLineFeed = "macintosh";
        if (app.documents.length === 0) {
         alert("Please open a file", "PSD to TXT", true);
         return;
        }
        if (app.documents.length > 1) {
         var runMultiple = confirm("Multiple Files detected.\nRun the script on all opened files?", true, "PSD to TXT");
         if (runMultiple === true) {
          docs = app.documents;
         } else {
          docs = [app.activeDocument];
         }
        } else {
         runMultiple = false;
         docs = [app.activeDocument];
        }
        for (var i = 0; i < docs.length; i++) {
         goFetchTranslations(docs[i].fullName.parent.fsName + '/' + docs[i].name + '.txt');
         if (tKeys.length > 0) {
          app.activeDocument = docs[i];
          goTextImport(app.activeDocument, '/');
          numReplaced++;
         }
        }
        alert("Changed the contents of " + numReplaced + " files in total", "PSD to TXT");
       }

       function goFetchTranslations(filePath) {
        tKeys = [];
        tValues = [];
        var fileIn = new File(filePath);
        if (!fileIn.exists) {
         return;
        }
        fileIn.encoding = "UTF8"
        fileIn.open("r", "TEXT", "????");
        var tagOpen = false;
        var tKey = '';
        var tVal = '';
        while (!fileIn.eof) {
         var line = fileIn.readln();
         if (line.indexOf('[BEGIN ') !== -1) {
          tKey = line.substr(7, line.length - 9);
          tVal = '';
          tagOpen = true;
         } else if (line.indexOf('[END ') !== -1) {
          if (tKey == line.substr(5, line.length - 7)) {
           tKeys.push(tKey);
           tValues.push(tVal);
           tKey = '';
           tVal = '';
           tagOpen = false;
          } else {
           if (tagOpen) {
            tVal += line + '\r';
           }
          }
         } else if (tagOpen) {
          tVal += line + '\r';
         }
        }
        fileIn.close();
       }

       function goTextImport(el, path) {
        var layers = el.layers;
        for (var layerIndex = layers.length; layerIndex > 0; layerIndex--) {
         var currentLayer = layers[layerIndex - 1];
         if (currentLayer.typename == "LayerSet") {
          goTextImport(currentLayer, path + currentLayer.name + '/');
         } else {
          if ((currentLayer.visible) && (currentLayer.kind == LayerKind.TEXT)) {
           var pos = Array_IndexOf(tKeys, path + currentLayer.name);
           if (pos !== -1) {
            currentLayer.textItem.contents = tValues[pos];
            Array_RemoveAtIndex(tKeys, pos);
            Array_RemoveAtIndex(tValues, pos);
           }
          }
         }
        }
       }
       initTextConvertImport();
      }
      myDlg.show();