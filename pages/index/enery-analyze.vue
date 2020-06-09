<template>
	<view class="enery">
		<headTop :title="title"  uRl="./index"></headTop>
		<view class="region_info">
			<icon type="" class="iconfont icon-quyuguanli"></icon>
			<text>临潼 (662898771)</text>
			<text style="float: right">区域能效</text>
		</view>
		<view class="ele_tend">
			<view class="ele_title">
				<text style="font-weight: 500;">用电趋势</text>
				<view class="select_chat">
					<icon type="" class="iconfont icon-nenghaopaiming"  @click="change(1)" :class="{active:show==1}"></icon>
					<icon type="" class="iconfont icon-tubiao"  @click="change(2)" :class="{active:show==2}"></icon>
				</view>
			</view>
			<view class="chat">
				<text>度</text>
				<u-charts v-if="bool"></u-charts>
				<l-ine v-if="!bool"></l-ine>
			</view>
			<view class="label">
				<text class="label_title">区域用电标签</text>
				<view class="label_list">
					<view class="">
						<image src="../../static/image/1.jpg" ></image>
						<text>用电量低于校区平均水平</text>
					</view>
					<view class="">
						<image src="../../static/image/2.jpg" ></image>
						<text>月用电趋势变化明显，变化莫测</text>
					</view>
					<view class="">
						<image src="../../static/image/7.jpg" ></image>
						<text>节假日平均用电量与工作日相当</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/chat/ele-tend.vue'
	import lIne from '@/components/chat/line/regionEnergy-line.vue'
	export default {
		data() {
			return {
				title:'用能分析',
				bool:true,
				show:1
			}
		},
		components:{
			uCharts,
			lIne
		},
		methods: {
			change(index){
				this.bool = ! this.bool;
				this.show = index
			}
		},	
	}
</script>

<style lang="less">
.enery{
	background-color: #F0F3F6;
	font-size: 28upx;
	padding-top: 120upx;
}
.region_info{
	background-color: #147fd1;
	color: #FFFFFF;
	padding: 20upx 30upx;
	icon{
		margin-right: 20upx;
	}
}
.ele_tend{
	.ele_title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 30upx;
		background-color: #FFFFFF;
		border: 1px #F0F3F6 solid;
		.select_chat{
			border: 1px #00A8FE solid;
			padding: 4upx;
			border-radius: 40upx;
			icon{
				font-size: 24upx;
			}
			icon:nth-child(1){
				
				border-radius: 50%;
				padding: 6upx;
			}
			icon:nth-child(2){
				margin-left: 20upx;
				border-radius: 50%;
				padding: 6upx;	
			}
			.active{
				background-color: #288cd8;
				color: #ffffff;
			}
		}
		
	}
	.chat{
		padding-top: 20upx;
		padding-bottom: 20upx;
		background-color: #FFFFFF;
		text{
			margin-left: 60upx;
		}
	}
}
.label{
	margin-top: 10upx;
	background-color: #FFFFFF;
	padding: 20upx 30upx;
	.label_title{
		display: flex;
		justify-content: center;
		font-size: 36upx;
		letter-spacing: 4upx;
		font-weight: 500;
	}
	.label_list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 40upx;
		text-align: center;
		view{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text{
				padding: 0 10upx;
				margin-top: 20upx;
				color: #241f1f;
			}
		}
		image{
			width: 180upx;
			height:180upx;
		}
	}
}
</style>
