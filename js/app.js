var cargar= function(){
	//$("#registrar").click(guardarSrc);
	function statusChangeCallback(response) {
		if (response.status === 'connected') {
			loginAPI();
			friendAPI();
		} else if (response.status === 'not_authorized') {
			document.getElementById('user-picture').innerHTML = '';
			document.getElementById('user-name').innerHTML = '';
			document.getElementById('user-friends').innerHTML = '';
			document.getElementById('status').innerHTML = 'Por favor, inicie sesión ' + 'en esta aplicación.';
		} else {
			document.getElementById('user-picture').innerHTML = '';
			document.getElementById('user-name').innerHTML = '';
			document.getElementById('user-friends').innerHTML = '';

			document.getElementById('status').innerHTML = 'Por favor, inicie sesion' + 'en Facebook.';
		}
	}
	window.fbAsyncInit = function() {
		FB.init({
			appId      : '1850360375199136',
			xfbml      : true,
			version    : 'v2.8'
		});
	};

	function checkLoginState() {
		FB.getLoginStatus(function (response) {
			statusChangeCallback(response);
		});
	}

	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "js/sdk1.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));



	//API Facebook
	window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '620589191445726',
	      xfbml      : true,
	      version    : 'v2.8'
	    });
	};


	(function(d, s, id)
	  {
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "js/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }
	   (document, 'script', 'facebook-jssdk')
	);
}


	//--------------------------------------------------------

$(document).ready(cargar);
//var url= localStorage.getItem("url");
/*var guardarSrc= function(e){
	e.preventDefault();
	//$(".optionsRadios").each(recorrer);
}

var recorrer=function(){
	if($(this).is(":checked")){
		url = localStorage.setItem("url",$(this).next().attr("src"));
	}
}*/