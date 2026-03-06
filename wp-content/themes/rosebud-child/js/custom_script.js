(function($) {
	$(document).ready(function() {
		
		/* FOOTER */
		$('#text-8').prependTo($('.mkdf-footer-top-holder'));
		
		
		/* CONTACTO */
		if ( $('body.page-id-191').length ) {
			var consulta = GetURLParameter('asunto');
			
			if (typeof consulta !== typeof undefined) {
				$('html, body').animate({scrollTop:$('#formulario').offset().top - 50}, 'slow');
				$('input[name="your-name"]').focus();
			}
		}
		
		
		/* GENERAL */
		$('.mkdf-st-tagline-text').each(function(){
			$(this).insertAfter($(this).parent().find('.mkdf-st-title'));
		});
		
		
		
		/* PRODUCTO */
		$('.mkdf-woo-single-page .mkdf-single-product-summary form.cart').insertAfter($('.woocommerce-tabs'));
		$('.mkdf-woo-single-page .mkdf-single-product-summary form.cart').css('display','block');
		
		
		
		/* WORKSHOPS pag */
		if ( $('body.page-id-2811').length ) {
			var idProd;
			var skuProd;
			
			setTimeout(function() {
				$('.pf_btn_carrito').each(function() {
					idProd = $(this).find('a').attr('data-product_id');
					skuProd = $(this).find('a').attr('data-product_sku');
					
					$('<div class="mkdf-product-info"><div class="mkdf-pi-add-to-cart"><a rel="nofollow" href="/test?add-to-cart=' + idProd + '" data-quantity="1" data-product_id="' + idProd + '" data-product_sku="' + skuProd + '" class="button add_to_cart_button ajax_add_to_cart mkdf-btn mkdf-btn-medium mkdf-btn-outline">Añadir al carrito</a></div></div>').insertAfter($(this).find('a'));
					
					if (matchMedia('only screen and (max-width: 500px)').matches) {
						$(this).appendTo($(this).parent().parent());
					}
				});
			},200);
		}
		
		
		
		/* MATRIMONIOS pag */
		if (matchMedia('only screen and (max-width: 830px)').matches) {
			if ( $('body.page-id-2737').length ) {
				$('.mkdf-row-grid-section-wrapper:nth-child(even)').each(function() {
					$(this).find('.vc_col-sm-6').prependTo($(this).find('.vc_row'));
				});
			}
		}
		
		
		
		
		window.addEventListener("resize", function() {
			if (matchMedia('only screen and (max-width: 830px)').matches) {
				if ( $('body.page-id-2737').length ) {
					$('.mkdf-row-grid-section-wrapper:nth-child(even)').each(function() {
						$(this).find('.vc_col-sm-6').prependTo($(this).find('.vc_row'));
					});
				}
			}
				
			if (matchMedia('only screen and (max-width: 500px)').matches) {
				if ( $('body.page-id-2811').length ) {
					$('.pf_btn_carrito').each(function() {
						$(this).appendTo($(this).parent().parent());
					});
				}
			}
		}, false);
		
		
		
		
		function GetURLParameter(sParam) {
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++) {
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam) {
					return sParameterName[1];
				}
			}
		}
	});
	
	$(window).load(function() {
	});
	
	$( document ).ajaxComplete(function() {
	});
})(jQuery);