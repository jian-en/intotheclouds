$(document).ready(function(){   
    $(".form-box").hide();
    $("#formout").click(function() { //event called
          $("#formout").hide(); // to hide all forms
          $(".form-box").show();
          return false; //option to stop
 });
 });
