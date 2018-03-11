<template lang="pug">
.page.studio
  .sidebar.sidebar_desktop
    .sideimage
    .largetext transforming big ideas into stand out design
  .main
    .title DESIGNSAKE STUDIO IS A SAN FRANCISCO BASED STRATEGIC DESIGN AGENCY. WE TRANSFORM BIG IDEAS INTO STAND OUT DESIGN.

    .subtitle .WHY DESIGNSAKE.
    p PUT SIMPLY: BECAUSE WE CARE. WE MAKE YOUR BUSINESS OUR BUSINESS. IT IS OUR RESPONSIBILITY TO UNDERSTAND, EXPAND, AND ENHANCE YOUR VISION. TOGETHER, WE WILL SOLVE PROBLEMS. PERSEVERANCE AND PASSION LEAD THE WAY. WE WILL BUILD EXPERIENCES THAT FOSTER CONNECTION, SPARKING CURIOSITY AND MAKING MOMENTS INTO MEMORIES. SIDE BY SIDE WE WILL DESIGN BUSINESSES, PRODUCTS, AND SERVICES THAT CREATE VALUE. TO WORK WITH US, YOU MUST GET COMFORTABLE WITH THE UNCOMFORTABLE. THEREIN LIES GROWTH, OPPORTUNITY, AND CHANGE. LET’S FORGE THE UNKNOWN, TOGETHER.

    .subtitle .The company you keep.
    p The values we hold as individuals are reflected by the brands we let into our lives. This is why we work with our clients to translate their core values into meaningful strategy.

    .subtitle .Tangible experiences that build trust.
    p We create tangible experiences enriched with sentiments and signals; no gesture is too big or small to communicate your message. We work with you to design opportunities that deliver on your promise time and time again.

    .subtitle .Designed to Align.
    p From identities to packaging,we design with research and overall strategy in mind. We manifest your vision into intentional visual narratives that reflect an in-depth understanding of your brand at its very best.

    .subtitle .Better Together.
    p We are deeply devoted to our clients and know our best work comes from working together. Whether you’re a fresh startup or an established company with years of experience under your belt, we cultivate teams and processes to deliver exactly what you need. We will be with you every step of the way.

  .sidebar.sidebar_mobile
    .sideimage
    .largetext transforming big ideas into stand out design
  .clear

  .bottombar

    .listing 

      .subtitle .SELECT LIST OF CLIENTS.
      ul
        li Sephora
        li Benefit Cosmetics
        li Nude Skincare
        li Credo Beauty
        li Ayla Beauty
        li Volition Beauty
        li TopShop
        li Feelunique
        li Sufferfest Beer Co.
        li Brown Estate
        li The Wine Group
        li Full Sun
        li Delbarr Co.
        li Create & Cultivate
        li Gold PR & Social Media
        li Daffodil Digital
        li El Destilado
        li catherine kwong design
        li Intuit QuickBooks

    .listing

      .subtitle .SERVICES.
      ul
        li BRAND IDENTITY
        li PACKAGING
        li PRINT
        li ENVIRONMENTS
        li BRAND STRATEGY
        li COPYWRITING
        li NAMING
        li SOCIAL MEDIA
        li PRODUCT DEVELOPMENT
        li WEB DESIGN + DEVELOPMENT

    //.listing

      .subtitle .PRESS + INTERVIEWS.

      ul
        li: a(href='http://www.bunchmag.com/storiess/failure-doesnt-mean-what-you-think',target='_new') bunch magazine
        li: a(href='http://www.createcultivate.com/blog/designing-an-on-brand-and-on-point-website',target='_new') create and cultivate

    .clear

  .tiles
    .tile.tile_office1
    .clear
  .bio 
    .picture
    .copys
      .subtitle .behind the studio.
      .copy
        p Danielle McWaters is a designer with over 9 years of experience under her belt. She started her creative career as a photographer then transitioned into graphic design where she has since worked with big and small brands on branding, packaging, and global advertising campaigns. In 2014, she started her own boutique design studio, Designsake Studio, based in San Francisco.
        p Danielle is a believer of design and its ability to create new connections and lasting impressions. It drives her to create things that are not only authentic, but that matter.
        p When she isn’t designing, shes’s jammin’ out to <i>The Very Best of Daryl Hall & John Oates</i>, tasting the latest pizza SF has to offer, or on a plane adventuring the world with her husband.
