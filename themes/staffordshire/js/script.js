(function($, Drupal, drupalSettings) {
    "use strict";
    function initmatchHeight(context) {
      $(function() {
        $('.equal-match').matchHeight({
            target: $('.equal-match.match'),
        });
        $('.equal').matchHeight({
            byRow: true,
        });(function($, Drupal, drupalSettings) {
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
        $('.single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.thumbs'
        });
        $('.thumbs').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.single',
            arrows: true,
            focusOnSelect: true
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
    function initScrollClass(context) {
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('body').addClass("scroll");
        } else {
            $('body').removeClass("scroll");
        }
      });
    }
    Drupal.behaviors.staffordshire = {
        _isInvokedByDocumentReady: true,
        attach: function(context) {
            if (this._isInvokedByDocumentReady) {
                this._isInvokedByDocumentReady = false;
            }
            initScrollClass(context);
            initExternalLinks(context);
            initmatchHeight(context);
            initBootstrapSelect(context);
            initSmoothScroll(context);
            initSlick(context);
            $(".search-toggle").click(function() {
                $("body").toggleClass("search-open");
                $("body").removeClass("nav-open");
            });
            $(".nav-toggle").click(function() {
                $("body").toggleClass("nav-open");
                $("body").removeClass("search-open");
            });
        }
    };
})(jQuery, Drupal, drupalSettings);
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
        $('.single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.thumbs'
        });
        $('.thumbs').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.single',
            dots: true,
            centerMode: true,
            focusOnSelect: true
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
    function initScrollClass(context) {
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('body').addClass("scroll");
        } else {
            $('body').removeClass("scroll");
        }
      });
    }
    Drupal.behaviors.staffordshire = {
        _isInvokedByDocumentReady: true,
        attach: function(context) {
            if (this._isInvokedByDocumentReady) {
                this._isInvokedByDocumentReady = false;
            }
            initScrollClass(context);
            initExternalLinks(context);
            initmatchHeight(context);
            initBootstrapSelect(context);
            initSmoothScroll(context);
            initSlick(context);
            $(".search-toggle").click(function() {
                $("body").toggleClass("search-open");
                $("body").removeClass("nav-open");
            });
            $(".nav-toggle").click(function() {
                $("body").toggleClass("nav-open");
                $("body").removeClass("search-open");
            });
        }
    };
})(jQuery, Drupal, drupalSettings);