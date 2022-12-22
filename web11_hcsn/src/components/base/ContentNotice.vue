<template>
    <div class="dialog-notice">
        <div class="content-notice">
            <div class="content-main">
                <div class="icon-warning"></div>
                <div class="content-warning">
                    <!-- <div  v-for="err in this.errMsg">{{err}}</div> -->
                    <div class="errorMsg" v-for="(err, index) in this.errors" :key="index">
                    {{ err }}
                    </div>
            
                </div>
            </div>
            <div class="content-footer">
                <button class="close-dialog" @click="closeDialogNotice()">Đóng</button>
            </div>
        </div>
    </div>
</template>

<script>
import { usePropStore } from "../../stores/store.js";

    export default {
        name: "DialogNotice",
        props: ["errors"],
        data() {
            return {
                useProp: usePropStore(),
            }
        },
        methods: {
            closeDialogNotice() {
                this.useProp.showDialogNotice = false;
            }
        }
    }
</script>

<style scoped>
    @import url(../../css/base/dialog_notice.css);
</style>