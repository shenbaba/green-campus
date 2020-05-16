<template>
	<view class="header">
		<view class="page-header">
			<icon type="" class="iconfont icon-arrow-lift" size="30" 
			@touchstart="back()"
			v-show="bool"
			></icon>
			<view class="blank" v-show="!bool"></view>
			<view class="page-title">
				<text>{{title}}</text>
			</view>
			<view class="blank"></view>
		</view>
		//这个空标签为了解决顶部导航脱离文档流后，页面内容挤上来
		<view class="placeholder"></view>
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
			back(){
				uni.switchTab({
					url:this.uRl
				})
			}
		}
	}
</script>

<style>
.page-header{
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 750upx;
	height: 120upx;
	background-color: #008dff;
	font-size: 28upx;
	line-height: 28upx;
	padding-left: 30upx;
	padding-right: 30upx;
	padding-bottom: 30upx;
	box-sizing: border-box;
	position: fixed;
	top: 0;
	z-index: 10;
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
	height: 28upx;
}
</style>
