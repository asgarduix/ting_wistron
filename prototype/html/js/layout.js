var win = $(window);
var winHeight = win.height();
var winWidth = win.width();
var $canvas = document.getElementById("canvas");
var $menu = document.getElementById("left_menu");
var $aside = document.getElementById("aside_func");
var $cont = document.getElementById("right_content");

// menu-include //
function includeMenu() {
    var menu_z, menu_i, menu_elmnt, menu_file, menu_xhttp;
    menu_z = document.getElementsByTagName("*");
    for (menu_i = 0; menu_i < menu_z.length; menu_i++) {
        menu_elmnt = menu_z[menu_i];
        menu_file = menu_elmnt.getAttribute("menu-html");
        if (menu_file) {
            menu_xhttp = new XMLHttpRequest();
            menu_xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { menu_elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { menu_elmnt.innerHTML = "請確認連線是否正常"; }
                    menu_elmnt.removeAttribute("menu-html");
                    includeMenu();
                }
            }
            menu_xhttp.open("GET", menu_file, true);
            menu_xhttp.send();
            return;
        }
    }
}

// menu-show/hide //
function menuToggle() {
    if ($menu.classList) {
        $menu.classList.toggle("menu-close");
    }

    if ($cont.classList) {
        $cont.classList.toggle("right-fluid");
    }
}

$('.menu-btn a').click(function() {
    $(this).toggleClass('menu-active');
});

// bootstrap-tooltip //
$(document).ready(function() {
    $('.tabulator-cell').each(function() {
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('data-placement', 'left');
    });
    $('[data-toggle="tooltip"]').tooltip();
});

// scollbar-animation-cancel //
$('.leftBlock-inner').mCustomScrollbar({
    scrollInertia: 0
});

// jquery-ui datepicker //
$(function() {
    $(".date-picker-item input").datepicker({
        dateFormat: "t/mm/dd",
        changeMonth: true,
        changeYear: true,
        yearRange: "1911:+100"
    });
});

// echarts width //
// $(document).ready(function(){
//     var echartsNum = $(".echarts-item").length;
//     var echartsItemWidth = $(".echarts-item").width()+10;
//     $('.echarts-inner').css('width',echartsItemWidth*echartsNum);
// });
