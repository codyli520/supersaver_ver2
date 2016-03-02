$( document ).ready(function() {  
   initializePage();
});

function initializePage() {

}

function addSaving(){
   
    var amount = isNaN(document.getElementById('inputAmount').value);
    if( $(".addSavings p").hasClass('hidden')){
        $(".addSavings p").removeClass("hidden");
    }
    else{
        $(".addSavings p").addClass("hidden");
    }
    if(!amount && document.getElementById('inputAmount').value!= ""){
        if( $("#confirmAlert").hasClass('hidden')){
            $("#confirmAlert").removeClass('hidden');
        }
        
        //$("#confirmAlert").removeClass("hidden");
        $("#warningAlert").addClass("hidden");
        var realAmount = document.getElementById('inputAmount').value;


        $("#confirmAlert strong").html("<strong>Confirm amount: $"+realAmount+".00</strong>");
        

    }
    else{
        //alert('PLEASE, enter a numerical value');
        //$('').show();
        $("#confirmAlert").addClass("hidden");
        if( $("#warningAlert").hasClass('hidden')){
            $("#warningAlert").removeClass("hidden");
        }
    }
}

function submitSaving(){
    $("#confirmAlert").toggleClass('hidden');
    $("#inputAmount").val("");
}
 
function dismiss(){
    $("#confirmAlert").addClass("hidden");
}




