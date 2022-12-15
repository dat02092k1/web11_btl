<script>
import MainToolbar from '../base/MainToolbar.vue';
import MainTable from '../base/MainTable.vue';
import PropertyDetails from '../base/PropertyDetails.vue';

export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    MainToolbar,
    MainTable,
    PropertyDetails
  },
  methods: {
    onShowDialog() {
      this.isShowDetails = true;
    },
    onHideDialog() {
      this.isShowDetails = false;
    }
  },
  data() {
    return {
      isShowDetails: false
    }
  }
};
</script>

<template>
  <div class="main">
    <div class="page">
      <MainToolbar @onAddClick="onShowDialog" />
    <MainTable/>
    <PropertyDetails :hideDialog="onHideDialog" v-if="isShowDetails" />
    </div>
  </div>
</template>

<style scoped>
@import url(../../css/base/input.css);
@import url(../../css/base/button.css);
@import url(../../css/base/icon.css);
@import url(../../css/base/table.css);
</style>
