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
      image = attr.replace('url(', '').replace(')', '').replace(/"/g, '');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWltZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxNQUFBLEdBQVMsU0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixRQUFqQjtBQUVQLE1BQUE7RUFBQSxJQUFBLEdBQU87RUFHUCxTQUFBLEdBQVksU0FBQyxJQUFEO0lBRVYsSUFBRyxDQUFDLElBQUQsWUFBaUIsTUFBcEI7TUFDRSxJQUFBLEdBQU8sQ0FBQSxDQUFFLElBQUYsRUFEVDs7SUFHQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLEtBQWIsQ0FBbUIsQ0FBQyxHQUFwQixDQUF3QixTQUFBO2FBQ3RCLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBSSxDQUFDLEdBQWY7SUFEc0IsQ0FBeEI7V0FHQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FBc0IsQ0FBQyxHQUF2QixDQUEyQixTQUFBO0FBQ3pCLFVBQUE7TUFBQSxJQUFBLEdBQU8sQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjtNQUNQLElBQWUsSUFBSSxDQUFDLE1BQUwsS0FBZSxDQUFmLElBQW9CLElBQUEsS0FBUSxNQUEzQztBQUFBLGVBQU8sS0FBUDs7TUFDQSxLQUFBLEdBQVEsSUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEVBQXJCLENBQXdCLENBQUMsT0FBekIsQ0FBaUMsR0FBakMsRUFBc0MsRUFBdEMsQ0FBeUMsQ0FBQyxPQUExQyxDQUFrRCxJQUFsRCxFQUF3RCxFQUF4RDtNQUNSLElBQW1CLEtBQUEsS0FBVyxFQUE5QjtlQUFBLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBVixFQUFBOztJQUp5QixDQUEzQjtFQVJVO0VBY1gsSUFBQSxHQUFPLFNBQUE7QUFFTCxRQUFBO0lBQUEsTUFBQSxHQUFTO0lBQ1QsS0FBQSxHQUFRLElBQUksQ0FBQztJQUViLElBQUcsTUFBQSxLQUFVLEtBQWI7TUFBd0IsUUFBQSxDQUFTLElBQVQsRUFBeEI7O0lBRUEsTUFBQSxHQUFTO0FBRVQ7U0FBQSw4Q0FBQTs7TUFDRSxNQUFPLENBQUEsQ0FBQSxDQUFQLEdBQWdCLElBQUEsS0FBQSxDQUFBO01BQ2hCLE1BQU8sQ0FBQSxDQUFBLENBQUUsQ0FBQyxHQUFWLEdBQWdCO21CQUNoQixNQUFPLENBQUEsQ0FBQSxDQUFFLENBQUMsTUFBVixHQUFtQixTQUFDLENBQUQ7QUFDakIsWUFBQTtRQUFBLE1BQUE7UUFDQSxJQUFBLEdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxNQUFBLEdBQU8sS0FBUCxHQUFhLEdBQXhCLENBQUEsR0FBNkI7UUFDcEMsSUFBRyxNQUFBLEtBQVUsS0FBYjtpQkFBd0IsUUFBQSxDQUFTLElBQVQsRUFBeEI7U0FBQSxNQUFBO2lCQUE0QyxRQUFBLENBQVMsSUFBVCxFQUE1Qzs7TUFIaUI7QUFIckI7O0VBVEs7RUFpQlIsU0FBQSxDQUFVLElBQVY7RUFDQSxJQUFBLENBQUE7QUFFQSxTQUFPO0FBdkNBIiwiZmlsZSI6InByZWltZy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlByZWltZyA9IChodG1sLCBwcm9ncmVzcywgY29tcGxldGUpIC0+XG5cbiAgdXJscyA9IFtdXG5cblxuICBzY3JhcGVJbWcgPSAoaHRtbCkgLT5cblxuICAgIGlmICFodG1sIGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBodG1sID0gJChodG1sKVxuXG4gICAgJChodG1sKS5maW5kKCdpbWcnKS5tYXAgLT5cbiAgICAgIHVybHMucHVzaCB0aGlzLnNyY1xuXG4gICAgJChodG1sKS5maW5kKCdkaXYsIGEnKS5tYXAgLT5cbiAgICAgIGF0dHIgPSAkKHRoaXMpLmNzcygnYmFja2dyb3VuZEltYWdlJylcbiAgICAgIHJldHVybiB0cnVlIGlmIGF0dHIubGVuZ3RoIGlzIDAgb3IgYXR0ciBpcyAnbm9uZSdcbiAgICAgIGltYWdlID0gYXR0ci5yZXBsYWNlKCd1cmwoJywgJycpLnJlcGxhY2UoJyknLCAnJykucmVwbGFjZSgvXCIvZywgJycpXG4gICAgICB1cmxzLnB1c2ggaW1hZ2UgaWYgaW1hZ2UgaXNudCAnJ1xuXG4gICBsb2FkID0gLT5cblxuICAgICBsb2FkZWQgPSAwXG4gICAgIHRvdGFsID0gdXJscy5sZW5ndGhcblxuICAgICBpZiBsb2FkZWQgaXMgdG90YWwgdGhlbiBjb21wbGV0ZSh0cnVlKVxuXG4gICAgIGltYWdlcyA9IFtdXG5cbiAgICAgZm9yIHVybCwgaSBpbiB1cmxzXG4gICAgICAgaW1hZ2VzW2ldID0gbmV3IEltYWdlKClcbiAgICAgICBpbWFnZXNbaV0uc3JjID0gdXJsXG4gICAgICAgaW1hZ2VzW2ldLm9ubG9hZCA9IChlKSAtPlxuICAgICAgICAgbG9hZGVkKytcbiAgICAgICAgIHBlcmMgPSBNYXRoLnJvdW5kKGxvYWRlZC90b3RhbCoxMDApLzEwMFxuICAgICAgICAgaWYgbG9hZGVkIGlzIHRvdGFsIHRoZW4gY29tcGxldGUodHJ1ZSkgZWxzZSBwcm9ncmVzcyhwZXJjKVxuXG4gIHNjcmFwZUltZyBodG1sXG4gIGxvYWQoKVxuXG4gIHJldHVybiB0cnVlXG4gICAgICBcbiJdfQ==
