<template>
	<view class="tips-content">
		<view class="tip">
			<view class="tips">
				<view class="strip"></view>
				<text>{{msg}}</text>
			</view>
			<icon type="" class="iconfont icon-arrow-right" v-show="bool"></icon>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			msg:{
				type:String,
				default:'error'
			},
			bool:{
				published: Boolean,
				default:false
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.tips-content{
		width: 100%;
		box-sizing: border-box;
		margin-bottom: 10upx;
		
	}
	.tip{
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	.tips{
		display: flex;
		align-items: center;
		font-size: 28upx;
	}
	.strip{
		width: 12upx;
		height: 48upx;
		background-color: #008dff;
		margin-right: 20upx;
	}
	icon{
	}
</style>
