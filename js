//var str = "js实现用{two}自符串替换占位符{two} {three}  {one} ".format({one: "I",two: "LOVE",three: "YOU"});
//var str2 = "js实现用{1}自符串替换占位符{1} {2}  {0} ".format("I","LOVE","YOU");
String.prototype.format = function() {
	if (arguments.length == 0) {
		return this;
	}
	var param = arguments[0];
	var s = this;
	if (typeof(param) == 'object') {
		for(var key in param) {
			s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
		}
		return s;
	}
	for (var i = 0; i < arguments.length; i++) {
		s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
	}
	return s;
}

if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};
}


function isEmpty(str) {
	return !str || undefined === str || null === str || '' === str || '' === str.trim() || 'undefined' === str.trim() || 'null' === str.trim();
}
