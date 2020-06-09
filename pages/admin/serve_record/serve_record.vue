<template>
	<view class="serve">
		<headTop title="服务记录" uRl="../../../pages/admin/admin"></headTop>
		<view class="server_list">
			<view class="select">
				<text>全部</text>
				<text>进行中</text>
				<text>已完成</text>
			</view>
			<view class="search">
				<text class="">筛选</text>
				<text class="">搜索</text>
			</view>
		</view>
		<view class="content">
			<button type="primary">查看更多</button>
			<text>继续查看已绑定/勾选区域全部办电记录</text>
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
.serve{
	background-color: #F0F3F6;
	font-size: 28upx;
	height: calc(100vh - 120upx);
	padding-top: 120upx;
}
.server_list{
	background-color: #FFFFFF;
	display: flex;
	justify-content: space-between;
	padding: 30upx 30upx;
	margin-top: 10upx;
	.select{
		text{
			margin-left: 50upx;
		}
	}
	.search{
		text{
			margin-left: 40upx;
			border: 1upx #008DFF solid;
			font-size: 24upx;
			padding:4upx 10upx;
			color: #008DFF;
		}
	}
}
.content{
	margin-top: 40upx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	button{
		width: 96%;
		height: 100upx;
		line-height: 100upx;
		font-size: 36upx;
		letter-spacing: 4upx;
	}
	text{
		margin-top: 20upx;
		font-size: 24upx;
		color: #2C405A;
	}
}
</style>
