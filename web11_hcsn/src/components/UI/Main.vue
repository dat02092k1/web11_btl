<script>
import MainToolbar from '../base/MainToolbar.vue';
import MainTable from '../base/MainTable.vue';

export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    MainToolbar,
    MainTable
  }
};
</script>

<template>
  <div class="main">
    <MainToolbar/>
    <MainTable/>
  </div>
</template>

<style scoped>
@import url(../../css/base/input.css);
@import url(../../css/base/button.css);
@import url(../../css/base/icon.css);

</style>
