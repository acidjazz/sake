<template lang="pug">
.page.work
  .sidebar.sidebar_desktop
    .listing
      .subtitle .SERVICES.
      ul
        li(v-for="service in work.services") {{ service }}

  .title .{{ work.title }}.
  .copy
    p(v-for="paragraph in work.description") {{ paragraph }}

  .sidebar.sidebar_mobile
    .listing
      .subtitle .SERVICES.
    ul
      li(v-for="service in work.services") {{ service }}

  .tiles
    .tile(
      v-for="tile in work.tiles",
      :class="{tile_left: tile.left, tile_clear: tile.clear, tile_stack: tile.stack, tile_full: tile.full, tile_right: tile.right}",
      :style="`background-image: url(/images/tiles/work/${work.folder}/thumbs/${tile.image}); width: ${tile.width}px; height: ${tile.height}px;`"
      )
      .image.on(:style="`background-image: url(/images/tiles/work/${work.folder}/${tile.image});`")
    .clear
</template>

<script lang="coffee">
export default
  computed:
    work: ->
      data = require "../../config/work/#{this.$route.params.project}.json"
      return data

  created: ->
    console.log this.work
</script>

<style lang="stylus">
    @import '../../assets/stylus/guide/includes/*'

.page.work
  > .copy
    columns 2
    column-gap 30px
    > p
      font-copy3()
      color grey1
      text-transform uppercase
      padding  0 0 10px 0
      margin 0
      column-span 1
      > a
        color gold1
        text-decoration underline

      /*
      float left
      width 35%
      padding 0 20px 0 0
      */

      /*
      columns 2
      */

  > .title
    margin 0 0 20px 0

  > a.link
    font-copy3()
    color grey1
    padding 40px 0 0 0

  > .sidebar
    width 120px
    float right
    min-height auto
    margin 30px 0 30px 30px
    color blue1
    &.sidebar_mobile
      display none

    > ul.listing
      columns 1
      > li
        font-copy4()

  > .tiles
    clear both
    > .tile
      display block
      float left
      background-size cover
      > .image
        background-color rgba(blue1, 0.5)
        background-size contain
        width inherit
        height inherit
        onoff()
        animation fadeIn 0.25s ease-in-out 0s
      &.tile_stack
        margin 0 0 30px 0

      &.tile_left
        margin 0 30px 30px 0
      &.tile_clear
        clear both
      &.tile_full
        margin 0 0 30px 0
      &.tile_right
        float right
        margin 0 0 30px 0
  .nav
    font-copy3()
    border-bottom 1px solid blue1
    padding 15px 0
    margin 0 0 20px 0

    > a.link
      text-transform uppercase
      color blue1
      &:hover
        color gold1
      &.next
        float right
      &.prev
        float left
      > .navarrow, > .navcopy, > .navname
        display inline
@media all and (min-width: 1px) and (max-width: 1000px)
  .page.work
    > .sidebar
      float none !important
      margin 20px 10px 0 10px
      &.sidebar_desktop
        display none
      &.sidebar_mobile
        display block
    > .title
      margin 0 0 0 10px 
    > .copy
      columns 1
      > p, > .link
        margin 10px 
    > .nav > .link > .navname
      display none !important


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
          gf(copy3)
          margin 0
          padding 0
          color gc(grey1)
          text-transform uppercase
          width auto
          > a
            color gc(grey1)
            display block
            gf(copy3)
            text-decoration underline
            &:hover
              color gc(gold1)
    > .listing:nth-child(2) > ul
      columns 1




    > .sideimage
      width 364px
      height 525px
      background-image url('/images/tiles/studio/Office_364x525px_2.jpg')
      background-size contain
      float right

    > .largetext
      gf(h4)
      float right
      text-transform uppercase
      color gc(gold1)
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
          gf(copy3)
          margin 0
          padding 0
          color gc(grey1)
          text-transform uppercase
          width auto
          > a
            color gc(grey1)
            display block
            gf(copy3)
            text-decoration underline
            &:hover
              color gc(gold1)
    > .listing:nth-child(2) > ul
      columns 1

  > .main
    border-bottom 1px solid gc(blue1)
    height 780px
    > .title
      text-align left
      gf(h5)
      margin 0 0 30px 0
    > .subtitle
      text-transform uppercase
    > p
      gf(copy3)
      color gc(grey1)
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
        gf(copy3)
        color gc(grey1)
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
      gf(h3)
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
