<template>
  <div>
    <ul class="content">
      <li 
      v-for="(item, index) in list" 
      :key="index" 
      :class="list[index].finish?'yellow':'green'">
        {{ list[index].msg }}
        <span>
            <button @click="finished(index)">{{list[index].finish?'√':'完成'}}</button>
            <button @click="del(index)">删除</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  mounted() {
    console.log(this.list[1].finish);
  },
  computed: {
    ...mapState({
      list: (state) => state.info,
    }),
  },
  methods:{
    ...mapMutations(['del','finished'])
  },
  data() {
    return {
      name: "kevin",
      age: 12,
    };
  },
};
</script>

<style scoped>
.content {
  background: rgba(0, 0, 0, 0.3);
  width: 200px;
  list-style: none;
  border-radius: 10px;
  padding: 0;
}
li{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
.yellow{
    background: yellow;
}
.green{
    background: greenyellow;
}
</style>