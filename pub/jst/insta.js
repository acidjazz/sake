var Insta;

Insta = {
  endpoint: 'https://api.instagram.com/v1/users/self/media/recent/',
  token: '1709913627.87976c3.0415bd97d8104df3af8110e57d5f1349',
  posts: 5,
  loaded: false,
  i: function() {
    console.log('Insta.i()');
    if (Insta.loaded !== true) {
      return Insta.load();
    }
  },
  load: function() {
    Loader.load(Insta.endpoint + "?access_token=" + Insta.token + "&callback=Insta.callback");
    return Insta.loaded = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLEtBQUEsR0FDRTtFQUFBLFFBQUEsRUFBVSx1REFBVjtFQUNBLEtBQUEsRUFBTyxxREFEUDtFQUVBLEtBQUEsRUFBTyxDQUZQO0VBR0EsTUFBQSxFQUFRLEtBSFI7RUFLQSxDQUFBLEVBQUcsU0FBQTtJQUVELE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWjtJQUNBLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBa0IsSUFBckI7YUFDRSxLQUFLLENBQUMsSUFBTixDQUFBLEVBREY7O0VBSEMsQ0FMSDtFQVdBLElBQUEsRUFBTSxTQUFBO0lBQ0osTUFBTSxDQUFDLElBQVAsQ0FBZSxLQUFLLENBQUMsUUFBUCxHQUFnQixnQkFBaEIsR0FBZ0MsS0FBSyxDQUFDLEtBQXRDLEdBQTRDLDBCQUExRDtXQUNBLEtBQUssQ0FBQyxNQUFOLEdBQWU7RUFGWCxDQVhOO0VBZUEsUUFBQSxFQUFVLFNBQUMsSUFBRDtBQUNSLFFBQUE7QUFBQTtBQUFBLFNBQUEscURBQUE7O01BQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLElBQW5CO01BQ0EsSUFBZSxLQUFBLEtBQVMsS0FBSyxDQUFDLEtBQTlCO0FBQUEsZUFBTyxLQUFQOztNQUNBLENBQUEsQ0FBRSxxQkFBRixDQUF3QixDQUFDLE1BQXpCLENBQWdDLGNBQUEsR0FFbkIsSUFBSSxDQUFDLElBRmMsR0FFVCxtREFGUyxHQUdoQixJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBSGhCLEdBR29CLDREQUhwQixHQUtMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FMTixHQUtZLG1DQUw1QztBQUhGO0VBRFEsQ0FmViIsImZpbGUiOiJpbnN0YS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlxuSW5zdGEgPVxuICBlbmRwb2ludDogJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi9tZWRpYS9yZWNlbnQvJ1xuICB0b2tlbjogJzE3MDk5MTM2MjcuODc5NzZjMy4wNDE1YmQ5N2Q4MTA0ZGYzYWY4MTEwZTU3ZDVmMTM0OSdcbiAgcG9zdHM6IDVcbiAgbG9hZGVkOiBmYWxzZVxuXG4gIGk6IC0+XG5cbiAgICBjb25zb2xlLmxvZyAnSW5zdGEuaSgpJ1xuICAgIGlmIEluc3RhLmxvYWRlZCBpc250IHRydWVcbiAgICAgIEluc3RhLmxvYWQoKVxuXG4gIGxvYWQ6IC0+XG4gICAgTG9hZGVyLmxvYWQgXCIje0luc3RhLmVuZHBvaW50fT9hY2Nlc3NfdG9rZW49I3tJbnN0YS50b2tlbn0mY2FsbGJhY2s9SW5zdGEuY2FsbGJhY2tcIlxuICAgIEluc3RhLmxvYWRlZCA9IHRydWVcblxuICBjYWxsYmFjazogKGpzb24pIC0+XG4gICAgZm9yIHBvc3QsIGluZGV4IGluIGpzb24uZGF0YVxuICAgICAgY29uc29sZS5sb2cgaW5kZXgsIHBvc3RcbiAgICAgIHJldHVybiB0cnVlIGlmIGluZGV4IGlzIEluc3RhLnBvc3RzXG4gICAgICAkKCcuaW5zdGFncmFtID4gLnBvc3RzJykuYXBwZW5kIFwiXCJcIlxuXG4gICAgICAgIDxhIGhyZWY9XCIje3Bvc3QubGlua31cIiB0YXJnZXQ9XCJfbmV3XCIgY2xhc3M9XCJwb3N0XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIje3Bvc3QuaW1hZ2VzLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsfVwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzXCI+I3twb3N0Lmxpa2VzLmNvdW50fSAmIzk4MjU7IDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG5cbiAgICAgIFwiXCJcIlxuXG4iXX0=
