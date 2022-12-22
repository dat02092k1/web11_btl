<script>
import MainToolbar from '../base/MainToolbar.vue';
import MainTable from '../base/MainTable.vue';
import PropertyDetails from '../base/PropertyDetails.vue';
import LoadingProgress from '../base/LoadingProgress.vue';

import { usePropStore } from "../../stores/store.js";

export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    MainToolbar,
    MainTable,
    PropertyDetails,
    LoadingProgress
  },
  methods: {

    onHideDialog() {
      this.isShowDetails = false;
    },
    showDialogDetails(title) {
      this.isShowDetails = true;
      this.titleSelected = title;
    }
  },
  data() {
    return {
      // isShowDetails: false,
      titleSelected: {},
      useProp: usePropStore(),      
    }
  }
};
</script>

<template>
  <div class="main">
    <div class="page">
      <MainToolbar @onAddClick="onShowDialog" />
    <MainTable :funcShowDialog="showDialogDetails" />
    <PropertyDetails :titleSelected="titleSelected" :hideDialog="onHideDialog" v-if="useProp.isShowDetails" />
    </div>
    <LoadingProgress v-show="this.useProp.isShowLoading"/>
  </div>
</template>

<style scoped>
@import url(../../css/base/input.css);
@import url(../../css/base/button.css);
@import url(../../css/base/icon.css);
@import url(../../css/base/table.css);
</style>
