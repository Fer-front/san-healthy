const ua = navigator.userAgent
const device = {
    iPad: /iPad/.test(ua),
    iPhone: /iPhone/.test(ua),
    Android4: /Android 4/.test(ua)
}

const btnMenu = document.querySelector('[data-js="menu"]')
const menuLinks = document.querySelector('[data-js="links"]')
const linksItems = document.querySelectorAll('[data-js="link-item"]')

const eventType = (device.Android4 || device.iPad || device.iPhone) ? 'touchstart' : 'click';

btnMenu.addEventListener(eventType, () => {
    menuLinks.classList.toggle('san__navbar__links--hiden')
    btnMenu.classList.toggle('icon__ui--close')
})

linksItems.forEach((link) => {
    link.addEventListener(eventType, (e) => {
        menuLinks.classList.toggle('san__navbar__links--hiden')
        btnMenu.classList.toggle('icon__ui--close')

        const selector = e.currentTarget.dataset.scroll

        console.log(selector)

        const el = document.querySelector(selector)

        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    })
})