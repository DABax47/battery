'use strict';

 const lightDark = ()=>{
	 const body = $("body");
		const $mode = $("#mode");
		 const $label =$('label');
	$mode.on("click", e => {
		if ($mode.hasClass("light-mode")) {
			body.css("background-color", "white");
			$label.css('color','black');
			$mode
				.removeClass("light-mode")
				.addClass("dark-mode")
				.text("DARK");
		} else {
			body.css("background-color","#222");
			$label.css('color','white');
			$mode
				.removeClass("dark-mode")
				.addClass("light-mode")
				.text("LIGHT");
		}
	});
}



export default lightDark;
