!function ($) {
    $(document).ready((function () {
        $('img[src*="popup"]').each((function () {
            
            var _this = $(this);
            if (_this.css("display").indexOf("none") > -1)
                return !1;
            var wrap = $('<div class="img-colorbox-popup"></div>').colorbox({
                close: "&times;",
                opacity: .7,
                photo: !0,
                href: _this.attr("src"),
                maxWidth: "97%",
                maxHeight: "98%",
                onComplete: function () {
                    var img = $("#cboxLoadedContent img")
                        , ratio = parseInt(window.devicePixelRatio) > 0 ? window.devicePixelRatio : 1
                        , img2 = new Image;
                    img2.onload = function () {
                        var h = img2.height / ratio
                            , w = img2.width / ratio;
                        if (w > img.width()) {
                            img.css({
                                cursor: "pointer"
                            });
                            var zoom = $('<span class="button icon-search"></span>');
                            img.parent().parent().append(zoom),
                                $(img).add(zoom).click((function () {
                                    img.css({
                                        width: w,
                                        height: "auto",
                                        cursor: "auto"
                                    });
                                    var wh = Math.max(window.innerHeight, $(window).height()) - 30
                                        , params = h > wh ? {
                                            height: wh
                                        } : {};
                                    $.colorbox.resize(params),
                                        img.off(),
                                        zoom.remove()
                                }
                                ))
                        }
                    }
                        ,
                        img2.src = img.attr("src")
                }
            });
            "right" == _this.css("float") && (wrap.addClass("half-right"),
                _this.attr("style", ""),
                _this.attr("width", "")),
                "left" == _this.css("float") && (wrap.addClass("half-left"),
                    _this.attr("style", ""),
                    _this.attr("width", "")),
                _this.wrap(wrap)
        }
        ))
    }
    ))
}(jQuery);

