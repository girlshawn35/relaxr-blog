/*
Project Name: Relaxr Blog
Client: Homework Assignment #4
Author: Shawn Aperocho
Developer @GA in LA
*/
console.log("loaded");

    $(document).ready(function() {
    	event.preventDefault()
		$("#readMore1").click(slideDown);
		$(".readLessHide1").click(slideUp);
		$("#readMore2").click(slideDown2);
		$(".readLessHide2").click(slideUp2);
		$("#learnMore").click(slideDown3);
		$("#learnLessHide").click(slideUp3);

		function slideDown() {
		event.preventDefault()
		console.log("clicked")
		$("#showThisOnClick1").slideDown();
		$("#readMore1").hide();
		$(".readLessHide1").show();
		}
		function slideUp() {
		event.preventDefault()
		$("#showThisOnClick1").slideUp();
		$("#readMore1").show();
		$(".readLessHide1").hide();
		}
		function slideDown2() {
		event.preventDefault()
		console.log("clicked")
		$("#showThisOnClick2").slideDown();
		$("#readMore2").hide();
		$(".readLessHide2").show();
		}
		function slideUp2() {
		event.preventDefault()
		$("#showThisOnClick2").slideUp();
		$("#readMore2").show();
		$(".readLessHide2").hide();
		}
		function slideDown3() {
		event.preventDefault()
		console.log("clicked")
		$("#learnMoreText").slideDown();
		$("#learnMore").hide();
		$(".learnLessHide").show();
		}
		function slideUp3() {
		event.preventDefault()
		$("#learnMoreText").slideUp();
		$("#learnMore").show();
		$(".learnLessHide").hide();
		}
    });
