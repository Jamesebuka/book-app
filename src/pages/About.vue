<template>
    <div class="container">
        <div class="header">
            <div class="header-container">
              <div class="left">
                    <router-link to="search">
                      <img class="" src="~assets/icons/back.png"/>
                    </router-link>
                </div>
                <div class="title right">
                    <p>Engineering Handbook</p>
                </div>
                
            </div>
        </div>

        <!-- contents -->
        <div class="page-description">
          <h1>UmbrellaTree</h1>
        </div>
        <!-- end of contents -->

        <div class="page-body">
          <span class="page-body-content">
            The 80-20 rule maintains that 80% of outcomes (outputs) come from 20% of causes (inputs). In the 80-20 rule, you prioritize the 20% of factors that will produce the best results. A principle of the 80-20 rule is to identify an entity's best assets and use them efficiently to create maximum value. When it comes to your love life, the 80/20 rule centres on the idea that one person cannot meet 100 per cent of your needs all the time. Each of you is permitted to take a fraction of your time – 20 per cent – away from your partner to take part in more self-fulfilling activities and resume your individuality.
            </span>
        </div>

        <footer class="foot" style="">
            <router-link to="main">
              <div class="menu-button" style="opacity:0.5;">
                  <img class="" src="~assets/icons/Vector.png"/>
                  <p class="ft">Glossary</p>
              </div>
            </router-link>
            <router-link to="about">
              <div class="menu-button">
                  <img class="" src="~assets/icons/about.png"/>
                  <p class="ft">About</p>
              </div>
            </router-link>
        </footer>
    </div>  
</template>

<script>


import json from '../data/db.json'

export default {
    data() {
        return {
            list_items : json,
            searchkey: ""
        }
    },
    methods : {
        trigger(id) {
            console.log(id)
        },

        search() {
          let keyword = this.searchkey
          console.log(keyword)
        }
    }
}

        
</script>

<style scoped>
.header-container {
    position: relative;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
}

.grid-auto {
  display: grid;
  gap: 6.51px;
  grid-template-columns: 10% 90%;
  width: 120px
}

.title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
}

.description {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #434343;
}

.page-description h1{
  width: 297px;
  height: 60px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: rgba(67, 67, 67, 0.3);
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.page-body {
  padding: 0 26px 26px 26px;
  height: 180px;
}

.page-body-content {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
color: #434343;
padding-bottom: 8em;
}

.header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    z-index: 999;
    background-color: var(--background);
}

.header-container {
    position: relative;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 70% 30%;
    place-items: center;
}

.right {
    position: absolute;
    right: 0;
}

.left {
    position: absolute;
    left: 0;
}

.ft{
    margin:0px;
    color: var(--font-color);
}

.container {
    position:relative;
    
}

.menu-button{
    display:grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
}

.menu-button:hover {
    background: var(--background-hover);
}

.foot{
    width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--background);
    place-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    bottom: 0px;
    left:0px;
    height:75px;
}

.title p{
    font-size: 22px;
    color: var(--font-color);
    font-weight: bold;
    margin: 0;
}

.page-content {
    /* margin-top: 5em; */
    height: 100vh;
    width: 100wh;
}
</style>