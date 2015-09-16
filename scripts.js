$(document).ready(function() {

	var Lines = 0;

	$(document).on("click", "#GenerateButton", function () {
		// increment line number
		Lines++;

		// append elements
		$("#Main").append("<div id='Line" + Lines + "'>Line #" + Lines + "</div>");
		$("#Line" + Lines).append("<button id='ChangeColor" + Lines + "'>Change Color</button>");
		$("#Line" + Lines).append("<button id='Remove" + Lines + "'>Remove Div</button>");

		// "change color" button
		var ColorChanged = false;
		$(document).on("click", "#ChangeColor" + Lines, function () {
			if (!ColorChanged) {
				$(this).closest("div").css("background-color", "#0FF");
				ColorChanged = true;
			} else {
				$(this).closest("div").css("background-color", "#FFF");
				ColorChanged = false;
			}
		});			

		// "remove" button
		$(document).on("click", "#Remove" + Lines, function () {
			$(this).closest("div").remove();
		});

	});

});