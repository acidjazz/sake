var Spa;

Spa = {
  i: function() {
    console.log('Spa.i()');
    return Spa.get();
  },
  get: function() {
    return $.get('/work/').success(function(result) {
      console.log($(result).filter('body').length);
      console.log($(result).filter('html').length);
      console.log($(result).filter('.container').length);
      console.log($(result).filter('.container')[0]);
      return console.log($(result).filter('.container').find('.page.work').length);
    }).fail(function(result) {
      return console.log('failure', result);
    });
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxHQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtJQUVELE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWjtXQUVBLEdBQUcsQ0FBQyxHQUFKLENBQUE7RUFKQyxDQUFIO0VBTUEsR0FBQSxFQUFLLFNBQUE7V0FFSCxDQUFDLENBQUMsR0FBRixDQUFNLFFBQU4sQ0FDRSxDQUFDLE9BREgsQ0FDVyxTQUFDLE1BQUQ7TUFDUCxPQUFPLENBQUMsR0FBUixDQUFZLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLE1BQWpCLENBQXdCLENBQUMsTUFBckM7TUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLE1BQWpCLENBQXdCLENBQUMsTUFBckM7TUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLFlBQWpCLENBQThCLENBQUMsTUFBM0M7TUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLFlBQWpCLENBQStCLENBQUEsQ0FBQSxDQUEzQzthQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsWUFBakIsQ0FBOEIsQ0FBQyxJQUEvQixDQUFvQyxZQUFwQyxDQUFpRCxDQUFDLE1BQTlEO0lBTE8sQ0FEWCxDQU9FLENBQUMsSUFQSCxDQU9RLFNBQUMsTUFBRDthQUNKLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUF1QixNQUF2QjtJQURJLENBUFI7RUFGRyxDQU5MIiwiZmlsZSI6InNwYS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlNwYSA9XG5cbiAgaTogLT5cblxuICAgIGNvbnNvbGUubG9nICdTcGEuaSgpJ1xuXG4gICAgU3BhLmdldCgpXG5cbiAgZ2V0OiAtPlxuXG4gICAgJC5nZXQgJy93b3JrLydcbiAgICAgIC5zdWNjZXNzIChyZXN1bHQpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nKCQocmVzdWx0KS5maWx0ZXIoJ2JvZHknKS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKCQocmVzdWx0KS5maWx0ZXIoJ2h0bWwnKS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKCQocmVzdWx0KS5maWx0ZXIoJy5jb250YWluZXInKS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKCQocmVzdWx0KS5maWx0ZXIoJy5jb250YWluZXInKVswXSlcbiAgICAgICAgY29uc29sZS5sb2coJChyZXN1bHQpLmZpbHRlcignLmNvbnRhaW5lcicpLmZpbmQoJy5wYWdlLndvcmsnKS5sZW5ndGgpXG4gICAgICAuZmFpbCAocmVzdWx0KSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZmFpbHVyZScsIHJlc3VsdFxuXG4gICAgXG4iXX0=
