var numberClicked=false;
var tempChar;

function addChar(char){
  changeClearButton(1);
  var display=document.getElementById('display');

  if((numberClicked==false&&isNaN(char)==false)||numberClicked==true){
    if(display.value==0&&!(isNaN(char))){
      if(tempChar=='.'){
        display.value=display.value+char;
      } else{
        display.value=char;
      }
    }
    else{
      display.value=display.value+char;
    }
  }
  
  if(isNaN(char)==true){
    numberClicked=false;
  } else{
    numberClicked=true;
  }
  tempChar=char;
}

function calculate(){
  var display=document.getElementById('display');
  display.value=eval(display.value);
}

function reset(){
  document.getElementById('display').value=0;
  changeClearButton(0);
}

function changeClearButton(codeValue){
  if(codeValue==0){
    document.getElementById('clear').innerHTML="AC";
  } else{
    document.getElementById('clear').innerHTML="C";
  }
}
