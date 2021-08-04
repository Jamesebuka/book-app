<template>
    <body>
      <div style="position: relative">
        <img style="position: absolute" src="~assets/images/book.png"/>
      </div>
      
      <div class="logo-center">
        <img class="" src="~assets/images/logo-white.png"/>
        <div class="center-text">
            <p class="footer-title">Made with ❤️ by</p>
            <p class="footer-subtitle">Tosop Technologies</p>
        </div>
      </div>
      
    </body>
</template>

<script>
export default {
    methods: {
    timeout: function () {
      const self = this
      setTimeout(function () {
        // alert("Moving to configuration page");
        self.$router.push({ path: '/main' })
      }, 3000)
    }
  },
  mounted () {
    this.timeout()
  }
}
</script>

<style scoped>


body {
    background: var(--splash-color);
    color: var(--font-color)
}

.logo-center {
    display: grid;
    grid-template-rows: 90% 10%;
    place-items: center;
    height: 100vh;
}

.footer-title {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1px;
}

.footer-subtitle {
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
}
</style>