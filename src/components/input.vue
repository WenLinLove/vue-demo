<template>
    <div>
        
            <button @click="tiao(1)">

                跳转

            </button>


    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex' 
 export default {
     name: 'HelloWorld',
     data(){
         return {
            
         }
     },
     //这里是获取原始数据
     computed:{
         ...mapGetters(['mas'])
     },
     //这里获取vuex里的方法
     methods:{
         ...mapActions(['pst']),
         ...mapActions(['set']),
         tiao(vat) {


            this.$router.push({ path: '/hw/'+ vat +'' })



         }
     },
     mounted(){

       

     }
 }
</script>
<style scoped>

</style>