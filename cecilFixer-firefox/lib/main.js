var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
	include: /.*cecil\.auckland\.ac\.nz\/Cecil\.aspx.*/,
	contentScriptWhen: 'start',
	contentScriptFile: [	data.url("duplicates/jquery-1.7.2.min.js"),
							data.url("duplicates/popupFixer.js")]
});