

$('#addButton').on('click', function(e){
	var val = $("#input").val();
	$('#list').append('<li>' + val + '</li>' + "<a id='remove' href= '#'>remove</a>");
	clear();
});
function clear() {
    $('#input').val("");
};

$("ul").on("click", "a", function(e) {
  $(this).parent().remove();
});

function focus(){
	$("input").focus();
};
focus();
// $('#remove').on('click', function(e){
// 	$('#list').remove('li');
// });

// $('#remove').on('click', function(e){
//     $('ul').closest('li').remove();
// });