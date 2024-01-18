$(document).ready(function () {
    const johnImage = $('.john__img img');
    const registerImage = $('.freelance-mentors__register-main-img img');
    const mentorsImage = $('.mentors__img img');
    const consutationImage = $('.consultation__img img');
    const joinImage = $('.join__img img');


    function toggleMenu() {
        $('.header__menu-burger-icon').toggleClass("_active");
        $(".header__menu").toggleClass("_active");
        $("body").toggleClass("_lock");
    }

    function changeImage(elem, breakpoints) {
        const windowWidth = $(window).width();
        const {imagePath} = breakpoints.find((bp) => windowWidth > bp.width) || breakpoints[0];
        elem.attr('src', imagePath);
    }

    const johnBreakpoints = [
        {width: 1260, imagePath: 'img/john.png'},
        {width: 768, imagePath: 'img/john.png'},
        {width: 0, imagePath: 'img/justJohn.png'}
    ];

    const registerBreakpoints = [
        {width: 1260, imagePath: 'img/registerImg.png'},
        {width: 768, imagePath: 'img/registerImgM.png'},
        {width: 510, imagePath: 'img/registerImgS.png'},
        {width: 0, imagePath: 'img/registerImgS.png'}
    ];

    const mentorsBreakpoints = [
        {width: 1260, imagePath: 'img/mentors.png'},
        {width: 768, imagePath: 'img/mentorsLaptop.png'},
        {width: 510, imagePath: 'img/mentors.png'},
        {width: 0, imagePath: 'img/mentorsPhone.png'}
    ];

    const consultationBreakpoints = [
        {width: 1260, imagePath: 'img/consultation.png'},
        {width: 768, imagePath: 'img/consultationLaptop.png'},
        {width: 510, imagePath: 'img/consultationTablet.png'},
        {width: 0, imagePath: 'img/consultationTablet.png'}
    ];

    const joinBreakpoints = [
        {width: 1260, imagePath: 'img/join.png'},
        {width: 768, imagePath: 'img/joinLaptop.png'},
        {width: 0, imagePath: 'img/joinLaptop.png'},
    ];

    function handleResize() {
        changeImage(johnImage, johnBreakpoints);
        changeImage(registerImage, registerBreakpoints);
        changeImage(mentorsImage, mentorsBreakpoints);
        changeImage(consutationImage, consultationBreakpoints);
        changeImage(joinImage, joinBreakpoints);
    }

    $(window).on('resize', handleResize);
    $(window).on('load', handleResize);

    $('.header__menu-burger-icon').click(toggleMenu);
    $('.faq__item-text-arrow').click(function () {
        const parent = $(this).parent();
        if (parent.hasClass('_active')) {
            parent.removeClass('_active');
        } else {
            $('.faq__item').removeClass('_active');
            parent.addClass('_active');
        }
    })
    // Initial image setup
    handleResize();
});
