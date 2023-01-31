let button_nav = document.getElementById("mode")
let navbar = document.querySelector(".navbar")
let body = document.body
button_nav.addEventListener("click", function(event) {
    
    if (body.classList.contains("bg-light")) {
        body.classList.add("bg-dark");
        navbar.classList.remove("navbar-light")
        navbar.classList.remove("bg-light")
        navbar.classList.add("navbar-dark")
        navbar.classList.add("bg-dark")

        
        


    } else if(body.classList.contains("bg-dark")) {
        navbar.classList.remove("navbar-dark")
        navbar.classList.remove("bg-dark")
        body.classList.remove("bg-dark");
        navbar.classList.add("navbar-light")
        navbar.classList.add("bg-light")
        body.classList.add("bg-light");




        


    } else {
        // ndothing
    }
    

})
