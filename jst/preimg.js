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

    /*
    else
      imgRegex = new RegExp('<img.*?src="(.*?\/([^/"]*))".*?>', 'g')
      results = imgRegex.exec html
      while results isnt null
        results = imgRegex.exec html
        urls.push results[1] if results isnt null
     */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWltZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxNQUFBLEdBQVMsU0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixRQUFqQjtBQUVQLE1BQUE7RUFBQSxJQUFBLEdBQU87RUFHUCxTQUFBLEdBQVksU0FBQyxJQUFEO0lBRVYsSUFBRyxDQUFDLElBQUQsWUFBaUIsTUFBcEI7TUFDRSxJQUFBLEdBQU8sQ0FBQSxDQUFFLElBQUYsRUFEVDs7SUFHQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLEtBQWIsQ0FBbUIsQ0FBQyxHQUFwQixDQUF3QixTQUFBO2FBQ3RCLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBSSxDQUFDLEdBQWY7SUFEc0IsQ0FBeEI7V0FHQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FBc0IsQ0FBQyxHQUF2QixDQUEyQixTQUFBO0FBQ3pCLFVBQUE7TUFBQSxJQUFBLEdBQU8sQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjtNQUNQLElBQWUsSUFBSSxDQUFDLE1BQUwsS0FBZSxDQUE5QjtBQUFBLGVBQU8sS0FBUDs7TUFDQSxLQUFBLEdBQVEsSUFBSSxDQUFDLE1BQUwsQ0FBWSxDQUFaLEVBQWUsSUFBSSxDQUFDLE1BQUwsR0FBWSxDQUEzQjtNQUNSLElBQW1CLEtBQUEsS0FBVyxFQUE5QjtlQUFBLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBVixFQUFBOztJQUp5QixDQUEzQjs7QUFNQTs7Ozs7Ozs7RUFkVTtFQXVCWCxJQUFBLEdBQU8sU0FBQTtBQUVMLFFBQUE7SUFBQSxNQUFBLEdBQVM7SUFDVCxLQUFBLEdBQVEsSUFBSSxDQUFDO0lBRWIsSUFBRyxNQUFBLEtBQVUsS0FBYjtNQUF3QixRQUFBLENBQVMsSUFBVCxFQUF4Qjs7SUFFQSxNQUFBLEdBQVM7QUFHVDtTQUFBLDhDQUFBOztNQUNFLE1BQU8sQ0FBQSxDQUFBLENBQVAsR0FBZ0IsSUFBQSxLQUFBLENBQUE7TUFDaEIsTUFBTyxDQUFBLENBQUEsQ0FBRSxDQUFDLEdBQVYsR0FBZ0I7bUJBQ2hCLE1BQU8sQ0FBQSxDQUFBLENBQUUsQ0FBQyxNQUFWLEdBQW1CLFNBQUE7QUFDakIsWUFBQTtRQUFBLE1BQUE7UUFDQSxJQUFBLEdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxNQUFBLEdBQU8sS0FBUCxHQUFhLEdBQXhCLENBQUEsR0FBNkI7UUFDcEMsSUFBRyxNQUFBLEtBQVUsS0FBYjtpQkFBd0IsUUFBQSxDQUFTLElBQVQsRUFBeEI7U0FBQSxNQUFBO2lCQUE0QyxRQUFBLENBQVMsSUFBVCxFQUE1Qzs7TUFIaUI7QUFIckI7O0VBVks7RUFrQlIsU0FBQSxDQUFVLElBQVY7RUFDQSxJQUFBLENBQUE7QUFFQSxTQUFPO0FBakRBIiwiZmlsZSI6InByZWltZy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlByZWltZyA9IChodG1sLCBwcm9ncmVzcywgY29tcGxldGUpIC0+XG5cbiAgdXJscyA9IFtdXG5cblxuICBzY3JhcGVJbWcgPSAoaHRtbCkgLT5cblxuICAgIGlmICFodG1sIGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBodG1sID0gJChodG1sKVxuXG4gICAgJChodG1sKS5maW5kKCdpbWcnKS5tYXAgLT5cbiAgICAgIHVybHMucHVzaCB0aGlzLnNyY1xuXG4gICAgJChodG1sKS5maW5kKCdkaXYsIGEnKS5tYXAgLT5cbiAgICAgIGF0dHIgPSAkKHRoaXMpLmNzcygnYmFja2dyb3VuZEltYWdlJylcbiAgICAgIHJldHVybiB0cnVlIGlmIGF0dHIubGVuZ3RoIGlzIDBcbiAgICAgIGltYWdlID0gYXR0ci5zdWJzdHIgNSwgYXR0ci5sZW5ndGgtN1xuICAgICAgdXJscy5wdXNoIGltYWdlIGlmIGltYWdlIGlzbnQgJydcblxuICAgICMjI1xuICAgIGVsc2VcbiAgICAgIGltZ1JlZ2V4ID0gbmV3IFJlZ0V4cCgnPGltZy4qP3NyYz1cIiguKj9cXC8oW14vXCJdKikpXCIuKj8+JywgJ2cnKVxuICAgICAgcmVzdWx0cyA9IGltZ1JlZ2V4LmV4ZWMgaHRtbFxuICAgICAgd2hpbGUgcmVzdWx0cyBpc250IG51bGxcbiAgICAgICAgcmVzdWx0cyA9IGltZ1JlZ2V4LmV4ZWMgaHRtbFxuICAgICAgICB1cmxzLnB1c2ggcmVzdWx0c1sxXSBpZiByZXN1bHRzIGlzbnQgbnVsbFxuICAgICMjI1xuICAgICNcbiAgIGxvYWQgPSAtPlxuXG4gICAgIGxvYWRlZCA9IDBcbiAgICAgdG90YWwgPSB1cmxzLmxlbmd0aFxuXG4gICAgIGlmIGxvYWRlZCBpcyB0b3RhbCB0aGVuIGNvbXBsZXRlKHRydWUpXG5cbiAgICAgaW1hZ2VzID0gW11cblxuXG4gICAgIGZvciB1cmwsIGkgaW4gdXJsc1xuICAgICAgIGltYWdlc1tpXSA9IG5ldyBJbWFnZSgpXG4gICAgICAgaW1hZ2VzW2ldLnNyYyA9IHVybFxuICAgICAgIGltYWdlc1tpXS5vbmxvYWQgPSAtPlxuICAgICAgICAgbG9hZGVkKytcbiAgICAgICAgIHBlcmMgPSBNYXRoLnJvdW5kKGxvYWRlZC90b3RhbCoxMDApLzEwMFxuICAgICAgICAgaWYgbG9hZGVkIGlzIHRvdGFsIHRoZW4gY29tcGxldGUodHJ1ZSkgZWxzZSBwcm9ncmVzcyhwZXJjKVxuXG4gIHNjcmFwZUltZyBodG1sXG4gIGxvYWQoKVxuXG4gIHJldHVybiB0cnVlXG4gICAgICBcbiJdfQ==