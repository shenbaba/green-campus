<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<canvas canvas-id="Column" id="Column" class="charts"  disable-scroll=true @touchstart="touchColumn" @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
		</view>
	</view>
</template>

<script>
	// 引入uCharts 方法组件。
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	// 定义全局变量
	var _self;
	var Column = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
			}
		},
		// 页面加载执行的函数
		mounted() {
			_self = this;
			// uni.upx2px(750) 这是uni-app自带的自适应，以750的尺寸为基准。动态变化
			this.cWidth = uni.upx2px(700);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			// 获取数据，发请求
			getServerData() {
				uni.request({
					// 请求地址
					url: '/api/GreenCampus/elec/getOneRegion',
					// 请求参数
					data: {
						endTime: 1609344000000,
						startTime: 1577808000000,
						timeType: 'month',
						regionId:1
					},
					// 请求成功的回调函数
					success: function(res) {
						
						let Column = {
							categories: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"],
							series: [{
								"name": "2019",
								"data": [0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0],
								"color":'#288cd8'
							}, {
								"name": "2020",
								"data": [],
								"color":'#67a3e9'
							}]
						};
					 	let len = res.data.detail.length; 
						 for (let i = 1; i < len; i++) {
						   Column.series[1].data.push(res.data.detail[i].battery);
						} 
						_self.showColumn("Column", Column);
					},
					// 请求失败的回调函数
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				});
			},
			// 展示图标的函数 接收参数，一个块的id,一个数据
			showColumn(canvasId, chartData) {
				Column = new uCharts({
					$this: _self,
					canvasId: canvasId,
					// 图标类型
					type: 'column',
					fontSize: 11,
					legend: {
						show: true
					},
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio, //像素比
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true,
					// x轴显示的内容
					xAxis: {
						type: 'calibration',
						gridColor: '#ffffff',
						//网格线型：dash 虚线  solid 实线
						gridType: 'dash',
						itemCount:8,
						scrollAlign:'left',
					},
					// y轴显示的内容
					yAxis: {
						gridType: 'solid',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 6,
						min: 10,
						max: 10000,
						format: (val) => {
							return val.toFixed(0)
						}
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					//柱状图图形宽度
					extra: {
						column: {
							width: 10
						}
					}
				});

			},
			// 点击图表显示的内容
			touchColumn(e){
				Column.scrollStart(e);
			},
			moveColumn(e) {
				Column.scroll(e);
			},
			touchEndColumn(e) {
				Column.scrollEnd(e);
				Column.touchLegend(e, {
					animation:true,
				});
				Column.showToolTip(e, {
					format: function (item, category) {
						return  item.data +'度' 	
					}
				});
			},
		}
	}
</script>

<style scoped>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
		
	}
</style>
