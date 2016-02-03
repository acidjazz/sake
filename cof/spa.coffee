
Spa =

  original: null
  page: null
  options:
    work: '/work/'
    studio: '/studio/'
    contact: '/contact/'

  i: ->
    console.log 'Spa.i()'
    Spa.handlers()

    Spa.page = Spa.original = location.pathname
    Spa.activate Spa.page

  handlers: ->

    $('header > .inner > .menu > ul > li > a, header > .inner > a.logo').on 'click', Spa.menuHandler

    $(window).bind 'popstate', Spa.pop

  menuHandler: (e) ->

    e.preventDefault()

    page = $(this).data 'page'

    return true if page is undefined
    return true if page is location.pathname


    Spa.load page, ->
      Spa.push()

  activate: ->
    _.off 'header > .inner > .menu > ul > li > a'
    for k, v of Spa.options
      if v is Spa.page
        _.on "header > .inner > .menu > ul > li > a.option_#{k}"

  load: (page, cb) ->
    
    $.get page
      .success (result) ->
        html = $(result).filter('#container')[0]
        $('#container').html html
        Spa.page = page
        cb?()
        Spa.activate()

  push: ->
    history.pushState {url: Spa.page}, "Design Sake Studio - #{Spa.page}", Spa.page
        
  pop: (e) ->
    if e.originalEvent.state is null
      Spa.load Spa.original
    else
      Spa.load e.originalEvent.state.url

