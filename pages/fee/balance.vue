<template>
	<view class="balance-page">
		<head-top title="费用余额" uRl="../../pages/index/index"></head-top>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择区域
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
					<icon class="iconfont icon-arrowdown" type=""></icon>
				</view>
			</view>
		</view>
		<view class="balance-content">
			<view class="balance-review">
				<text class="balance">238.2元</text>
				<view class="review">
					<text>余额剩余</text>
					<text>|</text>
					<text>超过一周未校正</text>
				</view>
				<button type="primary">立即校正</button>
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
					<text>238.2元</text>
					<text>费用余额</text>
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
	</view>
</template>

<script>
	import headTop from '@/components/page-head/page-head.vue'
	export default {
		data() {
			return {
				title: '区域费用',
				array: ['临潼校区生活区', '临潼校区教学区', '雁塔校区生活区', '雁塔校区教学区'],
				index: 0,
			}
		},
		components: {
			headTop
		},
		methods: {

		}
	}
</script>

<style>
	.balance-page {
		background-color: #f0f3f6;
		overflow: hidden;
	}

	.uni-list-cell {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		padding: 20upx 60upx;
		border-bottom: 1px #EEEEEE solid;
		background-color: #ffffff;
	}

	.uni-list-cell-db {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.balance-content {
		margin-top: 20upx;
		background-color: #FFFFFF;
		padding-top: 66upx;
		height: 100%;
	}

	.balance-review {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 24upx;
	}

	.balance {
		font-size: 92upx;
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
		margin: 200upx 22upx 60upx;
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
		border: 1px solid rgba(187, 187, 187, 1);
		font-size: 24upx;
		margin: 0 22upx;
	}
	.add,.rank{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 48upx 26upx;
	}
	.add{
		border-bottom:1px solid rgba(187, 187, 187, 1);
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
