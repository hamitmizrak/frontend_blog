
// Dark Mode
let darkLight=()=>{
    let elementData=document.body.classList.toggle("dark_mode_class");
}

// Search

// now date
const nowDate = () => {
    let dateYear = document.getElementById("now_date");
    dateYear.innerHTML = new Date().getFullYear();
}
nowDate();