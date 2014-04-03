/* JS Document */

$(document).ready(function() {

		window.audio_01 = $("#audio-01")[0];
		audio_01.volume=0.2;

		window.audio_02 = $("#audio-02")[0];
		window.audio_03 = $("#audio-03")[0];
		window.audio_04 = $("#audio-04")[0];
		audio_03.volume=0.2;
		audio_04.volume=0.1;


		window.open=0;

		$(this).click(function(){

			$(this).addClass("main-nav-bar_active");
			$(this).siblings().removeClass("main-nav-bar_active");

		});

	});


	$(".main-nav-bar ul li").eq(0).addClass("main-nav-bar_active");


	$(".content_right_container").fadeIn(function(){open=1;});

	activate();
	initialize();
	load_content("embassy");

	// ACTIVATE VALIDATION

	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();


	// DETECT IF USER IS VALIDATING REGISTRATION

	if(getUrlVars()["key"]!=null){

	validateUser();

	}

});


// GET CURRENT CLIENT TIME

function getTime(){

 var dt = new Date();
 var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
return time;


}



function activate(){


	$(".submenu_left ul li").each(function(){

		$(this).mouseenter(function() {
  		audio_03.play();
		});

	});	

	$(".content_right_container ul li").each(function(){

		$(this).mouseenter(function() {
  		audio_02.play();
		});

	});	

	$(".form ul li input").each(function(){

		$(this).focus(function() {
  		audio_02.play();
		});

	});

	$(".inner-buttons-workspace ul li").each(function(){

		$(this).mouseenter(function() {
  		audio_03.play();
		});

	});

	$(".inner-buttons ul li").each(function(){

		$(this).mouseenter(function() {
  		audio_03.play();
		});

	});

	$(".content_right_container ul li").each(function(){

		$(this).click(function() {
  		audio_04.play();
		});

	});

	$(".workspace-loader-content ul li").each(function(){

		$(this).mouseenter(function() {
  		audio_02.play();
		});

	});


	rollover();


}




window.counter=0;
window.main="mobility";
var spin=0;

function load_content(content){


main=content;
open=0;


	counter+=1;
	if(counter>2){
		counter=1;
	}

	spin+=360


	if($("#main-menu").attr('class')!=null){

	$("#indicator-bar").removeClass($("#main-menu").attr('class').split(' ')[1]);
	// Letters logo color change$("#logo-letters").removeClass($("#main-menu").attr('class').split(' ')[1]+"_text");
	$("#logo-icon").removeClass($("#main-menu").attr('class').split(' ')[1]+"_border");

	}


	if(counter==1){$("#container_0"+(counter+1)).load("html/"+content+".html #main-menu",function(){


		$("#container_0"+counter).stop().animate({"opacity":"0","margin-top":$("#content_container").height()+"px"},500,"easeOutCirc",function(){
		moveDown($("#container_0"+counter));
		$("#container_0"+counter).css({"opacity":"1","margin-top":"0px"});
			$(".content_right_container").fadeIn(function(){


				$("#indicator-bar").addClass($("#main-menu").attr('class').split(' ')[1]);
				// Letters logo color change$("#logo-letters").addClass($("#main-menu").attr('class').split(' ')[1]+"_text");
				$("#logo-icon").addClass($("#main-menu").attr('class').split(' ')[1]+"_border");
				$("#logo-icon img").css({'-webkit-transform' : 'rotate('+ spin +'deg)','-moz-transform' : 'rotate(' + spin + 'deg)','-ms-transform' : 'rotate(' + spin + 'deg)','transform' : 'rotate(' + spin + 'deg)'})
				$("#responsive-logo-icon img").css({'-webkit-transform' : 'rotate('+ spin +'deg)','-moz-transform' : 'rotate(' + spin + 'deg)','-ms-transform' : 'rotate(' + spin + 'deg)','transform' : 'rotate(' + spin + 'deg)'})


				activate();

			});
		});

		});
	};

	if(counter==2){$("#container_0"+(counter-1)).load("html/"+content+".html #main-menu",function(){


		$("#container_0"+counter).stop().animate({"opacity":"0","margin-top":$("#content_container").height()+"px"},500,"easeOutCirc",function(){
		moveDown($("#container_0"+counter));
		$("#container_0"+counter).css({"opacity":"1","margin-top":"0px"});
			$(".content_right_container").fadeIn(function(){

				$("#indicator-bar").addClass($("#main-menu").attr('class').split(' ')[1]);
				// Letters logo color change$("#logo-letters").addClass($("#main-menu").attr('class').split(' ')[1]+"_text");
				$("#logo-icon").addClass($("#main-menu").attr('class').split(' ')[1]+"_border");
				$("#logo-icon img").css({'-webkit-transform' : 'rotate('+ spin +'deg)','-moz-transform' : 'rotate(' + spin + 'deg)','-ms-transform' : 'rotate(' + spin + 'deg)','transform' : 'rotate(' + spin + 'deg)'})
				$("#responsive-logo-icon img").css({'-webkit-transform' : 'rotate('+ spin +'deg)','-moz-transform' : 'rotate(' + spin + 'deg)','-ms-transform' : 'rotate(' + spin + 'deg)','transform' : 'rotate(' + spin + 'deg)'})

				activate();

			});
		});

	});

	};

	
}



