<template>
	<view class="content">
		<view class="header">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="array" >
							<view class="uni-input">{{array[index]}}</view>
						</picker>
						<icon type="" class="iconfont icon-arrowdown"></icon>
					</view>
				</view>
			</view>
			<view class="header_r">
				<view class="scan_code" @click="scanCode">
					<icon type="" class="iconfont icon-saoma"></icon>
					<text>扫一扫</text>
				</view>
				<view class="scan_code">
					<icon type="" class="iconfont icon-dkw_xiaoxi"></icon>
					<text>消息</text>
				</view>
				<view class="scan_code">
					<icon type="" class="iconfont icon-kefu"></icon>
					<text>客服</text>
				</view>
			</view>
		</view>
		
		<view class="balance">
			<view class="region_name">
				<icon type="" class="iconfont icon-quyuguanli"></icon>
				<text>临潼</text>
			</view>
			<navigator url="balance">
				<view class="balance_n">
					<view>余额(元)</view>
					<view class="number">
						<text class="yuan">6</text>
						<text class="dian">.</text>
						<text class="jiao">6</text>
						<text class="fen">6</text>
					</view>
					<view class="redirect">
						预计可用<text>_</text>天
					</view>
				</view>
			</navigator>
		</view>
		<view class="nav_free">
			<navigator url="./regionCost">
				<view class="free_bill">
					<icon type="" class="iconfont icon-zhangdan"></icon>
					<text>电费账单</text>
				</view>
			</navigator>
			<navigator url="./enery-analyze">
				<view class="enery_analyze">
					<icon type="" class="iconfont icon-icon-"></icon>
					<text>用能分析</text>
				</view>
			</navigator>
			<navigator url="../fee/equipmentCost">
				<view class="load">
					<icon type="" class="iconfont icon-fuhe"></icon>
					<text>设备能耗</text>
				</view>
			</navigator>
			<navigator url="pay/pay">
				<view class="top_free">
					<icon type="" class="iconfont icon-jiqiren"></icon>
					去交费
				</view>
			</navigator>
		</view>
		<view class="banner">
			<navigator url="./electricity/electricity">
				<view class="banner_list">
					<icon class="iconfont icon-dianbiao_shiti" type=""></icon>
					<text>电量电费</text>
				</view>
			</navigator>
			<navigator url="../fee/WorkHolidayFree">
				<view class="banner_list">
					<icon class="iconfont icon-nengyuannenghaoguanli" type=""></icon>
					<text>节假日用能</text>
				</view>
			</navigator>
			<navigator url="../energy/regionEnergy">
				<view class="banner_list">
					<icon class="iconfont icon-qushi" type=""></icon>
					<text>能耗排名</text>
				</view>
			</navigator>
			<navigator url="./quota/quota">
				<view class="banner_list">
					<icon class="iconfont icon-gantanhaotishi-kuai" type=""></icon>
					<text>指标信息</text>
				</view>
			</navigator>
			<navigator url="./isReadAlarm">
				<view class="banner_list">
					<icon class="iconfont icon-messagecenter" type="" style="color: #d81e06;"></icon>
					<text>未读告警</text>
				</view>
			</navigator>
			<navigator url="">
				<view class="banner_list">
					<icon class="iconfont icon-jilumian" type="" style="color: #fa9f56;"></icon>
					<text>服务记录</text>
				</view>
			</navigator>
			<navigator url="">
				<view class="banner_list">
					<icon class="iconfont icon-rongqi222" type="" style="color: #7dc5eb;"></icon>
					<text>需量值变更</text>
				</view>
			</navigator>
			<navigator url="">
				<view class="banner_list">
					<icon class="iconfont icon-analysis-chart" type=""></icon>
					<text>更多</text>
				</view>
			</navigator>
		</view>
		<!-- <view class="actions">
			<ti-ps msg="区域能耗分析"></ti-ps>
		</view> -->
	</view>
