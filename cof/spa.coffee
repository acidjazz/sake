
Spa =

  instagram: false
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

    Preimg $('#container > #inner'), (complete) ->
      console.log "#{complete*100}%"
      $('.spinner > .complete').css 'height', "#{complete*100}%"
    , (done) ->
      $('.spinner > .complete').css 'height', '100%'
      setTimeout ->
        _.off '.spinner'
        $('.spinner > .complete').css 'height', '0%'
        _.on '#container > #inner'
      , 1000

  handlers: ->

    # main menu
    $('header > .inner > .menu > ul > li > a, header > .inner > a.logo').on 'click', Spa.menuHandler

    # back button
    $(window).bind 'popstate', Spa.pop

    # work tile menu
    $('#container > #inner').on 'click', '.page.work > .tiles > a.tile', Spa.tileHandler
    # work sub menu
    $('#container > #inner').on 'click', '.page.detail > .submenu > a', Spa.submenuHandler


  tileHandler: (e) ->

    e.preventDefault()

    page = $(this).attr 'href'

    return true if page is undefined
    return true if page is location.pathname

    Spa.load page, ->
      Spa.push()

  submenuHandler: (e) ->

    e.preventDefault()

    page = $(this).attr 'href'

    return true if page is undefined
    return true if page is location.pathname

    _.on '.spinner'
    _.off '.submenu a'
    _.on ".submenu a.item_#{page.replace('work', '').replace(/\//g, '')}"

    Spa.load page, '.details', '#container > #inner .details', ->
      Spa.push()
    
  menuHandler: (e) ->

    e.preventDefault()

    page = $(this).data 'page'

    return true if page is undefined
    return true if page is location.pathname

    Spa.load page, '#inner', '#container > #inner', ->
      Spa.push()

  activate: ->
    _.off 'header > .inner > .menu > ul > li > a'
    for k, v of Spa.options
      if Spa.page.match(v) isnt null
        _.on "header > .inner > .menu > ul > li > a.option_#{k}"

  load: (page, find, replace, cb) ->

    _.on '.spinner'
    
    $.get page
      .success (result) ->
        html = $(result).filter('#container').find(find)
        Preimg html, (complete) ->
          $('.spinner > .complete').css 'height', "#{complete*100}%"
          console.log complete
        , (done) ->
          console.log 'Pre.load() called Preimg.done()'
          $('.spinner > .complete').css 'height', '100%'
          setTimeout ->
            _.off '.spinner'
            $('.spinner > .complete').css 'height', '0%'
            $(replace).replaceWith html
            _.on '#container > #inner'
            Spa.page = page
            cb?()
            Spa.activate()
          , 1000

  push: ->
    history.pushState {url: Spa.page}, "Design Sake Studio - #{Spa.page}", Spa.page
        
  pop: (e) ->
    if e.originalEvent.state is null
      Spa.load Spa.original
    else
      Spa.load e.originalEvent.state.url

