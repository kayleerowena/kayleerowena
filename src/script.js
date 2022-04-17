// MASONRY //

//-------------------------------------//
// external js: masonry.pkgd.js

// init Masonry
var $grid = $('.grid').masonry({
	    columnWidth: '.grid-item',
	itemSelector: '.grid-item',
	gutter: 10,
	horizontalOrder: true,
	stagger: 30,});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});




// SORT
var Portfolio = {
    sort: function(items) {
        items.show();
        $('#portfolio-content').find('div.portfolio-item').not(items).fadeOut(200);
    },
    showAll: function(items) {
        items.fadeIn(200);
    },
    doSort: function() {
        $('a', '#portfolio-sort').on('click', function() {

            var $a = $(this);
            if (!$a.is('#all')) {

                var items = $('div[data-cat=' + $a.data('cat') + ']', '#portfolio-content');

							
							Portfolio.sort(items);
							$grid.masonry('layout');
							

            } else {

                Portfolio.showAll($('div.portfolio-item', '#portfolio-content'));
							$grid.masonry('layout');


            }
        });
    }
};
$grid.masonry('layout');
Portfolio.doSort();
$grid.masonry('layout')

/*

* lightbox jquery plugin.
* created by mohamed faisal.
* url: https://www.facebook.com/Iam.MohammedFaisal

*/

$(document).ready(function () {
    "use strict";
    $(".lightbox").click(function () {
        var imgsrc = $(this).attr('src');
        $("body").append("<div class='img-popup'><span class='close-lightbox'>&times;</span><img src='" + imgsrc + "'></div>");
        $(".close-lightbox, .img-popup").click(function () {
            $(".img-popup").fadeOut(500, function () {
                $(this).remove();
            }).addClass("lightboxfadeout");
        });
			
			 

    });
    $(".lightbox").click(function () {
        $(".img-popup").fadeIn(500);
    });

});