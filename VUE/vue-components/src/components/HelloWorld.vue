<template>
  <div class="hello">
    <i-menu></i-menu>
    <v-button size="large" @click.native="handleClick">按钮</v-button>

  </div>
  
</template>

<script>
import button from '@/components/com/button'
import menu from '@/components/com/menu'
export default {
  name: 'HelloWorld',
  provide(){
    return {
      name:this.obj
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:{
        name:'蜗牛'
      }
    }
  },
  components: {
    'v-button': button,
    'i-menu':menu
  },
  methods: {
    handleClick(){
      // console.log(val)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
