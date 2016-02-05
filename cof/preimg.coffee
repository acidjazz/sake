Preimg = (html, progress, complete) ->

  urls = []


  scrapeImg = (html) ->

    if !html instanceof jQuery
      html = $(html)

    $(html).find('img').map ->
      urls.push this.src

    $(html).find('div, a').map ->
      attr = $(this).css('backgroundImage')
      return true if attr.length is 0
      image = attr.substr 5, attr.length-7
      urls.push image if image isnt ''

    ###
    else
      imgRegex = new RegExp('<img.*?src="(.*?\/([^/"]*))".*?>', 'g')
      results = imgRegex.exec html
      while results isnt null
        results = imgRegex.exec html
        urls.push results[1] if results isnt null
    ###
    #
   load = ->

     if loaded is total then complete(true)

     images = []

     loaded = 0
     total = urls.length

     for url, i in urls
       images[i] = new Image()
       images[i].src = url
       console.log url
       images[i].onload = ->
         loaded++
         perc = Math.round(loaded/total*100)/100
         if loaded is total then complete(true) else progress(perc)

  scrapeImg html
  load()

  return true
      
