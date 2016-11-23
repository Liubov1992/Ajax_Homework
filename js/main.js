(function(){
    $('#loader').hide();

	$('#getData').click(function(){
        $('#loader').show();
		$.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos',
			type: 'GET',
			success: function( res ){   $('#loader').hide();
                for( var i = 0;i < 10; i++ ){
	$('#content').append('<div><img src="'+res[i].thumbnailUrl+'"></div>')
				}
			}
		})
    });
}())

		