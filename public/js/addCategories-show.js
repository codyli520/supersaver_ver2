$( document ).ready(function() {  
   initializePage();
    var pageLoadTime = new Date();
    
    $('.thumbnail').click(function(e){
        var curTime = new Date();
        var time = curTime - pageLoadTime;
        alert(time);
        ga('send','timing','category', 'selected',time);
        ga('send','event','category','click');
    });
});

function initializePage() {
 
}
