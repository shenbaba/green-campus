<template>
	<view class="user-manage-page page">
		<head-top title="用户管理" uRl="../../../pages/admin/admin"></head-top>
		<view class="query">
			<text>查询方式:</text>
			<input type="text" placeholder="输入用户名" style="font-size: 24upx;" v-model="name"/>
			<button @touchend="chose">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="用户列表"></ti-ps>
			<view  v-for="(item, index) in list" class="list"  :key="index">
				<text>姓名：{{item.userName}}</text>
				<text>性别：{{item.sex}}</text>
				<text>工号：{{item.jobId}}</text>
				<text>年龄：{{item.age}}</text>
				<text>职位：{{item.ponsition}}</text>
				<text>电话：{{item.phoneNumber}}</text>
				<text>身份：{{item.identity}}</text>
				<text>邮箱：{{item.email}}</text>
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
				name :''
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
					url:'http://118.178.126.209:8085/GreenCampus/user/search',
					data:{
						name:this.name	
					},
					success: (res) => {
						this.list=res.data.detail;
						this.name = '';
					},
					fail: () => {
						uni.showToast({
							title:'网络出错',
							icon:'none'
						})
					}
				})
			}
		},
		
		onShow() {
			uni.request({
				url:'http://118.178.126.209:8085/GreenCampus/user/all',
				data:{
					pageNo: 1,
					pageSize :10
				},
				success:(res)=>{
					
					this.list = res.data.detail;
				},
				fail: () => {
					uni.showToast({
						title:'网络错误',
						icon:'none',
						duration:1000
					});
					setTimeout(()=>{
						uni.hideToast()
					},1000)
				}
			})
		},
	}
</script>

<style>
@import url("../../../static/admin.css");
</style>
