var Insta;

Insta = {
  endpoint: 'https://api.instagram.com/v1/users/self/media/recent/',
  token: '264367793.55cd6c3.ae227ede2f5c48eaab95ca57ffc4c0f6',
  token: '1709913627.87976c3.0415bd97d8104df3af8110e57d5f1349',
  posts: 4,
  i: function() {
    console.log('Insta.i()');
    if (window.instagramLoaded !== true) {
      return Insta.load();
    }
  },
  load: function() {
    Loader.load(Insta.endpoint + "?access_token=" + Insta.token + "&callback=Insta.callback");
    return window.instagramLoaded = true;
  },
  callback: function(json) {
    var i, index, len, post, ref;
    ref = json.data;
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      post = ref[index];
      console.log(index, post);
      if (index === Insta.posts) {
        return true;
      }
      $('.instagram > .posts').append("\n<a href=\"" + post.link + "\" target=\"_new\" class=\"post\">\n  <img src=\"" + post.images.standard_resolution.url + "\"/>\n  <div class=\"details\">\n    <div class=\"likes\">" + post.likes.count + " &#9825; </div>\n  </div>\n</a>\n");
    }
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLEtBQUEsR0FDRTtFQUFBLFFBQUEsRUFBVSx1REFBVjtFQUNBLEtBQUEsRUFBTyxvREFEUDtFQUVBLEtBQUEsRUFBTyxxREFGUDtFQUdBLEtBQUEsRUFBTyxDQUhQO0VBS0EsQ0FBQSxFQUFHLFNBQUE7SUFFRCxPQUFPLENBQUMsR0FBUixDQUFZLFdBQVo7SUFDQSxJQUFHLE1BQU0sQ0FBQyxlQUFQLEtBQTRCLElBQS9CO2FBQ0UsS0FBSyxDQUFDLElBQU4sQ0FBQSxFQURGOztFQUhDLENBTEg7RUFXQSxJQUFBLEVBQU0sU0FBQTtJQUNKLE1BQU0sQ0FBQyxJQUFQLENBQWUsS0FBSyxDQUFDLFFBQVAsR0FBZ0IsZ0JBQWhCLEdBQWdDLEtBQUssQ0FBQyxLQUF0QyxHQUE0QywwQkFBMUQ7V0FDQSxNQUFNLENBQUMsZUFBUCxHQUF5QjtFQUZyQixDQVhOO0VBZUEsUUFBQSxFQUFVLFNBQUMsSUFBRDtBQUNSLFFBQUE7QUFBQTtBQUFBLFNBQUEscURBQUE7O01BQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLElBQW5CO01BQ0EsSUFBZSxLQUFBLEtBQVMsS0FBSyxDQUFDLEtBQTlCO0FBQUEsZUFBTyxLQUFQOztNQUNBLENBQUEsQ0FBRSxxQkFBRixDQUF3QixDQUFDLE1BQXpCLENBQWdDLGNBQUEsR0FFbkIsSUFBSSxDQUFDLElBRmMsR0FFVCxtREFGUyxHQUdoQixJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBSGhCLEdBR29CLDREQUhwQixHQUtMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FMTixHQUtZLG1DQUw1QztBQUhGO0VBRFEsQ0FmViIsImZpbGUiOiJpbnN0YS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlxuSW5zdGEgPVxuICBlbmRwb2ludDogJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi9tZWRpYS9yZWNlbnQvJ1xuICB0b2tlbjogJzI2NDM2Nzc5My41NWNkNmMzLmFlMjI3ZWRlMmY1YzQ4ZWFhYjk1Y2E1N2ZmYzRjMGY2J1xuICB0b2tlbjogJzE3MDk5MTM2MjcuODc5NzZjMy4wNDE1YmQ5N2Q4MTA0ZGYzYWY4MTEwZTU3ZDVmMTM0OSdcbiAgcG9zdHM6IDRcblxuICBpOiAtPlxuXG4gICAgY29uc29sZS5sb2cgJ0luc3RhLmkoKSdcbiAgICBpZiB3aW5kb3cuaW5zdGFncmFtTG9hZGVkIGlzbnQgdHJ1ZVxuICAgICAgSW5zdGEubG9hZCgpXG5cbiAgbG9hZDogLT5cbiAgICBMb2FkZXIubG9hZCBcIiN7SW5zdGEuZW5kcG9pbnR9P2FjY2Vzc190b2tlbj0je0luc3RhLnRva2VufSZjYWxsYmFjaz1JbnN0YS5jYWxsYmFja1wiXG4gICAgd2luZG93Lmluc3RhZ3JhbUxvYWRlZCA9IHRydWVcblxuICBjYWxsYmFjazogKGpzb24pIC0+XG4gICAgZm9yIHBvc3QsIGluZGV4IGluIGpzb24uZGF0YVxuICAgICAgY29uc29sZS5sb2cgaW5kZXgsIHBvc3RcbiAgICAgIHJldHVybiB0cnVlIGlmIGluZGV4IGlzIEluc3RhLnBvc3RzXG4gICAgICAkKCcuaW5zdGFncmFtID4gLnBvc3RzJykuYXBwZW5kIFwiXCJcIlxuXG4gICAgICAgIDxhIGhyZWY9XCIje3Bvc3QubGlua31cIiB0YXJnZXQ9XCJfbmV3XCIgY2xhc3M9XCJwb3N0XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIje3Bvc3QuaW1hZ2VzLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsfVwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzXCI+I3twb3N0Lmxpa2VzLmNvdW50fSAmIzk4MjU7IDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG5cbiAgICAgIFwiXCJcIlxuXG4iXX0=
