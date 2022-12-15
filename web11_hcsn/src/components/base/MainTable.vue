<script>
export default {
  name: "MainTable",
  props: {
    msg: String,
  },
  data() {
    return {
      data: [
        {
          propertyCode: "55H7WN72/2022",
          propertyName: "Dell Inspiron 3467",
          propertyType: "Máy vi tính xách tay",
          usedPart: "Phòng Hành chính Kế toán",
          amount: "1",
          price: "10.000.000",
          cummulative: "1.646.000",
          residualValue: "19.106.000",
        },
        {
          propertyCode: "MXT88618",
          propertyName: "Máy tính xách tay Fujitsu",
          propertyType: "Máy vi tính xách tay",
          usedPart: "Phòng Tài chính Tổng hợp",
          amount: "4",
          price: "20.000.000",
          cummulative: "3.929.000",
          residualValue: "8.775.000",
        },
        {
          propertyCode: "37H7WN72/2022",
          propertyName: "Máy tính xách tay FujitsuDell",
          propertyType: "Dell Inspiron 3467",
          usedPart: "Phòng thư ký",
          amount: "2",
          price: "50.000.000",
          cummulative: "432.000",
          residualValue: "3.775.000",
        },
        {
          propertyCode: "55H7WN72/2022",
          propertyName: "Dell Inspiron 3467",
          propertyType: "Máy vi tính xách tay",
          usedPart: "Phòng Hành chính Kế toán",
          amount: "1",
          price: "10.000.000",
          cummulative: "1.646.000",
          residualValue: "19.106.000",
        },
        {
          propertyCode: "MXT88618",
          propertyName: "Máy tính xách tay Fujitsu",
          propertyType: "Máy vi tính xách tay",
          usedPart: "Phòng Tài chính Tổng hợp",
          amount: "4",
          price: "20.000.000",
          cummulative: "3.929.000",
          residualValue: "8.775.000",
        },
        {
          propertyCode: "37H7WN72/2022",
          propertyName: "Máy tính xách tay FujitsuDell",
          propertyType: "Dell Inspiron 3467",
          usedPart: "Phòng thư ký",
          amount: "2",
          price: "50.000.000",
          cummulative: "432.000",
          residualValue: "3.775.000",
        },
        {
          propertyCode: "55H7WN72/2022",
          propertyName: "Dell Inspiron 3467",
          propertyType: "Máy vi tính xách tay",
          usedPart: "Phòng Hành chính Kế toán",
          amount: "1",
          price: "10.000.000",
          cummulative: "1.646.000",
          residualValue: "19.106.000",
        },
        {
          propertyCode: "MXT88618",
          propertyName: "Máy tính xách tay Fujitsu",
          propertyType: "Máy vi tính xách tay",
          usedPart: "Phòng Tài chính Tổng hợp",
          amount: "4",
          price: "20.000.000",
          cummulative: "3.929.000",
          residualValue: "8.775.000",
        },
        {
          propertyCode: "37H7WN72/2022",
          propertyName: "Máy tính xách tay FujitsuDell",
          propertyType: "Dell Inspiron 3467",
          usedPart: "Phòng thư ký",
          amount: "2",
          price: "50.000.000",
          cummulative: "432.000",
          residualValue: "3.775.000",
        },
        {
          propertyCode: "55H7WN72/2022",
          propertyName: "Dell Inspiron 3467",
          propertyType: "Máy vi tính xách tay",
          usedPart: "Phòng Hành chính Kế toán",
          amount: "1",
          price: "10.000.000",
          cummulative: "1.646.000",
          residualValue: "19.106.000",
        },
        {
          propertyCode: "MXT88618",
          propertyName: "Máy tính xách tay Fujitsu",
          propertyType: "Máy vi tính xách tay",
          usedPart: "Phòng Tài chính Tổng hợp",
          amount: "4",
          price: "20.000.000",
          cummulative: "3.929.000",
          residualValue: "8.775.000",
        },
        {
          propertyCode: "37H7WN72/2022",
          propertyName: "Máy tính xách tay FujitsuDell",
          propertyType: "Dell Inspiron 3467",
          usedPart: "Phòng thư ký",
          amount: "2",
          price: "50.000.000",
          cummulative: "432.000",
          residualValue: "3.775.000",
        },
      ],
      isShowIcon: false
      
    };
  },
  methods: {
    showIcon() {
      this.isShowIcon = !this.isShowIcon;
    }
  }
};
</script>

