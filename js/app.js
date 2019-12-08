$(document).ready(function () {

    const $DOM = {
        header: $(".header"),
        control: $(".header__controls-item"),
        scrollUp: $(".scroll-up")
    }

    $DOM.scrollUp.click(() => {
        fullpage_api.moveTo(1);
    });

    $DOM.control.click(e => {
        const $this = $(e.currentTarget);
        const index = $this.index();

        fullpage_api.moveTo(index + 2);
    });
    
    $("#fullpage").fullpage({
        fitToSection: false,
        scrollOverflow: true,
        navigation: true,
        responsiveWidth: 575,
        paddingTop: `${$DOM.header.innerHeight()}px`,
        onLeave: (origin, destination, direction) => {
            if (destination.index > 0) {
                $DOM.header.addClass("is-scrolled");
            }

            if (destination.index === 0) {
                $DOM.control.eq(0).addClass("is-active").siblings().removeClass("is-active");
                $DOM.scrollUp.removeClass("is-active");
            } else {
                $DOM.control.eq(destination.index - 1).addClass("is-active").siblings().removeClass("is-active");
                $DOM.scrollUp.addClass("is-active");
            }
        },
        afterLoad: (origin, destination, direction) => {
            if (destination.index === 0) {
                $DOM.header.removeClass("is-scrolled");
            }
        }
	});
    
});