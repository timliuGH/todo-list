// Strikethrough todos by clicking on them
$("#list").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Delete todos by clicking on trashcan
$("#list").on("click", "span", function(event){
	// Fade out AND remove the li (fadeOut only changes display to none)
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();	// Handle event bubbling
});

// Add new todo when user presses Enter
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {	// Check for Enter key
		// Get todo text from input
		let todoText = $(this).val();
		// Create new li and add to ul
		$("#list").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
		// Clear out input
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("#todoInput").fadeToggle();
});