function open_responsive_menu(){


$(".logo-container").toggleClass('logo-container-mandatory');
$(".indicator-bar").toggleClass('indicator-bar-mandatory');

}


function moveUp($item) {
	$before = $item.prev();
	$item.insertBefore($before);
}


function moveDown($item) {
	$after = $item.next();
	$item.insertAfter($after);
}





function rollover(){

$(".container_01 .content_right_container ul > li:last").css({"margin-bottom":"200px"});
$(".container_02 .content_right_container ul > li:last").css({"margin-bottom":"200px"});

open=1;

	$(".content_right_container").mousemove(function(e) {
		// Enable scroll function only when the height of the 'slider' or menu is greater than the 'menu_holder'.
		if($(this).height() < $("#slider").height() && open==1) {
			// Calculate the distance value from the 'menu_holder' y pos and page Y pos.
			var distance = e.pageY - $(this).offset().top;
			// Get the percentage value with respect to the Mouse Y on the 'menu_holder'.
			var percentage = distance / $(this).height();
			// Calculate the new Y position of the 'slider'. 
			var targetY = -Math.round(($("#slider").height() - $(this).height()) * percentage);
			// With jQuery easing funtion from easing plugin.
			$('#slider').stop().animate({top: [targetY+"px", "easeOutCirc"]}, { queue:false, duration:200 });
			// Without easeing function. by default jQuery have 'swing'.
			//$('#slider').stop().animate({top: [targetY+"px", "easeOutCirc"]}, { queue:false, duration:200 });
		}
	});



}



// SHOW LOGIN


function show_hidden_content_login(){


$("#hidden-content-login").stop().animate({"top":"0px"},200,"easeOutExpo");
audio_04.play();


}


function hide_hidden_content_login(){


$("#hidden-content-login").stop().animate({"top":"-555px"},500,"easeOutExpo");
audio_04.play();


}



// SHOW SIGNIN


function show_hidden_content_signin(){

$("#hidden-content-login").stop().animate({"top":"-555px"},500,"easeOutExpo");
$("#hidden-content-signin").stop().animate({"top":"0px"},200,"easeOutExpo");
audio_04.play();


}


function hide_hidden_content_signin(){


$("#hidden-content-signin").stop().animate({"top":"-1325px"},500,"easeOutExpo");
audio_04.play();


}



// LOGOUT


function logout(){

	$.cookie('username',null);
	location.reload();

}




	var md5 = function(value) {
				
		return CryptoJS.MD5(value).toString();
	
	}



// ACTIONS TO DO AFTER LOADING TEMPLATES

