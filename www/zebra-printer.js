var exec = require('cordova/exec');
// var argscheck = require('cordova/argscheck'),
//     utils = require('cordova/utils'),
//     exec = require('cordova/exec');


var ZebraPrinter = function() {};


ZebraPrinter.sendZplOverBluetooth = function (success, error) {
	exec(success, error, 'ZebraPrinter', 'sendZplOverBluetooth', []);
};

// ZebraPrinter.enableLogs = function (enable, success, error) {
// 	exec(success, error, 'ZebraPrinter', 'enableLogs', [enable]);
// };


// ZebraPrinter.fireEvent = function (event, data) {
// 	var customEvent = new CustomEvent(event, { 'detail': data} );
// 	window.dispatchEvent(customEvent);
// };

// ZebraPrinter.on = function (event, callback, scope) {
// 	window.addEventListener(event, callback.bind(scope || window));
// };

module.exports = ZebraPrinter;
