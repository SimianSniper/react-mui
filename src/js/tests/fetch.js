window.MyApp.ns('MyApp.Utils.Fetcher');

(function Fetcher(theURL) {
  const testURL = theURL || 'https://swapi.co/api/';

  this.fetchTheURL = function fetchTheURL(url = testURL) {
    console.log('Fetching URL:', url);

    // AJAX ////////////////////////////////
    $.ajax({
      type: 'GET',
      url,
    }).done((res) => {
      console.log('AJAX Response:', JSON.stringify(res));
    }).fail((err) => {
      console.log('AJAX Error:', err);
    });

    // XHR //////////////////////////
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);

    xhr.onreadystatechange = function onreadystatechange() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('XHR Response:', xhr.responseText);
        } else {
          console.log('XHR Error:', xhr.status);
        }
      }
    };

    // FETCH //////////////////////////////
    fetch(url).then((response) => response.json())
      .then((json) => {
        console.log('FETCH Response:', json);
        return json;
      }).catch((ex) => {
        console.log('FETCH Error:', ex);
      });
  };
}).apply(window.MyApp.Utils.Fetcher, ['https://swapi.co/api/films/2']);

// MyApp.Utils.Fetcher.fetchTheURL('https://swapi.co/api/films/3/');