function loadTemplates(){


		$.getScript("js/jquery-ui-1.10.4.custom.js",function(){


			// ACTIVATES ACCORDION MODE FOR SUBSECCIONS OF THE TEMPLATE

			$("#main-info").accordion({
			  header: '> h3',
		      collapsible: true,
		      heightStyle: "content",
		      active:false,
		    });


		    // ACTIVATES EACH H3 (SUBSECTIONS) CLICKS ACTIONS OF THE TEMPLATE

		    $('#main-info h3').bind('click', function (event) {

				activateFileUpload();

		    	window.section_folder=$(this).attr("section-folder");

		    	window.thisone=$(this);
		    	window.index_h3=$(this).index("h3");

		    	$("#main-info h3").eq(index_h3).siblings().not($("#main-info h3").eq(index_h3).next()).not($("#send-form-button")).slideUp(function(){

		    		setTimeout(function(){

		    			$("#main-info h3").eq(index_h3).siblings().not($("#main-info h3").eq(index_h3).next()).not($("#send-form-button")).remove();

		    		},3000);

		    	});
		    	
			});

		    // ACTIVATE VALIDATION INPUTS
		    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();


		    // ACTIVATE SUBMIT BUTTON

		    		$(".hidden-form-send").bind('click',function (event){


			    	  if ($("#main-info input").not("[type=submit]").jqBootstrapValidation("hasErrors")) {

				            var errorMessages = [];

				            $("#main-info input").not("[type=submit]").each(function (i, el) {
				              errorMessages = errorMessages.concat(
				                  $(this).triggerHandler("validation.validation")
				              );
				            });

				            if(errorMessages[0]==undefined){

				                errorMessages="you must fill out all data!";
				            }

			            	$.fn.SimpleModal({btn_ok: 'close', title: 'Data Incomplete', contents: errorMessages}).showModal();

			        	}else{

			        		// SAVE ALL DATA TO THE TEMPLATE DATABASE

			        		window['save_'+thisone.attr("section-folder").replace(/-/g,'_')]();

			       	 	}
		         		

		         });


		});

}


// SHOW TEMPLATES

function show_hidden_form(content){

	window.selected_template=content;


	if($.cookie('username')!=null && $.cookie('username')!=""){


		$("#form-title").html(content.toUpperCase()+" TEMPLATE");

		$("#form").load("html/templates.html #"+content,function(){initialize();activate();loadTemplates();});

		$("#hidden-form").stop().animate({"left":"0px"},200,"easeOutExpo",function(){


		setTimeout(function(){loadTemplates();},1000);

		});
		audio_04.play();

	}else{

		show_hidden_content_login();

	};


}


function hide_hidden_form(){


$("#hidden-form").stop().animate({"left":"-100%"},200,"easeOutExpo");
audio_04.play();


}



// SHOW INNER CONTENT


function show_hidden_inner_content(content){


if($("#go-back").length){

	$("#go-back").remove();

}


window.main_content=content;

if((main!="studio") || $.cookie('username')!=null && $.cookie('username')!=""){



	$("#inner-content-title").html(content.toUpperCase());

	$("#inner-content").load("html/"+main+".html #"+content,function(){

		activate();

		if(content=="workspace"){

			loadWorkspaceContent("cycling-officer");

		}

	});


	if($("#hidden-inner-content").css("right")=="0px"){

		$("#hidden-inner-content").stop().animate({"right":"-100%"},200,"easeOutExpo",function(){

			$("#hidden-inner-content").stop().animate({"right":"0px"},200,"easeOutExpo");
			audio_04.play();


		});


	}else{

			$("#hidden-inner-content").stop().animate({"right":"0px"},200,"easeOutExpo");
			audio_04.play();


	}

}else{


show_hidden_content_login();


}




}


function hide_hidden_inner_content(){


$("#hidden-inner-content").stop().animate({"right":"-100%"},200,"easeOutExpo");
audio_04.play();


}



// INITIALIZE GOOGLE LOCATIONS


