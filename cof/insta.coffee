
Insta =
  endpoint: 'https://api.instagram.com/v1/users/self/media/recent/'
  token: '264367793.55cd6c3.ae227ede2f5c48eaab95ca57ffc4c0f6'
  token: '1709913627.87976c3.0415bd97d8104df3af8110e57d5f1349'
  posts: 4

  i: ->

    console.log 'Insta.i()'
    if window.instagramLoaded isnt true
      Insta.load()

  load: ->
    Loader.load "#{Insta.endpoint}?access_token=#{Insta.token}&callback=Insta.callback"
    window.instagramLoaded = true

  callback: (json) ->
    for post, index in json.data
      console.log index, post
      return true if index is Insta.posts
      $('.instagram > .posts').append """

        <a href="#{post.link}" target="_new" class="post">
          <img src="#{post.images.standard_resolution.url}"/>
          <div class="details">
            <div class="likes">#{post.likes.count} &#9825; </div>
          </div>
        </a>

      """

