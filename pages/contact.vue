<template lang="pug">
.page.contact
  .title drop us a note.  we'd love to hear from you.
  .contacts
    .contact
      .title EMPLOYMENT INQUIRIES
      .line no positions are currently available, submissions are always welcome. Send to info@designsakestudio.com

    .contact
      .title NEW BUSINESS INQUIRIES
      .line Danielle McWaters
      a.line(href="tel:4154098046") 415-409-8046
      a.line(href="mailto:danielle@designsakestudio.com") danielle@designsakestudio.com

    .clear

    .contact
      .title INTERNSHIP INQUIRIES
      a.line(href="mailto:info@designsakestudio.com") info@designsakestudio.com

    .contact
      .title PRESS & GENERAL INQUIRIES
      a.line(href="mailto:info@designsakestudio.com") info@designsakestudio.com
  .clear
  .tiles
    .tile.tile_contact.tile_full
      .image.off
</template>

<script>
</script>

<style lang="stylus">
@import '../assets/stylus/guide/includes/*'
.page.contact
  padding 30px 0 0 0
  > .title
    float left
    width 330px
    line-height 40px
    font-h2()
  > .contacts
    float right
    width 700px
    padding 20px 0 20px 0
    > .contact
      float right
      width 210px
      margin 0 0 20px 140px
      > .title
        font-copy2()
        margin 0
        padding 0 0 10px 0
      > .line
        display block
        font-copy3()
        color grey1
        text-transform uppercase
        letter-spacing 2px
        line-height 14px

  > .tiles
    > .tile
      &.tile_contact
        width 1083px
        height 644px
        background-image url('/images/contact/Contact_1083x644px_1.jpg')
        background-size contain


@media all and (min-width: 1px) and (max-width: 1000px)
  .page.contact
    padding 0
    > .title
      margin 10px 10px 30px 10px
      line-height 20px
    > .contacts
      clear both
      float none
      padding 0 0 20px 0
      width auto
      > .contact
        margin 10px
        width auto
        float none
</style>