function initialize() { 

	 var options_01 = {
	  types: ['(cities)']
	  //componentRestrictions: {country: "us"}
	 };

	  var options_02 = {
	  types: ['(regions)']
	  //componentRestrictions: {country: "us"}
	 };



	if($(".city-input")){


		for(i=0;i<$(".city-input").length;i++){

			var input = $(".city-input")[i];
			var autocomplete = new google.maps.places.Autocomplete(input, options_01);

		}


	}

	if($(".country-input")){

		for(i=0;i<$(".country-input").length;i++){

			var input = $(".country-input")[i];
			var autocomplete = new google.maps.places.Autocomplete(input, options_02);

		}

	}

	if($(".deparment-input")){

		var input = $(".deparment-input")[0];
		var autocomplete = new google.maps.places.Autocomplete(input, options_01);

	}



}




// GET EXTERNAL URLS MODALS



function load_url(url){


	$("#hidden-inner-content-container").prepend('<div onclick=show_hidden_inner_content("'+main_content+'"); id="go-back" class="hidden-inner-content-back"></div>');

	
	$("#inner-content-title").html(main.toUpperCase());


	$("#inner-content").html("<iframe src="+url+" class='white' style='width: 100%;height: 100%;'></iframe>");

		if($("#hidden-inner-content").css("right")=="0px"){

			$("#hidden-inner-content").stop().animate({"right":"-100%"},200,"easeOutExpo",function(){

				$("#hidden-inner-content").stop().animate({"right":"0px"},200,"easeOutExpo");
				audio_04.play();


			});


		}else{

				$("#hidden-inner-content").stop().animate({"right":"0px"},200,"easeOutExpo");
				audio_04.play();


		}


}



// LOAD WORKSPACE


function load_workspace(workspace,table){

	$("#workspace-content").load("html/studio.html #"+workspace,function(){

		loadWorkspaceContent(table);


	});


}




// REGISTER




function register(){


	if ($("input,select,textarea").not("[type=submit]").jqBootstrapValidation("hasErrors")) {

		var errorMessages = [];

		$("input,select,textarea").not("[type=submit]").each(function (i, el) {
		  errorMessages = errorMessages.concat(
		      $(this).triggerHandler("validation.validation")
		  );
		});

		if(errorMessages[0]==undefined){

			errorMessages="you must fill out all data!";

		}

		$.fn.SimpleModal({btn_ok: 'close', title: 'Data Incomplete', contents: errorMessages}).showModal();

	}else{

	$("#button-register").css({"display":"none"});
	$("#loading-register").css({"display":"block"});

		$.ajax({
			   
			type: "POST",
			url: "php/register.php",
			data: "position="+$("#position").val()+"&firstNameR="+$("#firstNameR").val()+"&middleNameR="+$("#middleNameR").val()+"&lastNameR="+$("#lastNameR").val()+"&cityR="+$("#cityR").val().split(/(?:,| )+/)[0]+"&countryR="+$("#countryR").val().split(/(?:,| )+/)[0]+"&emailR="+$("#emailR").val()+"&passR="+$("#passR").val()+"&confirmPassR="+$("#confirmPassR").val(),

			success: function(packages){
				
			window.verify_result = JSON.parse(packages);

			if(verify_result.succes_var==true){

				$.fn.SimpleModal({btn_ok: 'close', title: 'Success', contents: 'an email has been sent to confirm your data and complete the register process!'}).showModal();
				$("#register-form input").html("");
				hide_hidden_content_signin();

				}else{

				$.fn.SimpleModal({btn_ok: 'close', title: 'Failed', contents: 'the user already exists!'}).showModal();


				}

				$("#button-register").css({"display":"block"});
				$("#loading-register").css({"display":"none"});	

			}


		});


	}



}



