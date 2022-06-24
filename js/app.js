/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
const navList = document.getElementById("navbar__list");

const collection = document.getElementsByTagName("section");
let i = 1;
Array.from(collection).forEach(c => {
    const navItem = document.createElement("li");
    navItem.classList.add("menu__link");
    navItem.setAttribute("id", `menu-${i}`);

    const a = document.createElement("a");
    a.innerText = c.getElementsByClassName("landing__container")[0].getElementsByTagName("h2")[0].innerText;
    navItem.appendChild(a);
    navList.appendChild(navItem);
    i++;
});

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', (e) => {

    const sections = document.getElementsByTagName("section");
    Array.from(sections).forEach(s => {
        const t = s.getBoundingClientRect().top;
        if (t >= 0 && t < 150) {
            s.classList.add("your-active-class");
            const menuItem = document.getElementById(`menu-${s.getAttribute("id")[7]}`);
            menuItem.classList.add("active");
        } else {
            s.classList.remove("your-active-class");
            const menuItem = document.getElementById(`menu-${s.getAttribute("id")[7]}`);
            menuItem.classList.remove("active");
        }
    });
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
const menu = document.getElementsByClassName("menu__link");
Array.from(menu).forEach(m => {
    m.addEventListener("click", () => scroll("section" + m.id[5]));
});

function scroll(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    })
}
// Set sections as active