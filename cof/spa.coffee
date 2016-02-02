Spa =

  i: ->

    console.log 'Spa.i()'

    Spa.get()

  get: ->

    $.get '/work/'
      .success (result) ->
        console.log($(result).filter('body').length)
        console.log($(result).filter('html').length)
        console.log($(result).filter('.container').length)
        console.log($(result).filter('.container')[0])
        console.log($(result).filter('.container').find('.page.work').length)
      .fail (result) ->
        console.log 'failure', result

    
