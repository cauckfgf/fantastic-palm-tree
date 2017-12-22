var viewer1;
var viewer2;
var _blockEventMain = false;
var _blockEventSecondary = false;
function loadInitialModelV1(url,onSelectedCallback){


	Autodesk.Viewing.Initializer({ env: 'Local' }, function() {
	    //创建3D视口
	    viewer1 = new Autodesk.Viewing.Private.GuiViewer3D(document.querySelector("#viewer1"), {});

	    viewer1.start();
	    viewer1.load(url, null);
	    viewer1.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, onSelectedCallback);

		viewer1.setBackgroundColor(1, 66,222, 255,255, 255);
	});

}

function loadInitialModelV2(url,onSelectedCallback){


	Autodesk.Viewing.Initializer({ env: 'Local' }, function() {
	    //创建3D视口
	    viewer2 = new Autodesk.Viewing.Private.GuiViewer3D(document.querySelector("#viewer2"), {});

	    viewer2.start();
	    viewer2.load(url, null);
	    viewer2.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, onSelectedCallback);

		viewer2.setBackgroundColor(1, 66,222, 255,255, 255);

	});

}