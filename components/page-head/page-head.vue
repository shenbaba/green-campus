<template>
	<view class="header">
		<view class="page-header">
			<icon type="" class="iconfont icon-arrow-lift" size="30" 
			@click="back($event)"
			v-show="bool"
			></icon>
			<view class="blank" v-show="!bool"></view>
			<view class="page-title">
				<text>{{title}}</text>
			</view>
			<view class="blank"></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:'hello'
			},
			bool:{
				published: Boolean,
				default:true
			},
			uRl:''
		},
		data() {
			return {
				
			}
		},
		methods: {
			back(e){
				uni.switchTab({
					url:this.uRl
				});
				uni.redirectTo({
					url:this.uRl
				});
			}
		}
	}
</script>

<style>
	.header{
		box-sizing: border-box;
		width: 750upx;
		height: 120upx;
		background-color: #147fd1;
		font-size: 28upx;
		line-height: 28upx;
		padding-top: 40upx;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
	}
	.page-header{
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding-left: 30upx;
		padding-right: 30upx;
	
},
.iconfont{
	font-size: 50upx;
	color: #F9FAFB ;
}
.page-title{
	font-size: 32upx;
	font-weight: 500;
	color: #F9FAFB;
}
.blank{
	width: 60upx;
	height: 60upx;
}
.placeholder{
	height: 120upx;
	width: 100%;
}
</style>
