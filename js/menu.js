$(document).ready(function() {
	function windowSize(){
	    if ($(window).width() <= '768'){
	        $('#toggle-menu').show();
	        $('ul.nav-list').css("display", "none");
	    } else {
	        $('#toggle-menu').hide();
	        $('ul.nav-list').css("display", "table-row");
	    }
	}

	$(window).on('load resize',windowSize);

	var i=0;

	$("#toggle-menu").click(function(){
		if(i == 0) {
			$("ul.nav-list").animate({ height: "show" }, 500);
			i = 1;
		}else {
			$("ul.nav-list").animate({ height: "hide" }, 500);
			i = 0;
		}
		console.log(i);
	});
});