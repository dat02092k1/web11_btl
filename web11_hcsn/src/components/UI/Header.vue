<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<template>
  <div class="header">
    <div class="header__title">Danh sách tài sản</div>
    <div class="header__page">
      <div>Sở tài chính</div>
      <div>
        <input type="number"  id="points" name="points" step="1">
      </div>
      <div class="icon icon__noti"></div>
      <div class="icon icon__menu"></div>
      <div class="icon icon__help"></div>
      <div class="icon icon__account"></div>
      <div class="icon icon__dropdown"></div>
    </div>
  </div>
</template>

<style scoped>

</style>
