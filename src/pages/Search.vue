<template>
    <div class="container">
        
        
        <div class="header">

          <div class="header-container">
                
                <div class="left">
                    <router-link to="main">
                    <img class="" src="~assets/icons/back.png"/>
                    </router-link>
                </div>
                <div class="title right" style="width: 80%">
                    <form id="submitForm" @submit="search">
                    <input type="text" placeholder="Enter search keyword" v-model="searchkey"/>
                    </form>
                </div>
            </div>

        </div>

        <!-- contents -->
        <div class="page-content">
            <div class="list-index">
                #
            </div>
            <div class="list-items" v-for="item in 5" :key="item" @click="trigger(item)">
                <span>{{item}}</span>
            </div>
        </div>
        <!-- end of contents -->

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

form {

}
form input[type=text] {
  font-size: 18px;
  width: 80%;
  background-color: transparent;
  border: none;
  color: white;
  border-bottom: 1px solid white;
}

form input[type=text]::placeholder{
  color: white;
}

form input:focus {
  outline: none
}

.list-index {
    display: grid;
    align-items: center;
    padding: 0 5%;
    font-weight: bold;
    width: 100%;
    height: 32px;
    background: rgba(97, 139, 165, 0.7);
}

.list-items {
    display: grid;
    align-items: center;
    padding: 0 5%;
    width: 100%;
    height: 50px;
    background: #EFEFEF;
    border: 0.5px solid #FFFFFF;
    transform: rotate(0.22deg);
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
    grid-template-columns: 20% 80%;
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
    margin-top: 2em;
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