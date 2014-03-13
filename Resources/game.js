var win = Ti.UI.currentWindow;

win.addEventListener("androidback", function(e){
	win.close();
});



var turnNow = win.whoBegin;

function checkGame()
{
	if(turnNow == "borg")
	{
		turnNowLabel.text = "It's Borg Queens turn";
	} else {
		turnNowLabel.text = "It's Darth Vaders turn";
	}
	
	var whoWon = "";
	
	//vågräta linjer
	if(tiles[0].backgroundImage == tiles[1].backgroundImage && tiles[1].backgroundImage == tiles[2].backgroundImage && tiles[0].backgroundImage != "images/black.png") 
	{

		if(tiles[0].backgroundImage == "images/bq.png")
		{
			whoWon = "borg";
		} else {
			whoWon = "vader";
		}
	}

	if(tiles[3].backgroundImage == tiles[4].backgroundImage && tiles[4].backgroundImage == tiles[5].backgroundImage && tiles[3].backgroundImage != "images/black.png") 
	{

		if(tiles[3].backgroundImage == "images/bq.png")
		{
			whoWon = "borg";
		} else {
			whoWon = "vader";
		}
	}
	

	if(tiles[6].backgroundImage == tiles[7].backgroundImage && tiles[7].backgroundImage == tiles[8].backgroundImage && tiles[6].backgroundImage != "images/black.png") 
	{

		if(tiles[6].backgroundImage == "images/bq.png")
		{
			whoWon = "borg";
		} else {
			whoWon = "vader";
		}	
	}

	
	//Lodrätta linjer
	if(tiles[0].backgroundImage == tiles[3].backgroundImage && tiles[3].backgroundImage == tiles[6].backgroundImage && tiles[0].backgroundImage != "images/black.png") 
	{
		if(tiles[0].backgroundImage == "images/bq.png")
		{
			whoWon = "borg";
		} else {
			whoWon = "vader";
		}
	}


	if(tiles[1].backgroundImage == tiles[4].backgroundImage && tiles[4].backgroundImage == tiles[7].backgroundImage && tiles[1].backgroundImage != "images/black.png") 
	{
		if(tiles[1].backgroundImage == "images/bq.png")
		{
			whoWon = "borg";
		} else {
			whoWon = "vader";
		}
	}


	if(tiles[2].backgroundImage == tiles[5].backgroundImage && tiles[5].backgroundImage == tiles[8].backgroundImage && tiles[2].backgroundImage != "images/black.png") 
	{
		if(tiles[2].backgroundImage == "images/bq.png")
		{
			whoWon = "borg";
		} else {
			whoWon = "vader";
		}
	}

//Diagonala linjer
	if(tiles[0].backgroundImage == tiles[4].backgroundImage && tiles[4].backgroundImage == tiles[8].backgroundImage && tiles[0].backgroundImage != "images/black.png") 
	{
		if(tiles[0].backgroundImage == "images/bq.png")
		{
			whoWon = "borg";
		} else {
			whoWon = "vader";
		}
	}
	
	

	if(tiles[2].backgroundImage == tiles[4].backgroundImage && tiles[4].backgroundImage == tiles[6].backgroundImage && tiles[2].backgroundImage != "images/black.png") 
	{
		if(tiles[2].backgroundImage == "images/bq.png")
		{
			whoWon = "borg";
		} else {
			whoWon = "vader";
		}
	}

	
	
	
	if(whoWon == "borg")
	{
		if (Ti.Platform.osname == "android")
		{
			var toastBQW = Ti.UI.createNotification({
   			 message:"The Borg Queen won. Resistance is futile!",
    		duration: Ti.UI.NOTIFICATION_DURATION_LONG
			});
			toastBQW.show();
			
		} else {
			alert("The Borg Queen won. Resistance is futile!");
		}

	}
	if(whoWon == "vader")
	{
		if (Ti.Platform.osname == "android")
		{
			var toastDVW = Ti.UI.createNotification({
   			 message:"Darth Vader won. Welcome to the dark side!",
    		duration: Ti.UI.NOTIFICATION_DURATION_LONG
			});
			toastDVW.show();
			
		} else {
			alert("Darth Vader won. Welcome to the dark side!");
		}
	
	}
	
	if(whoWon != "") 
	{
		for(i = 0;i < 9;i++)
		{
			tiles[i].backgroundImage = "images/black.png";
		}
		
		turnNow = win.whoBegin;
		if(turnNow == "borg")
		{
			turnNowLabel.text = "It's Borg Queens turn";	
		} else {
			turnNowLabel.text = "It's Darth Vaders turn";
		}
	}
	

	var allTilesFull = true; 
	
	for(i = 0;i < 9;i++)
	{
		if(tiles[i].backgroundImage == "images/black.png")
		{
			allTilesFull = false;
		}
	}
	
	if(allTilesFull == true)
	{
		if (Ti.Platform.osname == "android")
		{
			var toastNC = Ti.UI.createNotification({
	   			 message:"No conqueror. Try again.",
	    		duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toastNC.show();
			
		} else {
			alert("No conqueror. Try again.");
			
		}
		for(i = 0;i < 9;i++)
		{
			tiles[i].backgroundImage = "images/black.png";
		}
		
		turnNow = win.whoBegin;
		if(turnNow = "borg")
		{
			turnNowLabel.text = "It's Borg Queens turn";
		} else {
			turnNowLabel.text = "It's Darth Vaders turn";
		}
	}
}



var statusView = Ti.UI.createView({
	width: "320dp",
	height: "45dp",
	top: "0dp",
	left: "0dp",
	backgroundColor: "#aaa"
});
win.add(statusView);

if(Ti.Platform.osname == "iphone"){
	var goBackButton = Ti.UI.createButton({
		title: "Back",
		color: "#000000",
		
		top:"5dp",
		left: "5dp",
		widht: "45dp",
		height:"38dp",
	});
	
	goBackButton.addEventListener("click", function(e){
		win.close();
	});
	
	statusView.add(goBackButton);
}

var turnNowLabel = Ti.UI.createLabel({
	text: "",
	color: "#000000",
});

if(turnNow == "borg")
{
	turnNowLabel.text = "It's Borg Queens turn"; 
} else {
	turnNowLabel.text = "It's Darth Vaders turn";
}
statusView.add(turnNowLabel);


var gameView = Ti.UI.createView({
	width: "320dp",
	height: "320dp",
	top: "50dp",
	left: "0dp",
	backgroundColor: "#333333"
});
win.add(gameView);


var tiles = [];


for (i = 0;i < 9;i++)
{
	tiles[i] = Ti.UI.createView({
		width: "107dp",
		height: "107dp", 
		backgroundImage: "images/black.png",
		borderColor: "#aaa",
		borderWidth: 1,
	});
	gameView.add(tiles[i]);
		
	tiles[i].addEventListener("click", function(e) {
			
		if(e.source.backgroundImage == "images/black.png") 
		{
			if(turnNow == "borg"){
			e.source.backgroundImage = "images/bq.png"; 
			turnNow = "vader"; 
			
			} else {
			e.source.backgroundImage = "images/dv.png"; 
			turnNow = "borg"; 
			}	
				
			checkGame();	
		} else {
			if (Ti.Platform.osname == "android")
			{
				var toastNC = Ti.UI.createNotification({
		   			 message:"Uh-uh-uuuh!",
		    		duration: Ti.UI.NOTIFICATION_DURATION_LONG
					});
					toastNC.show();
					
			} else {
				alert("Uh-uh-uuuh!");
			}
		}
	});
}	

tiles[0].top = "0dp"; tiles[0].left = "0dp";
tiles[1].top = "0dp"; tiles[1].left = "107dp";
tiles[2].top = "0dp"; tiles[2].right = "0dp";

tiles[3].top = "107dp"; tiles[3].left = "0dp";
tiles[4].top = "107dp"; tiles[4].left = "107dp";
tiles[5].top = "107dp"; tiles[5].right = "0dp";

tiles[6].bottom = "0dp"; tiles[6].left = "0dp";
tiles[7].bottom = "0dp"; tiles[7].left = "107dp";
tiles[8].bottom = "0dp"; tiles[8].right = "0dp";



