let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue='';
console.log("hello");

for(item of buttons)
{
    
    item.addEventListener('click',(e)=>{
      buttonText=e.target.innerHTML;
      if(buttonText=='X')
      {
          buttonText='*';
          screenvalue +=buttonText;
          screen.value=screenvalue;
        
      }
      else if(buttonText=='AC')
      {
         screenvalue='';
        
         screen.value=screenvalue;

      }
      else if(buttonText=='C')
      {
        
         screenvalue=screenvalue.delete(1);
        
         screen.value=screenvalue;

      }
      else if(buttonText=='=')
      {
         screen.value=eval(screenvalue);
         
      }
      else{
        screenvalue +=buttonText;
        screen.value=screenvalue;
      }
    })
}