<template>
	<view class="page">
		<head-top title="历史用量" :bool="true" uRl="../../../pages/query/query-data"></head-top>
		
		<calen-dar></calen-dar>
		
		<view class="query">
			<text>时间类型:</text>
			<label class="radio">
				<radio value="" /><text>小时</text>
				<radio value="" /><text>日</text>
				<radio value="" /><text>月</text>
				<radio value="" /><text>年</text>
			</label>
			<button>查询</button>
		</view>
		
		<view class="query-lists">
			<!-- 历史用量数据图表 -->
			<view class="query-chat">
				<ti-ps  msg="历史用量数据"></ti-ps>
				<un-usual></un-usual>
			</view>
			<view class="query-data">
				<ti-ps msg="用量列表"></ti-ps>
				<view  v-for="(item, index) in list" class="list"  :key="index">
					<text>序号：{{item.userId}}</text>
					<text>用量：{{item.userName}}</text>
					<text>单位：{{item.phoneNumber}}</text>
					<text>时间：{{item.email}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import headTop from "@/components/page-head/page-head.vue"
	import tiPs from "@/components/page-tips/tips.vue"
	import calenDar from "@/components/calendar.vue"
	import unUsual from"@/components/chat/line/unusual-judge.vue"
	export default {
		data() {
			return {
				list:[],
			}
		},
		components:{
			headTop,
			tiPs,
			calenDar,
			unUsual
		},
		methods: {
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
						uni.showToast({
							title:'网络出错'
						})
					}
				})
			}
		}
	}
</script>

<style>
.query-data{
	margin-top: 40upx;
}
.page{
	background-color: #f0f3f6;
	color: #4e6070;
	height: 100vh;
}
.query{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #FFFFFF;
	font-size: 24upx;
	padding: 16upx;
	margin: 20upx;
	border-radius: 16upx;
}
input{
	width: 400upx;
	border: 1upx #CCCCCC solid;
	border-radius: 6upx;
	margin-left: 20upx;
	height: 54upx;
	padding-left: 10upx;
}
.query-chat{
	margin-top: 20upx;
	background-color: #f0f3f6;
	padding: 10upx 20upx;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 24upx;
}
.query-data{
	margin-top: 20upx;
	background-color: #f0f3f6;
	padding: 10upx 20upx;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 24upx;
	
}
.list{
	width: 694upx;
	line-height: 20px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	border-radius: 16upx;
	background-color: #FFFFFF;
	text-align: left;
	border: 1px solid #FFFFFF;
	padding: 20upx 10upx;
	box-sizing: border-box;
	margin-bottom: 20upx;
	overflow: hidden;
	
}
.list text{
	flex: 1;
	width: 50%;
	min-width: 50%;
    max-width: 50%;
	font-size: 24upx;
	overflow:hiddren;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.more{
	display: flex;
	justify-content: center;
	font-size: 28upx;
	background-color: #F0F3F6;
}
</style>
