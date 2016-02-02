var Spa;

Spa = {
  i: function() {
    console.log('Spa.i()');
    return Spa.get();
  },
  get: function() {
    return $.get('/work/').success(function(result) {
      console.log($(result).length);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxHQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtJQUVELE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWjtXQUVBLEdBQUcsQ0FBQyxHQUFKLENBQUE7RUFKQyxDQUFIO0VBTUEsR0FBQSxFQUFLLFNBQUE7V0FFSCxDQUFDLENBQUMsR0FBRixDQUFNLFFBQU4sQ0FDRSxDQUFDLE9BREgsQ0FDVyxTQUFDLE1BQUQ7TUFDUCxPQUFPLENBQUMsR0FBUixDQUFZLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUF0QjtNQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsTUFBakIsQ0FBd0IsQ0FBQyxNQUFyQztNQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsTUFBakIsQ0FBd0IsQ0FBQyxNQUFyQztNQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsWUFBakIsQ0FBOEIsQ0FBQyxNQUEzQztNQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsWUFBakIsQ0FBK0IsQ0FBQSxDQUFBLENBQTNDO2FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsTUFBVixDQUFpQixZQUFqQixDQUE4QixDQUFDLElBQS9CLENBQW9DLFlBQXBDLENBQWlELENBQUMsTUFBOUQ7SUFOTyxDQURYLENBUUUsQ0FBQyxJQVJILENBUVEsU0FBQyxNQUFEO2FBQ0osT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLE1BQXZCO0lBREksQ0FSUjtFQUZHLENBTkwiLCJmaWxlIjoic3BhLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiU3BhID1cblxuICBpOiAtPlxuXG4gICAgY29uc29sZS5sb2cgJ1NwYS5pKCknXG5cbiAgICBTcGEuZ2V0KClcblxuICBnZXQ6IC0+XG5cbiAgICAkLmdldCAnL3dvcmsvJ1xuICAgICAgLnN1Y2Nlc3MgKHJlc3VsdCkgLT5cbiAgICAgICAgY29uc29sZS5sb2coJChyZXN1bHQpLmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2coJChyZXN1bHQpLmZpbHRlcignYm9keScpLmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2coJChyZXN1bHQpLmZpbHRlcignaHRtbCcpLmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2coJChyZXN1bHQpLmZpbHRlcignLmNvbnRhaW5lcicpLmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2coJChyZXN1bHQpLmZpbHRlcignLmNvbnRhaW5lcicpWzBdKVxuICAgICAgICBjb25zb2xlLmxvZygkKHJlc3VsdCkuZmlsdGVyKCcuY29udGFpbmVyJykuZmluZCgnLnBhZ2Uud29yaycpLmxlbmd0aClcbiAgICAgIC5mYWlsIChyZXN1bHQpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdmYWlsdXJlJywgcmVzdWx0XG5cbiAgICBcbiJdfQ==
