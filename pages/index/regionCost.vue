<template>
	<view class="regionCost">
		<head-top :title="title" uRl="./index"></head-top>
		<view class="region_info">
			<text>临潼校区</text>
			<text>总表编号：48202F205445</text>
			<text>陕西省西安市临潼区</text>
		</view>
		<view class="select_time">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
						<icon type="" class="iconfont icon-arrowdown"></icon>
					</view>
				</view>
			</view>
			<view class="">|</view>
			<view class="hidden_scroll">
				<view class="select_month">
					<view v-for="(item, index) in month" :key="index" 
					 :class="{active:show == item}"
					 @click="getInfo(item)">{{item}}</view>
				</view>
			</view>
		</view>
		<view class="Money">
			<view class="total_money">
				<view class="Money_n">
					<text style="color: #0c82f0; font-size: 40upx;" >{{msgFormSon[0]}}</text>
					<text style="font-size: 26upx; color: #626971;">合计金额（元）</text>
				</view>
				<view class="dosage">
					<text style="font-size: 26upx; color: #626971;">抄表日期：<text style="font-size: 26upx; color: #000;">{{msgFormSon[1]}}</text></text>
					<text style="font-size: 26upx; color: #626971;">供电单位：<text style="font-size: 26upx; color: #000;">临潼供电所</text></text>
				</view>
			</view>
			<view class="total_ele">
				<view class="Money_n">
					<text style="color: #0c82f0; font-size: 40upx;">{{msgFormSon[2]}}</text>
					<text style="font-size: 26upx; color: #626971;">合计电量（千瓦时）</text>
				</view>
				<view class="dosage">
					<text style="font-size: 26upx; color: #626971;">去年同期电量<text style="font-size: 26upx; color: #0c82f0;">0</text>千瓦时</text>
					<text style="font-size: 26upx; color: #626971;">同比增长<text style="font-size: 26upx; color: #0c82f0;">100%</text></text>
				</view>
			</view>
		</view>
		<view class="ladder">
			<text style=" text-align: center;display: block;color: #616161;font-size: 30upx;">阶梯电量使用情况</text>
			<ProgressBar :Width="99" Type="aqua" :Vice="false" ></ProgressBar>
			<view class="ladder_list">
				<view class="ladder_1">
					<text style="color: #a2d995;font-size: 30upx;">0-2160</text>
					<text style="color: #919191;margin-top: 10upx;">第一阶梯</text>
				</view>
				<view class="ladder_2">
					<text style="color: #eddb99;font-size: 30upx;">2160-4200</text>
					<text style="color: #919191;margin-top: 10upx;">第二阶梯</text>
				</view>
				<view class="ladder_3">
					<text style="color: #f2b98c;font-size: 30upx;">4201-以上</text>
					<text style="color: #919191;margin-top: 10upx;">第三阶梯</text>
				</view>
			</view>
		</view>
		<view class="price">
			<view class="table_head">
				<view class="item"></view>
				<view class="item">单价</view>
				<view class="item">计费数量(千瓦时)</view>
				<view class="item">金额(元)</view>
			</view>
			<view class="table_content">
				<view class="item">一档用电</view>
				<view class="item">0.4983</view>
				<view class="item">2160</view>
				<view class="item">{{(2160*0.4983).toFixed(2)}}</view>
			</view>
			<view class="table_content">
				<view class="item">二档用电</view>
				<view class="item">0.5483</view>
				<view class="item">2040</view>
				<view class="item">{{(2040*0.5483).toFixed(2)}}</view>
			</view>
			<view class="table_content">
				<view class="item">三档用电</view>
				<view class="item">0.7683</view>
				<view class="item">{{msgFormSon[2]-4200}}</view>
				<view class="item">{{((msgFormSon[2]-4200)*0.7683).toFixed(2)}}</view>
			</view>
		</view>
		<view class="dianbiao">
			<view class="dianbiao_head">
				<text>电能表编号</text>
				<text>综合倍率</text>
				<text>用电量(千瓦时)</text>
			</view>
			<view class="dianbiao_date">
				<text>区域总表1</text>
				<text>1</text>
				<text>{{msgFormSon[2]}}</text>
			</view>
		</view>
		<view class="history_record">
			<navigator url="electricity/electricity">
				<view class="history_ele">
					<icon type="" class="iconfont icon-shuju" style="color: #f59740;font-size: 50upx;margin-right: 20upx;"></icon>
					<text>历史用电情况</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;margin-top: 16upx;"></icon>
				</view>
			</navigator>
			<view class="view_record">
				<icon type="" class="iconfont icon-jilumian" style="color: #fec70b;font-size: 50upx;margin-right: 20upx;"></icon>
				<text>查看交费记录</text>
				<icon type="" class="iconfont icon-arrow-right" style="float: right;margin-top: 16upx;"></icon>
			</view>
		</view>
	</view>
</template>

