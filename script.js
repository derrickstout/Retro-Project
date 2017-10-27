

function openInput(evt, tabType) {

	var i, tabbedInput, tabs;

	// Get elements with class="tabbedInput" and hide them
	tabbedInput = document.getElementsByClassName("tabbedInput");
	for (i = 0; i < tabbedInput.length; i++) {
		tabbedInput[i].style.display = "none";
	}

	// Get elements with class="tabs" and remove the class "active"
	tabs = document.getElementsByClassName("tabs");
	for (i = 0; i < tabs.length; i++) {
		tabs[i].className = tabs[i].className.replace("active", "");
	}

	// Show the current tab, and add "active" class to button that opened the tab
	document.getElementById(tabType).style.display = "block";
	evt.currentTarget.className += " active";
}

document.getElementById("startTab").click();