document.addEventListener("DOMContentLoaded", function(){
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
            document.getElementById("vehiclesButton").classList.add("colorChangeWhenHover");
        }
    }

    function closeVehicleDropDownMenu(){
        is_vehicle_drop_down_menu_open = false;
        document.querySelector(".dropDownForVehicles").classList.remove("active");
        if (!is_vehicle_drop_down_menu_open) {
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