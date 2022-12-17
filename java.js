let screen=document.getElementById("screen")
let buttons=document.querySelectorAll("button")
let screenvalue=""
for(item of buttons){
    item.addEventListener('click',function(e){
        buttontxt = e.target.innerText;
        if(buttontxt=='C'){
            screenvalue='';
            screen.value = screenvalue;
            
        }
        else if(buttontxt == '='){
            screen.value = eval(screenvalue);
          }
          
        else {
            screenvalue += buttontxt;
            screen.value =screenvalue;
        }

    })
}