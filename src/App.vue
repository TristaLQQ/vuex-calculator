<template>
  <div id="app">
   <div class='top'>
    <div class="result">{{result}}</div>
    <div class="enter">{{enter===""?0:enter}}</div>
   </div>
    <div class='keys'>
      <div class='list' >
         <keybord v-for="item in keys" :value="item"></keybord>
      </div>
    </div>
  </div>
</template>

<script>
/*import store from './vuex.js'*/
/*import {mapState} from 'vuex'*/
import KeyBord from './components/keybord.vue'
export default {
  name: 'app',
 /* store,*/
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      keys:[
         'clear','+','-','*',
         '7','8','9','/',
         '4','5','6','0',
         '1','2','3','='
      ]
    }
  },
  components:{
    'keybord':KeyBord
  },
  computed:{
     ...mapState({count:'count',result:'result',enter:'enter'})
  },
   /*computed: {
       result(){return this.$store.state.result},
       enter(){return this.$store.state.enter}
    }*/
}
</script>

<style>
#app{width:204px;height:323px;margin:20px auto;border:2px solid gray;border-radius:5px;box-shadow:2px 1px 2px gray;}
.top{position:relative;width:100%;height:120px;text-align:right;border-bottom:1px solid gray;}
.top .result{position:absolute;right:10px;bottom:18px;font-size:18px;font-weight:bold;}
.top .enter{position:absolute;right:10px;bottom:2px;font-size:16px;}
.list{text-align:center;}
.list :nth-of-type(16){background:orange;}
</style>
