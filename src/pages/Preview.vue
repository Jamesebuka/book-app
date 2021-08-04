<template>
    <div class="container">
        <div class="header">
          <div class="header-container">
                <div class="title left" style="width: 100%">
                  <router-link to="search">
                    <img class="" src="~assets/icons/back.png"/>
                  </router-link>
                </div>
                <div class="right">
                    <router-link to="search">
                    <img class="" src="~assets/icons/search.png"/>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- start of description -->
        <div class="page-description">
          <h1 class="title">80/20 rule of engineering</h1>
          <p class="description">The Pareto principle states that for many outcomes, roughly 80% of consequences come from 20% of the causes.</p>
          <div class="grid-auto">
            <img class="" src="~assets/icons/bottom.png"/>
            <p class="description">Resources</p>
          </div>
        </div>
        <!-- end of description -->

        <!-- start of page-body -->
        <div class="page-body">
          <span class="page-body-content">
            The 80-20 rule maintains that 80% of outcomes (outputs) come from 20% of causes (inputs). In the 80-20 rule, you prioritize the 20% of factors that will produce the best results. A principle of the 80-20 rule is to identify an entity's best assets and use them efficiently to create maximum value. When it comes to your love life, the 80/20 rule centres on the idea that one person cannot meet 100 per cent of your needs all the time. Each of you is permitted to take a fraction of your time – 20 per cent – away from your partner to take part in more self-fulfilling activities and resume your individuality.
            </span>
        </div>
        
        <!-- end of page-body -->

        <!-- start of resources -->
        <h1 class="resources-heading"> Resources </h1>

        <div class="grid">
              <div class="page-reference-container">
                <img class="reference-image" src="~assets/images/avatars/1.png"/>
                <div>
                  <h1 class="reference-title">How to improve your design</h1>
                  <span class="reference-author">Solomon Marvelous</span>
                </div>  
              </div>
              
              <div class="page-reference-container">
                <img class="reference-image" src="~assets/images/avatars/2.png"/>
                <div>
                  <h1 class="reference-title">Improve font design</h1>
                  <span class="reference-author">Ayo Agbato</span>
                </div>  
              </div>

              <div class="page-reference-container">
                <img class="reference-image" src="~assets/images/avatars/3.png"/>
                <div>
                  <h1 class="reference-title">Intigrate front end skills</h1>
                  <span class="reference-author">James Ebuka</span>
                </div>  
              </div>
              </div>
        <!-- end of page-body -->
        
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

.resources-heading {
  padding-left: 29px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
}

.page-reference-container {
  width: 360px;
  height: 86px;
  left: 0px;
  display: grid;
  gap: 2.5em;
  grid-template-columns: 10% 80%;
  align-items: center;
  background: #F9F9F9;
  padding: 16px 31px;
}

.reference-image {
  width: 55px;
  height: 55px;
  left: 31px;
  top: 691px;
}

.reference-title {
  font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 0px;
/* identical to box height */
color: #434343;
}

.reference-author {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 15px;
/* identical to box height */


color: #434343;
}

.grid-auto {
  display: grid;
  gap: 6.51px;
  grid-template-columns: 10% 90%;
  width: 120px
}

.grid {
  display: grid;
  
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
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

.page-description {
  padding: 26px;
  height: 180px;
  background: linear-gradient(180deg, #E8EFF5 35.1%, rgba(230, 243, 255, 0.68) 100%);
  border: 0.5px solid #FFFFFF;
}

.page-body {
  padding: 29px;
  height: auto;
}

.page-body-content {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
color: #434343;
/* padding-bottom: 8em; */
}

.page-reference {
  padding: 26px;
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