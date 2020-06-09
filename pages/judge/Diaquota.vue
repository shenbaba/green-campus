<template>
	<view class="quota">
		<headTop title="指标详情" uRl="./allDiaQuota"></headTop>
		<view class="detail_title">
			<text>指标名称：{{list.diaQuotaName}}</text>
		</view>
		<view class="table"  v-for="(item, index) in key" :key="index">
			<view>实际能耗：{{item}}</view>
			<view>诊断时间：{{value[index]}}</view>
			
		</view>
		<view class="detail_msg">
			<text>所属区域：<text>{{list.regionName}}</text></text>
			<text>指标限值：<text>{{list.quotaLimit}}kw/h</text> </text>
			<text>诊断意见： <text> {{list.opinion}}</text></text>
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
				url:'/api/GreenCampusDia/oneDiaQuota',
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
