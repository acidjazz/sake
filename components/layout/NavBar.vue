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
      // include ../../static/vector/instagram.svg
    a.social.pinterest(:href="social.pinterest",target='_new')
      // include ../../static/vector/pinterest.svg
    a.social.facebook(:href="social.facebook",target='_new')
      // include ../../static/vector/facebook.svg
    a.social.behance(:href="social.behance",target='_new')
      // include ../../static/vector/behance.svg

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
