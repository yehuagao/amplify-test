<template>
    <div>
        <button class="sign-btn" @click="signOut">sign out</button>
        <div class="index-main">
            <div class="nav-box">
                <div class="nav-item" v-for="(item, index) in navArr" :key="index">
                    <p v-if="!item.active" class="nav-text" @click="selectNav(index)">{{item.label}}</p>
                    <p v-else class="nav-text active-text">{{item.label}}</p>
                    <div class="sub-box" v-if="item.subArr && item.active">
                        <p v-for="(itm, idx) in item.subArr" :key="idx">
                            <span v-if="!itm.active">{{itm.label}}</span>
                            <span v-else class="active-text">{{itm.label}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="content-box">
                <p class="content-title">Completed&nbsp;&nbsp;Bookings</p>
                <div class="info-box" v-for="(item, index) in list" :key="index">
                    <div class="info-title">
                        <p class="info-title-text">{{item.title}}</p>
                        <div class="description-btn">
                            <span>Service description</span>
                            <img style="width: 16px;height:16px" src="../assets/images/right-arrow.png" alt="">
                        </div>
                    </div>
                    <div class="info-params flex-row-between">
                        <div class="info-left">
                            <div class="flex info-row">
                                <div class="info-item" style="margin-right: 70px">
                                    <p class="label-text">Contact Name</p>
                                    <p>{{item.contactName}}</p>
                                </div>
                                <div class="info-item">
                                    <p class="label-text">Contact Number</p>
                                    <p>{{item.contactNumber}}</p>
                                </div>
                            </div>
                            <div class="info-item info-row">
                                <p class="label-text">Service Address</p>
                                <p>{{item.serviceAddress}}</p>
                            </div>
                            <div class="info-item info-row">
                                <p class="label-text">Contact Time</p>
                                <p>{{item.serviceTime}}</p>
                            </div>
                        </div>
                        <div class="info-right">
                            <div class="right-item">
                                <p class="light-color">Full Refund</p>
                                <div class="flex">
                                    <span>Amount Paid</span>
                                    <img style="width: 14px;height: 14px;margin-left: 3px" src="../assets/images/ask-icon.png" alt="">
                                </div>
                                <p>${{item.amountPaid}}</p>
                            </div>
                            <div class="right-item">
                                <div class="flex">
                                    <span>Refunded</span>
                                    <img style="width: 14px;height: 14px;margin-left: 3px" src="../assets/images/ask-icon.png" alt="">
                                </div>
                                <p>${{item.refunded}}</p>
                            </div>
                        </div>
                    </div>
                    <p class="cancle-btn">Booking Canceled</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Auth } from 'aws-amplify';
    async function signOut() {
        try {
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    export default {
        data() {
            return {
                navStatus: 2,
                subStatus: 0,
                navArr: [
                    {label: 'My Profile', active: false},
                    {label: 'Address Book', active: false},
                    {label: 'Booking History', active: true,
                        subArr: [
                            {label: 'Upcoming', active: true},
                            {label: 'Completed', active: false},
                            {label: 'Canceled', active: false}
                        ]
                    },
                    {label: 'Payments Detail', active: false},
                    {label: 'Update Password', active: false},
                    {label: 'Log put', active: false},
                ],
                list: [
                    {
                        title: 'Interior Lightning Service',
                        contactName: 'Tom Bruce',
                        contactNumber: '0488 888 888',
                        serviceAddress: '12 West St, Caniey Vate, NSW 2166',
                        serviceTime: 'Morning 8AM-11AM, 11 December 2019',
                        refunded: 50,
                        amountPaid: 50
                    },
                    {
                        title: 'Interior Lightning Service',
                        contactName: 'Tom Bruce',
                        contactNumber: '0488 888 888',
                        serviceAddress: '12 West St, Caniey Vate, NSW 2166',
                        serviceTime: 'Morning 8AM-11AM, 11 December 2019',
                        refunded: 50,
                        amountPaid: 50
                    },
                    {
                        title: 'Interior Lightning Service',
                        contactName: 'Tom Bruce',
                        contactNumber: '0488 888 888',
                        serviceAddress: '12 West St, Caniey Vate, NSW 2166',
                        serviceTime: 'Morning 8AM-11AM, 11 December 2019',
                        refunded: 50,
                        amountPaid: 50
                    },
                    {
                        title: 'Interior Lightning Service',
                        contactName: 'Tom Bruce',
                        contactNumber: '0488 888 888',
                        serviceAddress: '12 West St, Caniey Vate, NSW 2166',
                        serviceTime: 'Morning 8AM-11AM, 11 December 2019',
                        refunded: 50,
                        amountPaid: 50
                    }
                ]
            }
        },
        methods: {
            signOut() {
                signOut();
            },
            selectNav(index) {
                this.navArr.forEach((item, idx) => {
                    console.log(item, idx)
                    this.$set(this.navArr[idx], 'active', false);
                })
                this.$set(this.navArr[index], 'active', true);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/style/common";
    .sign-btn{
        position: fixed;
        top: 40px;
        right: 40px;
        background-color:#ffac31;
        width: 70px;
        height: 40px;
        color: #1a1a1a;
        border: 0;
        border-radius: 3px;
        font-weight: 500;
        font-size: 14px;
    }
    .index-main{
        width: 1200px;
        margin: auto;
        display: flex;
        color: #1a1a1a;
        margin-bottom: 30px;
        padding-top: 100px;
        .nav-box{
            width: 300px;
            line-height: 2.4;
            p{
                cursor: pointer;
            }
        }
        .sub-box{
            border-left: 2px solid #ffac31;
            padding-left: 20px;
            margin-left: 8px;
            line-height: 1.2;
            margin-bottom: 10px;
            margin-top: 10px;
            p {
                margin-bottom: 16px;
            }
            p:last-child{
                margin-bottom: 0;
            }
        }
        .active-text{
            color: #ffac31;
            font-weight: bold;
        }
        .content-box{
            .info-box{
                border-radius: 10px;
                width: 800px;
                height: 290px;
                background-color: #ffffff;
                box-shadow: 0 0 10px rgba(0,0,0,.1);
                padding: 30px;
                line-height: 1.2;
                margin-bottom: 40px;
                .info-row{
                    margin-bottom: 20px;
                }
                .info-title-text{
                    font-weight: 600;
                }
                .info-title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 14px;
                    border-bottom: 2px solid #F8F8F8;
                    margin-bottom: 20px;
                }
                .description-btn{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    span{
                        color: #ffac31;
                    }
                }
                .label-text{
                    color: #999999;
                    margin-bottom: 6px;
                }
            }
            .info-params{
                align-items: flex-start;
                border-bottom: 5px solid #E5E5E5;
            }
            .info-right{
                padding-left: 30px;
                border-left: 2px solid #F8F8F8;
                line-height: 1.4;
            }
            .right-item{
                margin-bottom: 30px;
                img{
                    cursor: pointer;
                }
                .flex{
                    align-items: center;
                }
            }
            .content-title{
                margin-bottom: 20px;
            }
            .light-color{
                color: #ffac31;
                font-weight: bold;
            }
            .cancle-btn{
                text-align: right;
                padding-top: 6px;
                cursor: pointer;
            }
        }
    }

</style>
