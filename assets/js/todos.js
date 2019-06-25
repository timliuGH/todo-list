// Check off specific todos by clicking
$("#list").on("click", "li", function(){	// Add listener to existing ul parent, and to li's inside ul, including new ones added dynamically
	// if ($(this).css("color") == "rgb(128, 128, 128)") {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});

	// }
	// else {
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("#list").on("click", "span", function(event){
	// Fade out AND remove the li (fadeOut only changes display to none)
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});	// fadeOut just makes display: none; remove() removes the element
	event.stopPropagation();	// Handle event bubbling
});

// Add new todo when user presses Enter
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {	// Check for Enter key
		// Get todo text from input
		let todoText = $(this).val();
		// Create new li and add to ul
		$("#list").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>");
		// Clear out input
		$(this).val("");
	}
});
