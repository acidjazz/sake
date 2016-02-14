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
      if (attr.length === 0) {
        return true;
      }
      image = attr.substr(5, attr.length - 7);
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
      results.push(images[i].onload = function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWltZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxNQUFBLEdBQVMsU0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixRQUFqQjtBQUVQLE1BQUE7RUFBQSxJQUFBLEdBQU87RUFHUCxTQUFBLEdBQVksU0FBQyxJQUFEO0lBRVYsSUFBRyxDQUFDLElBQUQsWUFBaUIsTUFBcEI7TUFDRSxJQUFBLEdBQU8sQ0FBQSxDQUFFLElBQUYsRUFEVDs7SUFHQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLEtBQWIsQ0FBbUIsQ0FBQyxHQUFwQixDQUF3QixTQUFBO2FBQ3RCLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBSSxDQUFDLEdBQWY7SUFEc0IsQ0FBeEI7V0FHQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FBc0IsQ0FBQyxHQUF2QixDQUEyQixTQUFBO0FBQ3pCLFVBQUE7TUFBQSxJQUFBLEdBQU8sQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjtNQUNQLElBQWUsSUFBSSxDQUFDLE1BQUwsS0FBZSxDQUE5QjtBQUFBLGVBQU8sS0FBUDs7TUFDQSxLQUFBLEdBQVEsSUFBSSxDQUFDLE1BQUwsQ0FBWSxDQUFaLEVBQWUsSUFBSSxDQUFDLE1BQUwsR0FBWSxDQUEzQjtNQUNSLElBQW1CLEtBQUEsS0FBVyxFQUE5QjtlQUFBLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBVixFQUFBOztJQUp5QixDQUEzQjtFQVJVO0VBY1gsSUFBQSxHQUFPLFNBQUE7QUFFTCxRQUFBO0lBQUEsTUFBQSxHQUFTO0lBQ1QsS0FBQSxHQUFRLElBQUksQ0FBQztJQUViLElBQUcsTUFBQSxLQUFVLEtBQWI7TUFBd0IsUUFBQSxDQUFTLElBQVQsRUFBeEI7O0lBRUEsTUFBQSxHQUFTO0FBRVQ7U0FBQSw4Q0FBQTs7TUFDRSxNQUFPLENBQUEsQ0FBQSxDQUFQLEdBQWdCLElBQUEsS0FBQSxDQUFBO01BQ2hCLE1BQU8sQ0FBQSxDQUFBLENBQUUsQ0FBQyxHQUFWLEdBQWdCO21CQUNoQixNQUFPLENBQUEsQ0FBQSxDQUFFLENBQUMsTUFBVixHQUFtQixTQUFBO0FBQ2pCLFlBQUE7UUFBQSxNQUFBO1FBQ0EsSUFBQSxHQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBQSxHQUFPLEtBQVAsR0FBYSxHQUF4QixDQUFBLEdBQTZCO1FBQ3BDLElBQUcsTUFBQSxLQUFVLEtBQWI7aUJBQXdCLFFBQUEsQ0FBUyxJQUFULEVBQXhCO1NBQUEsTUFBQTtpQkFBNEMsUUFBQSxDQUFTLElBQVQsRUFBNUM7O01BSGlCO0FBSHJCOztFQVRLO0VBaUJSLFNBQUEsQ0FBVSxJQUFWO0VBQ0EsSUFBQSxDQUFBO0FBRUEsU0FBTztBQXZDQSIsImZpbGUiOiJwcmVpbWcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJQcmVpbWcgPSAoaHRtbCwgcHJvZ3Jlc3MsIGNvbXBsZXRlKSAtPlxuXG4gIHVybHMgPSBbXVxuXG5cbiAgc2NyYXBlSW1nID0gKGh0bWwpIC0+XG5cbiAgICBpZiAhaHRtbCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgaHRtbCA9ICQoaHRtbClcblxuICAgICQoaHRtbCkuZmluZCgnaW1nJykubWFwIC0+XG4gICAgICB1cmxzLnB1c2ggdGhpcy5zcmNcblxuICAgICQoaHRtbCkuZmluZCgnZGl2LCBhJykubWFwIC0+XG4gICAgICBhdHRyID0gJCh0aGlzKS5jc3MoJ2JhY2tncm91bmRJbWFnZScpXG4gICAgICByZXR1cm4gdHJ1ZSBpZiBhdHRyLmxlbmd0aCBpcyAwXG4gICAgICBpbWFnZSA9IGF0dHIuc3Vic3RyIDUsIGF0dHIubGVuZ3RoLTdcbiAgICAgIHVybHMucHVzaCBpbWFnZSBpZiBpbWFnZSBpc250ICcnXG5cbiAgIGxvYWQgPSAtPlxuXG4gICAgIGxvYWRlZCA9IDBcbiAgICAgdG90YWwgPSB1cmxzLmxlbmd0aFxuXG4gICAgIGlmIGxvYWRlZCBpcyB0b3RhbCB0aGVuIGNvbXBsZXRlKHRydWUpXG5cbiAgICAgaW1hZ2VzID0gW11cblxuICAgICBmb3IgdXJsLCBpIGluIHVybHNcbiAgICAgICBpbWFnZXNbaV0gPSBuZXcgSW1hZ2UoKVxuICAgICAgIGltYWdlc1tpXS5zcmMgPSB1cmxcbiAgICAgICBpbWFnZXNbaV0ub25sb2FkID0gLT5cbiAgICAgICAgIGxvYWRlZCsrXG4gICAgICAgICBwZXJjID0gTWF0aC5yb3VuZChsb2FkZWQvdG90YWwqMTAwKS8xMDBcbiAgICAgICAgIGlmIGxvYWRlZCBpcyB0b3RhbCB0aGVuIGNvbXBsZXRlKHRydWUpIGVsc2UgcHJvZ3Jlc3MocGVyYylcblxuICBzY3JhcGVJbWcgaHRtbFxuICBsb2FkKClcblxuICByZXR1cm4gdHJ1ZVxuICAgICAgXG4iXX0=
