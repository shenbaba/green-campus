<template>
	<view class="des">
		<headTop title="电量电费" uRl="./electricity"></headTop>
		<view class="select">
			<view class="">
				<text :class="{active:shows == 1}" @click="Show(1)">月度电费</text>
				<text :class="{active:shows == 2}" @click="Show(2)">日用电量</text>
			</view>
		</view>
		<view class="content" v-if="bool">
			<view class="select_time">
				<view :class="{actice:showe == 3}" @click="Showe(3)">2020年</view>
				<view :class="{actice:showe == 4}" @click="Showe(4)">2019年</view>
				<view :class="{actice:showe == 5}" @click="Showe(5)">2018年</view>
			</view>
			<view class="ele_chat" v-if="boolYear">
				<view class="" style="text-align: center;margin: 20upx 0;">月用电分布图</view>
				<ele-free></ele-free>
			</view>
			<view class="ele_tabel" v-if="boolYear">
				<view class="dianbiao">
					<view class="dianbiao_head">
						<text>月份</text>
						<text>电量(千瓦时)</text>
						<text>电费(元)</text>
					</view>
					<view class="dianbiao_date" v-for="(item, index) in list" :key="index">
						<text>{{item.time}}</text>
						<text>{{item.battery}}</text>
						<text>{{item.free}}</text>
					</view>
				</view>
				<view class="accumulate">
					<view class="">
						<icon type="" class="iconfont icon-nengyuannenghaoguanli" style="color: #008DFF;margin-right: 10upx;"></icon>
						<text>年电量累计：{{listTime[0]}}千瓦时</text>
					</view>
					<view class="">
						<icon type="" class="iconfont icon-ArtboardCopy" style="color: #008DFF;margin-right: 10upx;"></icon>
						<text>年电费累计：{{totalFree[0]}}元</text>
					</view>
				</view>
			</view>

		</view>
		<view class="content_1" v-if="!bool">
			<view class="day">
				<text :class="{active:showDay == 1}" @click="showday(1) ,getSevenDay()">近7天</text>
				<text :class="{active:showDay == 2}" @click="showday(2) ,getMonthEle()">近30天</text>
			</view>
			<view class="chat_ele">
				<day-ele v-if="!boolDay"></day-ele>
				<seven-ele v-if="boolDay"></seven-ele>
			</view>
			<view class="ele_list">
				<view class="list_head">
					<text>时间</text>
					<text>电量(千瓦时)</text>
				</view>
				<view class="lists" v-for="(item, index) in dayEle" :key="index">
					<text>{{item.time}}</text>
					<text>{{item.battery}}</text>
				</view>
				<view class="lists">
					<text>合计</text>
					<text>{{totalDay[0]}}</text>
				</view>
			</view>
		</view>
		<!-- <view class="need">
			<text>你可能还需要</text>
		</view> -->
	</view>
</template>

