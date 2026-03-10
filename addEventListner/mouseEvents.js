const clickButton=document.getElementById('clickButton');
clickButton.addEventListener('click', function(){
    alert('Button Clicked');

});

const moveArea=document.getElementById('moveArea');

// mouseout - triggers when entering
moveArea.addEventListener('mouseover', function(event){
    console.log('MOUSEOVER: Mouse entered the area');
}); // this shows on the console, not the page

// mousemove - triggers continuously while moving
moveArea.addEventListener('mousemove', function(event){
    console.log(`MOUSEMOVE: X: ${event.clientX}, Y: ${event.clientY}`);
});

// mouseout - triggers when leaving
moveArea.addEventListener('mouseout', function(){
    console.log('MOUSEOUT: Mouse left the area');
});


