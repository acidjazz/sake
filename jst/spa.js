var Spa;

Spa = {
  original: null,
  page: null,
  options: {
    work: '/work/',
    studio: '/studio/',
    contact: '/contact/'
  },
  i: function() {
    console.log('Spa.i()');
    Spa.handlers();
    Spa.page = Spa.original = location.pathname;
    return Spa.activate(Spa.page);
  },
  handlers: function() {
    $('header > .inner > .menu > ul > li > a, header > .inner > a.logo').on('click', Spa.menuHandler);
    return $(window).bind('popstate', Spa.pop);
  },
  menuHandler: function(e) {
    var page;
    e.preventDefault();
    page = $(this).data('page');
    if (page === void 0) {
      return true;
    }
    if (page === location.pathname) {
      return true;
    }
    return Spa.load(page, function() {
      return Spa.push();
    });
  },
  activate: function() {
    var k, ref, results, v;
    _.off('header > .inner > .menu > ul > li > a .active');
    ref = Spa.options;
    results = [];
    for (k in ref) {
      v = ref[k];
      if (v === Spa.page) {
        results.push(_.on("header > .inner > .menu > ul > li > a > .active.option_" + k));
      } else {
        results.push(void 0);
      }
    }
    return results;
  },
  load: function(page, cb) {
    return $.get(page).success(function(result) {
      var html;
      html = $(result).filter('#container')[0];
      $('#container').html(html);
      Spa.page = page;
      if (typeof cb === "function") {
        cb();
      }
      return Spa.activate();
    });
  },
  push: function() {
    return history.pushState({
      url: Spa.page
    }, "Design Sake Studio - " + Spa.page, Spa.page);
  },
  pop: function(e) {
    if (e.originalEvent.state === null) {
      return Spa.load(Spa.original);
    } else {
      return Spa.load(e.originalEvent.state.url);
    }
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBQTs7QUFBQSxHQUFBLEdBRUU7RUFBQSxRQUFBLEVBQVUsSUFBVjtFQUNBLElBQUEsRUFBTSxJQUROO0VBRUEsT0FBQSxFQUNFO0lBQUEsSUFBQSxFQUFNLFFBQU47SUFDQSxNQUFBLEVBQVEsVUFEUjtJQUVBLE9BQUEsRUFBUyxXQUZUO0dBSEY7RUFPQSxDQUFBLEVBQUcsU0FBQTtJQUNELE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWjtJQUNBLEdBQUcsQ0FBQyxRQUFKLENBQUE7SUFFQSxHQUFHLENBQUMsSUFBSixHQUFXLEdBQUcsQ0FBQyxRQUFKLEdBQWUsUUFBUSxDQUFDO1dBQ25DLEdBQUcsQ0FBQyxRQUFKLENBQWEsR0FBRyxDQUFDLElBQWpCO0VBTEMsQ0FQSDtFQWNBLFFBQUEsRUFBVSxTQUFBO0lBRVIsQ0FBQSxDQUFFLGlFQUFGLENBQW9FLENBQUMsRUFBckUsQ0FBd0UsT0FBeEUsRUFBaUYsR0FBRyxDQUFDLFdBQXJGO1dBRUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLElBQVYsQ0FBZSxVQUFmLEVBQTJCLEdBQUcsQ0FBQyxHQUEvQjtFQUpRLENBZFY7RUFvQkEsV0FBQSxFQUFhLFNBQUMsQ0FBRDtBQUVYLFFBQUE7SUFBQSxDQUFDLENBQUMsY0FBRixDQUFBO0lBRUEsSUFBQSxHQUFPLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsTUFBYjtJQUVQLElBQWUsSUFBQSxLQUFRLE1BQXZCO0FBQUEsYUFBTyxLQUFQOztJQUNBLElBQWUsSUFBQSxLQUFRLFFBQVEsQ0FBQyxRQUFoQztBQUFBLGFBQU8sS0FBUDs7V0FHQSxHQUFHLENBQUMsSUFBSixDQUFTLElBQVQsRUFBZSxTQUFBO2FBQ2IsR0FBRyxDQUFDLElBQUosQ0FBQTtJQURhLENBQWY7RUFWVyxDQXBCYjtFQWlDQSxRQUFBLEVBQVUsU0FBQTtBQUNSLFFBQUE7SUFBQSxDQUFDLENBQUMsR0FBRixDQUFNLCtDQUFOO0FBQ0E7QUFBQTtTQUFBLFFBQUE7O01BQ0UsSUFBRyxDQUFBLEtBQUssR0FBRyxDQUFDLElBQVo7cUJBQ0UsQ0FBQyxDQUFDLEVBQUYsQ0FBSyx5REFBQSxHQUEwRCxDQUEvRCxHQURGO09BQUEsTUFBQTs2QkFBQTs7QUFERjs7RUFGUSxDQWpDVjtFQXVDQSxJQUFBLEVBQU0sU0FBQyxJQUFELEVBQU8sRUFBUDtXQUVKLENBQUMsQ0FBQyxHQUFGLENBQU0sSUFBTixDQUNFLENBQUMsT0FESCxDQUNXLFNBQUMsTUFBRDtBQUNQLFVBQUE7TUFBQSxJQUFBLEdBQU8sQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsWUFBakIsQ0FBK0IsQ0FBQSxDQUFBO01BQ3RDLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxJQUFoQixDQUFxQixJQUFyQjtNQUNBLEdBQUcsQ0FBQyxJQUFKLEdBQVc7O1FBQ1g7O2FBQ0EsR0FBRyxDQUFDLFFBQUosQ0FBQTtJQUxPLENBRFg7RUFGSSxDQXZDTjtFQWlEQSxJQUFBLEVBQU0sU0FBQTtXQUNKLE9BQU8sQ0FBQyxTQUFSLENBQWtCO01BQUMsR0FBQSxFQUFLLEdBQUcsQ0FBQyxJQUFWO0tBQWxCLEVBQW1DLHVCQUFBLEdBQXdCLEdBQUcsQ0FBQyxJQUEvRCxFQUF1RSxHQUFHLENBQUMsSUFBM0U7RUFESSxDQWpETjtFQW9EQSxHQUFBLEVBQUssU0FBQyxDQUFEO0lBQ0gsSUFBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQWhCLEtBQXlCLElBQTVCO2FBQ0UsR0FBRyxDQUFDLElBQUosQ0FBUyxHQUFHLENBQUMsUUFBYixFQURGO0tBQUEsTUFBQTthQUdFLEdBQUcsQ0FBQyxJQUFKLENBQVMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBL0IsRUFIRjs7RUFERyxDQXBETCIsImZpbGUiOiJzcGEuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJcblNwYSA9XG5cbiAgb3JpZ2luYWw6IG51bGxcbiAgcGFnZTogbnVsbFxuICBvcHRpb25zOlxuICAgIHdvcms6ICcvd29yay8nXG4gICAgc3R1ZGlvOiAnL3N0dWRpby8nXG4gICAgY29udGFjdDogJy9jb250YWN0LydcblxuICBpOiAtPlxuICAgIGNvbnNvbGUubG9nICdTcGEuaSgpJ1xuICAgIFNwYS5oYW5kbGVycygpXG5cbiAgICBTcGEucGFnZSA9IFNwYS5vcmlnaW5hbCA9IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgU3BhLmFjdGl2YXRlIFNwYS5wYWdlXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IHVsID4gbGkgPiBhLCBoZWFkZXIgPiAuaW5uZXIgPiBhLmxvZ28nKS5vbiAnY2xpY2snLCBTcGEubWVudUhhbmRsZXJcblxuICAgICQod2luZG93KS5iaW5kICdwb3BzdGF0ZScsIFNwYS5wb3BcblxuICBtZW51SGFuZGxlcjogKGUpIC0+XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHBhZ2UgPSAkKHRoaXMpLmRhdGEgJ3BhZ2UnXG5cbiAgICByZXR1cm4gdHJ1ZSBpZiBwYWdlIGlzIHVuZGVmaW5lZFxuICAgIHJldHVybiB0cnVlIGlmIHBhZ2UgaXMgbG9jYXRpb24ucGF0aG5hbWVcblxuXG4gICAgU3BhLmxvYWQgcGFnZSwgLT5cbiAgICAgIFNwYS5wdXNoKClcblxuICBhY3RpdmF0ZTogLT5cbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiB1bCA+IGxpID4gYSAuYWN0aXZlJ1xuICAgIGZvciBrLCB2IG9mIFNwYS5vcHRpb25zXG4gICAgICBpZiB2IGlzIFNwYS5wYWdlXG4gICAgICAgIF8ub24gXCJoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IHVsID4gbGkgPiBhID4gLmFjdGl2ZS5vcHRpb25fI3trfVwiXG5cbiAgbG9hZDogKHBhZ2UsIGNiKSAtPlxuICAgIFxuICAgICQuZ2V0IHBhZ2VcbiAgICAgIC5zdWNjZXNzIChyZXN1bHQpIC0+XG4gICAgICAgIGh0bWwgPSAkKHJlc3VsdCkuZmlsdGVyKCcjY29udGFpbmVyJylbMF1cbiAgICAgICAgJCgnI2NvbnRhaW5lcicpLmh0bWwgaHRtbFxuICAgICAgICBTcGEucGFnZSA9IHBhZ2VcbiAgICAgICAgY2I/KClcbiAgICAgICAgU3BhLmFjdGl2YXRlKClcblxuICBwdXNoOiAtPlxuICAgIGhpc3RvcnkucHVzaFN0YXRlIHt1cmw6IFNwYS5wYWdlfSwgXCJEZXNpZ24gU2FrZSBTdHVkaW8gLSAje1NwYS5wYWdlfVwiLCBTcGEucGFnZVxuICAgICAgICBcbiAgcG9wOiAoZSkgLT5cbiAgICBpZiBlLm9yaWdpbmFsRXZlbnQuc3RhdGUgaXMgbnVsbFxuICAgICAgU3BhLmxvYWQgU3BhLm9yaWdpbmFsXG4gICAgZWxzZVxuICAgICAgU3BhLmxvYWQgZS5vcmlnaW5hbEV2ZW50LnN0YXRlLnVybFxuXG4iXX0=
