var Carousel;

Carousel = {
  sliden: 1,
  slides: 3,
  i: function() {
    console.log('Carousel.i()');
    Carousel.handlers();
    return setTimeout(function() {
      Carousel.slide(1);
      return _.off('.loader');
    }, 1200);
  },
  handlers: function() {
    $('.carousel > .nav > .arrow').on('click', Carousel.arrowHandler);
    return $('.carousel > .nav > .dots > .dot').on('click', Carousel.dotHandler);
  },
  arrowHandler: function() {
    return Carousel.arrow($(this).hasClass('right'));
  },
  dotHandler: function() {
    Carousel.sliden = $(this).data('dot');
    return Carousel.slide($(this).data('dot'));
  },
  arrow: function(direction) {
    if (direction) {
      if (Carousel.sliden === Carousel.slides) {
        return Carousel.slide(1);
      } else {
        return Carousel.slide(Carousel.sliden + 1);
      }
    } else {
      if (Carousel.sliden === 1) {
        return Carousel.slide(Carousel.slides);
      } else {
        return Carousel.slide(Carousel.sliden - 1);
      }
    }
  },
  slide: function(num) {
    Carousel.sliden = num;
    _.off('.carousel > .slides > .slide');
    _.off('.carousel > .nav > .dots > .dot');
    _.on(".slides > .slide.slide" + Carousel.sliden);
    return _.on(".carousel > .nav > .dots > .dot" + Carousel.sliden);
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLFFBQUEsR0FFRTtFQUFBLE1BQUEsRUFBUSxDQUFSO0VBQ0EsTUFBQSxFQUFRLENBRFI7RUFHQSxDQUFBLEVBQUcsU0FBQTtJQUVELE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjtJQUVBLFFBQVEsQ0FBQyxRQUFULENBQUE7V0FDQSxVQUFBLENBQVcsU0FBQTtNQUNULFFBQVEsQ0FBQyxLQUFULENBQWUsQ0FBZjthQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sU0FBTjtJQUZTLENBQVgsRUFHRSxJQUhGO0VBTEMsQ0FISDtFQWFBLFFBQUEsRUFBVSxTQUFBO0lBQ1IsQ0FBQSxDQUFFLDJCQUFGLENBQThCLENBQUMsRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMkMsUUFBUSxDQUFDLFlBQXBEO1dBQ0EsQ0FBQSxDQUFFLGlDQUFGLENBQW9DLENBQUMsRUFBckMsQ0FBd0MsT0FBeEMsRUFBaUQsUUFBUSxDQUFDLFVBQTFEO0VBRlEsQ0FiVjtFQWlCQSxZQUFBLEVBQWMsU0FBQTtXQUNaLFFBQVEsQ0FBQyxLQUFULENBQWUsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsT0FBakIsQ0FBZjtFQURZLENBakJkO0VBb0JBLFVBQUEsRUFBWSxTQUFBO0lBRVYsUUFBUSxDQUFDLE1BQVQsR0FBa0IsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFiO1dBQ2xCLFFBQVEsQ0FBQyxLQUFULENBQWUsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFiLENBQWY7RUFIVSxDQXBCWjtFQXlCQSxLQUFBLEVBQU8sU0FBQyxTQUFEO0lBQ0wsSUFBRyxTQUFIO01BQ0UsSUFBRyxRQUFRLENBQUMsTUFBVCxLQUFtQixRQUFRLENBQUMsTUFBL0I7ZUFDRSxRQUFRLENBQUMsS0FBVCxDQUFlLENBQWYsRUFERjtPQUFBLE1BQUE7ZUFHRSxRQUFRLENBQUMsS0FBVCxDQUFlLFFBQVEsQ0FBQyxNQUFULEdBQWdCLENBQS9CLEVBSEY7T0FERjtLQUFBLE1BQUE7TUFNRSxJQUFHLFFBQVEsQ0FBQyxNQUFULEtBQW1CLENBQXRCO2VBQ0UsUUFBUSxDQUFDLEtBQVQsQ0FBZSxRQUFRLENBQUMsTUFBeEIsRUFERjtPQUFBLE1BQUE7ZUFHRSxRQUFRLENBQUMsS0FBVCxDQUFlLFFBQVEsQ0FBQyxNQUFULEdBQWdCLENBQS9CLEVBSEY7T0FORjs7RUFESyxDQXpCUDtFQXFDQSxLQUFBLEVBQU8sU0FBQyxHQUFEO0lBRUwsUUFBUSxDQUFDLE1BQVQsR0FBa0I7SUFFbEIsQ0FBQyxDQUFDLEdBQUYsQ0FBTSw4QkFBTjtJQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0saUNBQU47SUFDQSxDQUFDLENBQUMsRUFBRixDQUFLLHdCQUFBLEdBQXlCLFFBQVEsQ0FBQyxNQUF2QztXQUNBLENBQUMsQ0FBQyxFQUFGLENBQUssaUNBQUEsR0FBa0MsUUFBUSxDQUFDLE1BQWhEO0VBUEssQ0FyQ1AiLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJcbkNhcm91c2VsID1cblxuICBzbGlkZW46IDFcbiAgc2xpZGVzOiAzXG5cbiAgaTogLT5cblxuICAgIGNvbnNvbGUubG9nICdDYXJvdXNlbC5pKCknXG5cbiAgICBDYXJvdXNlbC5oYW5kbGVycygpXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgQ2Fyb3VzZWwuc2xpZGUgMVxuICAgICAgXy5vZmYgJy5sb2FkZXInXG4gICAgLCAxMjAwXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnLmNhcm91c2VsID4gLm5hdiA+IC5hcnJvdycpLm9uICdjbGljaycsIENhcm91c2VsLmFycm93SGFuZGxlclxuICAgICQoJy5jYXJvdXNlbCA+IC5uYXYgPiAuZG90cyA+IC5kb3QnKS5vbiAnY2xpY2snLCBDYXJvdXNlbC5kb3RIYW5kbGVyXG5cbiAgYXJyb3dIYW5kbGVyOiAtPlxuICAgIENhcm91c2VsLmFycm93ICQodGhpcykuaGFzQ2xhc3MoJ3JpZ2h0JylcblxuICBkb3RIYW5kbGVyOiAtPlxuXG4gICAgQ2Fyb3VzZWwuc2xpZGVuID0gJCh0aGlzKS5kYXRhICdkb3QnXG4gICAgQ2Fyb3VzZWwuc2xpZGUgJCh0aGlzKS5kYXRhICdkb3QnXG5cbiAgYXJyb3c6IChkaXJlY3Rpb24pIC0+XG4gICAgaWYgZGlyZWN0aW9uXG4gICAgICBpZiBDYXJvdXNlbC5zbGlkZW4gaXMgQ2Fyb3VzZWwuc2xpZGVzXG4gICAgICAgIENhcm91c2VsLnNsaWRlIDFcbiAgICAgIGVsc2VcbiAgICAgICAgQ2Fyb3VzZWwuc2xpZGUgQ2Fyb3VzZWwuc2xpZGVuKzFcbiAgICBlbHNlXG4gICAgICBpZiBDYXJvdXNlbC5zbGlkZW4gaXMgMVxuICAgICAgICBDYXJvdXNlbC5zbGlkZSBDYXJvdXNlbC5zbGlkZXNcbiAgICAgIGVsc2VcbiAgICAgICAgQ2Fyb3VzZWwuc2xpZGUgQ2Fyb3VzZWwuc2xpZGVuLTFcblxuICBzbGlkZTogKG51bSkgLT5cblxuICAgIENhcm91c2VsLnNsaWRlbiA9IG51bVxuXG4gICAgXy5vZmYgJy5jYXJvdXNlbCA+IC5zbGlkZXMgPiAuc2xpZGUnXG4gICAgXy5vZmYgJy5jYXJvdXNlbCA+IC5uYXYgPiAuZG90cyA+IC5kb3QnXG4gICAgXy5vbiBcIi5zbGlkZXMgPiAuc2xpZGUuc2xpZGUje0Nhcm91c2VsLnNsaWRlbn1cIlxuICAgIF8ub24gXCIuY2Fyb3VzZWwgPiAubmF2ID4gLmRvdHMgPiAuZG90I3tDYXJvdXNlbC5zbGlkZW59XCJcblxuXG5cbiJdfQ==
