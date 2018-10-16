var deleteThisItem = $('.fa-trash-alt');

deleteThisItem.click(deleteNode);

function deleteNode() {
	var itemNode = $(this);

	itemNode.parent().remove();
}

// $('.fa-trash-alt').click(function() {
// 	$(this).parent().remove();
// });
