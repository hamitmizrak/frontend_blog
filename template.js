// Search
$(document).ready(function () {
    const searchData = ["Adana", "Balıkesir", "Ceyhan", "Diyarbakır", "Edirne", "Malatya", "Manisa", "Yozgat"];
    $("#search_id").autocomplete({
        source: searchData
    });
});


// Dark Mode
let darkLight = () => {
    let elementData = document.body.classList.toggle("dark_mode_class");
}


// now date
const nowDate = () => {
    let dateYear = document.getElementById("now_date");
    dateYear.innerHTML = new Date().getFullYear();
}
nowDate();
