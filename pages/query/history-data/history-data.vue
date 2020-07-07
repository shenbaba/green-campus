<template>
	<view class="history-page page" style="background-color: #FFFFFF;">
		<head-top title="实时区域能耗" :bool="true" uRl="../../../pages/query/query-data"></head-top>
		<canvas  style="width: 400upx; height: 400upx; margin: 0 auto; background-color: #FFFFFF;text-align: center;" canvas-id="firstCanvas"></canvas>
		<view class="now_data">
			<ti-ps msg="实时区域总能耗"></ti-ps>
			<view class="">
				<text>本小时能耗值：{{list.batteryHour}}</text>
				<text>本日累计能耗值：{{list.batteryDay}}</text>
				<text>本月累计能耗值：{{list.batteryMonth}}</text>
				<text>本年累计能耗值：{{list.batteryYear}}</text>
			</view>
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
				list: [ ],
				loading: true,
				userid: ''
			}
		},
		components: {
			headTop,
			tiPs,
			calenDar
		},
		onShow() {
			this.times();
			this.getregion();
		},
		methods: {
			times() {
				setInterval(function(){
				var oGc = uni.createCanvasContext('firstCanvas');
				oGc.rect(200, 0, 200, 200);
				var newT = new Date();
				//newT.getMinutes()/2,分钟每走一圈,时针转30度
				var hour = newT.getHours() * 30 + newT.getMinutes() / 2 - 90;
				//newT.getSeconds()/10,秒针走完一圈,分针转6度.
				var min = newT.getMinutes() * 6 + newT.getSeconds() / 10 - 90;
				var second = newT.getSeconds() * 6 - 90;
				//制作小刻度
				for (var i = 0; i < 60; i++) {
					oGc.beginPath();
					oGc.moveTo(100, 100);
					oGc.arc(100, 100, 75, i * 6 * Math.PI / 180, (i + 1) * 6 * Math.PI / 180, false);
					oGc.stroke();
					oGc.closePath();
				}
				//覆盖表盘
				oGc.beginPath();
				oGc.setFillStyle('#FFFFFF');
				oGc.moveTo(100, 100);
				oGc.arc(100, 100, 70, 0, 360 * Math.PI / 180, false);
				oGc.fill();
				oGc.closePath();
				//大刻度
				for (var i = 0; i < 12; i++) {
					oGc.beginPath();
					oGc.moveTo(100, 100);
					oGc.setFillStyle("#FFFFFF");
					oGc.arc(100, 100, 75, i * 30 * Math.PI / 180, (i + 1) * 30 * Math.PI / 180, false);
					oGc.stroke();
					oGc.closePath();
				}
				//覆盖大刻度
				oGc.beginPath();
				oGc.setFillStyle("#FFFFFF");
				oGc.moveTo(100, 100);
				oGc.arc(100, 100, 65, 0, 360 * Math.PI / 180, false);
				oGc.fill();
				oGc.closePath();
				//时针
				oGc.beginPath();
				
				oGc.setLineWidth(6)
				oGc.moveTo(100, 100);
				oGc.arc(100, 100, 40, hour * Math.PI / 180, hour * Math.PI / 180, false);

				oGc.closePath();
				oGc.stroke();
				//分针
				oGc.beginPath();
				oGc.setStrokeStyle("orange")
				oGc.setLineWidth(4)
				oGc.moveTo(100, 100);
				oGc.arc(100, 100, 50, min * Math.PI / 180, min * Math.PI / 180, false);

				oGc.closePath();
				oGc.stroke();
				//秒针
				oGc.beginPath();
				oGc.setStrokeStyle("red")
				oGc.setLineWidth(2)
				oGc.moveTo(100, 100);
				oGc.arc(100, 100, 65, second * Math.PI / 180, second * Math.PI / 180, false);
				oGc.closePath();
				oGc.stroke();
				//圆心覆盖
				oGc.beginPath();
				oGc.setFillStyle("red")
				oGc.moveTo(100, 100);
				oGc.arc(100, 100, 2, 0, 360 * Math.PI / 180, false);
				oGc.fill();
				oGc.closePath();
				oGc.draw();
				},1000)
			},
			getregion(){
				uni.request({
					url:'/apl/GreenCampus/real/region',
					data: {
						regionId: 1
					},
					success: (res) => {
						console.log(res);
						this.list = res.data.detail;
					},
					fail: () => {
						uni.showToast({
							title: '网络出错'
						})
					}
				})
			}
		},

	}
</script>

<style lang="less">
	@import url("../../../static/admin.css");
	.now_data{
		padding: 10upx 20upx;
		view{
			display: flex;
			flex-direction: column;
			font-size: 28upx;
			text{
				margin-left: 20upx;
				margin-top: 20upx;
			}
		}
	}
</style>
