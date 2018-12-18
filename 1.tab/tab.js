//初始化tab
function InitTab(_id, _data) {
    var _str = "<ul class='tabPart'>";
    for(var i = 0; i < _data.length; i++){
        _str += "<li class='menuItem' style='z-index: " + (_data.length - i) + "' onclick='upZIndex(this);' data-index='" + (_data.length - i) + "'><span>" + _data[i] + "</span></li>";
    }
    _str += "</ul>";
    document.getElementById(_id).innerHTML = _str;
    document.getElementById(_id).getElementsByTagName("li")[0].classList.add("selected");
}
//提升tab层级
function upZIndex(_this){
    var selected = document.getElementsByClassName("tabPart")[0].getElementsByClassName("selected");
    if(selected.length > 0) {
        selected[0].style.zIndex = selected[0].dataset.index;
        selected[0].classList.remove("selected");
    }
    _this.style.zIndex = 999;
    _this.classList.add("selected");
}