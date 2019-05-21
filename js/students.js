function uuid() {
    return crypto.getRandomValues(new Uint32Array(4)).join('-');
}

$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('name')
    var scid = document.getElementById('scid')
    var loc   = document.getElementById('location')
    var subject = document.getElementById('subject')
    var prof = document.getElementById('prof')
    var email = document.getElementById('email')
	var smail  = String(email.value);
	var pay = document.getElementById('pay')
    
    if(!name.value){
    	alertify.error("Please enter your Name");
      	return false;
    }
    else if(!scid.value){
      	alertify.error("Please enter your School I.D.");
      	return false;
    }
    else if(!loc.value){
      	alertify.error("Please choose a Tutoring Location");
      	return false;
    }
    else if(!subject.value){
      	alertify.error("Please choose a Subject");
      	return false;
    }
    else if(!pay.value){
      	alertify.error("Please enter an hourly pay");
      	return false;
    }
    else if(!smail.includes("qmail")){
      	alertify.error("Enter your QC Student email");
      	return false;
    }else{
      e.preventDefault();
    $(this).get(0).reset();
      var unique = uuid();
      alertify.success("Request Sent");
   }
  });
});
