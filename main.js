function contain(full_string, part_string) {
  return full_string.indexOf(part_string) != -1;
}

function remove_elements_of_selectors(selectors_array) {
  for (var i = 0; i < selectors_array.length; i++) {
    var emt = document.querySelector(selectors_array[i]);
    if (emt) {
      emt.remove();
    }
  }
}

(function() {
  var url_to_function = {
    'www.technologyreview.com': () => {
      remove_elements_of_selectors([
        '#fullpage-interstitial-overlay',
        '.incognito-wall',
      ]);
      document.querySelector('html').classList.remove('incognito-wall-shown');
    }
  }

  const current_url = window.location.href;
  for (var url in url_to_function) {
    if (contain(current_url, url)) {
      url_to_function[url]();
      return;
    }
  }

  console.log('Script has been injected!');
})();
