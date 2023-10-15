// gsap.from('.header', {duration: 1, y: '-100%', ease: 'elastic.out(1, 0.3)'})

// gsap.from('.link', {duration: 1, opacity: 0, delay: 1, stagger: 0.5})

// gsap.from('.right', {duration: 1, x: '-100vw', delay: 1.5, ease: 'power2.in'})

// gsap.from('.left', {duration: 1, x: '-100%', delay: 2, ease: 'power2.in'})



// gsap.fromTo('.btn', {opacity: 0, scale: 0, rotation: 720}, {duration: 1, opacity: 1, scale: 1, rotation: 0, delay: 3.5, ease: 'elastic.out(1, 0.3)'})

// gsap.to('.footer', {duration: 1, y: 0, ease: 'elastic.out(1, 0.3)', delay: 2.5})


// const obj = {x: 0, y: 0}

// gsap.to(obj, {x: 100, onUpdate: () => {
//     console.log(obj.x, obj.y)
// }});

// gsap.to('.box', {duration: 2, x: 100, rotation: 360, ease: 'bounce.out', stagger: 0.5, repeat: -1, yoyo: true})

const timeline = gsap.timeline({defaults: {duration: 1}})
timeline
.from('.header', {y: '-100%', ease: 'elastic'})
.from('.link', {opacity: 0, stagger: 0.5})
.from('.right', {x: '-100vw', ease: 'power2.in'}, 1)
.from('.left', {x: '-100%'}, '<.5')
.to('.footer', {y: 0, ease: 'elastic'})
.fromTo('.btn', {opacity: 0, scale: 0, rotation: 720}, {opacity: 1, scale: 1, rotation: 0 })

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    timeline.timeScale(3)
    timeline.reverse()
})