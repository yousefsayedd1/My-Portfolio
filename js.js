window.onload = function() {

console.log(screen.width);
    let menu_btn = document.querySelector(".hambarger");
    let menu_tap = document.querySelector(".mobile-nav");
    console.log(typeof(menu_tap.style.opacity));
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        menu_tap.classList.toggle('is-active');
        
        if (menu_tap.classList.contains("is-active"))
        {
            
            let add = setInterval(() => {
                menu_tap.style.display = "flex";
                let num = +menu_tap.style.opacity;
                num += 0.2;
                menu_tap.style.opacity = num;
                if (num == 1 ||menu_tap.classList.contains("is-active") === false )clearInterval(add);
            }, 100);
        }
        if (menu_tap.classList.contains("is-active") == false)
        {
            let remove = setInterval(() => {
                let num = +menu_tap.style.opacity;
                num -= 0.2;
                menu_tap.style.opacity = num;
                if (num == 0 || menu_tap.classList.contains("is-active") === true)
                {
                    
                    setTimeout(() => {
                        menu_tap.style.display = "none";
                    }, 500);
                    clearInterval(remove);
                }
            }, 100);
        }
    })
}


let nav = document.querySelector(".navigation");
// if (window.scrollY   >= 90)


window.onscroll = function() {
    if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight  && window.innerWidth > 800 ) {
        nav.style.top = "650px";
        

    }
    else {
        nav.style.top = "30px";
    }
};