let ani_js = document.querySelectorAll('.ani');

// console.log(ani_js);

const aniInView = (e, i = 0) => {
const eTop = e.getBoundingClientRect().top;

return (
    eTop <= (window.innerHeight || document.documentElement.clientHeight) / i
)
}

const aniOutOfView = (e) => {
    const eTop = e.getBoundingClientRect().top;

    return (
        eTop > window.innerHeight || document.documentElement.clientHeight
    )
}


window.addEventListener('scroll', () => {
    ani_js.forEach(element => {
        if (aniInView(element, i = 1.01)) {
            element.classList.add('ani_jss')
            element.classList.remove('ani_jsss')
        } else if (aniOutOfView(element)) {
            element.classList.remove('ani_jss')
            element.classList.add('ani_jsss')
        }
    });
})

let left_scroll_p = document.getElementById('left_scroll_p');
let right_scroll_p = document.getElementById('right_scroll_p');
let project_cards = document.getElementById('project_cards');

left_scroll_p.addEventListener('click', ()=>{
    project_cards.scrollLeft -= 317;
})

right_scroll_p.addEventListener('click', ()=>{
    project_cards.scrollLeft += 317;
})


let menu = document.getElementById('menu');
let menu_btn = document.getElementById('menu_btn');

menu_btn.addEventListener('click', ()=> {
    menu.classList.toggle('ul_active');
    menu_btn.classList.toggle('bi-x-diamond-fill');
})
