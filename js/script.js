

var startsize = 1;
var startrotate = 0;
var current_image_link = "";
var current_z_index = 0;
var selected_image_number = 0;
var one_selected = false;
var two_selected = false;
var tre_selcred = false;
/* Позиция */
var left = 0; var right = 0; var top = 0; var bottom = 0;

/* Изменяем размер */
function ChangeSize(){
    if (current_z_index == 0){
        var bg_image = document.getElementById("imageFace");
        bg_image.style.transform = "rotate(" + startrotate + "deg) scale(" + (startsize + arguments[0]) + ")";
        startsize+=arguments[0];
    } else {
        var bg_image = document.getElementById(current_z_index-1);
        bg_image.style.transform = "rotate(" + startrotate + "deg) scale(" + (startsize + arguments[0]) + ")";
        startsize+=arguments[0]; 
    }
}
/* Изменяем поворот выбранного элемента */
function ChangeRotate(){
    if (current_z_index == 0){
        var bg_image = document.getElementById("imageFace");
        bg_image.style.transform = "rotate(" + (startrotate + arguments[0]) + "deg) scale("+ startsize +")";
        startrotate+=arguments[0];
    } else {
        var bg_image = document.getElementById(current_z_index-1);
        bg_image.style.transform = "rotate(" + (startrotate + arguments[0]) + "deg) scale("+ startsize +")";
        startrotate+=arguments[0];
    }
}
/*Нажатие по элементу в верхнем меню 
--- передаём название картинки
--- добавляет картинку по верх предъидущей
*/
function element1Click(){
    
    if (one_selected==false){
    var image = document.createElement("img"); 
    image.src = "images/accessories/" + arguments[0];
    image.alt = "image";
    image.id = 1;
    image.style.position = "absolute";
    image.style.zIndex = current_z_index;
    image.style.marginLeft = 0 + "px";
    image.style.marginTop =  0 + "px";
    image.onclick = moveImage;
    imageFace.appendChild(image);
    current_z_index++;
    one_selected = true;
    } else {
        var element  = document.getElementById(1);
        element.src =  "images/accessories/" + arguments[0];
    }
    alert(current_z_index);
}
function element2Click(){
    if (two_selected==false){
    var image = document.createElement("img"); 
    image.src = "images/accessories/" + arguments[0];
    image.alt = "image";
    image.id = 2;
    image.style.position = "absolute";
    image.style.zIndex = current_z_index;
    image.style.marginLeft = 0 + "px";
    image.style.marginTop =  0 + "px";
    image.onclick = moveImage;
    imageFace.appendChild(image);
    current_z_index++;
    two_selected = true;
    } else {
        var element  = document.getElementById(1);
        element.src =  "images/accessories/" + arguments[0];
    }
    alert(current_z_index);
}
function element3Click(){
    if (tre_selected==false){
    var image = document.createElement("img"); 
    image.src = "images/accessories/" + arguments[0];
    image.alt = "image";
    image.id = 3;
    image.style.position = "absolute";
    image.style.zIndex = current_z_index;
    image.style.marginLeft = 0 + "px";
    image.style.marginTop =  0 + "px";
    image.onclick = moveImage;
    imageFace.appendChild(image);
    current_z_index++;
    tre_selected = true;
    } else {
        var element  = document.getElementById(1);
        element.src =  "images/accessories/" + arguments[0];
    }
    alert(current_z_index);
}
function selectMove(){
    switch (event.keyCode){
        case 104: moveImage(0,-10); //вверх
                 break;
        case 98: moveImage(0,10); //вниз
                 break;
        case 100: moveImage(-10,0); //влево
                 break;
        case 102: moveImage(10,0); //вправо
                 break;
        case 107: ChangeSize(0.1);
                 break;
        case 109: ChangeSize(-0.1);
                 break;
        default: break;
    }
}

function moveImage(){
    //alert(arguments[0] + " " + arguments[1] + " " + arguments[2])
    alert(current_z_index);
    var image = document.getElementById(current_z_index);
    var cur_left = parseInt(image.style.marginLeft);
    var cur_top = parseInt(image.style.marginTop);
    image.style.marginLeft = (cur_left + arguments[0]) + "px"; 
    image.style.marginTop = (cur_top + arguments[1]) + "px"; 
}
function AddImage(){
    alert(document.getElementById("imload").value);    
}