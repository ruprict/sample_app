// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(){
   
   $("#micropost_content").keypress(function(){
        var n = $(this).val().length;
        if (n>140)
            $("#charCount").addClass("tooManyChars");
        else 
            $("#charCount").removeClass("tooManyChars");
            
        $("#charCount").html(140-n); 
   });
    
});
