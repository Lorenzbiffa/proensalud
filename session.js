

$(document).ready(function() {

	//VERIFICAMOS SI EL USUARIO SE HA LOGEADO


	if($.cookie('use



function verify_user(username,password){


	$.ajax({
			   
		type: "POST",
		url: "php/session.php",
		data: "action=verify_user&username="+username+"&password="+password,

		success: function(packages){
			
			window.verify_result = JSON.parse(packages);


			if(verify_result.succes_var==true){

				hide_hidden_content_login();


				$.cookie('session_user_email',verify_result.email);
				


				$("#login-user").remove();
				$("#logout-user").fadeIn();
			
				$("#sign-user").remove();
					

				first_name = verify_result.first_name;
				$.cookie('username',first_name);
				first_name = first_name.toUpperCase();

					$("#hidden-form").after('<div style="font-weight: 600; font-size: 16px;text-align: right;color: #F69;display: table;float: right;/* margin-top: 60px; */height: 35px;line-height: 2.2em;margin-right: 15px;">Welcome '+first_name+' (User)</div>');
					
				}

			if(verify_result.succes_var=='medium'){

				$.fn.SimpleModal({btn_ok: 'close', title: 'Error', contents: 'The user has been not activated, please visit your email inbox and activate the account.'}).showModal();

			}

			if(verify_result.succes_var==false){

				$.fn.SimpleModal({btn_ok: 'close', title: 'Error', contents: 'User name &/or password incorrect.'}).showModal();
				
			}

		}


	});

}




function save_user(behave,username,password,email,first_name,middle_name,last_name,country,city,department,position){


		$.ajax({
			   
		type: "POST",
		url: "php/session.php",
		data: "action=save_user&behave="+behave+"&username="+username+"&password="+password+"&email="+email+"&first_name="+first_name+"&middle_name="+middle_name+"&last_name="+last_name+"&country="+country+"&city="+city+"&department="+department+"&position="+position,

		success: function(packages){
			
		window.verify_result = JSON.parse(packages);



		if(verify_result.succes_var==true){

		hide_hidden_content_login();


		$("#sign-user").remove();
			

		first_name = verify_result.first_name;
		$.cookie('username',first_name);
		first_name = first_name.toUpperCase();

			$("#search-bar").prepend('<div style="font-weight: 600; font-size: 16px;text-align: right;color: #F69;display: table;float: left;margin-top: 60px;height: 35px;line-height: 2.2em;margin-right: 15px;">Welcome '+first_name+' (User)</div>');
			
			}
		}


		});


}