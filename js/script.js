
$(document).ready(function($) {

	 $("#demo").owlCarousel({
	 // $("#owl-demo").owlCarousel({
	 
	navigation : false, // Show next and prev buttons
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem: true
	 
	// "singleItem:true" is a shortcut for:
	// items : 1,
	// itemsDesktop : false,
	// itemsDesktopSmall : false,
	// itemsTablet: false,
	// itemsMobile : false
	 
	});
		
});
$(function() {
	$('.scroll-pane').jScrollPane();
});

$(document).ready(function($) {

	$("body").on("click",".b-list-mail__btn", function() {
		
		var name = $(this).parent().data('name');
		$(".b-list-mail li[data-name=\""+name+"\"]").remove();
		var namel = $(this).parent().data('namel')
		$(".b-list-mail li[data-namel=\""+namel+"\"]").remove();
		var names = $(this).parent().data('names');
		$(".b-list-mail li[data-names=\""+names+"\"]").remove();
		 //$(".atlink-count").empty();
		var uncount=$(".b-list-mail li").length;
		$(".atlink-count").empty();
		$(".atlink-count").append(uncount);
		console.log(uncount);
		//$(".b-list-mail>li").remove();
	});
	$(".b-list__btn").on("click", function() {
		
		var abttext = $("#abttext_check").text();
		var nametext_check = $("#nametext_check").text();
		var name = $(this).parent().data('name');
		console.log(name);
		if( $(this).hasClass("b-list__btn_active-r") ){
			$(".b-list-mail li[data-name=\""+name+"\"]").remove();
			console.log("1");
		}else{
			console.log("2");
			$(".atlink-count").empty();
			atcount();
			$(".b-list-mail").append("<li data-name=\"" + name + "\" class=\"b-list-mail__item red\"><button type=\"submit\" class=\"b-list-mail__btn clear\"></button><div class=\"b-list-mail__text\">" + nametext_check+abttext + "</div></li>");
		}
		$(this).toggleClass("b-list__btn_active-r");
		$('.scroll-pane').jScrollPane();
		//console.log($(".atlink-count").length);
		/*console.log(atcount());
		if($(".atlink-count").text().length=true)
			$(".atlink-count").empty();
		else */
		//atcount();

	});
	
	$(".add-all").click(function() {
		console.log("add-all");
		var abttext = $("#abttext_check").text();
		var nametext_check = $("#nametext_check").text();
		var name = $(this).parent().data('name');
		console.log($(".b-list__text>.abttext").length);
 			for (var i = $(".b-list__text>.abttext").length - 1; i >= 0; i--) {
 				$(".atlink-count").empty();
				atcount();
 				console.log($(".b-list__text>.abttext").length);
 				$(".b-list-mail").append("<li data-name=\"" + name + "\" class=\"b-list-mail__item red\"><button class=\"b-list-mail__btn clear\"></button><div class=\"b-list-mail__text\">" + nametext_check+abttext + "</div></li>");
 			};
 		$(".b-list__btn").toggleClass("b-list__btn_active-r");
		$(this).toggleClass("add-all-deactive");
		$(".remove-all").toggleClass("remove-all-active");
		$('.scroll-pane').jScrollPane();
	});
	
	$(".remove-all").click(function() {
		var name = $(this).parent().data('name');
		for (var i = $(".b-list__text>.abttext").length - 1; i >= 0; i--) {
			$(".b-list-mail li[data-name=\""+name+"\"]").remove();
		};	
		$(".b-list__btn").toggleClass("b-list__btn_active-r");
		$(this).toggleClass("remove-all-active");
		$(".add-all").toggleClass("add-all-deactive");
	});

	$(".b-list__btn-links").click(function() {
		var abttextlinks = $("#abttext-links_check").text();
		var nametextlinks = $("#nametext-links_check").text();
		var name = $(this).parent().data('namel');
		// console.log(name);
		if( $(this).hasClass("b-list__btn_active-bl") ){
			$(".b-list-mail li[data-namel=\""+name+"\"]").remove();
			console.log("1");
		}else{
			console.log("2");
			console.log(name);
			$(".atlink-count").empty();
			atcount();
			$(".b-list-mail").append("<li data-namel=\"" + name + "\" class=\"b-list-mail__item blue\"><button class=\"b-list-mail__btn clear\"></button><div class=\"b-list-mail__text\">" + nametextlinks +", "+ abttextlinks + "</div></li>");
		}
		$('.scroll-pane').jScrollPane();
		$(this).toggleClass("b-list__btn_active-bl");

	});
	
	$(".add-all-links").click(function() {
		var abttextlinks = $("#abttext-links_check").text();
		var nametextlinks = $("#nametext-links_check").text();
		var name = $(this).parent().data('namel');
		for (var i = $(".b-list__text>.abttext-links").length - 1; i >= 0; i--) {
			$(".atlink-count").empty();
			atcount();
			console.log($(".b-list__text>.abttext-links").length);
			$(".b-list-mail").append("<li data-namel=\"" + name + "\" class=\"b-list-mail__item blue\"><button class=\"b-list-mail__btn clear\"></button><div class=\"b-list-mail__text\">" + nametextlinks +", "+ abttextlinks + "</div></li>");
		};
		$(".b-list__btn-links").toggleClass("b-list__btn_active-bl");
		$(this).toggleClass("add-all-links-deactive");
		$(".remove-all-links").toggleClass("remove-all-links-active");
		$('.scroll-pane').jScrollPane();
	});
	
	$(".remove-all-links").click(function() {

		var name = $(this).parent().data('namel');
		for (var i = $(".b-list__text>.abttext-links").length - 1; i >= 0; i--) {
			console.log($(".b-list__text>.abttext-links").length);
			$(".b-list-mail li[data-namel=\""+name+"\"]").remove();
		};	
		$(".b-list__btn-links").toggleClass("b-list__btn_active-bl");
		$(this).toggleClass("remove-all-links-active");
		$(".add-all-links").toggleClass("add-all-links-deactive");

	});

	$(".b-list__btn-slab").click(function() {
		var abttextslab = $("#abttext-slab_check").text();
		var nametextslab = $("#nametext-slab_check").text();
		var name = $(this).parent().data('names');
		// console.log(name);
		if( $(this).hasClass("b-list__btn_active-gr") ){
			$(".b-list-mail li[data-names=\""+name+"\"]").remove();
			console.log("1");
		}else{
			console.log("2");
			console.log(name);
			$(".atlink-count").empty();
			atcount();
			$(".b-list-mail").append("<li data-names=\"" + name + "\" class=\"b-list-mail__item green\"><button class=\"b-list-mail__btn clear\"></button><div class=\"b-list-mail__text\">" + nametextslab +", "+ abttextslab + "</div></li>");
		}
		$('.scroll-pane').jScrollPane();
		$(this).toggleClass("b-list__btn_active-gr");

	});
	
	$(".add-all-slab").click(function() {
		var abttextslab = $("#abttext-slab_check").text();
		var nametextslab = $("#nametext-slab_check").text();
		var name = $(this).parent().data('names');
		for (var i = $(".b-list__text>.abttext-slab").length - 1; i >= 0; i--) {
			 $(".atlink-count").empty();
			atcount();
			console.log($(".b-list__text>.abttext-slab").length);
			$(".b-list-mail").append("<li data-names=\"" + name + "\" class=\"b-list-mail__item green\"><button class=\"b-list-mail__btn clear\"></button><div class=\"b-list-mail__text\">" + nametextslab +", "+ abttextslab + "</div></li>");
		};
		$(".b-list__btn-slab").toggleClass("b-list__btn_active-gr");
		$(this).toggleClass("add-all-slab-deactive");
		$(".remove-all-slab").toggleClass("remove-all-slab-active");
		$('.scroll-pane').jScrollPane();
	});
	
	$(".remove-all-slab").click(function() {
		var name = $(this).parent().data('names')
		for (var i = $(".b-list__text>.abttext-slab").length - 1; i >= 0; i--) {
			console.log($(".b-list__text>.abttext-slab").length);
			$(".b-list-mail li[data-names=\""+name+"\"]").remove();
		};
		$(".b-list__btn-slab").toggleClass("b-list__btn_active-gr");
		$(this).toggleClass("remove-all-slab-active");
		$(".add-all-slab").toggleClass("add-all-slab-deactive");

	});

	$("#usname").val('');
	$("#email").val('');
	$("#message").val('');
	/*SEND*/
	$(".b-mail-footer__btn").on("click", function() {
		var usname = $("#usname").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var atchlink = $(".b-list-mail").text();
		console.log(atchlink);
		alert("User Name : "+usname+"\n"+"User Email :"+email+"\n"+"Message : "+message+"\nAttached links :\n"+atchlink);
	});
	function atcount() {
		var count = $(".b-list-mail>li").length+1;
		return $(".atlink-count").append(count);	
	};
});
