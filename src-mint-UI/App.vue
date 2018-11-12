<template>
  <div>
   <mt-button style="width: 100%" @click="hit" type="primary">提示</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
   methods:{
     hit(){
       Toast({
         message: '操作成功',
         iconClass: 'icon icon-success'
       });
     }
   }
  }
</script>

<style>

</style>
