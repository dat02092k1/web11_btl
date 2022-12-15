<script>
export default {
  name: 'PropertyDetails',
  props: ["hideDialog"]
  ,
  methods: {
    closePopup() {
      this.$emit("onClosePopup");
    }
  },
  mounted() {
    this.$nextTick(() => this.$refs.focusMe.focus())
  }
}
</script>

<template>
    <div class="dialog">
      <div class="dialog-wrapper">
      <div class="dialog__header">
        <div class="header__title">Sửa tài sản</div>
        <div @click="this.hideDialog()" class="icon icon__close"></div>
      </div>
      <div class="dialog__body">
        
          <div class="col1">
          <div class="row">
            <label for="">Mã tài sản <span>*</span> </label>
            <input autofocus ref='focusMe' type="text" placeholder="Mã tài sản">
          </div>

          <div class="row">
            <label for="">Mã bộ phận sử dụng <span>*</span> </label>
            <input type="text" placeholder="Mã bộ phận sử dụng">
          </div>

          <div class="row">
            <label for="">Mã loại tài sản <span>*</span> </label>
            <input type="text" placeholder="Mã loại tài sản">
          </div>

          <div class="row">
            <label for="">Số lượng </label>
            <input type="text" >
          </div>
        </div>
        <div class="col2">
          <div class="row">
            <label for="">Tên tài sản <span>*</span> </label>
            <input type="text" placeholder="Tên tài sản">
          </div>

          <div class="row">
            <label for="">Tên phòng ban </label>
            <input type="text"  disabled>
          </div>

          <div class="row">
            <label for="">Tên loại tài sản </label>
            <input type="text"  disabled>
          </div>

          <div class="row">
            <div class="row1">
              <div class="row2" id="row2a">
              <label for="">Nguyên giá <span>*</span> </label>
            <input type="text" >
            </div>

            <div class="row2">
              <label for="">Tỷ lệ hào mòn <span>*</span> </label>
            <input type="text" >
            </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="dialog__footer">
        <div >
          <button class="btn delete__btn">Hủy</button>
        </div>

        <div >
          <button class="btn save__btn">Lưu</button>
        </div>
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