</template>

<style lang="stylus">
@import '../assets/stylus/guide/includes/*'

.page.studio, .page.work
  background-color transparent
  padding 30px 0 0 0
  > .sidebar
    float right
    width 364px
    min-height 600px
    margin 0 0 30px 30px
    &.sidebar_mobile
      display none
    &.sidebar_desktop
      display block
    > .listing
      > .subtitle
        padding 0 0 10px 0
        text-transform uppercase
      > ul
        margin 0
        padding 0 0 20px 5px
        list-style-type none
        > li
          font-copy3()
          margin 0
          padding 0
          color grey1
          text-transform uppercase
          width auto
          > a
            color grey1
            display block
            font-copy3()
            text-decoration underline
            &:hover
              color gold1
    > .listing:nth-child(2) > ul
      columns 1




    > .sideimage
      width 364px
      height 525px
      background-image url('/images/tiles/studio/Office_364x525px_2.jpg')
      background-size contain
      float right

    > .largetext
      font-h4()
      float right
      text-transform uppercase
      color gold1
      text-align left
      letter-spacing 3px
      padding 30px 0 0 0

  > .bottombar
    padding 30px 0
    > .listing
      float left
      width 50% 
      > .subtitle
        padding 0 0 10px 0
        text-transform uppercase
      > ul
        margin 0
        padding 0 0 20px 5px
        list-style-type none
        columns 2
        > li
          font-copy3()
          margin 0
          padding 0
          color grey1
          text-transform uppercase
          width auto
          > a
            color grey1
            display block
            font-copy3()
            text-decoration underline
            &:hover
              color gold1
    > .listing:nth-child(2) > ul
      columns 1

  > .main
    border-bottom 1px solid blue1
    height 780px
    > .title
      text-align left
      font-h5()
      margin 0 0 30px 0
    > .subtitle
      text-transform uppercase
    > p
      font-copy3()
      color grey1
      margin-bottom 20px
      text-transform uppercase

  > .tiles
    margin 30px 0
    padding 0 0 10px 0

    > .tile
      background-size contain
      float left
      &.tile_office1
        width 1079px
        height 525px
        background-image url('/images/tiles/studio/Studio_1079x525px_2.jpg')
  > .bio
    margin 60px 0 120px 0
    > .picture
      float left
      width 416px
      height 477px
      background-image url('/images/danielle_mcwaters.jpg')
      background-size cover
    > .copys
      margin 0 0 0 550px
      padding 60px 0 0 0
      width 400px
      > .subtitle
        text-transform uppercase
      > .copy
        font-copy3()
        color grey1
        text-transform uppercase

@media all and (min-width: 1px) and (max-width: 1000px)
  .page.studio
    padding 0 0 30px 0
    > .sidebar
      float none
      width auto
      margin 0 0 30px 0
      &.sidebar_mobile
        display block
      &.sidebar_desktop
        display none
      > .sideimage
        width 100%
        background-size cover
        height 600px
        float none
      > .largetext
        margin 0 0 30px 0
    > .main
      height auto
      padding 0 0 30px 0
    > .bottombar
      > .listing
        float none
        width auto
    > .title
      font-h3()
    > .main
      margin 10px
    > .bio
      margin 30px 0 30px 0
      > .picture
        float none
        width 100%
      > .copys
        margin 0 0 60px 0
        float none
        padding 30px 0 120px 0
        width 100%
</style>
