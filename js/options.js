$(document).ready(function(){
		$(document).ready(function(){
			$('.resopen').click(
			function(){
				$(".resmenu").css("right","0");
				$(".resmenu").css("opacity","1");
				$(".resmenu").css("visibility","visible");
				$(".closemenu").css("opacity","1");
				$(".closemenu").css("visibility","visible");
			}
			)
	  	});
		$(document).ready(function(){
			$('.closemenu').click(
			function(){
				$(".resmenu").css("right","-500px");
				$(".resmenu").css("opacity","0");
				$(".resmenu").css("visibility","hidden");
				$(".closemenu").css("visibility","hidden");
				$(".closemenu").css("opacity","0");
			}
			)
	  	});
});