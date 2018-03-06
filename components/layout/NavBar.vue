<template lang="pug">
header
  a.logo(href="/")
    include ../../static/vector/logo1.svg
  .contact
    .title DESIGNSAKE STUDIO
    a.address(href="'https://goo.gl/maps/SV3rxDiZoF22",target="_new")
      .line 295 KANSAS STREET
      .line SAN FRANCISCO CA
      .line 94103 
    a.email(:href="`mailto:${social.mail}`")
      include ../../static/vector/email.svg

  .menu
    a.item.on(href='/') .work.
    a.item(href='/studio') .studio.
    a.item(href='/contact') .contact.

  .socials
    a.social.instagram(:href="social.instagram",target='_new')
      include ../../static/vector/instagram.svg
    a.social.pinterest(:href="social.pinterest",target='_new')
      include ../../static/vector/pinterest.svg
    a.social.facebook(:href="social.facebook",target='_new')
      include ../../static/vector/facebook.svg
    a.social.behance(:href="social.behance",target='_new')
      include ../../static/vector/behance.svg

  .clear
</template>

<script>
export default {
  data () {
    return {
      gmap: 'https://goo.gl/maps/SV3rxDiZoF22',
      social: {
        instagram: 'http://www.instagram.com/designsakestudio',
        facebook: 'http://www.facebook.com/designsakestudio',
        pinterest: 'http://www.pinterest.com/designsakesf',
        dribbble: 'https://dribbble.com/designsakestudio',
        behance: 'https://www.behance.net/designsakestudio',
        mail: 'info@designsakestudio.com',
        map: 'https://www.google.com/maps/place/Designsake+Studio/@37.7664616,-122.4056994,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e329270f7af:0xab027b6dc66fae6c!8m2!3d37.7664616!4d-122.4035107',
        phone: '4155093508',
      },
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/guide/includes/*'
.contact
  float right
  font-copy2s()
  > .title, > .address > .line, > .email
    margin 0 0 5px 0
    color grey1
    font-copy2s()
  > .address
    transition color 0.1s linear 0s
    &:hover
      color gold1
  > .email
    display block
    width 18px
    height 15px
    &:hover
      > svg > path
        fill blue1
    > svg > path
      fill grey1
      transition fill 0.1s linear

.socials
  > a.social
    display block
    width 20px
    height 20px
    padding  10px 5px 10px 5px
    > svg > path, > svg > rect
      fill grey1
      transition fill 0.1s linear 0s
    &:hover > svg > path, > svg > rect
      fill blue1

header
  > .socials
    position fixed
    top 155px
  position relevant
  > .logo
    float left
    width 202px
    height 46px
    margin 0 0 0 84px
    > svg > path
      fill blue1

  .menu
    width 270px
    float right
    margin 0 20px 0 0
    font-copy3() 
    > a.item
      text-decoration none
      display inline-block
      text-align center
      cursor pointer
      padding 5px 10px
      padding 0 10px 10px 10px
      color blue1
      text-transform uppercase
      &.on, &:hover
        color gold1

@media all and (min-width: 1px) and (max-width: 1000px)
  header
    padding 0 0 30px 0
    > .logo
      margin 0
    > .menu
      display none
    > .contact
      display none
    > .burger 
      display block
    > .socials
      display none

</style>


