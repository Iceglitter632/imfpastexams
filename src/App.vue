<template>
    <div id="app">
        <router-view name="header" :isAvailable="isAvailable"></router-view>
        <!-- <router-view/> -->
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
        
    </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
import constants from './constants';

export default {
  mounted(){
    this.mount();
  },
  components: {
    FadeTransition
  },
  data(){
    return{
      isAvailable: null
    }
  },
  methods:{
    checkLogin(){
      var username = this.$route.query.username;
      var email = this.$route.query.email;
      if(username!=null && email!=null){
        var now = new Date();
        var minutes = 60; 
        now.setTime(now.getTime() + (minutes*60*1000));
        document.cookie = `username=${username}; expires=${now.toUTCString()};`
        document.cookie = `email=${email}; expires=${now.toUTCString()};`
        this.$router.replace('/');
        this.isAvailable = true;
      }
      
    },
    mount(){
      var username = constants.getCookie("username");
      var email = constants.getCookie("email")
      if(username==null && email==null){
        this.checkLogin()
      }
      else{
        this.isAvailable = true;
      }
    },


  }
};
</script>

<style>
::-webkit-scrollbar{
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(145, 145, 145);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(88, 88, 88, 0.527);
}
</style>
