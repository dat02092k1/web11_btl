<script>
import axios from "axios";
import { usePropStore } from "../../stores/store.js";

import ContentNotice from "./ContentNotice.vue";
export default {
  name: "PropertyDetails",
  components: { ContentNotice },
  props: ["hideDialog", "titleSelected"],
  methods: {
    /**
     * đóng popup
     */
    closePopup() {
      try {
        this.$emit("onClosePopup");
      } catch (error) {
        console.log(error);
      }
    },
    // saveEmployee() {
    //   console.log(this.showDialogNotice);
    //   this.showDialogNotice = true;
    // }
    /**
     * validate dữ liệu, nếu đúng
     * thì gọi api
     */
    btnOnSave() {
      try {
        this.errors = [];
        var isValid = this.isValidData();
        // validate data
        if (isValid) {
          // if (isValid) call api save
          if (!this.validateRequired(this.propertyProp.price)) {
            // hiển thị loading
            axios
              .post(
                "http://cukcuk.manhnv.net/api/v1/employees",
                this.propertyProp
              )
              .then((res) => {
                // ẩn loading
                console.log(res);
              })
              .catch((err) => console.log(err));
          } else {
            axios
              .put(
                `http://cukcuk.manhnv.net/api/v1/employees/${this.propertyProp.propertyCode}`,
                this.propertyProp
              )
              .then((res) => {
                console.log(res);
              })
              .catch((err) => console.log(err));
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Kiểm tra input có trống không, nếu có
     * hiện thông báo lỗi
     */
    isValidData() {
      try {
        // mã tài sản không được phép trống
        if (!this.validateRequired(this.propertyProp.propertyCode)) {
          this.errors.push("Mã nhân viên không được phép trống");
          console.log(this.errors);
        }
        // tên tài sản không được phép trống
        if (!this.validateRequired(this.propertyProp.propertyName)) {
          this.errors.push("Tên tài sản không được phép trống");
        }
        // mã bộ phận không được phép trống
        // loại tài sản không được phép trống
        if (!this.validateRequired(this.propertyProp.propertyType)) {
          this.errors.push("Loại tài sản không được phép trống");
        }
        console.log(this.errors.length);
        if (this.errors.length > 0) {
          this.useProp.showDialogNotice = true;
          return false;
        }

        return true;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Kiểm tra giá trị rỗng hay sai giá trị
     */
    validateRequired(value) {
      try {
        if (value == "" || value == null || value == undefined) {
        return false;
      }
      return true;
      } catch (error) {
        console.log(error);
      }
    }, 
    /**
     * highlight ở ô input lỗi
     */
    propertyCodeInput() {
      try {
        if (!this.validateRequired(this.propertyProp.propertyCode)) {
        this.propertyCodeBorder = "border__red";
      } else this.propertyCodeBorder = null;
      } catch (error) {
        console.log(error);
      }
    },
    propertyNameInput() {
      try {
        if (!this.validateRequired(this.propertyProp.propertyName)) {
        this.propertyNameBorder = "border__red";
      } else this.propertyNameBorder = null;
      } catch (error) {
        console.log(error);
      }
    },
    // departmentInput() {
    //   if (!this.validateRequired(this.propertyProp.departmentUsed)) {
    //     this.departmentUsedBorder = "border__red";
    //   } else this.departmentUsedBorder = null;
    // }
  },
  mounted() {
    this.$nextTick(() => this.$refs.focusMe.focus());
  },
  created() {
    this.propertyProp = this.useProp.titleSelected;
    console.log(this.propertyProp);
    if (this.propertyProp.propertyCode) {
      this.typeModal = "Sửa";
      console.log(this.typeModal);
    }
    else {
      this.typeModal = "Thêm";
      console.log(this.typeModal);
    }
  },
  data() {
    return {
      showDialogNotice: false,
      propertyProp: {},
      useProp: usePropStore(),
      errors: [],
      propertyCodeBorder: null,
      typeModal: null
    };
  },
};
</script>

<template>
  <div>
    <div class="dialog">
      <div class="dialog-wrapper">
        <div class="dialog__header">
          <div class="header__title">{{ this.typeModal }} tài sản</div>
          <div @click="this.useProp.closePopup" class="icon icon__close"></div>
        </div>
        <div class="dialog__body">
          <div class="col1">
            <div class="row">
              <label for="">Mã tài sản <span>*</span> </label>
              <input
                autofocus
                ref="focusMe"
                type="text"
                placeholder="Mã tài sản"
                v-model="this.propertyProp.propertyCode"
                tabindex="1"
                :class="propertyCodeBorder"
                @blur="propertyCodeInput"
              />
            </div>

            <div class="row">
              <label for="">Mã bộ phận sử dụng <span>*</span> </label>
              <input
                type="text"
                placeholder="Mã bộ phận sử dụng"
                v-model="this.propertyProp.propertyCode"
                tabindex="3"
                :class="propertyCodeBorder"
                @blur="propertyCodeInput"
              />

              <div class="arr-down"></div>
            </div>

            <div class="row">
              <label for="">Mã loại tài sản <span>*</span> </label>
              <input
                type="text"
                placeholder="Chọn mã loại tài sản"
                v-model="this.propertyProp.propertyType"
                tabindex="4"
              />
              <div class="arr-down"></div>
            </div>

            <div class="row">
              <label for="">Số lượng </label>
              <input type="text" tabindex="5" />
              <div class="arr"></div>
            </div>

            <div class="row">
              <label for="">Tỷ lệ hao mòn(%) </label>
              <input type="text" tabindex="8" />
              <div class="arr"></div>
            </div>

            <div style="position: relative" class="row">
              <label for="">Ngày mua </label>
              <input type="text" tabindex="10" />
              <div class="datepicker"></div>
            </div>
          </div>
          <div class="col2">
            <div class="row">
              <label for="">Tên tài sản <span>*</span> </label>
              <input
                type="text"
                placeholder="Tên tài sản"
                v-model="this.propertyProp.propertyName"
                tabindex="2"
                :class="propertyNameBorder"
                @blur="propertyNameInput"
              />
            </div>

            <div class="row">
              <label for="">Tên bộ phận sử dụng </label>
              <input
                type="text"
                class="disabled"
                disabled
                v-model="this.propertyProp.usedPart"
              />
            </div>

            <div class="row">
              <label for="">Tên loại tài sản </label>
              <input
                class="disabled"
                type="text"
                disabled
                v-model="this.propertyProp.propertyType"
              />
            </div>

            <div
              class="rowb"
              style="display: flex; justify-content: space-between"
            >
              <div class="rowb1">
                <label for="">Nguyên giá <span>*</span> </label>
                <br />
                <input
                  type="text"
                  v-model="this.propertyProp.price"
                  tabindex="6"
                />
              </div>
              <div class="rowb1">
                <label for="">Số năm sử dụng <span>*</span> </label>
                <br />
                <input type="text" tabindex="7" />
              </div>
            </div>

            <div
              class="rowb"
              style="display: flex; justify-content: space-between"
            >
              <div class="rowb1">
                <label for="">Giá trị hao mòn <span>*</span> </label>
                <br />
                <input
                  type="text"
                  v-model="this.propertyProp.price"
                  tabindex="9"
                />
              </div>
              <div class="rowb1">
                <label for="">Năm theo dõi <span>*</span> </label>
                <br />
                <input class="disabled" type="text" disabled />
              </div>
            </div>

            <div class="row">
              <div style="position: relative" class="row22">
                <label for="">Ngày bắt đầu sử dụng <span>*</span> </label>
                <input type="text" tabindex="11" />
                <div class="datepicker1"></div>
              </div>
            </div>

            <!-- <div class="row">
              <label for="">Số lượng </label>

              <select
               name="unit" id="unit" placeholder="số lượng"
               v-on:blur="departmentInput" :class="departmentBorder">
                <option>HCTH</option>
                <option>TCTH</option>
                <option>HCKT</option>
                <option>PTK</option>
              </select>
            </div> -->
          </div>
        </div>
        <div class="dialog__footer">
          <div>
            <button class="btn delete__btn">Hủy</button>
          </div>

          <div>
            <button @click="btnOnSave" class="btn save__btn">Lưu</button>
          </div>
        </div>
      </div>
    </div>
    <ContentNotice :errors="this.errors" v-if="useProp.showDialogNotice" />
  </div>
</template>

<style scoped>
@import url(../../css/base/propery_details.css);

.property__form {
  display: flex;
}

.border__red {
  border-color: red;
}
</style>
