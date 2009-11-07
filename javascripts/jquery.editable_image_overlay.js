(function($) {
  $.fn.editable_image_overlay = function(settings) {
    var config = {};

    if (settings) $.extend(config, settings);
    $(this).children("a").addClass("avatar_overlay");
    $(this).children("a").addClass("hidden");

    $(this).children("img").hover(function(){
      $(this).siblings("a").removeClass("hidden");
    },
    function(){
      $(this).siblings("a").addClass("hidden"); 
    });
    return this;

  };
})(jQuery);

