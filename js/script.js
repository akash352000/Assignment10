$(function() {
    var form = $("#form"); 
    var userName = $("#username");
    var password = $("#pwd");
    var cnPassword = $("#cnpwd");
    var checkBox = $('#checkbox');
    var countryName = $('#country');
    var submitBtn = $("#submit");
    var messageDisplay = $("#messageDisplay");                           
    submitBtn.attr('disabled',true);
    submitBtn.addClass('disabled');                    

    $.each(countries,function(key,value){
      countryName.append(`<option value="${value.code}"> ${value.name} </option>`);
     });

      form.change(function(){
        messageDisplay.hide();                                    
          
          if( userName.val().length > 0 && password.val().length >= 12 && password.val() === cnPassword.val() && checkBox.is(":checked") && countryName.val() != "choose")
          {
            submitBtn.removeAttr('disabled');
            submitBtn.attr('disabled',false);
          }
          else{
            submitBtn.attr('disabled',true);
            submitBtn.addClass('disabled');   
          }
      });

     form.submit(function(event){
        event.preventDefault(); 
        messageDisplay.show();         
        messageDisplay.text(`Welcome ${userName.val()} ! The country code you selected is ${countryName.val()}`);
        submitBtn.attr('disabled',true);
        submitBtn.addClass('disabled'); 
        document.getElementById('form').style.display = "none";
      });

      //include("/js/countries.js");
  });