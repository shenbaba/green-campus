<template>
	<view class="pay">
		<headTop title="交电费" uRl="../../../pages/index/index"></headTop>
		<view class="region">
			+添加交费户号
		</view>
		<view class="content">
			<text>
				<text>临潼</text>
				<text style="color: #147FD1;">智能交费</text>
				<text  style="color: #147FD1;">已绑定</text>
				<text style="float: right; color: #CCCCCC">详情></text>
			</text>
			<text style="font-size: 24upx; color: #4E6070;">陕西省西安市临潼区*****变</text>
			<text><text style="font-size: 24upx; color: #4E6070;">余额：6.15元</text><text style="float: right;background-color: #C0C0C0;padding: 2upx 4upx; color: #EEEEEE;">自动交费</text></text>
			<view class="free">
				<text>￥20</text>
				<text>￥50</text>
				<text>￥100</text>
				<text>￥200</text>
			</view>
			<view class="money">
				￥<input type="text" value="" placeholder="请输入交费金额"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.pay{
	background-color: #F0F3F6;
	height: calc(100vh - 120upx);
	padding-top: 120upx;
	.region{
		background-color: #FFFFFF;
		text-align: center;
		font-size: 28upx;
		padding: 20upx 30upx;
		color: #147FD1;
		margin-top: 20upx;
	}
	.content{
		box-sizing:border-box;
		font-size: 26upx;
		margin: 20upx auto;
		border-radius: 10upx;
		width: 96%;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		padding: 20upx 30upx;
		text{
			margin-bottom: 10upx;
			text{
				margin-right: 20upx;
			}
		}
		.free{
			
			text{
				padding:10upx 30upx;
				border: 1upx #eeeeee solid;
				margin-right: 40upx;
			}
		}
		.money{
			display: flex;
			border: 1upx #eeeeee solid;
			align-items: center;
			font-size: 24upx;
			margin-top: 30upx;
			padding: 10upx 20upx;
			
			input{
				font-size: 24upx;
				margin-left: 20upx;
			}
		}
		.money:hover{
			border: 1upx #147FD1 solid;
		}
	}
}
</style>
