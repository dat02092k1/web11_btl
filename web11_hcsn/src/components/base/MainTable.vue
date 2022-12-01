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
        }
    ]
  }
},
};
</script>

<template>
  <div class="main__table">
    <table>
      <thead>
        <tr class="row__head">
          <th><input type="checkbox" /></th>
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
      </thead>
      <tbody>
        <tr class="row__body" v-for="(item, index) in data" :key="index">
          <td><input type="checkbox" /></td>
          <td>{{(index+1)}}</td>
          <td>{{item.propertyCode}}</td>
          <td>{{item.propertyName}}</td>
          <td>{{item.propertyType}}</td>
          <td>{{item.usedPart}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.price}}</td>
          <td>{{item.cummulative}}</td>
          <td>{{item.residualValue}}</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@import url(../../css/base/input.css);
@import url(../../css/base/button.css);
@import url(../../css/base/icon.css);

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

.main__table {
    height: 100vh;
    box-sizing: border-box;
}

table {
    height: calc(100vh - 80px);
  background-color: #fff;
  border-radius: 4px;
  border-collapse: collapse;
  min-width: 100%;
  border-color: 1px solid #f5f5f5;
  overflow: auto;
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
</style>
