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
    <div title="Danh sách tài sản" class="header__title">Danh sách tài sản</div>
    <div class="header__page">
      <div title="Sở tài chính" class="finance__page">Sở tài chính</div>
      <div class="date__page">
        <!-- <input
          class="input__date"
          type="number"
          placeholder="Năm"
          id="points"
          name="points"
          step="1"
        /> -->
        Năm <b>2021</b>
        <div class="arr"></div>
      </div>
      <div title="Thông báo" class="icon icon__noti"></div>
      <div title="Menu" class="icon icon__menu"></div>
      <div title="Thắc mắc" class="icon icon__help"></div>
      <div class="account-info">
        <div title="Thông tin tài khoản" class="icon icon__account"></div>
        <div title="Thêm" class="icon icon__dropdown"></div>
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
  background-color: rgba(26, 164, 200, 0.2);
  border-radius: 3px;
  width: 112px;
  height: 30px;
  overflow: hidden;
  border: none;
  text-align: center;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.arr {
	background: url('../../assets/UI/icon/qlts-icon.svg') no-repeat -204px -332px;
	  width: 8px;
	  height: 16px;
  }

.arr:hover {
  cursor: pointer;
}
</style>