<template>
  <div class="main__table">
    <div class="table__container">
      <table >
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
        <th>Giá trị còn lại</th>
        <th>Chức năng</th>
      </tr>
        </thead>
        <tbody>
          <tr class="" v-for="(item, index) in data" :key="index" @change="showIcon">
          <td class="checkbox">
            <input class="" type="checkbox" />
          </td>
          <td>{{ index + 1 }}</td>
          <td>{{ item.propertyCode }}</td>
          <td>{{ item.propertyName }}</td>
          <td>{{ item.propertyType }}</td>
          <td>{{ item.usedPart }}</td>
          <td class="text-align--right" id="amount">{{ item.amount }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.cummulative }}</td>
          <td>{{ item.residualValue }}</td>
          <td>
            <div class="icon__show" >
              <div class="icon">
                <div class="icon__edit"></div>
              <div class="icon__delete"></div>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="table__paging">
      <div class="paging__left">
        <div class="page__amount">Tổng số: {{data.length}} bản ghi</div>
        <div class="page__amount--ip">
          <input
          class="amount__input"
          type="number"
          placeholder="20"
        />
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
  <!-- <div
    class="main__table"
    style="overflow-y: auto; overflow-x: auto; height: calc(100vh - 80px)"
  >
    <table>
      <tr class="row__head">
        <th id="checbox__head" class="checkbox">
          <input class="checkbox__ip" type="checkbox" />
        </th>
        <th>STT</th>
        <th>Mã tài sản</th>
        <th>Tên tài sản</th>
        <th>Loại tài sản</th>
        <th>Bộ phận sử dụng</th>
        <th>Số lượng</th>
        <th>Nguyên giá</th>
        <th>HM/KH lũy kế</th>
        <th>Giá trị còn lại</th>
        <th>Chức năng</th>
      </tr>
      <tbody ref="yyy">
        <tr class="row__body" v-for="(item, index) in data" :key="index">
          <td class="checkbox">
            <input class="checkbox__ip" type="checkbox" />
          </td>
          <td>{{ index + 1 }}</td>
          <td>{{ item.propertyCode }}</td>
          <td>{{ item.propertyName }}</td>
          <td>{{ item.propertyType }}</td>
          <td>{{ item.usedPart }}</td>
          <td id="amount">{{ item.amount }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.cummulative }}</td>
          <td>{{ item.residualValue }}</td>
          <td>
            <div class="icon__show" v-show="isShowIcon">
              <div class="icon__edit"></div>
              <div class="icon__delete"></div>
            </div>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div> -->
</template>

<style scoped>
/* @import url(../../css/base/input.css);
@import url(../../css/base/button.css);
@import url(../../css/base/icon.css); */
@import url(../../css/base/table.css);
@import url(../../css/layout/main.css);

/* .main__table {
    height: 100%;
    box-sizing: border-box;
}
table {
  border-collapse: collapse;
  min-width: 100%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  min-height: 100%;
}

table thead tr {
  background-color: #f5f5f5;
  text-align: left;
  font-weight: bold;
  height: 38px;
}

.row__head th {
  font-weight: 700;
  color: #001031;
}

.row__body {
background-color: #fff;
height: 40px;
}

table th, table td {
    padding: 12px 15px;
} */

/* .main__table {
    height: calc(100vh - 80px);
    box-sizing: border-box;
}

table {
   
  background-color: #fff;
  border-radius: 4px;
  border-collapse: collapse;
  min-width: 100%;
  border-color: 1px solid #f5f5f5;
  overflow: scroll;
}

table thead tr {
  background-color: #f5f5f5;
  text-align: left;
  font-weight: bold;
  height: 38px;
}

table th, table td {
  
}
.row__head th {
  font-weight: 700;
  color: #001031;
}

.row__body {
background-color: #fff;
height: 40px;
} */

/* .head__row {
  background-color: #f5f5f5;
  box-sizing: border-box;
} */
</style>
