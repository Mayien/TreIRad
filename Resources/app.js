// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


var win = Titanium.UI.createWindow({
	url:'start.js',
	backgroundColor:'#000',
});
win.open();

