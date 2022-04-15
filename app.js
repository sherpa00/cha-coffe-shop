// GASP ANIMATION

const tl = gsap.timeline({
    defaults: { ease: "power1.out"}
});

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25});
tl.to(".ani_slider", { y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".ani_intro", {y: "-100%", duration: 1}, "-=2.20");
tl.fromTo("nav", { opacity: 0}, { opacity: 1, duration: 0.5});
tl.fromTo(".header_area", { opacity: 0}, {opacity: 1, duration: 1.5}, "+=0.25");
tl.fromTo(".header_heading", { opacity: 0}, {opacity: 1, duration: 1.5}, "-=1");

// Responsive logic

const barsBtn = document.querySelector("#bar");
const navsList = document.querySelector(".nav-links");

barsBtn.addEventListener("click", () => {
    if (barsBtn.classList.contains("fa-bars")) {
        barsBtn.classList.replace("fa-bars","fa-times");
        navsList.style.left = "1%";
        setTimeout(() => {
            navsList.style.backgroundColor = "rgba(116, 79, 10,0.1)"
        },500)
    } else {
        barsBtn.classList.replace("fa-times","fa-bars");
        navsList.style.left = "-100%";
        navsList.style.backgroundColor = "transparent";
    }
});

setInterval(() => {
    if (window.innerWidth >= 492) {
        navsList.style.backgroundColor = "transparent";
    }
});

// scrolling effect animations
const scrollElements = document.querySelectorAll(".js-scroll");

function elementInView(el, dividend = 1) {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    )
}

function elementOutofView(el) {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    )
}

const displayScrollElement = (ele) => {
    ele.classList.add("scrolled");
}

const hideScrollElement = (ele) => {
    ele.classList.remove("scrolled");
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el,1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    })
};

history.scrollRestoration = "manual";

window.addEventListener("scroll",() => {
    handleScrollAnimation();
})


//map 
const map = document.querySelector("#map");

map.addEventListener("click", () => {
    window.open("https://www.google.com.tr/maps/place/Thamel,+Kathmandu+44600/@27.7150181,85.307883,16z/data=!3m1!4b1!4m5!3m4!1s0x39eb18fcb77fd4bd:0x58099b1deffed8d4!8m2!3d27.7153902!4d85.3123293")
});

//form 
const form = document.querySelector("#form");
const res = document.querySelector(".res")
const inp = document.querySelector(".inp")

form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const val = inp.value;

    if (val != "") {
        inp.value = "";
        res.textContent = "MESSAGE SENT"
        res.style.color = "Lightgreen";
        res.style.opacity = "1";
        setTimeout(() => {
            res.style.opacity = "0"
        },2000)
    } else {
        inp.value = "";
        res.textContent = "EMPTY MESSAGE"
        res.style.color = "crimson";
        res.style.opacity = "1";
        setTimeout(() => {
            res.style.opacity = "0"
        },2000)
    }
})
