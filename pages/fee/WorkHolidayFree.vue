<template>
	<view class="workHolidayFree">
		<head-top title="节假日用能" uRl='../index/index'></head-top>
		<view class="content">
			<view class="free">
				<text :class="{active:show == 1}" @click="Show(1)">节假日费用</text>
				<text :class="{active:show == 2}"  @click="Show(2)">节假日能耗</text>
			</view>
			<view class="list" v-for="(item, index) in listFree" :key="index" v-if='bool'>
				<view style="text-align: center;">{{item.workHolidayName}}</view>
				<!-- <view>开始时间:{{item.startTime}}</view> -->
				<view class="ele_list">
					<view class="list_head">
						<text>时间</text>
						<text>费用(元)</text>
					</view>
					<view class="lists" v-for="(items,inex) in listFree[index].batteryFreeVOList" :key="inex">
						<text>{{items.time}}</text>
						<text>{{items.free}}</text>
					</view>
					<view class="lists">
						<text>合计</text>
						<text>{{totalFree[index]}}</text>
					</view>
				</view>
				<!-- <view>结束时间:{{item.endTime}}</view> -->
			</view>
			<view class="list" v-for="(item, index) in listEle" :key="index" v-if='!bool'>
				<view style="text-align: center;">{{item.workHolidayName}}</view>
				<!-- <view>开始时间:{{item.startTime}}</view> -->
				<view class="ele_list">
					<view class="list_head">
						<text>时间</text>
						<text>电量(千瓦时)</text>
					</view>
					<view class="lists" v-for="(items,inex) in listEle[index].batteryVOList" :key="inex">
						<text>{{items.time}}</text>
						<text>{{items.battery}}</text>
					</view>
					<view class="lists">
						<text>合计</text>
						<text>{{totalEle[index]}}</text>
					</view>
				</view>
				<!-- <view>结束时间:{{item.endTime}}</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listFree: [],
				listEle:[],
				show:1,
				bool:true,
				totalFree:[],
				totalEle :[]
			}
		},
		components: {

		},
		methods: {
			Show(index){
				this.show = index;
				this.bool = !this.bool
			},
			renderTime(date) {
			  let dateee = new Date(date).toJSON();
			  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
			},
			getInfo() {
				uni.request({
					url: '/api/GreenCampus/free/allWorkHolidayFree',
					success: (res) => {
						this.listFree = res.data.detail;
						let len = this.listFree.length;
						for(let i = 0; i<len; i++){
							this.listFree[i].startTime = this.renderTime(this.listFree[i].startTime);
							this.listFree[i].endTime = this.renderTime(this.listFree[i].endTime);
							this.listFree[i].batteryFreeVOList.forEach((item)=>{
								item.time = this.renderTime(item.time);
							})
						    this.totalFree.push(this.listFree[i].batteryFreeVOList.shift().free);
							
							
						}
						
					},
					fail: () => {

					}
				});
				uni.request({
					url: '/api/GreenCampus/elec/allWorkHoliday',
					success: (res) => {
						
						this.listEle = res.data.detail;
						let len = this.listEle.length;
						for(let i = 0; i<len; i++){
							this.listEle[i].startTime = this.renderTime(this.listEle[i].startTime);
							this.listEle[i].endTime = this.renderTime(this.listEle[i].endTime);
							this.listEle[i].batteryVOList.forEach((item)=>{
								item.time = this.renderTime(item.time);
							})
							 this.totalEle.push(this.listEle[i].batteryVOList.shift().battery);
					
						}
						
					},
					fail: () => {
				
					}
				})
			}
		},
		onLoad() {
			this.getInfo()
		}
	}
</script>

<style lang="less">
	.workHolidayFree {
		background-color: #F0F3F6;
		padding-top: 120upx;

		.content {
			margin-top: 10upx;
			
			.free {
				background-color: #FFFFFF;
				font-size: 28upx;
				padding: 20upx;
				display: flex;
				justify-content: space-around;
				text{
					padding: 20upx 40upx;
				}
				.active{
					color: #FFFFFF;
					background-color: #008DFF;
					
				}
			}

			.list {
				font-size: 28upx;
				background-color: #FFFFFF;
				padding: 20upx 30upx;
				margin-bottom: 20upx;

				.ele_list {
					margin: 20upx 0;
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
		}
	}
</style>