function validateUser(){



		$.ajax({
			   
			type: "POST",
			url: "php/validate-user.php",
			data: "key="+getUrlVars()["key"],

			success: function(packages){
				
				window.validate_user = JSON.parse(packages);

				if(validate_user.succes_var==true){

				$.fn.SimpleModal({btn_ok: 'close', title: 'Success', contents: 'your account has been activated, now you will continue filling in the database!'}).showModal();		
				$.cookie('username',validate_user.username);
				show_hidden_form(validate_user.position);

				}

			}


		});


}


// GET VAR VALUES FROM URL

function getUrlVars() {

	var vars = {};

	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {

	vars[key] = value;

	});

	return vars;

}




function activateFileUpload(){

window.dataObject={};
window.incrementUpload=1;


'use strict';
	    // Change this to the location of your server-side upload handler:
	    var url = 'php/uploader/',
	        uploadButton = $('<button/>')
	            .addClass('btn btn-primary')
	            .prop('disabled', true)
	            .text('Processing...')
	            .on('click', function () {
	                var $this = $(this),
	                    data = $this.data();
	                $this
	                    .off('click')
	                    .text('Abort')
	                    .on('click', function () {
	                        $this.remove();
	                        data.abort();
	                    });
	                data.submit().always(function () {
	                    $this.remove();
	                });
	            });
	    $('.file-field').fileupload({
	        url: url,
	        dataType: 'json',
	        autoUpload: false,
	        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
	        maxFileSize: 5000000, // 5 MB
	        disableImageResize: /Android(?!.*Chrome)|Opera/
	            .test(window.navigator.userAgent),
	        previewMaxWidth: 100,
	        previewMaxHeight: 100,
	        previewCrop: true,
	        imageMaxWidth: 80,
    		imageMaxHeight: 80,
    		imageCrop: true
	    }).on('fileuploadadd', function (e, data) {

	  	    data.context = $('<div/>').appendTo('#'+file_list);
	        $.each(data.files, function (index, file) {
	            var node = $('<p/>')
	                    .append($('<span/>').text(file.name));
	            if (!index) {
	                node
	                    .append('<br>')
	                    .append(uploadButton.clone(true).data(data));
	            }
	            node.appendTo(data.context);
	        });


	      dataObject[file_list]=data;

	    }).on('fileuploadprocessalways', function (e, data) {
	        var index = data.index,
	            file = data.files[index],
	            node = $(data.context.children()[index]);
	        if (file.preview) {
	            node
	                .prepend('<br>')
	                .prepend(file.preview);
	        }
	        if (file.error) {
	            node
	                .append('<br>')
	                .append($('<span class="text-danger"/>').text(file.error));
	        }
	        if (index + 1 === data.files.length) {
	            data.context.find('button')
	                .text('Upload')
	                .prop('disabled', !!data.files.error);
	        }
	    }).on('fileuploadprogressall', function (e, data) {

	        var progress = parseInt(data.loaded / data.total * 100, 10);

	        if(progress==100){

	        	if(incrementUpload==Object.keys(dataObject).length){

	        		 $.fn.SimpleModal({btn_ok: 'close', title: 'Success', contents: 'The data was successfully submited!'}).showModal();

	        	}

	        	incrementUpload+=1;

	        }

	    }).on('fileuploaddone', function (e, data) {
	        $.each(data.result.files, function (index, file) {
	            if (file.url) {
	                var link = $('<a>')
	                    .attr('target', '_blank')
	                    .prop('href', file.url);
	                $(data.context.children()[index])
	                    .wrap(link);
	            } else if (file.error) {
	                var error = $('<span class="text-danger"/>').text(file.error);
	                $(data.context.children()[index])
	                    .append('<br>')
	                    .append(error);
	            }
	        });
	    }).on('fileuploadfail', function (e, data) {
	        $.each(data.files, function (index, file) {
	            var error = $('<span class="text-danger"/>').text('File upload failed.');
	            $(data.context.children()[index])
	                .append('<br>')
	                .append(error);
	        });
	    }).prop('disabled', !$.support.fileInput)
	        .parent().addClass($.support.fileInput ? undefined : 'disabled');





}


