<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<template>
  <div class="header">
    <div class="header__title">Danh sách tài sản</div>
    <div class="header__page">
      <div class="finance__page">Sở tài chính</div>
      <div class="date__page">
        <input
          class="input__date"
          type="number"
          placeholder="Năm"
          id="points"
          name="points"
          step="1"
        />
      </div>
      <div class="icon icon__noti"></div>
      <div class="icon icon__menu"></div>
      <div class="icon icon__help"></div>
      <div class="account-info">
        <div class="icon icon__account"></div>
        <div class="icon icon__dropdown"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(../../css/base/icon.css);
@import url(../../css/base/input.css);

.account-info {
  display: flex;
  align-items: center;
}

.finance__page {
  margin-right: 21px;
  font-weight: 500;
  color: #001031;
}

.date__page {
  margin-right: 10px;
}
</style>
