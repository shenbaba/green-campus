<template>
	<view class="regionElc">
		<head-top :title="title" uRl="../../pages/index/index"></head-top>
		<!-- 时间选择框 -->
		<view class="fixselcet">
			<view class="region_info">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-db">
							<picker @change="bindPickerChange" :value="index" :range="region">
								<view class="uni-input" style="width: 120upx;">{{region[index]}}</view>
							</picker>
							<icon type="" class="iconfont icon-arrowdown"></icon>
						</view>
					</view>
				</view>
				<text>区域编号：{{array[index]}}</text>
				<text>电表编号：452345254</text>
				<text>所属区域：	陕西省西安市临潼区</text>
			</view>
			<!-- picker选择框 -->
			<view class="select_time">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-db">
							<picker @change="bindPickerChanges" :value="index" :range="array1">
								<view class="uni-input">{{array1[indexs]}}</view>
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
		</view>
		<view class="year" style="margin-top: 310upx;">
			<ti-ps msg="该区域日费用详情"></ti-ps>
			<u-Charts :d='chatDate' v-if="flag"></u-Charts>
			<view class="Money">
				<view class="total_money">
					<view class="Money_n">
						<text style="color: #0c82f0; font-size: 40upx;">{{list[0]}}</text>
						<text style="font-size: 26upx; color: #626971;">本月金额（元）</text>
					</view>
					<view class="dosage">
						<text style="font-size: 26upx; color: #626971;">抄表日期：<text style="font-size: 26upx; color: #000;">{{list[1]}}</text></text>
						<text style="font-size: 26upx; color: #626971;">供电单位：<text style="font-size: 26upx; color: #000;">临潼供电所</text></text>
					</view>
				</view>
				<view class="total_ele">
					<view class="Money_n">
						<text style="color: #0c82f0; font-size: 40upx;">{{list[2]}}</text>
						<text style="font-size: 26upx; color: #626971;">本月电量（千瓦时）</text>
					</view>
					<view class="dosage">
						<text style="font-size: 26upx; color: #626971;">去年同期电量<text style="font-size: 26upx; color: #0c82f0;">0</text>千瓦时</text>
						<text style="font-size: 26upx; color: #626971;">同比增长<text style="font-size: 26upx; color: #0c82f0;">100%</text></text>
					</view>
				</view>
			</view>
		</view>
		<view class="equip-rank">
			<ti-ps msg="该区域下所有用电类型能耗和比率"></ti-ps>
			<region-rate :data="elcTypeData" v-if="elcflag"></region-rate>
			<view class="">
				<ti-ps msg="该区域下所有用电类型能耗和比率列表"></ti-ps>
				<view class="eletype">
					<view class="list_head">
						<text>类型</text>
						<text>日均值</text>
						<text>最大值</text>
						<text>最小值</text>
						<text>能耗(kw/h)</text>
					</view>
					<view class="lists" v-for="(item, index) in elcTypeData" :key="index">
						<text>{{item.type}}</text>
						<text>{{item.average}}</text>
						<text>{{item.max}}</text>
						<text>{{item.min}}</text>
						<text>{{item.battery}}</text>
					</view>
					<view class="lists">
						<text>合计</text>
						<text></text>
						<text></text>
						<text></text>
						<text>{{totalType}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import headTop from '@/components/page-head/page-head.vue'
	import tiPs from "@/components/page-tips/tips.vue"
	import uCharts from "@/components/chat/chat-year.vue"
	import calenDar from "@/components/calendar.vue"
	import regionRate from "@/components/chat/pie/region_rate.vue"
	export default {
		data() {
			return {
				title: '主要区域能耗',
				array: [],
				region:[],
				array1: ['2020', '2019', '2018'],
				month:[1,2,3,4,5,6,7,8,9,10,11,12],
				index: 0,
				indexs:0,
				show : 1,
				list:[],
				chatDate:[],
				flag:false,
				elcflag:false,
				//每月能耗
				yearData:{
					endTime:1609257600000,
					startTime:1577808000000,
					timeType:'month',
					regionId:'',
				},
				//每日费用
				dayDate:{
					endTime:'',
					startTime:1577808000000,
					timeType:'day',
					regionId:'',
				},
				//用电类型
				elcType:{
					regionId:'',
					time:'',
					timeType:''
				},
				elcTypeData:[],
				totalType:''
				
			}
		},
		components: {
			headTop,
			tiPs,
			uCharts,
			calenDar,
			regionRate
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.target.value;
				this.getRegion();
				this.getDayChat();
				this.getBytype();
			},
			bindPickerChanges: function(e) {
				this.indexs = e.target.value;
				this.getRegion();
				this.getDayChat();
				this.getBytype();
			},
			getInfo(ind){
				this.show = ind;
				this.getRegion();
				this.getDayChat();
				this.getBytype();
			},
			timestamp(){
				let time = this.array1[this.indexs] +'-'+ this.show+'-'+'01';
				let stamp =  (new Date(time.replace(/\-/g, "/"))).valueOf();
				return stamp;
			},
			tiemsEnd(){
				if(this.show == 4 ||this.show == 6 || this.show == 9||this.show == 11){
					let time = this.array1[this.indexs] +'-'+ this.show+'-'+'01';
					let stamp =  (new Date(time.replace(/\-/g, "/"))).valueOf() + 30*24*60*60*1000-1000;
					return stamp;
				}else if(this.show == 1 ||this.show == 3 || this.show ==5 ||this.show == 7 ||this.show == 8 || this.show ==10 || this.show ==12 ){
					let time = this.array1[this.indexs] +'-'+ this.show+'-'+'01';
					let stamp =  (new Date(time.replace(/\-/g, "/"))).valueOf() + 31*24*60*60*1000-1000;
					return stamp;
				}else if(this.show == (2)){
					let stamp = 28*24*60*60*1000-1000 ;
					return stamp;
				}
			},
			getDayChat(){
				this.list = [];
				this.flag = false;
				this.dayDate.startTime = this.timestamp();
				this.dayDate.endTime = this.tiemsEnd();
				this.dayDate.regionId = this.array[this.index];
				uni.request({
					url:'/api/GreenCampus/free/oneRegion',
					data:this.dayDate,
					success: (res) => {
						this.chatDate = res.data.detail;
						this.flag = true;
					},
					fail: () => {
						uni.showToast({
							title:'网络出错',
							icon:'none'
						})
					}
				})
			},
			getRegion(){
				this.list = [];
				this.flag = false;
				this.yearData.startTime = this.timestamp();
				this.yearData.regionId = this.array[this.index];
				uni.request({
					url:'/api/GreenCampus/free/oneRegion',
					data:this.yearData,
					success: (res) => {
						this.list.push(res.data.detail[1].free);
						this.list.push(res.data.detail[1].time.split('T')[0]);
						uni.request({
							url:'/api/GreenCampus/elec/getOneRegion',
							data:this.yearData,
							success: (res) => {
								this.list.push(res.data.detail[1].battery);
							}
						})
					},
					fail: () => {
						uni.showToast({
							title:'网络出错'
						})
					}
				})
				
			},
			getDevice(){
				this.array = [];
				uni.request({
					url:'/api/GreenCampus/region/main',
					success: (res) => {
						res.data.detail.forEach((item)=>{
							this.array.push(item.regionId);
							this.region.push(item.regionName);
						})
					}
				})
			},
			getBytype(){
				this.elcTypeData = [];
				this.elcflag = false;
				this.elcType.time = this.timestamp();
				this.elcType.regionId = this.array[this.index];
				this.elcType.timeType = 'month'
				uni.request({
					url:'/api/GreenCampus/elec/getByType',
					data:this.elcType,
					success: (res) => {
						
						this.elcTypeData = res.data.detail;
						this.elcflag = true;
						this.totalType = this.elcTypeData.shift().battery;
					}
				})
			}
		},
		onReady(){
			this.getDevice();
		},
		onShow() {
			setTimeout(()=>{
				this.getRegion();
				this.getDayChat();
				this.getBytype();
			},400)
			
		}
	}
