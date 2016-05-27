/*
Project Name: Relaxr Blog
Client: Homework Assignment #4
Author: Shawn Aperocho
Developer @GA in LA
*/
console.log("loaded");

    $(document).ready(function() {
    	event.preventDefault()
		$(".hide").hide()
		$(".readMore1").click(slideDown);
		$(".readLessHide1").click(slideUp);

		function slideDown() {
		console.log("clicked")
		$("#showThisOnClick1").slideDown();
		}
		function slideUp() {
		$("#showThisOnClick1").slideUp();
		}

    });
