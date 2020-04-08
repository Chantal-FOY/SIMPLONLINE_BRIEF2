var i=1;
document.getElementById('val').onclick=function change(){
 
    switch(i){
    case 1 : document.getElementById('val').src='carte-postale-tour-eiffel-paris-1920-2012.jpg';break;
    case 2 : document.getElementById('val').src='chat-plage.jpg';break;
    case 3 : document.getElementById('val').src='notre-dame.jpg';break;
    case 4 : document.getElementById('val').src='paysage.jpg';break;
    case 5 : document.getElementById('val').src='image.jpg';break;
    }
    i++;
    if (i==6){
        i=1;
    };
}
var memo=i;
