var win = Ti.UI.currentWindow;

var label = Ti.UI.createLabel({
	text: "Borg Queen vs Darth Vader",
	align: "center",
	font: { fontSize: 18, fontWeight: "bold", },
	color: "#aaa",
	top: "30dp",
});
win.add(label);

var startBorgGameBtn = Ti.UI.createButton({
	title: "Borg Queen starts",
	color: "#00CC00",
	top: "100dp",
	width: "190dp",
	height: "50dp",
	
});

startBorgGameBtn.addEventListener("click", function(e){
	gameWin = Ti.UI.createWindow({
		url:"game.js",
		backgroundColor: "#000000",
		whoBegin: "borg",
		modal: true,
	});
	gameWin.open();
});

win.add(startBorgGameBtn);

var startVaderGameBtn = Ti.UI.createButton({
	title: "Darth Vader starts",
	color: "#D60000",
	top: "170dp",
	width: "190dp",
	height: "50dp",
	
});

startVaderGameBtn.addEventListener("click", function(e){
	gameWin = Ti.UI.createWindow({
		url:"game.js",
		backgroundColor: "#000000",
		whoBegin: "vader",
		modal: true,
	});
	gameWin.open();
});

win.add(startVaderGameBtn);

