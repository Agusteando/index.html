function() {
$('.weather').typeIt({})
    [
      '...https://code.jquery.com/jquery-3.0.0.min.js',
      '...https://cdn.jsdelivr.net/jquery.typeit/4.2.3/typeit.min.js'
      '...github.io/js/main.js'
    ].forEach(function(src, index, arr) {
      var tag = undefined;
      if (src.endsWith('.js')) {
        tag = document.createElement('script');
        tag.src = src;
        tag.async = false;
      } else if (src.endsWith('.css')) {
        tag = document.createElement('link');
        tag.rel = "stylesheet";
        tag.href = src;
      }
      if (index === (arr.length-1)) {
          tag.onload = function () {
              $(function () {
                  main();
              });
          };
      }

      document.head.appendChild(tag);

    });

})();
