 
$(document).ready(function(){

    var x = document.getElementById("contain");
    
    x.addEventListener("click", myFunction);
    
    function myFunction() {
      var element = document.getElementById("nav");
      element.classList.toggle("open");
      
      x.classList.toggle("change");
    }
    
    });
 
 $(document).ready(function(){
    $("#carousel").flipster({
            style: 'carousel',
            spacing: -0.5,
            nav: true,
            buttons:   true,
       });

    });  

    $(document).ready(function(){
    $("#flat").flipster({
        style: 'flat',
        spacing: -0.25
    });
});

