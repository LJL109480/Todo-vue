<template>
  <div>
    <h2>clicked:{{conunt}}times, count is {{evenOrodd}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd </button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapActions,mapGetters, mapState} from 'vuex'
  export default {
    created(){
      console.log('store', this.$store)
    },
    computed:{
      ...mapState(['conunt']),
      ...mapGetters(['evenOrodd'])
    },
   /* computed:{
     conunt(){
     return this.$store.state.conunt
     },
     evenOrodd (){
     return this.$store.getters.evenOrodd
     }
     },*/
    methods:{
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }
   /* methods:{
      increment(){
        this.$store.dispatch('increment')
      },
      decrement(){
        this.$store.dispatch('decrement')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }
    }*/
  }
</script>

<style>

</style>
