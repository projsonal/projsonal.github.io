const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(74, 108, 247, .2)"
        header.style.backdropFilter = "blur(15px)"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(0px)"
    }
})
const mood = document.getElementById("change-mood");
const root = document.getElementById("root")
mood.addEventListener("click", function (){
   if ( root.classList.contains("dark")){
       root.classList.remove("dark")
   } else {
       root.classList.add("dark")
   }
})


// Get the current date
const currentDate = new Date();

// Array of month names
const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

// Extract day, month, and year
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const year = currentDate.getFullYear();

// Display the date
const dateDisplay = document.getElementById("dateDisplay");
dateDisplay.textContent = `${day} ${months[monthIndex]} ${year}`;