<script>
import axios from 'axios'
import { usePropStore } from "../../stores/store.js";

export default {
  name: "MainTable", 
    props: ["funcShowDialog"],
  data() {
    return {
      rowSelected: -1,
      isShowIcon: false,
      employees: [],
      useProp: usePropStore(), 
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    showIcon() {
      this.isShowIcon = !this.isShowIcon;
    },
    loadData() {
      try {
        axios.get("https://amis.manhnv.net/api/v1/Employees")
        .then(res => {
          this.employees = res;
          this.useProp.isShowLoading = false;
          console.log(this.employees);
        })
        .catch((error) => {
          console.log(error);
        })
      } catch (error) {
        console.log(error);
      }
    },
    onDbClick(item) {
      try {
        // this.funcShowDialog(item);
        this.useProp.showDialogDetails(item);
      } catch (error) {
        console.log("error");
      }
    },
    selectRow(index) {
      try {
        this.rowSelected = index;
        console.log(this.rowSelected);
      } catch (error) {
        console.log("error");
      }
    }
  },
};
</script>

<template>
  <div class="main__table">
    <div class="table__container">
      <table>
        <thead>
          <tr class="">
            <th id="" class="">
              <input class="" type="checkbox" />
            </th>
            <th>STT</th>
            <th class="text-align--left">Mã tài sản</th>
            <th class="text-align--left">Tên tài sản</th>
            <th class="text-align--left">Loại tài sản</th>
            <th class="text-align--left">Bộ phận sử dụng</th>
            <th>Số lượng</th>
            <th class="text-align--left">Nguyên giá</th>
            <th class="text-align--left">HM/KH lũy kế</th>
            <th class="text-align--left">Giá trị còn lại</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in useProp.data"
            :key="index"
            @click="selectRow(index)"
            :class="{selected: rowSelected == index}"
            @dblclick="this.useProp.showDialogDetails(item)"
          >
            <td class="checkbox">
              <input class="" type="checkbox" />
            </td>
            <td :title="index + 1" class="text-align--center">{{ index + 1 }}</td>
            <td :title="item.propertyCode">{{ item.propertyCode }}</td>
            <td :title="item.propertyCode">{{ item.propertyName }}</td>
            <td :title="item.propertyType">{{ item.propertyType }}</td>
            <td :title="item.usedPart">{{ item.usedPart }}</td>
            <td :title="item.amount" class="text-align--right" id="amount">{{ item.amount }}</td>
            <td :title="item.price">{{ item.price }}</td>
            <td :title="item.cummulative" class="text-align--right">{{ item.cummulative }}</td>
            <td :title="item.residualValue" class="text-align--right">{{ item.residualValue }}</td>
            <td>
              <div class="icon__show">
                <div class="icon">
                  <div title="Sửa" @click="this.useProp.showDialogDetails(item)" class="icon__edit"></div>
                  <div title="Xóa" @click="this.useProp.deleteProperty(item.propertyCode)" class="icon__delete"></div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table__paging">
      <div class="paging__left">
        <div class="page__amount">Tổng số: <b>{{ useProp.data.length }}</b> bản ghi</div>
        <div class="page__amount--ip">
          <input class="amount__input" type="number" placeholder="20" />
          <div class="arr--down"></div>
        </div>     
        <div class="list__pages">
          <div class="arr arr--left"></div>
          <div class="array">
            <span>1</span>
            <span>2</span>
            <span class="etc"></span>
            <span>10</span>
          </div>
          <div class="arr arr-right"></div>
        </div>
      </div>
      <div class="paging__right">
        <div>13</div>
        <div>249.000.000</div>
        <div>19.716.000</div>
        <div>229.284.000</div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
/* @import url(../../css/base/input.css);
@import url(../../css/base/button.css);
@import url(../../css/base/icon.css); */
@import url(../../css/base/table.css);
@import url(../../css/layout/main.css);

.page__amount--ip {
  position: relative;
  display: flex;
  align-items: center;
}
.arr--down {
  background: url('../../assets/UI/icon/qlts-icon.svg') no-repeat -72px -338px;
	width: 8px;
	height: 5px;
  right: -30%;
  position: absolute;
}

.selected {
        background-color: rgba(26, 164, 200, .2) !important;
    }
</style>
