/* Feature detection */
// var passiveSupported = false;
// try {
// 	window.addEventListener(
// 		"test",
// 		null,
// 		Object.defineProperty({}, "passive", { get: function () { passiveSupported = true; } }));
// } catch (err) { }

// /* Event Listener */
// var elem = document.getElementById('footer');
// elem.addEventListener(
// 	'touchmove',
// 	function listener() {   /* do something */ },
// 	passiveSupported ? { passive: true } : false
// );