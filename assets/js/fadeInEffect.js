
// This function a fade effect that switches between two images
function fadeInEffect()
{
	$('.fadein-effect').find('img.threeNappyCakes').fadeOut(5000, function()
	{
		$('.fadein-effect')
							.html('<img class="underConstruction" src="assets/img/siteunderconstruction.jpg">')
							.hide()
							.fadeIn(5000)
							.fadeOut(5000, function()
				        	{
				        		$('.fadein-effect')
				        							.html('<img class="threeNappyCakes" src="assets/img/threenappycakes.jpg">')
				        							.hide()
				        							.fadeIn(5000, function()
									        		{
									        			fadeInEffect();
									        		});
				        	});

	});

}

$(document).ready(function () {
    fadeInEffect();
});