</script>

<style lang="less">
	.regionElc{
		background-color: #f0f3f6;
		font-size: 28upx;
		padding-top: 120upx;
		position: relative;
	}
	.fixselcet{
		position: fixed;
		z-index: 100;
		background-color: #f0f3f6;
	}
	.region_info {
		margin: 10upx auto;
		
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
		margin: 0;
	
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
	.year{
	}
	.Money{
		background-color: #FFFFFF;
		margin-top: -10upx;
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
	.year,.all-equip,.equip-rank{
		background-color: #FFFFFF;
		margin-top: 20upx;
		padding: 20upx 20upx;
	}
	.equip-rank{
		margin-top: 20upx;
	}
	.region-select{
		display: flex;
		justify-content:flex-start;
		font-size: 24upx;
		margin-top: 20upx;
	}
	.region-select text{
		background-color: #C8C7CC;
		padding: 6upx 8upx;
		border-radius: 5upx;
		color: #3F536E;
		margin-bottom: 20upx;
		margin-right: 40upx;
	}
	.eletype {
		margin: 20upx 0;
		view {
			display: grid;
			grid-template-columns: 20% 20% 20% 20% 20%;
			text-align: center;
			padding: 20upx 0;
		}
	
		.list_head {
			background-color: #F0F3F6;
			padding: 10upx 0;
			font-size: 24upx;
			color: #64696d;
		}
	}
</style>
