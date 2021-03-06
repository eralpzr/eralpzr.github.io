!function (e) {
    "use strict";
    e(".vs-carousel").each((function () {
        var s = e(this);

        function t(e) {
            return s.data(e)
        }

        var o = '<button type="button" class="slick-prev"><i class="' + t("prev-arrow") + '"></i></button>',
            r = '<button type="button" class="slick-next"><i class="' + t("next-arrow") + '"></i></button>';
        e("[data-slick-next]").each((function () {
            e(this).on("click", (function (s) {
                s.preventDefault(), e(e(this).data("slick-next")).slick("slickNext")
            }))
        })), e("[data-slick-prev]").each((function () {
            e(this).on("click", (function (s) {
                s.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == t("arrows") && (s.closest(".arrow-wrap").length || s.parent().parent().addClass("arrow-wrap")), s.slick({
            dots: !!t("dots"),
            fade: !!t("fade"),
            arrows: !!t("arrows"),
            speed: t("speed") ? t("speed") : 1e3,
            asNavFor: !!t("asnavfor") && t("asnavfor"),
            autoplay: (t("autoplay"), !1),
            infinite: 0 != t("infinite"),
            slidesToShow: t("slide-show") ? t("slide-show") : 1,
            adaptiveHeight: !!t("adaptive-height"),
            centerMode: !!t("center-mode"),
            autoplaySpeed: t("autoplay-speed") ? t("autoplay-speed") : 8e3,
            centerPadding: t("center-padding") ? t("center-padding") : "0",
            focusOnSelect: 1 == t("focuson-select"),
            pauseOnFocus: !!t("pauseon-focus"),
            pauseOnHover: !!t("pauseon-hover"),
            variableWidth: !!t("variable-width"),
            vertical: !!t("vertical"),
            prevArrow: t("prev-arrow") ? o : '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
            nextArrow: t("next-arrow") ? r : '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
            rtl: "rtl" == e("html").attr("dir"),
            responsive: [{
                breakpoint: 1800,
                settings: {
                    arrows: !!t("xl-arrows"),
                    dots: !!t("xl-dots"),
                    slidesToShow: t("xl-slide-show") ? t("xl-slide-show") : t("slide-show"),
                    centerMode: !!t("xl-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!t("ml-arrows"),
                    dots: !!t("ml-dots"),
                    slidesToShow: t("ml-slide-show") ? t("ml-slide-show") : t("slide-show"),
                    centerMode: !!t("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!t("lg-arrows"),
                    dots: !!t("lg-dots"),
                    slidesToShow: t("lg-slide-show") ? t("lg-slide-show") : t("slide-show"),
                    centerMode: !!t("lg-center-mode") && t("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!t("md-arrows"),
                    dots: !!t("md-dots"),
                    slidesToShow: t("md-slide-show") ? t("md-slide-show") : 2,
                    centerMode: !!t("md-center-mode") && t("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 767,
                settings: {
                    arrows: !!t("sm-arrows"),
                    dots: !!t("sm-dots"),
                    slidesToShow: t("sm-slide-show") ? t("sm-slide-show") : 1,
                    centerMode: !!t("sm-center-mode") && t("sm-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!t("xs-arrows"),
                    dots: !!t("xs-dots"),
                    slidesToShow: t("xs-slide-show") ? t("xs-slide-show") : 1,
                    centerMode: !!t("xs-center-mode") && t("xs-center-mode"),
                    centerPadding: 0
                }
            }]
        })
    }))
}(jQuery);