<template>
   <div id='keybord'>
      <div :data-value="value" class='innerValue' @click='getKeyboardValue'>{{value}}</div>
   </div>
</template>
<script>
export default{
	props:['value'],
	methods:{
	  getKeyboardValue(event){
        let value=event.target.dataset.value;
        this.$store.commit('calculate',value);
	  }
	}
}
</script>
<style scoped>
#keybord{display:inline-block;width:50px;height:50px;padding:5px;border:1px solid gray;text-align:center;line-height:40px;}
#keybord :hover{cursor:pointer;}
#keybord .innerValue{font-size:18px;color:pink;font-weight:bolder;}
</style>