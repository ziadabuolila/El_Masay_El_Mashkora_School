// loader
window.onload = function(){
    setTimeout(function () {
        (function ($) { 
            $('#loader').removeClass('show');
            $('.loader').addClass('d-none');
        })(jQuery);
    }, 950)
}
// menu
document.addEventListener("DOMContentLoaded", () => {
    const openMenuButton = document.querySelector(".btn-open-menu");
    const menu = document.getElementById("menu");
    const closeMenuButton = document.getElementById("closeMenu");
    const menuItems = menu.querySelectorAll("li a");
    openMenuButton.addEventListener("click", () => {
        menu.classList.toggle("d-none");
    });
    closeMenuButton.addEventListener("click", () => {
        menu.classList.add("d-none");
    });
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.add("d-none");
        });
    });
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !openMenuButton.contains(e.target)) {
            menu.classList.add("d-none");
        }
    });
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
// contact
function send(){
    if(form1.username.value==""){
        alert("ممنوع ترك حقل الإسم فارغ");
        return false;
    }
    if(!isNaN(form1.username.value)){
        alert("يرجي إدخال كلمات و ليس ارقام");
        return false;
    }
    if(isNaN(form1.number.value)){
        alert("يرجي إدخال قيم عددية");
        return false;
    }
    if(form1.number.value.length<11){
        alert("رقم الهاتف لا يجب ان يقل عن 11 رقم");
        return false;
    }
    if(form1.message.value==""){
        alert("ممنوع ترك حقل الرسالة فارغ");
        return false;
    }
}