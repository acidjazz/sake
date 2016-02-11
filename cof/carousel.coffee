
Carousel =

  sliden: 1
  slides: 3

  i: ->

    Carousel.handlers()
    Carousel.slide 1
    _.off '.loader'

  handlers: ->
    $('.carousel > .nav > .arrow').on 'click', Carousel.arrowHandler
    $('.carousel > .nav > .dots > .dot').on 'click', Carousel.dotHandler

  arrowHandler: ->
    Carousel.arrow $(this).hasClass('right')

  dotHandler: ->

    Carousel.sliden = $(this).data 'dot'
    Carousel.slide $(this).data 'dot'

  arrow: (direction) ->
    if direction
      if Carousel.sliden is Carousel.slides
        Carousel.slide 1
      else
        Carousel.slide Carousel.sliden+1
    else
      if Carousel.sliden is 1
        Carousel.slide Carousel.slides
      else
        Carousel.slide Carousel.sliden-1

  slide: (num) ->

    Carousel.sliden = num

    _.off '.carousel > .slides > .slide'
    _.off '.carousel > .nav > .dots > .dot'
    _.on ".slides > .slide.slide#{Carousel.sliden}"
    _.on ".carousel > .nav > .dots > .dot#{Carousel.sliden}"

