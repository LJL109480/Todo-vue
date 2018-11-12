<template>
  <div>
    <h2>clicked:{{counter}}times, count is {{evenOrodd}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd </button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        counter:0,
        evenOrodd:''
      }
    },
    methods:{
      increment(){
        this.counter++
      },
      decrement(){
        this.counter--
      },
      incrementIfOdd(){
        if(this.counter%2===1){
          this.counter++
        }
      },
      incrementAsync(){
        setTimeout(()=>{
          this.counter++
        },1000)
      }
    }
  }
</script>

<style>

</style>
