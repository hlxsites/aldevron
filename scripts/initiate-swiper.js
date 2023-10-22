import { Swiper } from '../node_modules/swiper/swiper.mjs';
import { div } from './dom-builder.js';
import { Autoplay, Pagination, EffectFade } from '../node_modules/swiper/modules/index.mjs';

export function createSwiperLayout(childrens) {
    const swiperWrapper = div({ class: 'swiper-wrapper' });
    childrens.forEach(element => {
        const slider = div({ class: 'swiper-slide' }, element);
        swiperWrapper.append(slider);
    });
    const swiperElement = div({ class: 'swiper' }, swiperWrapper);
    const paginate = div({ class: 'swiper-pagination' });
    swiperElement.append(paginate);
    return swiperElement;
}

export function initSwiper(childrens) {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        speed: 1500,
        autoplay: {
            delay: 4000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        modules: [ Autoplay, Pagination, EffectFade ],
    });
}