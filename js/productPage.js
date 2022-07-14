function ShowAndHide(target){
    var x = document.getElementById(target);
    if(x.style.display == 'none'){
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
}