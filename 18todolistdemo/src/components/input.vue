<template>
  <div>
    <input type="text" placeholder="请输入相应的内容" v-model="inputValue"/>
    <button @click='change'>添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods:{
      change(){
          //console.log('input--->',this.inputValue)
          this.$store.commit('changeName',this.inputValue)
      }
  }
};
</script>

<style scoped>
</style>
