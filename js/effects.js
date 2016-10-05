// new sChart

	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

	var barChartData = {
		labels : ["HTML5","CSS3","Jquery","Javascript","Bootstrap","Photoshop CC","Lightroom CC","Illustrator CC","Indesign CC","Worpress","Magento","Joomla"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(57,65,104,0.35)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [50,50,35,20,45,50,50,50,40,45,35,35]
			},

		]

	}
	
	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});
	}




// new script

		    	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
		    $('.navbar-fixed-top').addClass("sticky");
		  }
		  else{
		    $('.navbar-fixed-top').removeClass("sticky");
		  }
		});

		$(function(){

	     $('a[href*=#]').click(function() {

	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	         && location.hostname == this.hostname) {

	             var $target = $(this.hash);

	             $target = $target.length && $target || $("[name=' + this.hash.slice(1) +']");

	             if ($target.length) {

	                 var targetOffset = $target.offset().top;

	                 $('html,body').animate({scrollTop: targetOffset}, 1000);

	                 return false;

	            }

	       }

	   });

	});

	$('.goTop').click(
	      function()
	      {
	            $('html,body').animate({scrollTop:'0px'}, 500);return false;
	      }
	);

	$(document).ready(function () {
	  $(".navbar-nav li a").click(function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });
	});

// Animation while scrolling

	$(window).scroll(function() {
			if ($(this).scrollTop() > 1200){  
			    $('.scrolling').addClass("fadeInUp");
			  }
			  else{
			    $('.scrolling').removeClass("fadeInUp");
			  }
			});

	$(window).scroll(function() {
			if ($(this).scrollTop() > 200){  
			    $('.animated').addClass("fadeInUp");
			  }
			  else{
			    $('.animated').removeClass("fadeInUp");
			  }
			});

	
//  Jumbotron Effect
		$(document).ready(function () {
		    $(".hovertitle").hover(function () {
		        $(".jumbotron").css("background-image", "url('images/main-photo2.jpg')");
		    });
		    $(".hovertitle").mouseleave(function () {
		        $(".jumbotron").css("background-image", "url('images/main-photo.jpg')");
		    });
		});


