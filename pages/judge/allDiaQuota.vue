<template>
	<view class="Battery">
		<headTop title="指标诊断" uRl="./judge"></headTop>
		<view class="query">
			<text>诊断查询:</text>
			<input type="text" style="font-size: 24upx;" placeholder="诊断名称" v-model="diaQuotaname"/>
			<button @click="getSearch()">查询</button>
		</view>
		<view class="allDiaBattery"  v-for="(item, index) in list" :key="index">
			<text>诊断内容：{{item.diaQuotaName}}</text>
			<!-- <text>诊断时间：{{item.time}}</text> -->
			<icon class="iconfont icon-arrow-right" type="" @click="Quota(index)"></icon>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				list:[],
				diaQuotaname:''
			}
		},
		methods: {
			getSearch(){
				this.list = []
				uni.request({
					url:'/api/GreenCampusDia/searchDiaQuota',
					data:{
						name:this.diaQuotaname
					},
					success: (res) => {
					
						this.list = res.data.detail;
				
					},
					fail: () => {
						uni.showToast({
							title:'网络出错'
						})
					}
				})
			},
			getDiaQuota(){
				uni.request({
					url:'/api/GreenCampusDia/allDiaQuota',
					data:{
						pageNo : 1,
						pageSize : 100
					},
					success: (res) => {
						
						this.list = res.data.detail;
				
					},
					fail: () => {
						uni.showToast({
							title:'网络出错'
						})
					}
				})
			},
			Quota(index){
				
				uni.navigateTo({
					url:`Diaquota?index=${index+1}`
				})
			}
		},
		onShow(){
			this.getDiaQuota()
		}
	}
</script>

<style lang="less">
	@import url("../../static/admin.css");
.Battery{
	background-color: #F0F3F6;
	font-size: 28upx;
	padding-top: 120upx;
}
.allDiaBattery{
	padding: 20upx 30upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #606a73;
	background-color: #FFFFFF;
	border: 1px #F0F3F6 solid;
	text{
		padding: 0 20upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

}
</style>
