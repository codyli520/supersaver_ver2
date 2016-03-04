$( document ).ready(function() {
    initializePage();
});


function initializePage() {
	$('.item a').click(addItemDetails);
 
}

function addItemDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var itemID = $(this).closest('.panel').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	//var idNumber = projectID.substr('project'.length);

	console.log("User clicked on item "+ itemID);
    
    $.get("/goal/"+itemID,addItem);
}

function addItem(result){
    opened = 1;
    var id = result['id'];
    var projectHTML = '<img src ="'+result['imageURL']+'" class = "detailsImage" height="140" width="200"></img>'+
        '<hr>'+
        '<a href="'+result['url']+'" class="btn btn-success btn-lg pull-right">Buy</a>'+
        '<button type="button" class = "btn btn-link btn-lg pull-right" onclick="deleteItem('+id+')">Delete</button>'+
        '<div class="clearfix"></div>';
    
    $("#"+id+" .details").html(projectHTML);
    $("#"+id+" .details").toggleClass("hidden");
}

function deleteItem(id){
    $("#"+id).addClass("hidden");
}
    