<template>
	<view class="balance-page">
		<head-top title="费用余额" uRl="../../pages/index/index"></head-top>
		
		<view class="balance-content">
			<view class="region">
				<text>当前区域</text>
				<text>临潼</text>
			</view>
			<view class="balance-review">
				<text>余额</text>
				<text class="balance">6.66元</text>
				<text>预计可用_天</text>
				<text>截止：{{nowTime}}</text>
			</view>
			<view class="balance-details">
				<view class="today">
					<text>123元</text>
					<text>今日已用</text>
				</view>
				<view class="limit">
					<text>200元</text>
					<text>今日限额</text>
				</view>
				<view class="free-balance">
					<text>6.66元</text>
					<text>费用余额</text>
				</view>
			</view>

		</view>
		<view class="free-add">
			<view class="add">
				<view class="free-box">
					<icon type="" class="iconfont icon-ziyuan"></icon>
					<text>费用充值</text>
					
				</view>
				<icon type="" class="iconfont icon-arrow-right"></icon>
			</view>
			<view class="rank">
				<view class="free-box">
					<icon type="" class="iconfont icon-_huabanfuben"></icon>
					<text>费用排行</text>
					
				</view>
				<icon type="" class="iconfont icon-arrow-right"></icon>
			</view>
		</view>
	</view>
</template>

<script>
	import headTop from '@/components/page-head/page-head.vue'
	export default {
		data() {
			return {
				title: '区域费用',
				array: ['临潼校区', '临潼校区教学区', '雁塔校区生活区', '雁塔校区教学区'],
				index: 0,
				nowTime:''
			}
		},
		components: {
			headTop
		},
		methods: {
			getTime(){
				let d = new Date();
				let y = d.getFullYear(); 
				let m = d.getMonth()+1;
				let t=  d.getDate(); 
				this.nowTime = y +'年'+ m+'月' +t+'日';
			}
		},
		onShow(){
			this.getTime()
		}
	}
</script>

<style>
	.balance-page {
		background-color: #f0f3f6;
		overflow: hidden;
		padding-top: 120upx;
	}
	.balance-content {
		background-color: #FFFFFF;
		height: 100%;
		background-image: linear-gradient(#147fd1, #6caef8);
		color: #FFFFFF;
		padding-bottom: 10upx ;	
	}
	.region{
		padding: 20upx 40upx;
		display: flex;
		justify-content: space-around;
		font-size: 28upx;
	}
	.balance-review {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 24upx;
		
	}

	.balance {
		font-size: 40upx;
	}

	.review {
		width: 352upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	button {
		width: 352upx;
		margin-top: 28upx;
		background-color: #40B1FF;
		border: none;

	}
	.balance-details{
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 24upx 30upx;
		font-size: 24upx;
		border-radius: 5px 5px 5px 5px;
		text-align: center;
		border: 1px solid rgba(187, 187, 187, 1);
		margin: 20upx 22upx 20upx;
	}
	.today,.limit,.free-balance{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.free-add{
		border-radius: 8px 8px 8px 8px;
		text-align: center;
	/* 	border: 1px solid rgba(187, 187, 187, 1); */
		font-size: 24upx;
		margin-top: 20upx;
		background-color: #FFFFFF;
	}
	.add,.rank{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 48upx 26upx;
		border-bottom:1upx solid rgba(187, 187, 187, 1);
	}
	
	.icon-ziyuan{
		color: #40B1FF;
		margin-right: 10upx;
		font-size: 40upx;
	}
	.icon-_huabanfuben{
		color: #40B1FF;
		margin-right: 10upx;
		font-size: 40upx;
	}
	.free-box{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
