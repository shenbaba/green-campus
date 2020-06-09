<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<canvas canvas-id="dayEle" id="dayEle" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}"
			 @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	var _self;
	var dayEle = null;
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
		mounted() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			renderTime(date) {
				let dateee = new Date(date).toJSON();
				return  new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').split('T')[0].split('-')[1]+'-'+ new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').split('T')[0].split('-')[2].split('')[0] + new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').split('T')[0].split('-')[2].split('')[1];
			},
			getServerData() {
				let endtime = new Date().valueOf();
				let starttime = endtime - 30*24*60*60*1000;
				uni.request({
				url: '/api/GreenCampus/elec/allRegionElecSum',
					data:{
						endTime : endtime,
						startTime : starttime,
						timeType:'day'
					},
					success: function(res) {
						
						let LineA = {
							categories: [],
							series: [{
								"name": "日用电：千瓦时",
								"data": []
							}]
						};
						let len = res.data.detail.length;
						for(let i =1;i<len;i++){
							LineA.categories.push(_self.renderTime(res.data.detail[i].time));
							LineA.series[0].data.push(res.data.detail[i].battery);
						}
						
						LineA.categories.reverse();
						LineA.series[0].data.reverse()
						

						_self.showLineA("dayEle", LineA);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				});
			},
			showLineA(canvasId, chartData) {
				dayEle = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					colors: ['#147fd1'],
					fontSize: 11,

					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					dataLabel: false,
					dataPointShape: true,
					dataPointShapeType: 'hollow',
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true,
					xAxis: {
						type: 'calibration',
						gridColor: '#ffffff',
						//网格线型：dash 虚线  solid 实线
						gridType: 'dash',
						itemCount: 8,
						scrollAlign: 'left',
						//disableGrid:true
					},
					yAxis: {
						gridType: 'solid',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 0,
						max: 3000,
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					}
				});

			},
			touchLineA(e) {
				dayEle.scrollStart(e);
			},
			moveLineA(e) {
				dayEle.scroll(e);
			},
			touchEndLineA(e) {
				dayEle.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				dayEle.touchLegend(e);
				dayEle.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			changeData() {
				if (isJSON(_self.textarea)) {
					let newdata = JSON.parse(_self.textarea);
					dayEle.updateData({
						series: newdata.series,
						categories: newdata.categories,
						scrollPosition: 'right',
						animation: false
					});
				} else {
					uni.showToast({
						title: '数据格式错误',
						image: '../../../static/images/alert-warning.png'
					})
				}
			}
		},
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
