//nf

const letters = "*&^%$#@!()_-+=>?<"
const value = "Home"
const interval = null
const element = document.querySelector('h6')
const width = element.offsetWidth

element.addEventListener('mouseover', e =>{
    element.computedStyleMap.width = `${width}px`
    let iteration =0 
    clearInterval(interval)

    interval = setInterval (() => {
        e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration){
                return value[index];
            }

            return letters[Math.floor(Math.random() *26)]
        }).join("")

        if(iteration >= value.length){
            clearInterval(interval)
        }
        iteration += 1/5
    }, 30)
})
