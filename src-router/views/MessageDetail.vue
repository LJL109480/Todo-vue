<template>
  <div>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>name:{{messageDetail.name}}</li>
    <li>content:{{messageDetail.content}}</li>
  </ul>
  </div>

</template>
<script>
  const allMessageDetails = [
    {id:3, name:'jack', content:'jack,content'},
    {id:4, name:'tom', content:'tom,content'},
    {id:5, name:'kore', content:'kore,content'},
    {id:6, name:'jao', content:'jao,content'},
    {id:7, name:'yue', content:'yue,content'},
  ];
  export default{
    computed: {
      messageDetail () {
        const id = this.$route.params.id * 1;
        return allMessageDetails.find(md => md.id===id);

      }
    }
  }
</script>
<style>
</style>
