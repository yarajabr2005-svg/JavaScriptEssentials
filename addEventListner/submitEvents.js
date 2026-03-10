document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault(); //prevents the default submission
    console.log("Form submitted");

});

document.getElementById('textInput'/* or 'myForm, but this takes any change
     in the form not just the input*/).addEventListener('change', function(){
    console.log("input in form changed");

});

const textInput = document.getElementById('textInput2');
  textInput.addEventListener('focus', function() {
    console.log('Input focused');
  });
  textInput.addEventListener('blur', function() {
    console.log('Input blurred');
  });