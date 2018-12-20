<template>
  <div class="hello">

    <div class="box" @click="submitForm ">请求后台数据</div>
    
    <Table/>
    <WebSocket/>
  </div>
</template>

<script>
import Table from '@/components/table1'
import WebSocket from '@/components/websocketdemo'
export default {
  name: 'HelloWorld',
  components:{
    Table,
    WebSocket
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  submitForm () {
    this.$store.dispatch('saveForm')
    
  },
   
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box {
  width: 180px;
  height: 40px;
  background-color: aliceblue;
  border: 1px #ededed solid;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  color: #42b983;
  margin-bottom: 60px;
  cursor: pointer;
}
</style>
