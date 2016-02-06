var Insta;

Insta = {
  endpoint: 'https://api.instagram.com/v1/users/self/media/recent/',
  token: '264367793.55cd6c3.ae227ede2f5c48eaab95ca57ffc4c0f6',
  token: '1709913627.87976c3.0415bd97d8104df3af8110e57d5f1349',
  posts: 4,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLEtBQUEsR0FDRTtFQUFBLFFBQUEsRUFBVSx1REFBVjtFQUNBLEtBQUEsRUFBTyxvREFEUDtFQUVBLEtBQUEsRUFBTyxxREFGUDtFQUdBLEtBQUEsRUFBTyxDQUhQO0VBSUEsTUFBQSxFQUFRLEtBSlI7RUFNQSxDQUFBLEVBQUcsU0FBQTtJQUVELE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWjtJQUNBLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBa0IsSUFBckI7YUFDRSxLQUFLLENBQUMsSUFBTixDQUFBLEVBREY7O0VBSEMsQ0FOSDtFQVlBLElBQUEsRUFBTSxTQUFBO0lBQ0osTUFBTSxDQUFDLElBQVAsQ0FBZSxLQUFLLENBQUMsUUFBUCxHQUFnQixnQkFBaEIsR0FBZ0MsS0FBSyxDQUFDLEtBQXRDLEdBQTRDLDBCQUExRDtXQUNBLEtBQUssQ0FBQyxNQUFOLEdBQWU7RUFGWCxDQVpOO0VBZ0JBLFFBQUEsRUFBVSxTQUFDLElBQUQ7QUFDUixRQUFBO0FBQUE7QUFBQSxTQUFBLHFEQUFBOztNQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWixFQUFtQixJQUFuQjtNQUNBLElBQWUsS0FBQSxLQUFTLEtBQUssQ0FBQyxLQUE5QjtBQUFBLGVBQU8sS0FBUDs7TUFDQSxDQUFBLENBQUUscUJBQUYsQ0FBd0IsQ0FBQyxNQUF6QixDQUFnQyxjQUFBLEdBRW5CLElBQUksQ0FBQyxJQUZjLEdBRVQsbURBRlMsR0FHaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUhoQixHQUdvQiw0REFIcEIsR0FLTCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBTE4sR0FLWSxtQ0FMNUM7QUFIRjtFQURRLENBaEJWIiwiZmlsZSI6Imluc3RhLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiXG5JbnN0YSA9XG4gIGVuZHBvaW50OiAnaHR0cHM6Ly9hcGkuaW5zdGFncmFtLmNvbS92MS91c2Vycy9zZWxmL21lZGlhL3JlY2VudC8nXG4gIHRva2VuOiAnMjY0MzY3NzkzLjU1Y2Q2YzMuYWUyMjdlZGUyZjVjNDhlYWFiOTVjYTU3ZmZjNGMwZjYnXG4gIHRva2VuOiAnMTcwOTkxMzYyNy44Nzk3NmMzLjA0MTViZDk3ZDgxMDRkZjNhZjgxMTBlNTdkNWYxMzQ5J1xuICBwb3N0czogNFxuICBsb2FkZWQ6IGZhbHNlXG5cbiAgaTogLT5cblxuICAgIGNvbnNvbGUubG9nICdJbnN0YS5pKCknXG4gICAgaWYgSW5zdGEubG9hZGVkIGlzbnQgdHJ1ZVxuICAgICAgSW5zdGEubG9hZCgpXG5cbiAgbG9hZDogLT5cbiAgICBMb2FkZXIubG9hZCBcIiN7SW5zdGEuZW5kcG9pbnR9P2FjY2Vzc190b2tlbj0je0luc3RhLnRva2VufSZjYWxsYmFjaz1JbnN0YS5jYWxsYmFja1wiXG4gICAgSW5zdGEubG9hZGVkID0gdHJ1ZVxuXG4gIGNhbGxiYWNrOiAoanNvbikgLT5cbiAgICBmb3IgcG9zdCwgaW5kZXggaW4ganNvbi5kYXRhXG4gICAgICBjb25zb2xlLmxvZyBpbmRleCwgcG9zdFxuICAgICAgcmV0dXJuIHRydWUgaWYgaW5kZXggaXMgSW5zdGEucG9zdHNcbiAgICAgICQoJy5pbnN0YWdyYW0gPiAucG9zdHMnKS5hcHBlbmQgXCJcIlwiXG5cbiAgICAgICAgPGEgaHJlZj1cIiN7cG9zdC5saW5rfVwiIHRhcmdldD1cIl9uZXdcIiBjbGFzcz1cInBvc3RcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiN7cG9zdC5pbWFnZXMuc3RhbmRhcmRfcmVzb2x1dGlvbi51cmx9XCIvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXNcIj4je3Bvc3QubGlrZXMuY291bnR9ICYjOTgyNTsgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cblxuICAgICAgXCJcIlwiXG5cbiJdfQ==
