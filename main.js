const options = document.querySelectorAll(".slider-option")
const slides = document.querySelectorAll(".slide-div")

const questionContainer = document.querySelectorAll(".question-container")

const emailInput = document.querySelector(".email-input")
const emailButton = document.querySelector(".email-button")

const menu = document.querySelector(".menu")
const smallMenu = document.querySelector(".small-menu")
const closeButton = document.querySelector(".close-button")

const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

options.forEach(x=>x.addEventListener("click",()=>{
    if(!x.classList.contains("active"))
    {
        let val = x.classList[0]
        options.forEach(x=>x.classList.remove("active"))
        x.classList.add("active")
        for(let i=0; i<slides.length; i++)
        {
            if(slides[i].classList.contains(val))
            {
                slides.forEach(x=>x.classList.remove("active-slide"))
                slides[i].classList.add("active-slide")
            }
        }
    }
}))

questionContainer.forEach(x=>x.addEventListener("click",()=>{
    if(x.parentElement.querySelector(".answer-container").querySelector(".answer").classList.contains("answer-open"))
    {
        x.parentElement.querySelector(".answer-container").querySelector(".answer").classList.toggle("answer-open")
        x.querySelector("img").classList.toggle("arrow-logo-reverse")
    }
    else
    {
        questionContainer.forEach(x=>x.parentElement.querySelector(".answer-container").querySelector(".answer").classList.remove("answer-open"))
        questionContainer.forEach(x=>x.querySelector("img").classList.remove("arrow-logo-reverse"))
        x.parentElement.querySelector(".answer-container").querySelector(".answer").classList.toggle("answer-open")
        x.querySelector("img").classList.toggle("arrow-logo-reverse")
    }
}))

const emailCheck = () => {
    emailInput.parentElement.classList.remove("wrong")
    document.querySelector(".wrong-mail").classList.remove("wrong-mail-visible")
    emailInput.classList.remove('email-input-error')
    regex.test(emailInput.value) ? (alert("A newsletter has been sent to your mail"),emailInput.value="") : (emailInput.classList.add('email-input-error'),emailInput.parentElement.classList.add("wrong"),document.querySelector(".wrong-mail").classList.add("wrong-mail-visible"))
}

emailInput.addEventListener("keypress",(e)=>{
    if(e.key==="Enter")
    {
        emailCheck()
    }
})

emailButton.addEventListener("click",()=>{emailCheck()})

window.addEventListener("resize",()=>{
    document.querySelector("html").classList.remove("no-scroll")
    document.querySelector("body").classList.remove("no-scroll")
})

menu.addEventListener("click",()=>{
    document.querySelector("html").classList.add("no-scroll")
    document.querySelector("body").classList.add("no-scroll")
    smallMenu.classList.toggle("menu-moved")
})

closeButton.addEventListener("click",()=>{
    document.querySelector("html").classList.remove("no-scroll")
    document.querySelector("body").classList.remove("no-scroll")
    smallMenu.classList.toggle("menu-moved")
})