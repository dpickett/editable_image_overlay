(function($) {
  $.fn.editable_image_overlay = function(settings) {
    var config = {};

    if (settings) $.extend(config, settings);
    //add anchor properties
    $(this).children("a").addClass("avatar_overlay");
    $(this).children("a").addClass("hidden");
    $(this).children("a").click(function(){
      $(this).blur();
    });

    //bind hover functionality to anchors
    $(this).children("img").hover(function(){
      $(this).siblings("a").removeClass("hidden");
    },
    function(){
      $(this).siblings("a").addClass("hidden"); 
    });
 
    return this;

  };
})(jQuery);

