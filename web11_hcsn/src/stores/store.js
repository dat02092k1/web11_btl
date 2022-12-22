import { defineStore } from 'pinia'
import axios from 'axios';
export const usePropStore = defineStore(
    {
        id: "property",
        state: () => {
        return { 
          isShowDetails: false,
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
          titleSelected: {},
          isShowLoading: true,
          showDialogNotice: false
         }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    /**
     * hiển thị popup
     */
    showDialog() {
       try {
        this.isShowDetails = !this.isShowDetails;
       } catch (error) {
        console.log(error);
       }
    },
    /**
     * show dialog
     * và gán giá trị data
     */
    showDialogDetails(title) {
      try {
        this.isShowDetails = true;
      this.titleSelected = title;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * hiển thị popup
     */
    showPopup() {
      // this.$emit("onAddClick");
      try {
        this.isShowDetails = true;
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * đóng popup
     */
    closePopup() {
      try {
        this.isShowDetails = false;
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * xóa tài sản
     */
    deleteProperty(id) {  
      try {
        axios.delete("https://amis.manhnv.net/api/v1/Employees/" + id)
      .then(res => {
        console.log(res);
        this.data.splice(id, 1);
      })
      .catch(err => console.log(err));
      } catch (error) {
        console.log(error)
      }
    },
  },
})