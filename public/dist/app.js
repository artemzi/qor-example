"use strict";function updateCart(t,a){$.ajax({type:a?"DELETE":"PUT",data:t,url:"/cart",beforeSend:function(){$(".cart__qty--btn").attr("disabled",!0)},success:function(){window.location.reload()},error:function(t){window.alert(t.status+": "+t.statusText),window.location.reload()}})}$(function(){}),$(function(){$(".cart__list--remove").on("click",function(t){t.preventDefault(),updateCart({qty:0,product_id:"",color_variation_id:""},!0)}),$(".cart__qty--minus").on("click",function(t){var a=$(this).attr("disabled",!0).closest(".cart__qty").find(".cart__qty--num"),e=parseInt(a.val()),r=e-1;return r<1?(updateCart({qty:0,product_id:"",color_variation_id:""},!0),!1):(a.val(r),updateCart({qty:r,product_id:"",color_variation_id:""}),!1)}),$(".cart__qty--plus").on("click",function(t){var a=$(this).attr("disabled",!0).closest(".cart__qty").find(".cart__qty--num"),e=parseInt(a.val()),r=e+1;return a.val(r),updateCart({qty:r,product_id:"",color_variation_id:""}),!1}),$(".cart__qty--num").on("blur",function(t){var a=$(this).attr("disabled",!0),e=a.val();return/^[0-9]*$/.test(e)?(updateCart({qty:parseInt(e),product_id:"",color_variation_id:""}),!1):void window.alert("please enter the right number!")})}),$(function(){$(".footer__change-language select").on("change",function(){var t=$(this).val();return t&&(window.location=t),!1})}),$(function(){$(".products__meta--size li").on("click",function(t){var a=$(t.target),e=$(".products__meta--size li"),r=$('[name="size_variation_id"]');e.removeClass("current"),a.addClass("current"),$(".products__meta--size li").not(".current").removeClass("selected"),a.toggleClass("selected"),a.hasClass("selected")?r.val(a.attr("value")):r.val(0)}),$("#products__addtocart").on("submit",function(t){if(t.preventDefault(),"0"==$('[name="size_variation_id"]').val())return void alert("please select size!");$.ajax({type:"PUT",url:"/cart",data:$(t.target).serialize(),error:function(t){alert(t.status+": "+t.statusText)},success:function(t){window.location.replace("/cart")}})}),$(".products__gallery--thumbs").length&&$(".products__gallery--thumbs").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,itemWidth:80,itemMargin:16,asNavFor:".products__gallery--top"}),$(".products__gallery--top").length&&$(".products__gallery--top").flexslider({animation:"slide",controlNav:!1,directionNav:!1,animationLoop:!1,slideshow:!1,sync:".products__gallery--thumbs"});$(".products__featured--slider").width(),window.matchMedia("only screen and (max-width: 760px)").matches;$(".products__featured--slider").length&&$(".products__featured--slider").flexslider({animation:"slide",animationLoop:!1,controlNav:!1,itemWidth:200,itemMargin:16})});