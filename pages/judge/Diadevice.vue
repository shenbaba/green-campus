<template>
	<view class="quota">
		<headTop title="设备详情" uRl="./allDiaDevice"></headTop>
		<view class="detail_title">
			<text>指标名称：{{list.diaDeviceName}}</text>
		</view>
		<view class="detail_msg">
			<text>异常类型：<text>{{list.diaDeviceType}}</text></text>
			<text>异常内容：<text>{{list.diaDeviceContent}}</text> </text>
			<text>设备ID： <text> {{list.deviceId}}</text></text>
			<text>诊断意见： <text>{{list.opinion}}</text></text>
			<text>意见确认： <text>{{list.opinionRe}}</text></text>
			<text>时间： <text>{{list.time}}</text></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{},
				listChild:{},
				key:[],
				value:[],
				index:'',
			}
		},
		onLoad(option){
			
			this.index = option.index
			
		},
		methods: {	
		},
		mounted() {
			uni.request({
				url:'/api/GreenCampusDia/oneDiaDevice',
				data:{
					id : this.index
				},
				success: (res) => {
					
					this.list=res.data.detail;
					this.listChild = this.list.diaQuotaContent;
					for(let item in this.listChild){
						this.key.push(item);
						this.value.push(this.listChild[item]);
					}
				},
				fail: () => {
					uni.showToast({
						title:'网络出错'
					})
				}
			})
		}
	}
</script>

<style lang="less">
.quota{
	background-color: #FFFFFF;
	padding-top: 120upx;
}
.detail_title{
	background-color: #FFFFFF;
	margin-top: 10upx;
	font-size: 30upx;
	padding: 10upx 20upx;
	font-weight: 500;
}
.table{
	padding: 20upx 30upx;
	background-color: #FFFFFF;
	font-size: 28upx;
	view{
		margin-top: 20upx;
		/* color: #5f6972; */
	}
}
.detail_msg{
	padding: 20upx 30upx;
	background-color: #FFFFFF;
	margin-top: 10upx;
	font-size: 28upx;
	display: flex;
	flex-direction: column;
	h3{
		margin: 0 auto;
	}
	text{
		margin-top: 20upx;
		color: #5f6972;
	}
}
</style>
