<template>
  <div class="hello">
  

      <input type="text" v-model="value1" @input="btn">

      <input type="text" v-model="value2" @input="btn">
  

      <hr>

      <button >{{name}}</button>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       value1: '',
       value2: '',
       name: '开始'
    }
  },
  methods:{ 
      btn() {

          if(this.value1 != '' && this.value2 != ''){

             this.name = '笨蛋';

          }


      }
     

  },
  mounted(){




  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
