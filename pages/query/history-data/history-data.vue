<template>
	<view class="history-page page">
		<head-top title="历史抄表示数" :bool="true" uRl="../../../pages/query/query-data"></head-top>
		<calen-dar></calen-dar>
		<view class="query">
			<text>查询方案:</text>
			<input type="text" placeholder="" style="font-size: 24upx;" v-model="userid"/>
			<button @touchend="chose">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="报表列表"></ti-ps>
			<view  v-for="(item, index) in list" class="list"  :key="index">
				<text>序号：{{item.userId}}</text>
				<text>表计标号：{{item.userName}}</text>
				<text>表计名称：{{item.phoneNumber}}</text>
				<text>测量点名称：{{item.email}}</text>
				<text>信号：用能日报</text>
				<text>时间：</text>
				<text>采集时间：</text>
				<text>示值：</text>
				<text>单位：</text>
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
						
					},
					fail: () => {
					uni.showToast({
						title:'网络出错'
					})
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
