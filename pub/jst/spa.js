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
    $(window).bind('popstate', Spa.pop);
    return $('#container').on('click', '.page.work > .tiles > a.tile, .page.detail > .submenu > a', Spa.tileHandler);
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
    return Spa.load(page, function() {
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
    return Spa.load(page, function() {
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
  load: function(page, cb) {
    _.on('.spinner');
    return $.get(page).success(function(result) {
      var html;
      html = $(result).filter('#container')[0];
      return Preimg(html, function(complete) {
        return console.log(complete);
      }, function(done) {
        return setTimeout(function() {
          _.off('.spinner');
          $('#container').html(html);
          Spa.page = page;
          if (typeof cb === "function") {
            cb();
          }
          return Spa.activate();
        }, 3000);
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

//# sourceMappingURL=data:application/json;base64,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LENBQU0sVUFBTjtVQUNBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxJQUFoQixDQUFxQixJQUFyQjtVQUNBLEdBQUcsQ0FBQyxJQUFKLEdBQVc7O1lBQ1g7O2lCQUNBLEdBQUcsQ0FBQyxRQUFKLENBQUE7UUFMUyxDQUFYLEVBTUUsSUFORjtNQURBLENBRkY7SUFGTyxDQURYO0VBSkksQ0F6RE47RUEyRUEsSUFBQSxFQUFNLFNBQUE7V0FDSixPQUFPLENBQUMsU0FBUixDQUFrQjtNQUFDLEdBQUEsRUFBSyxHQUFHLENBQUMsSUFBVjtLQUFsQixFQUFtQyx1QkFBQSxHQUF3QixHQUFHLENBQUMsSUFBL0QsRUFBdUUsR0FBRyxDQUFDLElBQTNFO0VBREksQ0EzRU47RUE4RUEsR0FBQSxFQUFLLFNBQUMsQ0FBRDtJQUNILElBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFoQixLQUF5QixJQUE1QjthQUNFLEdBQUcsQ0FBQyxJQUFKLENBQVMsR0FBRyxDQUFDLFFBQWIsRUFERjtLQUFBLE1BQUE7YUFHRSxHQUFHLENBQUMsSUFBSixDQUFTLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQS9CLEVBSEY7O0VBREcsQ0E5RUwiLCJmaWxlIjoic3BhLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiXG5TcGEgPVxuXG4gIG9yaWdpbmFsOiBudWxsXG4gIHBhZ2U6IG51bGxcbiAgb3B0aW9uczpcbiAgICB3b3JrOiAnL3dvcmsvJ1xuICAgIHN0dWRpbzogJy9zdHVkaW8vJ1xuICAgIGNvbnRhY3Q6ICcvY29udGFjdC8nXG5cbiAgaTogLT5cbiAgICBjb25zb2xlLmxvZyAnU3BhLmkoKSdcbiAgICBTcGEuaGFuZGxlcnMoKVxuXG4gICAgU3BhLnBhZ2UgPSBTcGEub3JpZ2luYWwgPSBsb2NhdGlvbi5wYXRobmFtZVxuICAgIFNwYS5hY3RpdmF0ZSBTcGEucGFnZVxuXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgIyBtYWluIG1lbnVcbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IHVsID4gbGkgPiBhLCBoZWFkZXIgPiAuaW5uZXIgPiBhLmxvZ28nKS5vbiAnY2xpY2snLCBTcGEubWVudUhhbmRsZXJcblxuICAgICMgYmFjayBidXR0b25cbiAgICAkKHdpbmRvdykuYmluZCAncG9wc3RhdGUnLCBTcGEucG9wXG5cbiAgICAjIHdvcmsgdGlsZSBtZW51XG4gICAgJCgnI2NvbnRhaW5lcicpLm9uICdjbGljaycsICcucGFnZS53b3JrID4gLnRpbGVzID4gYS50aWxlLCAucGFnZS5kZXRhaWwgPiAuc3VibWVudSA+IGEnLCBTcGEudGlsZUhhbmRsZXJcblxuXG4gIHRpbGVIYW5kbGVyOiAoZSkgLT5cblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgcGFnZSA9ICQodGhpcykuYXR0ciAnaHJlZidcblxuICAgIHJldHVybiB0cnVlIGlmIHBhZ2UgaXMgdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRydWUgaWYgcGFnZSBpcyBsb2NhdGlvbi5wYXRobmFtZVxuXG4gICAgU3BhLmxvYWQgcGFnZSwgLT5cbiAgICAgIFNwYS5wdXNoKClcblxuICBtZW51SGFuZGxlcjogKGUpIC0+XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHBhZ2UgPSAkKHRoaXMpLmRhdGEgJ3BhZ2UnXG5cbiAgICByZXR1cm4gdHJ1ZSBpZiBwYWdlIGlzIHVuZGVmaW5lZFxuICAgIHJldHVybiB0cnVlIGlmIHBhZ2UgaXMgbG9jYXRpb24ucGF0aG5hbWVcblxuXG4gICAgU3BhLmxvYWQgcGFnZSwgLT5cbiAgICAgIFNwYS5wdXNoKClcblxuICBhY3RpdmF0ZTogLT5cbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiB1bCA+IGxpID4gYSdcbiAgICBmb3IgaywgdiBvZiBTcGEub3B0aW9uc1xuICAgICAgaWYgU3BhLnBhZ2UubWF0Y2godikgaXNudCBudWxsXG4gICAgICAgIF8ub24gXCJoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IHVsID4gbGkgPiBhLm9wdGlvbl8je2t9XCJcblxuICBsb2FkOiAocGFnZSwgY2IpIC0+XG5cbiAgICBfLm9uICcuc3Bpbm5lcidcbiAgICBcbiAgICAkLmdldCBwYWdlXG4gICAgICAuc3VjY2VzcyAocmVzdWx0KSAtPlxuICAgICAgICBodG1sID0gJChyZXN1bHQpLmZpbHRlcignI2NvbnRhaW5lcicpWzBdXG4gICAgICAgIFByZWltZyBodG1sLCAoY29tcGxldGUpIC0+XG4gICAgICAgICAgY29uc29sZS5sb2cgY29tcGxldGVcbiAgICAgICAgLCAoZG9uZSkgLT5cbiAgICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgICBfLm9mZiAnLnNwaW5uZXInXG4gICAgICAgICAgICAkKCcjY29udGFpbmVyJykuaHRtbCBodG1sXG4gICAgICAgICAgICBTcGEucGFnZSA9IHBhZ2VcbiAgICAgICAgICAgIGNiPygpXG4gICAgICAgICAgICBTcGEuYWN0aXZhdGUoKVxuICAgICAgICAgICwgMzAwMFxuXG4gIHB1c2g6IC0+XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUge3VybDogU3BhLnBhZ2V9LCBcIkRlc2lnbiBTYWtlIFN0dWRpbyAtICN7U3BhLnBhZ2V9XCIsIFNwYS5wYWdlXG4gICAgICAgIFxuICBwb3A6IChlKSAtPlxuICAgIGlmIGUub3JpZ2luYWxFdmVudC5zdGF0ZSBpcyBudWxsXG4gICAgICBTcGEubG9hZCBTcGEub3JpZ2luYWxcbiAgICBlbHNlXG4gICAgICBTcGEubG9hZCBlLm9yaWdpbmFsRXZlbnQuc3RhdGUudXJsXG5cbiJdfQ==
