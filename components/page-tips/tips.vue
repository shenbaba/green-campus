<template>
	<view class="tips-content">
		<view class="tip">
			<view class="tips">
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
		font-size: #3b4044;
		font-weight: 500;
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
	icon{
	}
</style>
