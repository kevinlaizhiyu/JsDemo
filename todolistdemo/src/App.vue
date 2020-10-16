<template>
  <div id="app">
   <p class="header">这里是 APP 根组件</p>
   <Input/>
   <List/>
   <Select/>
  </div>
</template>

<script>
import Input from './components/input'
import List from './components/list'
import Select from './components/select'

export default {
  name: 'App',
  components: {
    Input,List,Select
  }
}
</script>

<style scoped>
#app{
  background: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
}
.header{
  margin:0 auto;
  color:gold;
  font-size: 18px;
  text-align: center;
}

</style>