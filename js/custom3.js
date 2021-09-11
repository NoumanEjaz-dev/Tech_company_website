$(document).ready(function  () {	
});

$(document).ready(function  () {
	init();
  	

});



function init(){
	vegas();
	owl();
	mixit();
}
function vegas(){
	$("#vegas-slider").vegas({
	    slides: [
	        { src: "image/work/1.jpg"},
	        { src: "image/work/scr.png"},
	        { src: "image/work/scr1.png"},
	        { src: "image/work/scr3.png"},
	        { src: "image/work/scr4.png"},
	    ],
	    slide: 3,
	    preload: true,
	    timer: true,
	    // overlay:[ 'frameworks/vegas/overlays/08.png'],
	    transition: [ 'fade', 'swirlRight', 'burn2' ],
	   animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
	});
}




// owl slider

function owl() {
	 $("#owl-carosal").owlCarousel({
		autoPlay : true,
	    items : 1,
	    stopOnHover : true,
	    itemsDesktop : [1199,1],
	    itemsDesktopSmall : [980,1],
	    itemsTablet: [768,1],
	    itemsTabletSmall: false,
	    itemsMobile : [479,1],
	 
	    // Basic Speeds
	    slideSpeed : 200,
	    paginationSpeed : 800,
	    rewindSpeed : 800,
	    // Auto height
	    autoHeight :false,
	    // Transitions
	    transitionStyle : false,
	     autoPlay : true,
        stopOnHover : true,
         pagination :true, 
 
   
  });

	 	 $("#logos").owlCarousel({
	 	
    items : 5,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    //Basic Speeds
    slideSpeed : 100,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    //Autoplay
    autoPlay : true,
    stopOnHover : true,
    //Auto height
    autoHeight : true,
    //Transitions
    transitionStyle : false,
    pagination :true,    
  });
}




function mixit(){
  $('#Container').mixItUp({
});
}
