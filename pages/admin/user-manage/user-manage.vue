<template>
	<view class="user-manage-page page">
		<head-top title="用户管理" uRl="../../../pages/admin/admin"></head-top>
		<view class="query">
			<text>查询方式:</text>
			<input type="text" placeholder="输入用户id" style="font-size: 24upx;" v-model="userid"/>
			<button @touchend="chose">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="用户列表"></ti-ps>
			<view  v-for="(item, index) in list" class="list"  :key="index">
				<text>用户名：{{item.userId}}</text>
				<text>姓名：{{item.userName}}</text>
				<text>电话：{{item.phoneNumber}}</text>
				<text>电子邮箱：{{item.email}}</text>
			</view>
		</view>
		<view class="more" v-show='loading'>
			<text>没有更多了</text>
		</view>
	</view>
</template>

<script>
	import headTop from "@/components/page-head/page-head.vue"
	import tiPs from "@/components/page-tips/tips.vue"
	import calenDar from "@/components/calendar.vue"
	export default {
		data() {
			return {
				list:[],
				loading : true,
				userid :''
			}
		},
		components:{
			headTop,
			tiPs,
			calenDar
		},
		methods: {
			chose(){
				this.list = [];
				uni.request({
					url:'/api/GreenCampus/user/one',
					data:{
						userId:this.userid	
					},
					success: (res) => {
						this.list.push(res.data.detail);
						console.log(this.list);
					},
					fail: () => {
						console.log('error')
					}
				})
			}
		},
		onShow() {
			uni.request({
				url:'/api/GreenCampus/user/all',
				data:{
					pageNo: 1,
					pageSize :10
				},
				success:(res)=>{
					console.log(res.data.detail);
					this.list = res.data.detail;
				},
				fail: () => {
					this.tips="网络错误，小程序端请检查合法域名";
				}
			})
		}
	}
</script>

<style>
@import url("../../../static/admin.css");
</style>
