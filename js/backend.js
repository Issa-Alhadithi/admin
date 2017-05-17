/*global $, alert, console*/

$(function () {
    'use strict';
    
	$('.Toggle-info').click(function () {

		$(this).toggleClass('selected').parent().next('.panel-body').fadeToggle(100);

		if ($(this).hasClass('selected')) {

			$(this).html('<i class="fa fa-plus fa-lg"></i>');
		} else {

			$(this).html('<i class="fa fa-close fa-lg"></i>');
		}

	});
    
});