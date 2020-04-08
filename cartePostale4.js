
  var element1 = document.getElementById('para1');
  var element2 = document.getElementById('para2');
  var element3 = document.getElementById('para3');
  var element4 = document.getElementById('para4');
  var element5 = document.getElementById('para5');
  
  
  element1.onmouseover=function jaune(){
    element1.style.color = 'yellow';
  }

  element1.onmouseout=function noir(){
    element1.style.color = 'black';
  } 

  element1.onclick=function dansLeTexte(){
    document.getElementById('mots').value=document.getElementById('mots').value+' '+element1.innerHTML;
  } 

  element2.onmouseover=function jaune(){
    element2.style.color = 'yellow';
  }

  element2.onmouseout=function noir(){
    element2.style.color = 'black';
  } 

  element2.onclick=function dansLeTexte(){
    document.getElementById('mots').value=document.getElementById('mots').value+' '+element2.innerHTML;
  } 

  

  element3.onmouseover=function jaune(){
    element3.style.color = 'yellow';
  }

  element3.onmouseout=function noir(){
    element3.style.color = 'black';
  } 

  element3.onclick=function dansLeTexte(){
    document.getElementById('mots').value=document.getElementById('mots').value+' '+element3.innerHTML;
  } 
 

  element4.onmouseover=function jaune(){
    element4.style.color = 'yellow';
  }

  element4.onmouseout=function noir(){
    element4.style.color = 'black';
  } 

  element4.onclick=function dansLeTexte(){
    document.getElementById('mots').value=document.getElementById('mots').value+' '+element4.innerHTML;
  } 
  

  element5.onmouseover=function jaune(){
    element5.style.color = 'yellow';
  }

  element5.onmouseout=function noir(){
    element5.style.color = 'black';
  } 

  element5.onclick=function dansLeTexte(){
    document.getElementById('mots').value=document.getElementById('mots').value +' '+ element5.innerHTML;
  } 
  