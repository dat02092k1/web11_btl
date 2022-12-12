<script>
export default {
  name: 'PropertyDetails',
  props: {
    msg: String
  }
}
</script>

<template>
    <div class="dialog">
      <div class="dialog-wrapper">
      <div class="dialog__header">
        <div class="header__title">Sửa tài sản</div>
        <div class="icon icon__close"></div>
      </div>
      <div class="dialog__body">
        <div class="property__form">
          <div class="form__left">
            <label for="">Mã tài sản <span>*</span> </label>
            <input type="text" placeholder="Mã tài sản">
          </div>
          <div class="form__right">
            <label for="">Tên tài sản <span>*</span> </label>
            <input type="text" placeholder="Nhập tên tài sản">
          </div>
        </div>
        <div class="property__form">
          <div class="form__left">
            <label for="">Mã bộ phận sử dụng <span>*</span> </label>
            <input type="text" placeholder="Chọn mã bộ phận sử dụng">
          </div>
          <div class="form__right">
            <label for="">Tên phòng ban </label>
            <input type="text"  disabled>
          </div>
        </div>
        <div class="property__form">
          <div class="form__left">
            <label for="">Mã loại tài sản <span>*</span> </label>
            <input type="text" placeholder="Chọn mã loại tài sản">
          </div>
          <div class="form__right">
            <label for="">Tên loại tài sản </label>
            <input type="text"  disabled>
          </div>
        </div>
        <div class="property__form">
          <div class="form__left">
            <label for="">Số lượng </label>
            <input type="text" >
          </div>
          <div class="form__mid">
            <label for="">Nguyên giá <span>*</span> </label>
            <input type="text" >
          </div>
          <div class="input__right">
            <label for="">Tỷ lệ hao mòn <span>*</span></label>
            <input type="text" >
          </div>
        </div>
      </div>
      <div class="dialog__footer">
        footer
      </div>
    </div>
    </div>
</template>

<style scoped>
@import url(../../css/base/propery_details.css);

.property__form {
  display: flex;
}
</style>
