var Carousel;

Carousel = {
  sliden: 1,
  slides: 3,
  i: function() {
    Carousel.handlers();
    Carousel.slide(1);
    return _.off('.loader');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLFFBQUEsR0FFRTtFQUFBLE1BQUEsRUFBUSxDQUFSO0VBQ0EsTUFBQSxFQUFRLENBRFI7RUFHQSxDQUFBLEVBQUcsU0FBQTtJQUNELFFBQVEsQ0FBQyxRQUFULENBQUE7SUFDQSxRQUFRLENBQUMsS0FBVCxDQUFlLENBQWY7V0FDQSxDQUFDLENBQUMsR0FBRixDQUFNLFNBQU47RUFIQyxDQUhIO0VBUUEsUUFBQSxFQUFVLFNBQUE7SUFDUixDQUFBLENBQUUsMkJBQUYsQ0FBOEIsQ0FBQyxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxRQUFRLENBQUMsWUFBcEQ7V0FDQSxDQUFBLENBQUUsaUNBQUYsQ0FBb0MsQ0FBQyxFQUFyQyxDQUF3QyxPQUF4QyxFQUFpRCxRQUFRLENBQUMsVUFBMUQ7RUFGUSxDQVJWO0VBWUEsWUFBQSxFQUFjLFNBQUE7V0FDWixRQUFRLENBQUMsS0FBVCxDQUFlLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxRQUFSLENBQWlCLE9BQWpCLENBQWY7RUFEWSxDQVpkO0VBZUEsVUFBQSxFQUFZLFNBQUE7SUFFVixRQUFRLENBQUMsTUFBVCxHQUFrQixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLEtBQWI7V0FDbEIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLEtBQWIsQ0FBZjtFQUhVLENBZlo7RUFvQkEsS0FBQSxFQUFPLFNBQUMsU0FBRDtJQUNMLElBQUcsU0FBSDtNQUNFLElBQUcsUUFBUSxDQUFDLE1BQVQsS0FBbUIsUUFBUSxDQUFDLE1BQS9CO2VBQ0UsUUFBUSxDQUFDLEtBQVQsQ0FBZSxDQUFmLEVBREY7T0FBQSxNQUFBO2VBR0UsUUFBUSxDQUFDLEtBQVQsQ0FBZSxRQUFRLENBQUMsTUFBVCxHQUFnQixDQUEvQixFQUhGO09BREY7S0FBQSxNQUFBO01BTUUsSUFBRyxRQUFRLENBQUMsTUFBVCxLQUFtQixDQUF0QjtlQUNFLFFBQVEsQ0FBQyxLQUFULENBQWUsUUFBUSxDQUFDLE1BQXhCLEVBREY7T0FBQSxNQUFBO2VBR0UsUUFBUSxDQUFDLEtBQVQsQ0FBZSxRQUFRLENBQUMsTUFBVCxHQUFnQixDQUEvQixFQUhGO09BTkY7O0VBREssQ0FwQlA7RUFnQ0EsS0FBQSxFQUFPLFNBQUMsR0FBRDtJQUVMLFFBQVEsQ0FBQyxNQUFULEdBQWtCO0lBRWxCLENBQUMsQ0FBQyxHQUFGLENBQU0sOEJBQU47SUFDQSxDQUFDLENBQUMsR0FBRixDQUFNLGlDQUFOO0lBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyx3QkFBQSxHQUF5QixRQUFRLENBQUMsTUFBdkM7V0FDQSxDQUFDLENBQUMsRUFBRixDQUFLLGlDQUFBLEdBQWtDLFFBQVEsQ0FBQyxNQUFoRDtFQVBLLENBaENQIiwiZmlsZSI6ImNhcm91c2VsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiXG5DYXJvdXNlbCA9XG5cbiAgc2xpZGVuOiAxXG4gIHNsaWRlczogM1xuXG4gIGk6IC0+XG4gICAgQ2Fyb3VzZWwuaGFuZGxlcnMoKVxuICAgIENhcm91c2VsLnNsaWRlIDFcbiAgICBfLm9mZiAnLmxvYWRlcidcblxuICBoYW5kbGVyczogLT5cbiAgICAkKCcuY2Fyb3VzZWwgPiAubmF2ID4gLmFycm93Jykub24gJ2NsaWNrJywgQ2Fyb3VzZWwuYXJyb3dIYW5kbGVyXG4gICAgJCgnLmNhcm91c2VsID4gLm5hdiA+IC5kb3RzID4gLmRvdCcpLm9uICdjbGljaycsIENhcm91c2VsLmRvdEhhbmRsZXJcblxuICBhcnJvd0hhbmRsZXI6IC0+XG4gICAgQ2Fyb3VzZWwuYXJyb3cgJCh0aGlzKS5oYXNDbGFzcygncmlnaHQnKVxuXG4gIGRvdEhhbmRsZXI6IC0+XG5cbiAgICBDYXJvdXNlbC5zbGlkZW4gPSAkKHRoaXMpLmRhdGEgJ2RvdCdcbiAgICBDYXJvdXNlbC5zbGlkZSAkKHRoaXMpLmRhdGEgJ2RvdCdcblxuICBhcnJvdzogKGRpcmVjdGlvbikgLT5cbiAgICBpZiBkaXJlY3Rpb25cbiAgICAgIGlmIENhcm91c2VsLnNsaWRlbiBpcyBDYXJvdXNlbC5zbGlkZXNcbiAgICAgICAgQ2Fyb3VzZWwuc2xpZGUgMVxuICAgICAgZWxzZVxuICAgICAgICBDYXJvdXNlbC5zbGlkZSBDYXJvdXNlbC5zbGlkZW4rMVxuICAgIGVsc2VcbiAgICAgIGlmIENhcm91c2VsLnNsaWRlbiBpcyAxXG4gICAgICAgIENhcm91c2VsLnNsaWRlIENhcm91c2VsLnNsaWRlc1xuICAgICAgZWxzZVxuICAgICAgICBDYXJvdXNlbC5zbGlkZSBDYXJvdXNlbC5zbGlkZW4tMVxuXG4gIHNsaWRlOiAobnVtKSAtPlxuXG4gICAgQ2Fyb3VzZWwuc2xpZGVuID0gbnVtXG5cbiAgICBfLm9mZiAnLmNhcm91c2VsID4gLnNsaWRlcyA+IC5zbGlkZSdcbiAgICBfLm9mZiAnLmNhcm91c2VsID4gLm5hdiA+IC5kb3RzID4gLmRvdCdcbiAgICBfLm9uIFwiLnNsaWRlcyA+IC5zbGlkZS5zbGlkZSN7Q2Fyb3VzZWwuc2xpZGVufVwiXG4gICAgXy5vbiBcIi5jYXJvdXNlbCA+IC5uYXYgPiAuZG90cyA+IC5kb3Qje0Nhcm91c2VsLnNsaWRlbn1cIlxuIl19
