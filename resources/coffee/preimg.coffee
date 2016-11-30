Preimg = (html, progress, complete) ->

  urls = []


  scrapeImg = (html) ->

    if !html instanceof jQuery
      html = $(html)

    $(html).find('img').map ->
      urls.push this.src

    $(html).find('div, a').map ->
      attr = $(this).css('backgroundImage')
      return true if attr.length is 0 or attr is 'none'
      image = attr.replace('url(', '').replace(')', '').replace(/"/g, '')
      urls.push image if image isnt ''

   load = ->

     loaded = 0
     total = urls.length

     if loaded is total then complete(true)

     images = []

     for url, i in urls
       images[i] = new Image()
       images[i].src = url
       images[i].onload = (e) ->
         loaded++
         perc = Math.round(loaded/total*100)/100
         if loaded is total then complete(true) else progress(perc)

  scrapeImg html
  load()

  return true
      