<script>
	import eleFree from '@/components/chat/electricity/electricity_free.vue'
	import dayEle from '@/components/chat/electricity/day_ele.vue'
	import sevenEle from '@/components/chat/electricity/seven_ele.vue'
	export default {
		data() {
			return {
				shows: 1,
				showe: 3,
				showDay: 1,
				bool: true,
				boolYear:true,
				boolDay: true,
				list: [],
				listTime: [],
				totalFree:[],
				dayEle:[],
				totalDay:[],
				monthELe:[],
				totalELe:[]
			}
		},
		components: {
			eleFree,
			dayEle,
			sevenEle
		},
		methods: {
			Show(index) {
				this.shows = index;
				this.bool = !this.bool;
			},
			Showe(index) {
				this.showe = index;
				if(index == 3){
					this.boolYear = true
				}else{
					this.boolYear = false
				}
			},
			showday(index) {
				this.showDay = index;
				this.boolDay = !this.boolDay;
			},
			getMonthFree() {
				uni.request({
					url: '/api/GreenCampus/elec/allRegionElecSum',
					data: {
						endTime: 1609344000000,
						startTime: 1577808000000,
						timeType: 'month'
					},
					success: (res) => {
						this.list = res.data.detail;
						this.listTime.push(this.list.shift().battery);
						this.list.forEach((item) => {
							item.time = item.time.split('-')[1]+'月';
						})
						uni.request({
							url: '/api/GreenCampus/free/all',
							data: {
								endTime: 1609344000000,
								startTime: 1577808000000,
								timeType: 'month'
							},
							success: (res) => {
								for(let i = 0;i<this.list.length;i++){
									this.list[i].free = res.data.detail[i+1].free;
								}
								this.totalFree.push(res.data.detail.shift().free);
							}
						});
					},
					fail: () => {
						uni.showToast({
							title:'网络出错'
						})
					}
				});
			},
			getSevenDay(){
				this.dayEle = [];
				this.totalDay=[];
				let endtime = new Date().valueOf();
				let starttime = endtime - 7*24*60*60*1000;
				uni.request({
					url:'/api/GreenCampus/elec/allRegionElecSum',
					data:{
						endTime : endtime,
						startTime : starttime,
						timeType:'day'
					},
					success: (res) => {
						this.totalDay.push(res.data.detail.shift().battery);
						this.dayEle = res.data.detail;
						this.dayEle.forEach((item) => {
							item.time = item.time.split('T')[0];
						})
						
						this.dayEle.reverse();
					},
					fail: () => {
						uni.showToast({
							title:'网络出错',
							icon:'none'
						})
					}
				})
			},
			getMonthEle(){
				this.dayEle = [];
				this.totalDay = []
				let endtime = new Date().valueOf();
				let starttime = endtime - 30*24*60*60*1000;
				uni.request({
					url:'/api/GreenCampus/elec/allRegionElecSum',
					data:{
						endTime : endtime,
						startTime : starttime,
						timeType:'day'
					},
					success: (res) => {
						this.totalDay.push(res.data.detail.shift().battery);
						this.dayEle = res.data.detail;
						this.dayEle.forEach((item) => {
							item.time =  item.time.split('T')[0];
						})
						this.dayEle.reverse();
					}
				})
			}
		},
		onLoad() {
			this.getMonthFree();
			this.getSevenDay();
		}
	}
</script>

<style lang="less">
	.des {
		background-color: #F0F3F6;
		font-size: 28upx;
		padding-top: 120upx;

		.select {
			background-color: #FFFFFF;

			view {
				margin: 20upx auto;
				margin-bottom: 0;
				background-color: #008DFF;
				border-radius: 50upx;
				width: 300upx;
				padding: 10upx 20upx;
				color: #FFFFFF;
				display: flex;
				justify-content: space-around;

				text {
					padding: 4upx 10upx;
				}
			}

			.active {

				background-color: #FFFFFF;
				color: #008DFF;
				border-radius: 50upx;
			}
		}

		.content {
			background-color: #FFFFFF;

			.select_time {
				display: flex;
				justify-content: space-around;

				/* margin-top: 20upx; */
				view {
					padding: 10upx;
				}

				.actice {
					color: #008DFF;
					border-bottom: 2px #008DFF solid;
				}
			}

			.ele_tabel {
				.dianbiao {
					margin: 10upx auto;
					width: 96%;
					padding: 20upx 0 10upx;
					background-color: #FFFFFF;
					border-radius: 10upx;
					color: #303030;
				}

				.dianbiao_head,
				.dianbiao_date {
					display: grid;
					grid-template-columns: 30% 40% 30%;
					text-align: center;
					margin-bottom: 20upx;
				}

				.dianbiao_head {
					background-color: #F0F3F6;
					padding: 10upx 0;
					font-size: 24upx;
					color: #64696d;
				}

				.dianbiao_date {
					border-bottom: 1upx #eeeeee solid;
					padding-bottom: 20upx;
				}

				.accumulate {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20upx 30upx;
					font-size: 24upx;
					margin-top: -40upx;

					view {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
				}

			}
		}

		.content_1 {
			background-color: #FFFFFF;
			padding-top: 30upx;

			.day {
				width: 300upx;
				margin-left: 20upx;
				display: flex;
				justify-content: space-between;
				border: 1upx #64696d solid;
				border-radius: 50upx;
				font-size: 24upx;

				text {

					padding: 10upx 40upx;
					border-radius: 50upx;
				}
			}

			.active {
				background-color: #008DFF;
				color: #FFFFFF;

			}

			.ele_list {
				view {
					display: grid;
					grid-template-columns: 50% 50%;
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
		}

		.need {
			padding: 30upx;
			color: #64696d;
			font-size: 24upx;
		}
	}
</style>
