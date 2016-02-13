var Spa;

Spa = {
  instagram: false,
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
    Spa.activate(Spa.page);
    return Preimg($('#container > #inner'), function(complete) {
      console.log((complete * 100) + "%");
      return $('.spinner > .complete').css('height', (complete * 100) + "%");
    }, function(done) {
      $('.spinner > .complete').css('height', '100%');
      return setTimeout(function() {
        _.off('.spinner');
        $('.spinner > .complete').css('height', '0%');
        return _.on('#container > #inner');
      }, 1000);
    });
  },
  handlers: function() {
    $('header > .inner > .menu > ul > li > a, header > .inner > a.logo').on('click', Spa.menuHandler);
    $(window).bind('popstate', Spa.pop);
    $('#container').on('click', '.page.work > .tiles > a.tile', Spa.tileHandler);
    return $('#container').on('click', '.page.detail > .submenu > a', Spa.submenuHandler);
  },
  tileHandler: function(e) {
    var page;
    e.preventDefault();
    page = $(this).attr('href');
    if (page === void 0) {
      return true;
    }
    if (page === location.pathname) {
      return true;
    }
    return Spa.load(page, '#inner', '#container > #inner', function() {
      return Spa.push();
    });
  },
  submenuHandler: function(e) {
    var page;
    e.preventDefault();
    page = $(this).attr('href');
    if (page === void 0) {
      return true;
    }
    if (page === location.pathname) {
      return true;
    }
    _.on('.spinner');
    _.off('.submenu a');
    _.on(".submenu a.item_" + (page.replace('work', '').replace(/\//g, '')));
    return Spa.load(page, '.details', '#container > #inner .details', function() {
      return Spa.push();
    });
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
    return Spa.load(page, '#inner', '#container > #inner', function() {
      return Spa.push();
    });
  },
  activate: function() {
    var k, ref, results, v;
    _.off('header > .inner > .menu > ul > li > a');
    ref = Spa.options;
    results = [];
    for (k in ref) {
      v = ref[k];
      if (Spa.page.match(v) !== null) {
        results.push(_.on("header > .inner > .menu > ul > li > a.option_" + k));
      } else {
        results.push(void 0);
      }
    }
    return results;
  },
  load: function(page, find, replace, cb) {
    _.on('.spinner');
    return $.get(page).success(function(result) {
      var html;
      html = $(result).filter('#container').find(find);
      return Preimg(html, function(complete) {
        return $('.spinner > .complete').css('height', (complete * 100) + "%");
      }, function(done) {
        $('.spinner > .complete').css('height', '100%');
        return setTimeout(function() {
          _.off('.spinner');
          $('.spinner > .complete').css('height', '0%');
          $(replace).replaceWith(html);
          _.on('#container > #inner');
          Spa.page = page;
          if (typeof cb === "function") {
            cb();
          }
          return Spa.activate();
        }, 1000);
      });
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

//# sourceMappingURL=data:application/json;base64,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SUFBSixDQUFTLEdBQUcsQ0FBQyxRQUFiLEVBREY7S0FBQSxNQUFBO2FBR0UsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUEvQixFQUhGOztFQURHLENBL0dMIiwiZmlsZSI6InNwYS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlxuU3BhID1cblxuICBpbnN0YWdyYW06IGZhbHNlXG4gIG9yaWdpbmFsOiBudWxsXG4gIHBhZ2U6IG51bGxcbiAgb3B0aW9uczpcbiAgICB3b3JrOiAnL3dvcmsvJ1xuICAgIHN0dWRpbzogJy9zdHVkaW8vJ1xuICAgIGNvbnRhY3Q6ICcvY29udGFjdC8nXG5cbiAgaTogLT5cbiAgICBjb25zb2xlLmxvZyAnU3BhLmkoKSdcbiAgICBTcGEuaGFuZGxlcnMoKVxuXG4gICAgU3BhLnBhZ2UgPSBTcGEub3JpZ2luYWwgPSBsb2NhdGlvbi5wYXRobmFtZVxuICAgIFNwYS5hY3RpdmF0ZSBTcGEucGFnZVxuXG4gICAgUHJlaW1nICQoJyNjb250YWluZXIgPiAjaW5uZXInKSwgKGNvbXBsZXRlKSAtPlxuICAgICAgY29uc29sZS5sb2cgXCIje2NvbXBsZXRlKjEwMH0lXCJcbiAgICAgICQoJy5zcGlubmVyID4gLmNvbXBsZXRlJykuY3NzICdoZWlnaHQnLCBcIiN7Y29tcGxldGUqMTAwfSVcIlxuICAgICwgKGRvbmUpIC0+XG4gICAgICAkKCcuc3Bpbm5lciA+IC5jb21wbGV0ZScpLmNzcyAnaGVpZ2h0JywgJzEwMCUnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIF8ub2ZmICcuc3Bpbm5lcidcbiAgICAgICAgJCgnLnNwaW5uZXIgPiAuY29tcGxldGUnKS5jc3MgJ2hlaWdodCcsICcwJSdcbiAgICAgICAgXy5vbiAnI2NvbnRhaW5lciA+ICNpbm5lcidcbiAgICAgICwgMTAwMFxuXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgIyBtYWluIG1lbnVcbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IHVsID4gbGkgPiBhLCBoZWFkZXIgPiAuaW5uZXIgPiBhLmxvZ28nKS5vbiAnY2xpY2snLCBTcGEubWVudUhhbmRsZXJcblxuICAgICMgYmFjayBidXR0b25cbiAgICAkKHdpbmRvdykuYmluZCAncG9wc3RhdGUnLCBTcGEucG9wXG5cbiAgICAjIHdvcmsgdGlsZSBtZW51XG4gICAgJCgnI2NvbnRhaW5lcicpLm9uICdjbGljaycsICcucGFnZS53b3JrID4gLnRpbGVzID4gYS50aWxlJywgU3BhLnRpbGVIYW5kbGVyXG5cbiAgICAjIHdvcmsgc3ViIG1lbnVcbiAgICAkKCcjY29udGFpbmVyJykub24gJ2NsaWNrJywgJy5wYWdlLmRldGFpbCA+IC5zdWJtZW51ID4gYScsIFNwYS5zdWJtZW51SGFuZGxlclxuXG5cbiAgdGlsZUhhbmRsZXI6IChlKSAtPlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBwYWdlID0gJCh0aGlzKS5hdHRyICdocmVmJ1xuXG4gICAgcmV0dXJuIHRydWUgaWYgcGFnZSBpcyB1bmRlZmluZWRcbiAgICByZXR1cm4gdHJ1ZSBpZiBwYWdlIGlzIGxvY2F0aW9uLnBhdGhuYW1lXG5cbiAgICBTcGEubG9hZCBwYWdlLCAnI2lubmVyJywgJyNjb250YWluZXIgPiAjaW5uZXInLCAtPlxuICAgICAgU3BhLnB1c2goKVxuXG4gIHN1Ym1lbnVIYW5kbGVyOiAoZSkgLT5cbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHBhZ2UgPSAkKHRoaXMpLmF0dHIgJ2hyZWYnXG5cbiAgICByZXR1cm4gdHJ1ZSBpZiBwYWdlIGlzIHVuZGVmaW5lZFxuICAgIHJldHVybiB0cnVlIGlmIHBhZ2UgaXMgbG9jYXRpb24ucGF0aG5hbWVcblxuICAgIF8ub24gJy5zcGlubmVyJ1xuICAgIF8ub2ZmICcuc3VibWVudSBhJ1xuICAgIF8ub24gXCIuc3VibWVudSBhLml0ZW1fI3twYWdlLnJlcGxhY2UoJ3dvcmsnLCAnJykucmVwbGFjZSgvXFwvL2csICcnKX1cIlxuXG4gICAgU3BhLmxvYWQgcGFnZSwgJy5kZXRhaWxzJywgJyNjb250YWluZXIgPiAjaW5uZXIgLmRldGFpbHMnLCAtPlxuICAgICAgU3BhLnB1c2goKVxuICAgIFxuICBtZW51SGFuZGxlcjogKGUpIC0+XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHBhZ2UgPSAkKHRoaXMpLmRhdGEgJ3BhZ2UnXG5cbiAgICByZXR1cm4gdHJ1ZSBpZiBwYWdlIGlzIHVuZGVmaW5lZFxuICAgIHJldHVybiB0cnVlIGlmIHBhZ2UgaXMgbG9jYXRpb24ucGF0aG5hbWVcblxuICAgIFNwYS5sb2FkIHBhZ2UsICcjaW5uZXInLCAnI2NvbnRhaW5lciA+ICNpbm5lcicsIC0+XG4gICAgICBTcGEucHVzaCgpXG5cbiAgYWN0aXZhdGU6IC0+XG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gdWwgPiBsaSA+IGEnXG4gICAgZm9yIGssIHYgb2YgU3BhLm9wdGlvbnNcbiAgICAgIGlmIFNwYS5wYWdlLm1hdGNoKHYpIGlzbnQgbnVsbFxuICAgICAgICBfLm9uIFwiaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiB1bCA+IGxpID4gYS5vcHRpb25fI3trfVwiXG5cbiAgbG9hZDogKHBhZ2UsIGZpbmQsIHJlcGxhY2UsIGNiKSAtPlxuXG4gICAgXy5vbiAnLnNwaW5uZXInXG4gICAgXG4gICAgJC5nZXQgcGFnZVxuICAgICAgLnN1Y2Nlc3MgKHJlc3VsdCkgLT5cbiAgICAgICAgaHRtbCA9ICQocmVzdWx0KS5maWx0ZXIoJyNjb250YWluZXInKS5maW5kKGZpbmQpXG4gICAgICAgIFByZWltZyBodG1sLCAoY29tcGxldGUpIC0+XG4gICAgICAgICAgJCgnLnNwaW5uZXIgPiAuY29tcGxldGUnKS5jc3MgJ2hlaWdodCcsIFwiI3tjb21wbGV0ZSoxMDB9JVwiXG4gICAgICAgICwgKGRvbmUpIC0+XG4gICAgICAgICAgJCgnLnNwaW5uZXIgPiAuY29tcGxldGUnKS5jc3MgJ2hlaWdodCcsICcxMDAlJ1xuICAgICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICAgIF8ub2ZmICcuc3Bpbm5lcidcbiAgICAgICAgICAgICQoJy5zcGlubmVyID4gLmNvbXBsZXRlJykuY3NzICdoZWlnaHQnLCAnMCUnXG4gICAgICAgICAgICAkKHJlcGxhY2UpLnJlcGxhY2VXaXRoIGh0bWxcbiAgICAgICAgICAgIF8ub24gJyNjb250YWluZXIgPiAjaW5uZXInXG4gICAgICAgICAgICBTcGEucGFnZSA9IHBhZ2VcbiAgICAgICAgICAgIGNiPygpXG4gICAgICAgICAgICBTcGEuYWN0aXZhdGUoKVxuICAgICAgICAgICwgMTAwMFxuXG4gIHB1c2g6IC0+XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUge3VybDogU3BhLnBhZ2V9LCBcIkRlc2lnbiBTYWtlIFN0dWRpbyAtICN7U3BhLnBhZ2V9XCIsIFNwYS5wYWdlXG4gICAgICAgIFxuICBwb3A6IChlKSAtPlxuICAgIGlmIGUub3JpZ2luYWxFdmVudC5zdGF0ZSBpcyBudWxsXG4gICAgICBTcGEubG9hZCBTcGEub3JpZ2luYWxcbiAgICBlbHNlXG4gICAgICBTcGEubG9hZCBlLm9yaWdpbmFsRXZlbnQuc3RhdGUudXJsXG5cbiJdfQ==