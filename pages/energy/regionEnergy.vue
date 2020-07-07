<template>
	<view class="regionCost">
		<headTop title="能耗排名" uRl='../index/index'></headTop>
		<view class="select">
			<view class="">
				<text :class="{active:shows == 1}" @click="Show(1)">主要区域能耗对比</text>
				<text :class="{active:shows == 2}"  @click="Show(2)">重要设备能耗对比</text>	
			</view>
		</view>
		<view class="region" v-if="bool">
			<ti-ps msg="主要区域能耗占比"></ti-ps>
			<region-rank></region-rank>
			<view class="list_rank">
				<view class="title">
					主要区域年能耗排名
				</view>
				<view class="ele_list">
					<view class="list_head">
						<text>区域名</text>
						<text>电量(千瓦时)</text>
					</view>
					<view class="lists" v-for="(item, index) in list " :key="index">
						<text>{{item.regionName}}</text>
						<text>{{item.battery}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="equip" v-if="!bool">
			<ti-ps msg="重要设备能耗占比"></ti-ps>
			<equip-rank></equip-rank>
			<view class="list_rank">
				<view class="title">
					重要设备年能耗排名
				</view>
				<view class="ele_list">
					<view class="list_head">
						<text>设备名</text>
						<text>电量(千瓦时)</text>
					</view>
					<view class="lists" v-for="(item, index) in listE " :key="index">
						<text>{{item.deviceName}}</text>
						<text>{{item.battery}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tiPs from "@/components/page-tips/tips.vue"
	import regionRank from "@/components/chat/pie/regionEnegy-pie.vue"
	import equipRank from "@/components/chat/pie/equip_rank.vue"
	export default {
		data() {
			return {
				shows :1,
				list:[],
				listE:[],
				bool:true
			}
		},
		components: {
			tiPs,
			regionRank,
			equipRank
		},
		methods: {
			Show(index){
			  this.shows = index;
			  this.bool = !this.bool
			},
			getRank(){
				uni.request({
					url:'/api/GreenCampus/elec/sortRegion',
					data:{
						timeType:'year',
						startTime:1577808000000,
						limit:9,
						endTime:1609344000000,
						orderType:'DES'
					},
					success: (res) => {
						this.list = res.data.detail.reverse();
					},
					fail: () => {
						uni.showToast({
							title:'网络出错',
							icon:'none'
						})
					}
				})
				uni.request({
					url:'/api/GreenCampus/elec/sortDevice',
					data:{
						timeType:'year',
						startTime:1577808000000,
						limit:9,
						endTime:1609344000000,
						orderType:'DES'
					},
					success: (res) => {
						this.listE = res.data.detail.reverse();
					},
					fail: () => {
						uni.showToast({
							title:'网络出错',
							icon:'none'
						})
					}
				})
			}
		},
		onLoad(){
			this.getRank();
		}
	}
</script>

<style lang="less">
	.regionCost{
		background-color: #f0f3f6;
		padding-top: 120upx;
		font-size: 28upx;
	}
	.select{
		background-color: #FFFFFF;
		view{
			margin: 20upx auto;
			margin-bottom: 0;
			background-color: #008DFF;
			border-radius: 50upx;
			width: 600upx;
			padding: 10upx 20upx;
			color: #FFFFFF;
			display: flex;
			justify-content: space-around;
			text{
				padding: 4upx 10upx;
			}
		}
		.active{
			
			background-color: #FFFFFF;
			color: #008DFF;
			border-radius: 50upx;
		}
	}
	.region,.equip{
		background-color: #FFFFFF;
		padding: 20upx 30upx;
		.list_rank{
			margin-top: 30upx;
		}
		.ele_list{
			margin-top: 30upx;
			view{
				display: grid;
				grid-template-columns:50% 50%;
				text-align: center;
				padding: 20upx 0;
			}
			.list_head{
				background-color: #F0F3F6;
				padding: 10upx 0;
				font-size: 24upx;
				color: #64696d;
			}
		}
	}
</style>
