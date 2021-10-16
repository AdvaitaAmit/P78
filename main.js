var images = ["father.jpg", "mother.jpg", "sister.jpeg", "me.jpg"]
var names = ["Dad", "Mom", "Sister", "Me"];
i=0

function update(){
  

  var array_length = images.length + 1;
 

  
  var updated_image = images[i];
  var updated_text = names[i];
  i++
  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;
 
  



  
                
  
  if(i>array_length){
    i = 0;}
  }