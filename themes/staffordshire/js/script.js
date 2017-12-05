(function($, Drupal, drupalSettings) {
    "use strict";
    function initmatchHeight(context) {
      $(function() {
        $('.equal-match').matchHeight({
            target: $('.equal-match.match'),
        });
        $('.equal').matchHeight({
            byRow: true,
        });
        $('.equal-group').each(function(){
            $(this).find('.equal').matchHeight();
        });
      $('.equal-group').each(function(){
            $(this).find('.equal-match').matchHeight({
                target: $('.equal-match.match'),
            });
        });
      });
    }
    function initExternalLinks(context) {
        $('a[href*="//"]:not([href*="' + document.location.hostname + '"])', context).attr("target", "_blank").addClass("external");
    }
    function initBootstrapSelect(context) {
        $(".selectpicker", context).selectpicker({});
    }
    function initSlick(context) {
        $(".slick", context).each(function() {
            var $slider = $(this);
            if ($slider.hasClass("has-pager")) {
                var $pager = $('<div class="pager"></div>');
                $slider.before($pager);
                $slider.on("init reInit afterChange", function(event, slick, currentSlide, nextSlide) {
                    $pager.text((currentSlide ? currentSlide : 0) + 1 + " of " + slick.slideCount);
                });
            }
            $slider.slick({});
        });
    }
    function initSmoothScroll(context) {
        $('a[href*="#"]:not([href="#"])', context).click(function() {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 1e3);
                    return false;
                }
            }
        });
    }
    Drupal.behaviors.staffordshire = {
        _isInvokedByDocumentReady: true,
        attach: function(context) {
            if (this._isInvokedByDocumentReady) {
                this._isInvokedByDocumentReady = false;
            }
            initExternalLinks(context);
            initmatchHeight(context);
            initBootstrapSelect(context);
            initSmoothScroll(context);
            initSlick(context);
            $(".search-toggle").click(function() {
                $("body").toggleClass("search-open");
                $("body").removeClass("nav-open");
            });
            $(".more-toggle").click(function() {
                $("body").toggleClass("more-open");
            });
            $(".nav-toggle").click(function() {
                $("body").toggleClass("nav-open");
                $("body").removeClass("search-open");
            });
        }
    };
})(jQuery, Drupal, drupalSettings);