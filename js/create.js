
var elems = document.body.getElementsByTagName("a");
var check = true;
if(check === true) {

  for(var i = 0; i < elems.length; i++)
                {
                    elems[i].setAttribute("onclick",'getdata()');
                }

}
                
document.addEventListener("keydown", function (event){

  if (event.ctrlKey){

     event.preventDefault();

  }

  if(event.keyCode == 123){

     event.preventDefault();

  }

})

document.addEventListener('contextmenu', 

  event => event.preventDefault() 

)