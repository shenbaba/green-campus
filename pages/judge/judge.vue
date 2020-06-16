<template>
	<view class="judge-page">
		<head-top title="用能诊断" :bool="false"></head-top>
		<view class="judge-content">
			<view class="judge add-judge">
				<navigator url="./allDiaBattery"><ti-ps msg="能耗诊断" :bool="true"></ti-ps></navigator>
				<view class="allDiaBattery"  v-for="(item, index) in list" :key="index">
					<text>诊断内容：{{item.diaBatteryName}}</text>
					<!-- <text>诊断时间：{{item.time}}</text> -->
					<!-- <icon class="iconfont icon-arrow-right" type=""></icon> -->
				</view>
			</view>
			<view class="judge unusual-judge">
				<navigator url="./allDiaQuota"><ti-ps msg="指标诊断" :bool="true"></ti-ps></navigator>
				<view class="unusual-chat" v-for="(item, index) in listDiaQuota" :key="index">
					<text>指标名称：{{item.diaQuotaName}}</text>
				</view>
			</view>
			<view class="judge equip-judge">
				<navigator url="./allDiaDevice"><ti-ps msg="设备诊断" :bool="true"></ti-ps></navigator>
				<view class="unusual-chat" v-for="(item, index) in listDevice" :key="index">
					<text>设备名称：{{item.diaDeviceName}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	import headTop from '@/components/page-head/page-head.vue'
	import tiPs from "@/components/page-tips/tips.vue"
	import unUsual from"@/components/chat/line/unusual-judge.vue"
	export default {
		data() {
			return {
				list:[],
				listDiaQuota:[],
				listDevice:[]
			}
		},
		components:{
			headTop,
			tiPs,
			unUsual
		},
		methods: {
			getDiaBattery(){
				uni.request({
					url:'http://118.178.126.209:8085/GreenCampusDia/allDiaBattery',
					data:{
						pageNo : 1,
						pageSize : 5
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
			},
			getDiaQuota(){
				uni.request({
					url:'http://118.178.126.209:8085/GreenCampusDia/allDiaQuota',
					data:{
						pageNo : 1,
						pageSize : 5
					},
					success: (res) => {
					
						this.listDiaQuota = res.data.detail;
				
					},
					fail: () => {
						uni.showToast({
							title:'网络出错',
							icon:'none'
						})
					}
				})
			},
			getDiaDevice(){
				uni.request({
					url:'http://118.178.126.209:8085/GreenCampusDia/allDiaDevice',
					data:{
						pageNo : 1,
						pageSize : 5
					},
					success: (res) => {
						this.listDevice = res.data.detail;
				
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
		onShow(){
			this.getDiaBattery();
			this.getDiaQuota(),
			this.getDiaDevice()
		}
	}
</script>

<style lang="less">
.judge-page{
	background-color: #f0f3f6;
	padding-bottom: 20upx;
	padding-top: 120upx;
}
.judge{
	background-color: #FFFFFF;
	margin-top: 20upx;
	padding: 20upx;
	font-size: 24upx;
}
.allDiaBattery,.unusual-chat{
	display: flex;
	justify-content: flex-start;
	font-size: 28upx;
	padding-left: 20upx;
	align-items: center;
	color: #606a73;
	padding: 0 20upx;
	
	text{
		margin-bottom: 10upx;
		width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
.suggest{
	margin-top: 20upx;
	padding: 10upx;
	border-top: 1upx #C8C7CC solid;
}
</style>