<script>
	import headTop from '@/components/page-head/page-head.vue'
	export default {
		data() {

			return {
				title: '电费账单',
				msgFormSon:[],
				time:'',array: ['2020', '2019', '2018'],
				month:[1,2,3,4,5,6,7,8,9,10,11,12],
				index: 0,
				show : 1,
				monthDate:{
					timeType:'month',
					startTime:1577808000000
				}
			}
		},
		components: {
			headTop,
			
		},
		computed: {

		},
		methods: {
			bindPickerChange: function(e) {
				
				this.index = e.target.value;
				this.getRegion();
			},
			getInfo(ind){
				this.show = ind;
				this.getRegion();
			},
			//将时间戳转化为正常格式
			renderTime(date) {
			  let dateee = new Date(date).toJSON();
			  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
			},
			timestamp(){
				let time = this.array[this.index] +'-'+ this.show;
				let stamp =  (new Date(time)).valueOf();
				return stamp;
			},
			getRegion(){
				this.msgFormSon = [];
				this.monthDate.startTime = this.timestamp();
				uni.request({
					url:'/api/GreenCampus/free/all',
					data:this.monthDate,
					success: (res) => {
						this.msgFormSon.push(res.data.detail[1].free);
						let date = res.data.detail[1].time;
						this.msgFormSon.push(this.renderTime(date));
						uni.request({
							url:'/api/GreenCampus/elec/allRegionElecSum',
							data:this.monthDate,
							success: (res) => {
								this.msgFormSon.push(res.data.detail[1].battery);
							},
							fail: () => {
								uni.showToast({
									title:'网络出错'
								})
							}
						})
					},
					fail: () => {
						uni.showToast({
							title:'网络出错'
						})
					}
				});
				
			} 
		},
		onLoad() {
			 this.getRegion(); 
		}
	}
</script>

<style lang="less">
	.regionCost {
		background-color: #F0F3F6;
		font-size: 28upx;
		padding-top: 120upx;
	}

	.region_info {
		margin: 10upx auto;
		width: 92%;
		padding: 10upx 20upx;
		
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		border-radius: 10upx;
		background-color: #FFFFFF;

		text {
			margin-bottom: 14upx;
		}

		text:nth-child(1) {
			font-size: 34upx;
		}

		text:nth-child(2) {
			font-size: 26upx;
			color: #626971;
		}

		text:nth-child(3) {
			font-size: 26upx;
			color: #626971;
		}
	}
	.select_time {
		background-color: #FFFFFF;
		padding: 20upx 30upx;
		display: flex;
	
		.hidden_scroll {
			overflow: hidden;
			height: 50upx;
			width: 1500upx;
		}
	
		.select_month {
			width: 500upx;
			margin-left: 20upx;
			display: flex;
			flex-wrap: nowrap;
			overflow-x: scroll;
			height: 70upx;
	
			.select_month::-webkit-scrollbar {
				width: 0;
			}
	
			view {
				display: block;
				margin-right: 40upx;
				padding: 0 40upx;
				height: 40upx;
				
				border-radius: 20upx;
				text-align: center;
			}
			.active{
				border: 1px #007AFF solid;
			}
		}
	}
	
	.uni-list {
		width: 120upx;
	
		.uni-list-cell {
			background-color: rgba(0, 0, 0, 0);
			border: none;
			color: #000000;
			font-weight: 400;
			padding: 0;
	
			.uni-list-cell-db {
				width: 200upx;
				border: none;
				display: flex;
				justify-content: space-around;
				padding: 0;
			}
	
			.uni-input {
				font-size: 34upx;
			}
		}
	}
	.Money{
		background-color: #FFFFFF;
		margin-top: 4upx;
		padding: 20upx 30upx;
		color: #303030;
		.total_money,.total_ele{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20upx 0;
			border-bottom: 1px #F0F3F6 solid;
		}
		.Money_n,.dosage{
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			
		}
		.dosage{
			align-items: flex-end;
		}
	}
	.ladder{
		margin-top: 10upx;
		background-color: #FFFFFF;
		padding: 20upx;
		.ladder_list{
			display: flex;
			justify-content: space-around;
			align-items: center;
			view{
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
	}
	.price,.dianbiao{
		margin: 10upx auto;
		width: 100%;
		padding: 20upx 0 10upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		color: #303030;
		.table_head,.table_content{
			display: grid;
			grid-template-columns: 20%  25%  30%  25%;
			text-align: center;
			margin-bottom: 20upx;
		}
		.table_head,.dianbiao_head{
			padding-bottom: 10upx;
			border-bottom: 1px #F0F3F6 solid;
			color: #bebebe;
		}
		.dianbiao_head,.dianbiao_date{
			display: grid;
			grid-template-columns: 30%  40%  30%;
			text-align: center;
			margin-bottom: 20upx;
		}
		
	}
	.history_record{
		background-color: #FFFFFF;
	
		margin-top: 20upx;
		.history_ele,.view_record{
			border-bottom: 1px #F0F3F6 solid;
			padding: 20upx 30upx;
		}
	}
</style>
