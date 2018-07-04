<template>
    <div>
<!--         <p>好问问</p>
        <h1>{{mas}}</h1>

        <button @click="tiao"></button>

 -->


        <textarea id="box" placeholder="你好笨啊！"></textarea>


    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
      name: "Hw",
      data() {
          return {

          }
      },
      methods :{

          tiao() {




          }

      },
      computed :{
          ...mapGetters(['mas'])

      },
      mounted(){


        console.log(this.$route.params)

    
    

      }
  }
</script>
<style scoped>

  #box{
    width: 200px;
    height: 200px;
  }


textarea::-webkit-input-placeholder {
  /* WebKit browsers */
  color: red;
}
textarea:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: red;
}
textarea::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: red;
}
textarea::-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: red;
}

textarea::-webkit-input-placeholder { padding: 20px 0 0 20px; line-height: 200px;}

</style>