var cargar= function(){
	$("#registrar").click(guardarSrc);

	//API Facebook
	  window.fbAsyncInit = function() {
    FB.init({
      appId      : '620589191445726',
      xfbml      : true,
      version    : 'v2.8'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

	//--------------------------------------------------------

	FB.ui(
 {
  method: 'share',
  href: 'https://developers.facebook.com/docs/'
}, function(response){});
}

$(document).ready(cargar);
var url= localStorage.getItem("url");
var guardarSrc= function(e){
	e.preventDefault();
	$(".optionsRadios").each(recorrer);
}

var recorrer=function(){
	if($(this).is(":checked")){
		url = localStorage.setItem("url",$(this).next().attr("src"));
	}
}