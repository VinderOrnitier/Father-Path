$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(window).scroll(function() {

	var winScroll = $(this).scrollTop();

	$(".logo").css({
		"transform" : "translate(0px, "+ winScroll /10 +"%)"
	});

	$(".guita_main").css({
		"transform" : "translate(0px, -"+ winScroll /25 +"%)"
	});

	if(winScroll > $(".guitar_pic").offset().top - ($(window).height() / 1.2)){
		$(".guitar_pic figure").each(function(i){
			setTimeout(function(){
				$(".guitar_pic figure").eq(i).addClass("is_show");
		}, 150 * (i+1));
		});
	}

	if(winScroll > $(".large-window").offset().top - $(window).height()){
		$(".large-window").css({"background-position":"center "+ (winScroll - $(".large-window").offset().top) +"px"});

		var opacity = (winScroll - $(".large-window").offset().top + 500) / (winScroll / 5)

		$(".cover_win").css({"opacity": opacity});
	}

	if(winScroll > $(".blog-post").offset().top - $(window).height()){

		var offset = Math.min(0, winScroll - $(".blog-post").offset().top + $(window).height() - 350);

		$(".post-1").css({"transform": "translate("+ offset +"px, "+ Math.abs(offset * 0.2) +"px"});

		$(".post-3").css({"transform": "translate("+ Math.abs(offset) +"px, "+ Math.abs(offset * 0.2) +"px"});

	}

});