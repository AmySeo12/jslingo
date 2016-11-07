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

	function loginAPI() {
		console.log('Bienvenido!  Buscamos su informacion .... ');
		FB.api('/me', function (response) {
			document.getElementById('status').innerHTML = 'Hola, ' + response.name + '<br>' + 'Bienvenido a Tinder';
			document.getElementById('user-picture').innerHTML = '<img src="https://graph.facebook.com/' + response.id + '/picture">';
			window.localStorage.setItem("idImg",response.id);
		});
	}

	function friendAPI() {
		document.getElementById('user-friends').innerHTML = 'before';
		FB.api('me/friends?fields=id', function (response) {
			if (!response.error) {
				var markup = 'Amigos que usan esta app: ';
				var friends = response.data;
				var a = {};
				for (var i = 0; i < friends.length && i < 25; i++) {
					var friend = friends[i];
					//markup += '<br>'+'<img src="' + friend.picture + '"> '+ '<br>' + friend.name;
					markup += '<img src="https://graph.facebook.com/' + friend.id + '/picture">';
					a[i] = friend.id;
				}
/*				var a = [];
				for (var i = 0; i < friends.length && i < 25; i++) {
					var friend = friends[i];
					//markup += '<br>'+'<img src="' + friend.picture + '"> '+ '<br>' + friend.name;
					markup += '<img src="https://graph.facebook.com/' + friend.id + '/picture">';
					a.push(markup);
				}*/
				window.localStorage.setItem("array", JSON.stringify(a));
				document.getElementById('user-friends').innerHTML = markup;
			} else {
				document.getElementById('user-friends').innerHTML = 'after';
			}
		});
	}
	checkLoginState();
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