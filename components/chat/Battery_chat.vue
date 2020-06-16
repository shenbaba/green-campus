<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<canvas canvas-id="battery" id="battery" class="charts" disable-scroll=true @touchstart="touchColumn" @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
		</view>
	</view>
</template>

<script>
	// 引入uCharts 方法组件。
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	// 定义全局变量
	var _self;
	var battery = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
			}
		},
		props:{
			inde:''
		},
		// 页面加载执行的函数
		mounted() {
			_self = this;
			// uni.upx2px(750) 这是uni-app自带的自适应，以750的尺寸为基准。动态变化
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			// 获取数据，发请求
			getServerData() {
					uni.request({
						url:'http://118.178.126.209:8085/GreenCampusDia/oneDiaBattery',
						data:{
							id : this.inde
						},
						// 请求成功的回调函数
						success: function(res) {
							
							let json = res.data.detail.diaBatteryContent;
							let Column = {
								categories:[],
								series:[{
									'name' :'能耗',
									'color':'#40B1FF',
									'data':[],
								}]
							}
							let arr = [];
							for(let key in json){
								arr.push(key);
							}
							Column.series[0].data = arr;
							Column.categories=['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
							// 找到id为canvasColumn的块
							 _self.showColumn("battery", Column);
						// 请求失败的回调函数
						fail: () => {
							_self.tips="网络错误，小程序端请检查合法域名";
						}
					}
				})	
			},
			// 展示图标的函数 接收参数，一个块的id,一个数据
			showColumn(canvasId, chartData) {
				battery = new uCharts({
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
						gridType: 'solid',
						itemCount:8,
						scrollAlign:'left',
						
					},
					// y轴显示的内容
					yAxis: {
						gridType: 'solid',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 6,
						min: 0,
						max: 100,
						format: (val) => {
							return val.toFixed(0)
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
				battery.scrollStart(e);
			},
			moveColumn(e) {
				
				battery.scroll(e);
			},
			touchEndColumn(e) {
				battery.scrollEnd(e);
				battery.touchLegend(e, {
					animation:true,
				});
				battery.showToolTip(e, {
					format: function (item, category) {
						return  parseInt(item.data) +'千瓦' 	
					}
				});
			},
		}
	}
</script>

<style>
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
