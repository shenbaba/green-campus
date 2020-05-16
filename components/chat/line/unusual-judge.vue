<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
			 :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	var _self;
	var canvaLineA = null;
	var lastMoveTime = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: '',
				Interactive: '', //交互显示的数据
			}
		},
		mounted(){
			_self = this;
			this.cWidth = uni.upx2px(670);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData() {
				/* uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data: {},
					success: function(res) {
						console.log(res.data.data)
						let LineA = {
							categories: [],
							series: []
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						LineA.categories = res.data.data.LineA.categories;
						LineA.series = res.data.data.LineA.series;

						//第二根线为虚线的设置
						LineA.series[1].lineType = 'dash';
						LineA.series[1].dashLength = 10;
						_self.textarea = JSON.stringify(res.data.data.LineA);
						_self.showLineA("canvasLineA", LineA);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				}); */
				let LineA = {
					categories: [],
					series: []
				};
				LineA.categories = ["1:00", "2:00","3:00", "4:00", "5:00", "6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00",'22:00',"23:00","24:00"];
				LineA.series = [{
					"name": "临潼校区用能异常",
					"data": [35, 8, 25, 37, 4, 20, 21, 31, 23, 23,12,21,70, 40, 65, 100, 44, 68,76,78,79,70,89,65]
				}];
				_self.showLineA("canvasLineA", LineA);
			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					colors: ['#40B1FF', '#f04864', '#8543e0', '#90ed7d'],
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8,
						scrollShow:true,
						//显示数量
						itemCount:10,
						scrollAlign:'left',
						//disableGrid:true
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'curve'
						}
					}
				});

			},
			touchLineA(e){
				canvaLineA.scrollStart(e);
			},
			moveLineA(e) {
				canvaLineA.scroll(e);
			},
			touchEndLineA(e) {
				canvaLineA.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaLineA.touchLegend(e);
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
		},
	}
</script>

<style>
	.qiun-charts {
		width: 670upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 670upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
