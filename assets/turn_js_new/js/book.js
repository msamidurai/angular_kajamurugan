
/* Span_1 Start */

//$("#flipbook").turn("page", 3); //Page Start From
//$("#flipbook").turn("next"); //Starting page control
//$("#flipbook").turn("next").turn("next");  //Starting page control
// $("#flipbook").turn("pages", 4);  //Total number of page view controls


$(window).width(function(){

  var win = $(this).turn("size");
  var turn_width = win.width;
  var turn_height = win.height;


    if (turn_width  >= 900) {
        $("#flipbook").turn("options", {display: "double", duration: 1000});   //with duration
        //$("#flipbook").turn('display','double');
        //$('#flipbook').turn('size', '600', '500');  //Width and Height setting
        }
    else if (turn_width  >= 420) {
        $("#flipbook").turn("options", {display: "double", duration: 1000});   //with duration
        //$("#flipbook").turn('display','double');
        $('#flipbook').turn('size', '600', '500');  //Width and Height setting
        }

    else {
        $("#flipbook").turn('display','single');

        //$("#flipbook").turn("options", {display: "single", overflow: "hidden"});   //with duration

        $("#flipbook").turn("removePage", 2); //remove inner cover based on page no

         //$('#flipbook').turn('size', '340', '500');
        }

});



$(window).resize(function(){
  var win = $(this).turn("size");

  var turn_width = win.width;
  var turn_height = win.height;


  if (turn_width  >= 900) {
  	$("#flipbook").turn("options", {display: "double", duration: 1000});   //with duration
  	//$("#flipbook").turn('display','double');
  	//$('#flipbook').turn('size', '600', '500');  //Width and Height setting
	}
	else if (turn_width  >= 420) {
  	$("#flipbook").turn("options", {display: "double", duration: 1000});   //with duration
  	//$("#flipbook").turn('display','double');
  	$('#flipbook').turn('size', '400', '500');  //Width and Height setting
	}

  else {
    $("#flipbook").turn('display','single');

	//$("#flipbook").turn("options", {display: "single", overflow: "hidden"});   //with duration

	$("#flipbook").turn("removePage", 2); //remove inner cover based on page no

     //$('#flipbook').turn('size', '340', '500');
	}

});


// Auto Scroll Page

/*
var way = 1;

setInterval(function() {

    if (way==1) {

        $("#caption").html("turnCorners: bl,br");

        $("#flipbook").turn("next");

        if ($("#flipbook").turn("page")== $("#flipbook").turn("pages")) {
            way = 2;
            $("#flipbook").turn("options", {turnCorners: "tl,tr"});

        }

    } else {

         $("#caption").html("turnCorners: tl,tr");

         $("#flipbook").turn("previous");

          if ($("#flipbook").turn("page")==1) {
            way = 1;
            $("#flipbook").turn("options", {turnCorners: "bl,br"});

        }
    }

}, 2000);

*/
