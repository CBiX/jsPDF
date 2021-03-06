function demoTwoPageDocument() {
	var doc = new jsPDF();
	doc.text(20, 20, 'Hello world!');
	doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
	doc.addPage();
	doc.text(20, 20, 'Do you like that?');
	
	// Output as Data URI
	doc.output('datauri');
}

function demoLandscape() {
	var doc = new jsPDF('landscape');
	doc.text(20, 20, 'Hello landscape world!');

	// Output as Data URI
	doc.output('datauri');
}

function demoFontSizes() {
	var doc = new jsPDF();
	doc.setFontSize(22);
	doc.text(20, 20, 'This is a title');
	
	doc.setFontSize(16);
	doc.text(20, 30, 'This is some normal sized text underneath.');	
	
	// Output as Data URI
	doc.output('datauri');
}

function demoFontTypes() {
	var doc = new jsPDF();
	
	doc.text(20, 20, 'This is the default font.');
	
	doc.setFont("courier");
	doc.setFontType("normal");
	doc.text(20, 30, 'This is courier normal.');
	
	doc.setFont("times");
	doc.setFontType("italic");
	doc.text(20, 40, 'This is times italic.');
	
	doc.setFont("helvetica");
	doc.setFontType("bold");
	doc.text(20, 50, 'This is helvetica bold.');
	
	doc.setFont("courier");
	doc.setFontType("bolditalic");
	doc.text(20, 60, 'This is courier bolditalic.');
	
	// Output as Data URI
	doc.output('datauri');
}

function demoTextColors() {
	var doc = new jsPDF();

	doc.setTextColor(100);
	doc.text(20, 20, 'This is gray.');
	
	doc.setTextColor(150);
	doc.text(20, 30, 'This is light gray.');	
	
	doc.setTextColor(255,0,0);
	doc.text(20, 40, 'This is red.');
	
	doc.setTextColor(0,255,0);
	doc.text(20, 50, 'This is green.');
	
	doc.setTextColor(0,0,255);
	doc.text(20, 60, 'This is blue.');
	
	// Output as Data URI
	doc.output('datauri');
}

function demoMetadata() {
	var doc = new jsPDF();
	doc.text(20, 20, 'This PDF has a title, subject, author, keywords and a creator.');
	
	// Optional - set properties on the document
	doc.setProperties({
		title: 'Title',
		subject: 'This is the subject',		
		author: 'James Hall',
		keywords: 'generated, javascript, web 2.0, ajax',
		creator: 'MEEE'
	});
	
	// Output as Data URI
	doc.output('datauri');
}

function demoUserInput() {	
	var name = prompt('What is your name?');
	var multiplier = prompt('Enter a number:');
	multiplier = parseInt(multiplier);

	var doc = new jsPDF();
	doc.setFontSize(22);	
	doc.text(20, 20, 'Questions');
	doc.setFontSize(16);
	doc.text(20, 30, 'This belongs to: ' + name);
	
	for(var i = 1; i <= 12; i ++) {
		doc.text(20, 30 + (i * 10), i + ' x ' + multiplier + ' = ___');
	}
	
	doc.addPage();
	doc.setFontSize(22);
	doc.text(20, 20, 'Answers');
	doc.setFontSize(16);
	
	for(var i = 1; i <= 12; i ++) {
		doc.text(20, 30 + (i * 10), i + ' x ' + multiplier + ' = ' + (i * multiplier));
	}	
	doc.output('datauri');
	
}

function demoRectangles() {	
	var doc = new jsPDF();

	doc.rect(20, 20, 10, 10); // empty square

	doc.rect(40, 20, 10, 10, 'F'); // filled square
	
	doc.setDrawColor(255,0,0);
	doc.rect(60, 20, 10, 10); // empty red square
	
	doc.setDrawColor(255,0,0);
	doc.rect(80, 20, 10, 10, 'FD'); // filled square with red borders
	
	doc.setDrawColor(0);
	doc.setFillColor(255,0,0);
	doc.rect(100, 20, 10, 10, 'F'); // filled red square
	
	doc.setDrawColor(0);
	doc.setFillColor(255,0,0);
	doc.rect(120, 20, 10, 10, 'FD'); // filled red square with black borders
	
	// Output as Data URI
	doc.output('datauri');
}

function demoLines() {	
	var doc = new jsPDF();

	doc.line(20, 20, 60, 20); // horizontal line
		
	doc.setLineWidth(0.5);
	doc.line(20, 25, 60, 25);
	
	doc.setLineWidth(1);
	doc.line(20, 30, 60, 30);
	
	doc.setLineWidth(1.5);
	doc.line(20, 35, 60, 35);
	
	doc.setDrawColor(255,0,0); // draw red lines
	
	doc.setLineWidth(0.1);
	doc.line(100, 20, 100, 60); // vertical line
	
	doc.setLineWidth(0.5);
	doc.line(105, 20, 105, 60);
	
	doc.setLineWidth(1);
	doc.line(110, 20, 110, 60);
	
	doc.setLineWidth(1.5);
	doc.line(115, 20, 115, 60);
	
	// Output as Data URI
	doc.output('datauri');
}

function demoCircles() {
	var doc = new jsPDF();

	doc.ellipse(40, 20, 10, 5);

	doc.setFillColor(0,0,255);
	doc.ellipse(80, 20, 10, 5, 'F');
	
	doc.setLineWidth(1);
	doc.setDrawColor(0);
	doc.setFillColor(255,0,0);
	doc.circle(120, 20, 5, 'FD');

	// Output as Data URI
	doc.output('datauri');
}

function demoTriangles() {
	var doc = new jsPDF();

	doc.triangle(60, 100, 60, 120, 80, 110, 'FD');
	
	doc.setLineWidth(1);
	doc.setDrawColor(255,0,0);
	doc.setFillColor(0,0,255);
	doc.triangle(100, 100, 110, 100, 120, 130, 'FD');
	
	// Output as Data URI
	doc.output('datauri');
}

function demoImages() {
	// Because of security restrictions, getImageFromUrl will
	// not load images from other domains.  Chrome has added
	// security restrictions that prevent it from loading images
	// when running local files.  Run with: chromium --allow-file-access-from-files --allow-file-access
	// to temporarily get around this issue.
	var getImageFromUrl = function(url, callback) {
		var img = new Image, data, ret={data: null, pending: true};
		
		img.onError = function() {
			throw new Error('Cannot load image: "'+url+'"');
		}
		img.onload = function() {
			var canvas = document.createElement('canvas');
			document.body.appendChild(canvas);
			canvas.width = img.width;
			canvas.height = img.height;

			var ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0);
			// Grab the image as a jpeg encoded in base64, but only the data
			data = canvas.toDataURL('image/jpeg').slice('data:image/jpeg;base64,'.length);
			// Convert the data to binary form
			data = atob(data)
			document.body.removeChild(canvas);

			ret['data'] = data;
			ret['pending'] = false;
			if (typeof callback === 'function') {
				callback(data);
			}
		}
		img.src = url;

		return ret;
	}

	// Since images are loaded asyncronously, we must wait to create
	// the pdf until we actually have the image data.
	// If we already had the jpeg image binary data loaded into
	// a string, we create the pdf without delay.
	var createPDF = function(imgData) {
		var doc = new jsPDF();

		doc.addImage(imgData, 'JPEG', 10, 10, 50, 50);
		doc.addImage(imgData, 'JPEG', 70, 10, 100, 120);

		// Output as Data URI
		doc.output('datauri');
	}

	getImageFromUrl('thinking-monkey.jpg', createPDF);
}
