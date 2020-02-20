module.exports = function toReadable (number) {
	var ones = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
	var tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
	if (number == 0) return 'zero';
	if (number < 20) {
		return ones[number];
	}
	var splitted = number.toString().split('');
	if (number >= 20 && number < 100) {
        return `${tens[splitted[0]]} ${ones[splitted[1]]}`.trim();
    }
    if (number >= 100) {
        var str1 = ones[splitted[0]] + ' hundred';
		var remainer = parseInt(splitted[1] + splitted[2], 10);
		var splittedRemainer = remainer.toString().split('');
		var str2 = parseInt(splitted[1] + splitted[2]) < 20 ? ones[remainer] : tens[splittedRemainer[0]] + ' ' + ones[splittedRemainer[1]];
		return `${str1} ${str2}`.trim();
    }
}
