<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<canvas canvas-id="regionRate" id="regionRate" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
			 :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie"></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	var _self;
	var regionRate = null;
	export default {
		props:{
			data:''
		},
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: ''
			}
		},
		mounted(){
			_self = this;
			this.cWidth = uni.upx2px(700);
			this.cHeight = uni.upx2px(600);
			this.getServerData();	
		},
		methods: {
			getServerData(){
				//接受数据
						let Pie={series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						let len = this.data.length;
						for(let i =0; i<len; i++){
							let json = {};
							json.name = this.data[i].type;
							json.data = this.data[i].battery;
							Pie.series.push(json);
						}
						
						_self.showPie("regionRate",Pie);
 
			},
			showPie(canvasId, chartData) {
				regionRate = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							border: true,
							borderColor: '#FFFFFF',
							borderWidth: 3
						}
					},
				});
			},
			touchPie(e) {
				regionRate.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data+'kw/h'
					}
				});
				regionRate.touchLegend(e, {
					animation: true
				});
			},

		}
	}
</script>

<style>
.qiun-charts {
		width: 750upx;
		height: 600upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 600upx;
		background-color: #FFFFFF;
	}
</style>
