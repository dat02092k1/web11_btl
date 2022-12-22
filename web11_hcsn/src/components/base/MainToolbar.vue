<script>
import { usePropStore } from "../../stores/store.js";

export default {
  name: "MainToolbar",
  props:
    ["onClickFunction"],
  methods: {
    
  },
  data() {
    return {
      useProp: usePropStore(),      
    }
  }
};
</script>

<template>
  <div class="main__toolbar">
      <div class="main__toolbar--left">
        <div class="search__property">
          <div class="icon icon__search"></div>
          <input
            type="text"
            class="input input__search"
            placeholder="Tìm theo tài sản"
          />
        </div>

        <div class="property__type">
          <div class="icon icon__filter"></div>
          <input
            type="text"
            class="input input__type"
            placeholder="Loại tài sản"
          />
          <div class="icon icon__arrow--down"></div>
        </div>

        <div class="property__details">
            <div class="icon icon__filter"></div>
            <input
          type="text"
          class="input input__details"
          placeholder="Bộ phận sử dụng"
        />
        <div class="icon icon__arrow--down"></div>
        </div>
        
      </div>
      <div class="main__toolbar--right">
        <button  @click="this.useProp.showDialogDetails" class="button button__addProperty">
          <!-- <div class="icon icon__add">
          </div> -->
          <div title="Thêm tài sản" class="add__title"> <span style="font-size: 15px;">+</span> Thêm tài sản</div>
        </button>
        <button title="import" class="button button__import">
          <div class="icon__import"></div>
        </button>
        <button title="export" class="button button__deleteProperty">
          <div class="icon__deleteProperty"></div>
        </button>
      </div>
    </div>
</template>

<style scoped>
@import url(../../css/base/input.css);
@import url(../../css/base/button.css);
@import url(../../css/base/icon.css);
.main__toolbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.main__toolbar--left {
  display: flex;
}
.search__property {
  display: flex;
  align-items: center;
  height: 35px;
}

.property__type {
    display: flex;
  align-items: center;
  height: 35px;
  position: relative;
}

.property__details {
    display: flex;
  align-items: center;
  height: 35px;
  position: relative;
}

.main__toolbar--right {
  display: flex;
  align-items: center;
}

.add__title {
  padding: 9px 11px;
}
</style>
