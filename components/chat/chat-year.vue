<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" disable-scroll=true @touchstart="touchColumn" @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
		</view>
	</view>
</template>

<script>
	// 引入uCharts 方法组件。
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	// 定义全局变量
	var _self;
	var canvasColumn = null;
	export default {
		props:{
			d:{
				type:Array
			}
		},
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
				
				let Column = {
					categories: [],
					series: [{
						'name' :'日费用',
						'color':'#40B1FF',
						'data':[]
					}]
				};
				let le =this.d.length;
				for(let i = 1;i<le;i++){
				
					
					 Column.series[0].data.push(this.d[i].free.toFixed(2));
					Column.categories.push(i);
				}
				_self.showColumn("canvasColumn", Column);
			},
			// 展示图标的函数 接收参数，一个块的id,一个数据
			showColumn(canvasId, chartData) {
				canvasColumn = new uCharts({
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
						splitNumber: 5,
						min: 0,
						max: 100,
						format: (val) => {
							return val.toFixed(0) + '元'
						}
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					//柱状图图形宽度
					extra: {
						column: {
							width:10
						}
					}
				});

			},
			// 点击图表显示的内容
			touchColumn(e){
				canvasColumn.scrollStart(e);
			},
			moveColumn(e) {
				
				canvasColumn.scroll(e);
			},
			touchEndColumn(e) {
				canvasColumn.scrollEnd(e);
				canvasColumn.touchLegend(e, {
					animation:true,
				});
				canvasColumn.showToolTip(e, {
					format: function (item, category) {
						return  item.data +'元' 	
					}
				});
			},
		}
	}
</script>

<style>
.qiun-charts {
		width: 700upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 700upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
