function click(e) {
	chrome.tables.query({currenWindow:true, active:true}, function(tabs)) {
		console.log("background.js:click()");
		var specTab = tabs[0];
		window.open(http://www.google.com/search?q=taylor+swift&btnI=Im+Feeling+Lucky);
		chrome.tabs.executeScript(specTab.id, {file:"script.js"})
	}
}

chome.browserAction.onClicked.addListener(click);
