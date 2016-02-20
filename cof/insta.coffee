
Insta =
  endpoint: 'https://api.instagram.com/v1/users/self/media/recent/'
  token: '1709913627.87976c3.0415bd97d8104df3af8110e57d5f1349'
  posts: 5
  loaded: false

  i: ->

    console.log 'Insta.i()'
    if Insta.loaded isnt true
      Insta.load()

  load: ->
    Loader.load "#{Insta.endpoint}?access_token=#{Insta.token}&callback=Insta.callback"
    Insta.loaded = true

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

