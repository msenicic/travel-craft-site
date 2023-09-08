import Swiper, {Mousewheel, Navigation} from "swiper";

export default ()=> {
    Swiper.use([Navigation, Mousewheel]);

    let pageHeaderSwiper = new Swiper('.page-header .swiper', {
        slidesPerView: 1,
        grabCursor: true,
        navigation: {
            nextEl: '.fa-chevron-right',
            prevEl: '.fa-chevron-left',
        },
    });

    let sponsorsSwiper = new Swiper('.sponsors .swiper', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        mousewheel: true,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    let reviewsSwiper = new Swiper('.reviews .swiper', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        mousewheel: true,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    let blogsSwiper = new Swiper('.blogs .swiper', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
};