import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

// 计算结果和键盘按键输入的内容保存在全局的state状态当中
const store = new Vuex.Store({
    state: {
    	result:"",
    	enter:"",
        count:10
    },
    mutations:{
    	calculate(state,value){
    		if(value==='='){
    			state.result=eval(state.enter);   //把字符串当做javascript表达式处理，这样就不用去区别到底点的是加号还是减号还是乘除
    			
    			//state.enter+=value;  这句语句加上之后就不能实现连环四则运算了
    		}
    		else if(value=='clear'){
    			state.result=state.enter='';
    		}
    		else{
    			 state.enter+=value;
    		}
    	}
    }
})

export default store