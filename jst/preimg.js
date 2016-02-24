var Preimg;

Preimg = function(html, progress, complete) {
  var load, scrapeImg, urls;
  urls = [];
  scrapeImg = function(html) {
    if (!html instanceof jQuery) {
      html = $(html);
    }
    $(html).find('img').map(function() {
      return urls.push(this.src);
    });
    return $(html).find('div, a').map(function() {
      var attr, image;
      attr = $(this).css('backgroundImage');
      if (attr.length === 0 || attr === 'none') {
        return true;
      }
      image = attr.replace('url(', '').replace(')', '');
      if (image !== '') {
        return urls.push(image);
      }
    });
  };
  load = function() {
    var i, images, j, len, loaded, results, total, url;
    loaded = 0;
    total = urls.length;
    if (loaded === total) {
      complete(true);
    }
    images = [];
    results = [];
    for (i = j = 0, len = urls.length; j < len; i = ++j) {
      url = urls[i];
      images[i] = new Image();
      images[i].src = url;
      results.push(images[i].onload = function(e) {
        var perc;
        loaded++;
        perc = Math.round(loaded / total * 100) / 100;
        if (loaded === total) {
          return complete(true);
        } else {
          return progress(perc);
        }
      });
    }
    return results;
  };
  scrapeImg(html);
  load();
  return true;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWltZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxNQUFBLEdBQVMsU0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixRQUFqQjtBQUVQLE1BQUE7RUFBQSxJQUFBLEdBQU87RUFHUCxTQUFBLEdBQVksU0FBQyxJQUFEO0lBRVYsSUFBRyxDQUFDLElBQUQsWUFBaUIsTUFBcEI7TUFDRSxJQUFBLEdBQU8sQ0FBQSxDQUFFLElBQUYsRUFEVDs7SUFHQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLEtBQWIsQ0FBbUIsQ0FBQyxHQUFwQixDQUF3QixTQUFBO2FBQ3RCLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBSSxDQUFDLEdBQWY7SUFEc0IsQ0FBeEI7V0FHQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FBc0IsQ0FBQyxHQUF2QixDQUEyQixTQUFBO0FBQ3pCLFVBQUE7TUFBQSxJQUFBLEdBQU8sQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjtNQUNQLElBQWUsSUFBSSxDQUFDLE1BQUwsS0FBZSxDQUFmLElBQW9CLElBQUEsS0FBUSxNQUEzQztBQUFBLGVBQU8sS0FBUDs7TUFDQSxLQUFBLEdBQVEsSUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEVBQXJCLENBQXdCLENBQUMsT0FBekIsQ0FBaUMsR0FBakMsRUFBc0MsRUFBdEM7TUFDUixJQUFtQixLQUFBLEtBQVcsRUFBOUI7ZUFBQSxJQUFJLENBQUMsSUFBTCxDQUFVLEtBQVYsRUFBQTs7SUFKeUIsQ0FBM0I7RUFSVTtFQWNYLElBQUEsR0FBTyxTQUFBO0FBRUwsUUFBQTtJQUFBLE1BQUEsR0FBUztJQUNULEtBQUEsR0FBUSxJQUFJLENBQUM7SUFFYixJQUFHLE1BQUEsS0FBVSxLQUFiO01BQXdCLFFBQUEsQ0FBUyxJQUFULEVBQXhCOztJQUVBLE1BQUEsR0FBUztBQUVUO1NBQUEsOENBQUE7O01BQ0UsTUFBTyxDQUFBLENBQUEsQ0FBUCxHQUFnQixJQUFBLEtBQUEsQ0FBQTtNQUNoQixNQUFPLENBQUEsQ0FBQSxDQUFFLENBQUMsR0FBVixHQUFnQjttQkFDaEIsTUFBTyxDQUFBLENBQUEsQ0FBRSxDQUFDLE1BQVYsR0FBbUIsU0FBQyxDQUFEO0FBQ2pCLFlBQUE7UUFBQSxNQUFBO1FBQ0EsSUFBQSxHQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBQSxHQUFPLEtBQVAsR0FBYSxHQUF4QixDQUFBLEdBQTZCO1FBQ3BDLElBQUcsTUFBQSxLQUFVLEtBQWI7aUJBQXdCLFFBQUEsQ0FBUyxJQUFULEVBQXhCO1NBQUEsTUFBQTtpQkFBNEMsUUFBQSxDQUFTLElBQVQsRUFBNUM7O01BSGlCO0FBSHJCOztFQVRLO0VBaUJSLFNBQUEsQ0FBVSxJQUFWO0VBQ0EsSUFBQSxDQUFBO0FBRUEsU0FBTztBQXZDQSIsImZpbGUiOiJwcmVpbWcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJQcmVpbWcgPSAoaHRtbCwgcHJvZ3Jlc3MsIGNvbXBsZXRlKSAtPlxuXG4gIHVybHMgPSBbXVxuXG5cbiAgc2NyYXBlSW1nID0gKGh0bWwpIC0+XG5cbiAgICBpZiAhaHRtbCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgaHRtbCA9ICQoaHRtbClcblxuICAgICQoaHRtbCkuZmluZCgnaW1nJykubWFwIC0+XG4gICAgICB1cmxzLnB1c2ggdGhpcy5zcmNcblxuICAgICQoaHRtbCkuZmluZCgnZGl2LCBhJykubWFwIC0+XG4gICAgICBhdHRyID0gJCh0aGlzKS5jc3MoJ2JhY2tncm91bmRJbWFnZScpXG4gICAgICByZXR1cm4gdHJ1ZSBpZiBhdHRyLmxlbmd0aCBpcyAwIG9yIGF0dHIgaXMgJ25vbmUnXG4gICAgICBpbWFnZSA9IGF0dHIucmVwbGFjZSgndXJsKCcsICcnKS5yZXBsYWNlKCcpJywgJycpXG4gICAgICB1cmxzLnB1c2ggaW1hZ2UgaWYgaW1hZ2UgaXNudCAnJ1xuXG4gICBsb2FkID0gLT5cblxuICAgICBsb2FkZWQgPSAwXG4gICAgIHRvdGFsID0gdXJscy5sZW5ndGhcblxuICAgICBpZiBsb2FkZWQgaXMgdG90YWwgdGhlbiBjb21wbGV0ZSh0cnVlKVxuXG4gICAgIGltYWdlcyA9IFtdXG5cbiAgICAgZm9yIHVybCwgaSBpbiB1cmxzXG4gICAgICAgaW1hZ2VzW2ldID0gbmV3IEltYWdlKClcbiAgICAgICBpbWFnZXNbaV0uc3JjID0gdXJsXG4gICAgICAgaW1hZ2VzW2ldLm9ubG9hZCA9IChlKSAtPlxuICAgICAgICAgbG9hZGVkKytcbiAgICAgICAgIHBlcmMgPSBNYXRoLnJvdW5kKGxvYWRlZC90b3RhbCoxMDApLzEwMFxuICAgICAgICAgaWYgbG9hZGVkIGlzIHRvdGFsIHRoZW4gY29tcGxldGUodHJ1ZSkgZWxzZSBwcm9ncmVzcyhwZXJjKVxuXG4gIHNjcmFwZUltZyBodG1sXG4gIGxvYWQoKVxuXG4gIHJldHVybiB0cnVlXG4gICAgICBcbiJdfQ==
