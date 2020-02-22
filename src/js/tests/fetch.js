window.MyApp.ns("MyApp.Utils.Fetcher");

(function Fetcher(theURL) {

  var testURL = theURL || 'https://swapi.co/api/';

  this.fetchTheURL = function fetchTheURL(url=testURL) {
  
    console.log('Fetching URL: ', url);
  
    // AJAX ////////////////////////////////
    $.ajax({
      type: "GET",
      url: url
    })
    .done(function(res) {
      console.log( "AJAX Response:", JSON.stringify(res));
    })
    .fail(function(err) {
      console.log( "AJAX Error:", err );
    });
  
    // XHR ///////////////////////////
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);
  
    xhr.onreadystatechange = function onreadystatechange() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('XHR Response:', xhr.responseText);
        } else {
          console.log('XHR Error: ', xhr.status);
        }
      }
    };

    // FETCH //////////////////////////////
    fetch(url).then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('FETCH Response :', json)
        return json
      }).catch(function(ex) {
        console.log('FETCH Error:', ex)
      })

}}).apply(window.MyApp.Utils.Fetcher, ['https://swapi.co/api/films/2']);

///MyApp.Utils.Fetcher.fetchTheURL('https://swapi.co/api/films/3/');
