let swiperTestimonial = new Swiper(".testimonial-list", {
    spaceBetween: 32,
    direction: 'vertical',
    autoHeight: true,
    navigation: {
        prevEl: '.swiper-btn-prev',
        nextEl: '.swiper-btn-next',
    },
    on: {
        init: function (swiper) {
            toggleNavigationButtons(swiper, true)
        },
        slideChange: function (swiper) {
            toggleNavigationButtons(swiper, true)
        },
    }
})

let swiperTestimonialMobile = new Swiper(".testimonial-mobile-list", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        prevEl: '.swiper-btn-prev',
        nextEl: '.swiper-btn-next',
    },
    on: {
        init: function (swiper) {
            toggleNavigationButtons(swiper)
        },
        slideChange: function (swiper) {
            toggleNavigationButtons(swiper)
        },
    }
})

function toggleNavigationButtons(swiper, isDesktop) {
    const { isBeginning, isEnd } = swiper
    const deviceClass = isDesktop ? '.testimonial-desktop' : '.testimonial-mobile'
    const prevBtn = document.querySelector(`${deviceClass} .swiper-btn-prev`)
    const nextBtn = document.querySelector(`${deviceClass} .swiper-btn-next`)
    prevBtn.classList.remove('swiper-btn-disabled')
    nextBtn.classList.remove('swiper-btn-disabled')

    isBeginning && prevBtn.classList.add('swiper-btn-disabled')
    isEnd && nextBtn.classList.add('swiper-btn-disabled')
}

const scrollUpEl = document.querySelector('.scroll-up')

const headerEl = document.getElementById('header')

const barIconEl = document.querySelector('.bar-icon')
const closeIconEl = document.querySelector('.close-icon')
const headerDrawerEl = document.querySelector('.header-drawer')
const menuMobileElList = document.querySelectorAll('.menu-list-mobile .menu-list__item')
const stepElList = document.querySelectorAll('.step-item')
const categoryCardElList = document.querySelectorAll('.category-card')
const destinationElList = document.querySelectorAll('.destination-card')

const closeDrawer = () => {
    headerDrawerEl.classList.remove('show')
}

barIconEl.addEventListener('click', function() {
    headerDrawerEl.classList.add('show')
})

closeIconEl.addEventListener('click', closeDrawer)

menuMobileElList.forEach((menuItem) => {
    menuItem.addEventListener('click', closeDrawer)
})

stepElList.forEach((stepItem) => {
    stepItem.addEventListener('click', () => {
        // remove step active
        stepElList.forEach((step) => step.className.includes('active') && step.classList.remove('active'))

        // add active for step clicked
        stepItem.classList.add('active')
    })
})

function activeHeaderEl() {
    if (window.scrollY > 0) {
        scrollUpEl.classList.add('show')
        headerEl.classList.add('scrolling')
    } else {
        scrollUpEl.classList.remove('show')
        headerEl.classList.remove('scrolling')
    }
}

scrollUpEl.addEventListener('click', function() {
    window.scrollTo(0, 0)
})

window.addEventListener('scroll', activeHeaderEl)
window.addEventListener('load', activeHeaderEl)

// SCROLL REVEALS

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 1200,
    delay: 400,
})

scrollReveal.reveal('.introduction-left')
scrollReveal.reveal('.introduction-right', {
    origin: 'bottom'
})
categoryCardElList.forEach((el, idx) => {
    scrollReveal.reveal(el, { origin: 'bottom', delay: 400 + (100 * idx) })
})
destinationElList.forEach((el, idx) => {
    scrollReveal.reveal(el, { origin: 'bottom', delay: 400 + (100 * idx) })
})
scrollReveal.reveal('.step-left', {
    origin: 'left'
})
scrollReveal.reveal('.step-preview', {
    origin: 'right'
})
scrollReveal.reveal('.testimonial-left', {
    origin: 'left'
})
scrollReveal.reveal('.testimonial-right', {
    origin: 'right'
})
scrollReveal.reveal('.brand-list', {
    origin: 'bottom'
})
scrollReveal.reveal('#contact', {
    origin: 'bottom'
})
scrollReveal.reveal('#footer', {
    origin: 'bottom'
})