var https = require('https');
var receivedData = '';

function getHTML (options, callback) {
    var data = '';

  // borrowed from template provided in lesson and working with Kyle.
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      //console.log(chunk, '\nChunk Length: ', chunk.length);
        receivedData += chunk;
    });
    response.on('end', function() {
      callback(receivedData);
      console.log('Response stream complete.');
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

