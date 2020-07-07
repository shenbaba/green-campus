<template>
	<view class="quota">
		<headTop title="指标信息" uRl=../index></headTop>
		<view class="content">
			<view class="" v-for="(item, index) in list " :key = "index">
				<text>指标名称：{{item.quotaName}}</text>
				<text>指标类型：{{item.quotaType}}</text>
				<text>能耗类型：{{item.batteryType}}</text>
				<text>能耗单位：{{item.batteryUnit}}</text>
				<view class="quota_date">
					<text>实际能耗：<text style="color: #008DFF;">{{item.batteryActual}}</text></text>
					<text>指标限值：<text style="color: #f2b98c ;">{{item.quotaLimit}}</text></text>
					<text>限值类型：{{item.quotaLimitType}}</text>
					<text>指标等级：<text style="color: #F65343;">{{item.quotaDegree}}</text></text>
					<text>指标时间：{{item.queryTime}}</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				list:[]
			}
		},
		components:{
		
		},
		methods: {
			getQUota(){
				uni.request({
					url:'/api/GreenCampus/quota/allQuota',
					data:{
						pageNo : 1,
						pageSize:10,
						quotaType:'月指标',
						time:1580486400000
					},
					success: (res) => {
						
						this.list = res.data.detail;
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
		mounted() {
			this.getQUota();
		}
	}
</script>

<style lang="less">
.quota{
	background-color: #F0F3F6;
	padding-top: 120upx;
	.content{
		margin-top: 10upx;
		
		
		font-size: 28upx;
		view{
			display: flex;
			justify-content: space-between;
			padding: 20upx 30upx;
			background-color: #FFFFFF;
			width: 694upx;
			line-height: 20px;
			flex-wrap: wrap;
			margin-bottom: 30upx;
			text{
				margin-bottom: 20upx;
			}
			.quota_date{
				display:flex;
				flex-direction: column;
			}
		}
	}
}
</style>
