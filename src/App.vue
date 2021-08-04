<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>


<style>
:root {
    --splash-color: #374356;
    --font-color: #ffffff;
    --primary:  #77BFA3;
    --primary-dark:  #0a0024;
    --secondary:  #EDEEC9;
    --highlight: #DDE7C7;
    --acent:  #1f8f4a;
    --success:  #AEF78E;
    --warning:  #F0A202;
    --error:  #F55536;
    --danger:  #2E4057;
    --muted: #868686;
    --disabled:  #E1EFE6;
    --background: #4C6071;
    --background-hover: #567188;
    --white:  #fff;
    --black:  #171717;
    --gray:  #E6E6E6;
    --list-item: #77BFA3;
    --border-radius: 4px;
    --box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.062);
    --sidebar-width:  220px;

}

.center-object {
  margin: 0 auto;
}
.center-text {
  text-align: center
}
</style>