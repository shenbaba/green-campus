<template>
	<view class="qiun-column">
		<view class="qiun-charts">
			<canvas canvas-id="canvasColum" id="canvasColum" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" disable-scroll=true @touchstart="touchColumn" @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
		</view>
	</view>
</template>

<script>
	// 引入uCharts 方法组件。
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	// 定义全局变量
	var _self;
	var canvasColum = null;
	export default {
		props:{
			uRl:'',
			category:{
				type:String
			},
			d:{},
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
					uni.request({
						// 请求地址
						url:this.uRl,
						// 请求参数
						data:this.d,
						// 请求成功的回调函数
						success: function(res) {
							let Column = {
								categories: [],
								series: [{
									'name' :'每日费用',
									'color':'#40B1FF',
									'data':[]
								}]
							}
							
							let daylen = res.data.detail.length;
							for(let i = 1 ; i<daylen;i++){
								if(_self.category == 'free'){
									Column.series[0].data.push(parseFloat(res.data.detail[i].free) +'万');
								}else if(_self.category == 'enery'){
									Column.series[0].data.push(parseFloat(res.data.detail[i].free) +'万');
									Column.series[0].name = '每日能耗';
								}
								Column.categories.push(i);
						
							}
							_self.showColumn("canvasColum", Column);
						// 请求失败的回调函数
						},
						fail: () => {
							_self.tips="网络错误，小程序端请检查合法域名";
						},
				})
			
			},
			// 展示图标的函数 接收参数，一个块的id,一个数据
			showColumn(canvasId, chartData) {
				canvasColum = new uCharts({
					$this: _self,
					canvasId: canvasId,
					// 图标类型
					type: 'column',
					fontSize: 11,
					legend: {
						show:true,
						float:'center',
						itemGap:30,
						padding:5,
						margin:5,
						//backgroundColor:'rgba(41,198,90,0.2)',
						//borderColor :'rgba(41,198,90,0.5)',
						borderWidth :1
					},
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,//像素比
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
						itemCount:12,
						scrollAlign:'left',
					},
					// y轴显示的内容
					yAxis: {
						type:'calibration',
						gridType: 'solid',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						enablesScroll:true,
						scrollShow:true,
						min: 0,
						max: 3000,
						format: (val) => {
							return val.toFixed(0) + '万'
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
			touchColumn(e){
				canvasColum.scrollStart(e);
			},
			moveColumn(e) {
				canvasColum.scroll(e);
			},
			touchEndColumn(e) {
				canvasColum.scrollEnd(e);
				canvasColum.touchLegend(e, {
					animation:true,
				});
				canvasColum.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
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
