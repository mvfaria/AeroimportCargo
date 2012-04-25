$(document).ready(function(){
	$("#Banner .carousel").carousel({ 
		pagination: true,
		autoSlide: true,
        autoSlideInterval: 5000,
		delayAutoSlide: 10000,
		loop: true
	});
	$("#FormContato").validate();
	
	$(".BoxSolucoes li:not('.no-click')").click(function(){
		$(".BoxSolucoes li").removeClass("ativo");
		$(this).addClass("ativo");
	});
	
});