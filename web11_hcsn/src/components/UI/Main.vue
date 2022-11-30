<script>
export default {
  name: "Main",
  props: {
    msg: String,
  },
};
</script>

<template>
<div class="main">
    <div class="main__toolbar">
        <div class="main__toolbar--left">
            <input type="text" class="input input__search" placeholder="Tìm theo tài sản">
            <input type="text" class="input input__type" placeholder="Loại tài sản">
            <input type="text" class="input input__details" placeholder="Bộ phận sử dụng">
        </div>
        <div class="main__toolbar--right">
            <button class="button button__addProperty">Thêm tài sản</button>
            <button class="button button__import">+</button>
            <button class="button button__deleteProperty">-</button>

        </div>
    </div>
    <div class="main__table"></div>
  </div>
</template>

<style scoped>
@import url(../../css/base/input.css);
@import url(../../css/base/button.css);

.main__toolbar {
    display: flex;
    justify-content: space-between;
}
</style>
