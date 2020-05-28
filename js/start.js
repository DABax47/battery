'use strict';
const start = ()=>{
	const $start = $("#start-btn");
	let $batteryUnit = $("#unit-1");
	let timerDuration = 100000;
	 const body = $("body");
	  const $inpt = $(".options");

	 $inpt.on("click", e => {
	 	timerDuration = e.target.value;
	 	console.log("clicked" + timerDuration);
	 });
$start.on("click", e => {
	body.prepend("<audio loop autoplay src='./asset/ticking.mp3'></audio>");
	window.setInterval(() => {
		$batteryUnit
			.removeClass("active")
			.addClass("hide")
			.prev()
			.addClass("active");
		if ($batteryUnit.prev().hasClass("active")) {
			$batteryUnit = $batteryUnit.prev();
		} else {
			$("audio").remove();
			body.prepend('<h1 class="text-white">Time to Recharge your Batteries</h1>')
		}
	}, timerDuration);
});
}

export default start;