</template>

<script>
	import headTop from '@/components/page-head/page-head.vue'
	import banNer from '@/components/banner.vue'
	import tiPs from "@/components/page-tips/tips.vue"
	export default {
		data() {
			return {
				title: 'Hello',
				array: ['临潼', '雁塔', '秦汉'],
				index: 0,
			}
		},
		components: {
			headTop,
			banNer,
			tiPs
		},
		onLoad() {

		},
		methods: {
			next() {
				//跳转页面，该方法会将地址加入堆栈
				uni.navigateTo({
					url: '../fee/totalCost',
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			bindPickerChange: function(e) {
				
				this.index = e.target.value
			},
			scanCode(){
				uni.scanCode({
					success: (res) => {
						 uni.showToast({
						 	title:'扫一扫'
						 })
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.content{
		font-size: 26upx;
		color: #FFFFFF;
		position: relative;
		overflow: hidden;
		padding-top: 160upx;
		background-color: #F0F3F6;
	}
	.header {
		position: fixed;
		box-sizing: border-box;
		top:0;
		width: 750upx;
		height: 160upx;
		background-color: #147fd1;
		padding-top: 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left:20upx ;
		padding-right: 20upx;
		border-bottom: 1px #4093d7 solid;
		.header_r{
			display: flex;
			justify-content: space-between;
			view{
				margin-right: 20upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24upx;
				icon{
					font-size: 50upx;
				}
			}
		}
	}
	.uni-list{
		width: 190upx;
		.uni-list-cell{
			background-color: rgba(0,0,0,0);
			border: none;
			color: #FFFFFF;
			padding: 0;
			.uni-list-cell-db{
				width: 200upx;
				border: none;
				display: flex;
				justify-content: space-around;
				padding: 0;
			}
			.uni-input{
				font-size: 34upx;
			}
		}
	}
	.balance{
		box-sizing: border-box;
		width: 100vw;
		height: 320upx;
		padding:30upx 20upx;
		background-image: linear-gradient(#147fd1, #6caef8);
		.region_name{
			margin-left: 16upx;
			width: 120upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
		.balance_n{
			margin-left: 100upx;
			margin-top: 20upx;
			width: 180upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 24upx;
			view{
				margin-bottom: 10upx;
			}
			.number{
				width: 200upx;
				display: flex;
				justify-content: center;
				align-items: baseline;
				line-height: 50upx;
				text{
					margin-left: 3upx;
				}
				.yuan{
					font-size: 50upx;
				}
			}
		}
	}
	.nav_free{
		height: 160upx;
		background-image: linear-gradient(to right ,#3468d6, #67a3e9);
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-bottom: 30upx;
		view{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			icon{
				font-size: 46upx;
				margin-bottom: 10upx;
			}
		}
		.top_free{
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			height: 40upx;
			padding: 10upx 20upx 10upx 4upx;
			font-size: 30upx;
			border-radius: 40upx;
			background-color: #4fd4ff;
			icon{
				background-color: #31c4f0;
				border-radius: 50%;
				margin-left: 6upx;
				font-size: 50upx;
			}
		}
	}
	.banner{
		color: #64696d;
		position: relative;
		left: 0;
		top:-30upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding:30upx 20upx;
		border-radius: 35upx 35upx 0 0 ;
		.banner_list{
			width: 150upx;
			margin-bottom: 30upx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			icon{
				font-size: 50upx;
				margin-bottom: 20upx;
			}
			.icon-dianbiao_shiti{
				color: #25c4e4;
				
			}
			.icon-nengyuannenghaoguanli{
				color: #12b5de;
			}
			.icon-qushi{
				color: #718ff1;
			}
			.icon-gantanhaotishi-kuai{
				color: #9cf889;
			}
		}
	}
	.actions{
		color: #3b4044;
		background-color: #FFFFFF;
		padding: 30upx;
		margin-top: -10upx;
	}
</style>
