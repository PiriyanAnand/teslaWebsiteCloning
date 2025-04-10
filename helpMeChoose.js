document.addEventListener("DOMContentLoaded", function(){
    let lastScrollY = window.scrollY;
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }
        lastScrollY = window.scrollY;

        if (window.scrollY > 50){
            header.classList.add("changeBackgroundColor");
        } else{
            header.classList.remove("changeBackgroundColor");
        }
    });

    function openMenu(){
        document.querySelector(".flexBoxForSideBar").classList.add("active");
        document.body.classList.add("noScroll");
    }

    function closeMenu(){
        document.querySelector(".flexBoxForSideBar").classList.remove("active");
        document.body.classList.remove("noScroll");
    }

    document.getElementById("menuButton").onclick = openMenu;
    document.getElementById("closeButton").onclick = closeMenu;

    let is_vehicle_drop_down_menu_open = false;

    function openVehicleDropDownMenu(){
        is_vehicle_drop_down_menu_open = true;
        document.querySelector(".dropDownForVehicles").classList.add("active");
        if (is_vehicle_drop_down_menu_open) {
            document.querySelector("header").classList.add("changeBackgroundColor");
            document.getElementById("vehiclesButton").classList.add("colorChangeWhenHover");
        }
    }

    function closeVehicleDropDownMenu(){
        is_vehicle_drop_down_menu_open = false;
        document.querySelector(".dropDownForVehicles").classList.remove("active");
        if (!is_vehicle_drop_down_menu_open) {
            document.querySelector("header").classList.remove("changeBackgroundColor");
            document.getElementById("vehiclesButton").classList.remove("colorChangeWhenHover");
        }
    }

    const vehiclesButton = document.getElementById("vehiclesButton");
    const dropDownForVehicles = document.querySelector(".dropDownForVehicles");

    vehiclesButton.addEventListener("mouseover", openVehicleDropDownMenu);
    dropDownForVehicles.addEventListener("mouseover", openVehicleDropDownMenu);
    vehiclesButton.addEventListener("mouseout", closeVehicleDropDownMenu);
    dropDownForVehicles.addEventListener("mouseout", closeVehicleDropDownMenu);
});