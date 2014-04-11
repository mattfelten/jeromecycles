jQuery(function($){

	$('#hero').photosetGrid({
		gutter: '4px',
		onComplete: function(){
			// Show the grid after it renders
			$('#hero').addClass('visible');
		}
	});

});
