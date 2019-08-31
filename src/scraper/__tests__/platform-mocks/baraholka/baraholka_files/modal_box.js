var modalbox;
var main;
var close;
var mouse_on_modalbox=true;

function addModal(url){
		var modal_width = 600;
		var modal_height = 480;
		scrollWidth = document.body.scrollWidth;
		scrollHeight = document.body.scrollHeight;
		posleft = Math.round(document.body.clientWidth/2)-Math.round(modal_width/2);
		var temp_height = Math.round($(window).height()/2) - Math.round(modal_height/2);
		postop = temp_height-temp_height*0.3;
		
		main =$('<div id="main"></div>');
				main.css({
					zIndex : 97,
					filter : "alpha(opacity=80)",
					opacity : "0.8",
					width : scrollWidth+"px",
					height : scrollHeight+"px",
					position : "fixed",
					display : "block",
					top : "0px",
					left : "0px",
					backgroundColor : "#ddd"
				}); 
				main.appendTo("body");
				
		modalbox = $('<div id="modalbox"></div>');
		modalbox.css({
			zIndex:98,
			left : posleft+"px",
			top : postop+"px",
			padding:"3px 5px",
			position : "fixed",
			backgroundColor : "#FC6",
			display : "block",
			 MozBoxShadow: "0 5px 2em #777",
			 WebkitBoxShadow: "0 5px 2em #777",
		     BoxShadow: "0 5px 2em #777"

		});
		modalbox.appendTo("body");
		var iframe = $('<iframe src="'+url+'" id="geo" width="600" height="460" scrolling="no" frameborder="0"></iframe>');
		iframe.appendTo(modalbox);
		
		var boxshadow = "1px 2px 4px #aaa";
		close = $('<div onclick="closeModal()"></div>')
		.css({
					width:"21px",
					height:"21px",
					right: "-30px",
					top : "-12px",
					position : "absolute",
					backgroundcolor : "#FFEFAF",
					cursor: "pointer",
					MozBoxShadow: boxshadow,
					WebkitBoxShadow: boxshadow,
				    BoxShadow: boxshadow,
				    background: "url(/content/img/close.png) no-repeat 0 0"

				})
		.appendTo(modalbox);
		// close if click out of box
        $("#modalbox").hover(function(){ 
            mouse_on_modalbox=true; 
        }, function(){ 
        	if($("#modalbox").is(":visible")){
            mouse_on_modalbox=false;
        	}
        	
        });
       
        $("body").click(function(){ 
            if(!(mouse_on_modalbox) && $("#modalbox").is(":visible") ) closeModal();
        });
        //close if click esc
        $("body").keyup(function(event){
        	if (event.keyCode == 27 && $("#modalbox").is(":visible")){
        		closeModal();
        	}
        });
        
	
}

function closeModal(){
	mouse_on_modalbox=true; 
	main.remove();
	modalbox.remove();
	return false;
}

var add_geo_tag = function(doc_id,desc){
	$.markItUp( {openWith:'[geo='+doc_id+']', closeWith:'[/geo]',placeHolder:desc});  
	closeModal();
};
