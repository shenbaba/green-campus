<template>
	<view class="chat">
		<view id="myChart" :style="{width: '720upx', height: '500upx'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seriesDate:[],
				yAxiDate:[],
			}
		},
		mounted() {
			this.getInfo();
		},
		methods: {
			getInfo(){
				uni.request({
					url:'/api/GreenCampus/elec/sortRegion',
					data:{
						timeType:'year',
						startTime:1577808000000,
						limit:9,
						endTime:1609344000000,
						orderType:'DES'
					},
					success: (res) => {
						res.data.detail.forEach((item)=>{
							this.yAxiDate.push(item.regionName);
							this.seriesDate.push(item.battery);
						});
						this.drawLine();
					}
				})
				
			},
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'),'light')
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['2020年']
					},
					grid: {
						left: '1%',
						right: '4%',
						bottom: '1%',
						containLabel: true
					},
					xAxis: {
						name:'能耗',
						type: 'value',
						boundaryGap: [0,1],
						nameLocation: 'end'
					},
					yAxis: {
						name:'区域',
						type: 'category',
						data: this.yAxiDate,
						width:1
					},
					series: [
						{
							name: '2020年',
							type: 'bar',
							data: this.seriesDate,
							color:'#008DFF'
						}
					]
				});
			}
		},
	}
</script>

<style>

</style>
