<template>
	<view class="electricity">
		<headTop title="电量电费" uRl="../index"></headTop>
		<view class="region_ele">
			<view class="region">
				<text><text >临潼 | </text><text style="color: #626971;margin-left: 10upx;">总表编号：48202F205445</text></text>
				<text style="color: #626971">陕西省西安市临潼区******变</text>
			</view>
			<icon type="" class="iconfont icon-arrow-right"></icon>
		</view>
		<view class="region_free">
			<view class="">
				<text style="color: #626971;">年度累计电量/电费</text>
				<text><text>{{yearEle[0].battery}}度/</text>{{yearFree[0].free}}元</text>
			</view>
			<view class="">
				<text style="color: #626971;">月电量/电费</text>
				<text><text>{{monthEle[0].battery}}度/</text>{{monthFree[0].free}}元</text>
			</view>
			<view class="">
				<text style="color: #626971;">本期累计电量(5月1日-至今)</text>
				<text>{{monthEle[0].battery}}度</text>
			</view>
		</view>
		<navigator url="./electticity_des">
			<view class="more_free">更多电量电费详情</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yearFree:[{free:0}],
				yearEle:[{battery:0}],
				monthFree:[{free:0}],
				monthEle:[{battery:0}]
			}
		},
		methods: {
			getDate(){
				uni.request({
					url:'http://118.178.126.209:8085/GreenCampus/free/all',
					data:{
						endTime:1609344000000,
						startTime:1577808000000,
						timeType:'month'
					},
					success: (res) => {
						this.yearFree[0].free=res.data.detail[0].free;
						this.monthFree[0].free = res.data.detail[6].free;
					},
					fail: () => {
						uni.showToast({
							title:'网络出错',
							icon:'none'
						})
					}
				});
				uni.request({
					url:'http://118.178.126.209:8085/GreenCampus/elec/allRegionElecSum',
					data:{
						endTime:1609344000000,
						startTime:1577808000000,
						timeType:'month'
					},
					success: (res) => {
						this.monthEle[0].battery =res.data.detail[6].battery
						this.yearEle[0].battery=res.data.detail[0].battery;
					}
				});
			}
		},
		onLoad() {
			this.getDate();
		}
	}
</script>

<style lang="less">
.electricity{
	background-color: #F0F3F6;
	font-size: 28upx;
	height: calc(100vh - 120upx);
	padding-top: 120upx;
	.region_ele{
		width: 90%;
		margin: 20upx auto;
		padding: 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		border-radius: 10upx;
		.region{
			display: flex;
			flex-direction: column;
			text{
				margin-bottom: 20upx;
			}
		}
		icon{
			font-size: 40upx;
			color: #626971;
		}
	}
	.region_free{
		background-color: #FFFFFF;
		width: 90%;
		margin: 20upx auto;
		padding: 20upx;
		border-radius: 10upx;
		view{
			display: flex;
			justify-content: space-between;
			padding: 20upx 0;
			border-bottom: 1upx #eeeeee solid;
		}
	}
	.more_free{
		background-color: #FFFFFF;
		color: #147FD1;
		text-align: center;
		padding: 30upx 20upx;
		width: 90%;
		margin: 0 auto;
		font-size: 32upx;
	}
}
</style>
