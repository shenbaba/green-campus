<template>
	<view class="content">
		<!-- 轮播图 -->
		<ban-ner></ban-ner>
		<!-- 内容 -->
		<view class="content-box">
			<view class="box alarm-msg">
				<view class="alarm-left">
					<icon type="#0191fb" class="message iconfont icon-messagecenter"></icon>
					<view class="msg">
						<view class="msg-list">
							<icon type="" class="iconfont icon-dian"></icon>
							<text class="alarm-content">一号教学楼能耗突增</text>
							<text class="alarm-time">刚刚</text>
						</view>
						<view class="msg-list">
							<icon type="" class="iconfont icon-dian"></icon>
							<text class="alarm-content">一号教学楼能耗突增</text>
							<text class="alarm-time">下午5:23</text>
						</view>
					</view>
				</view>
				<navigator url="./noReadAlarm"><icon type="" class="arrow-right iconfont icon-arrow-right"></icon></navigator>
			</view>
			<view class="box fee">
				<ti-ps msg="费用"></ti-ps>
				<view class="type fee-type">
					<navigator url="../fee/totalCost">
						<view class="" @touchstart="next()">
							<icon class="iconfont icon-dollar" type=""></icon>
							<text>总费用</text>
						</view>
					</navigator>
					<navigator url="../fee/regionCost">
						<view class="">
							<icon class="iconfont icon-image-text" type=""></icon>
							<text>区域费用</text>
						</view>
					</navigator>
					<navigator url="../fee/equipmentCost">
						<view class="">
							<icon class="iconfont icon-packaging" type=""></icon>
							<text>设备费用</text>
						</view>
					</navigator>
					<navigator url="../fee/balance">
						<view class="">
							<icon class="iconfont icon-yue" type=""></icon>
							<text>费用余额</text>
						</view>
					</navigator>
				</view>
			</view>
			<view class="box consume">
				<ti-ps msg="能耗分析"></ti-ps>
				<view class="type consume-type">
					<navigator url="../energy/totalEnergy">
						<view class="">
							<icon class="iconfont icon-nenghaoshuju" type=""></icon>
							<text>总能耗</text>
						</view>
					</navigator>
					<!-- <view class="">
						<icon class="iconfont icon-nenghaoshuju"></icon>
						<text>实时能耗</text>
					</view> -->
					<navigator url="../energy/regionEnergy">
						<view class="">
							<icon class="iconfont icon-mianjinenghao" type=""></icon>
							<text>区域能耗</text>
						</view>
					</navigator>
					<navigator url="../energy/equipmentEnergy">
						<view class="">
							<icon class="iconfont icon-nengyuannenghaoguanli" type=""></icon>
							<text>设备能耗</text>
						</view>
					</navigator>
				</view>
			</view>
			<view class="box rank">
				<ti-ps msg="用电费用排名"></ti-ps>
				<view class="rank-chat">
					<u-Charts></u-Charts>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import headTop from '@/components/page-head/page-head.vue'
	import banNer from '@/components/banner.vue'
	import uCharts from '@/components/chat/chat-1.vue'
	import tiPs from "@/components/page-tips/tips.vue"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			headTop,
			banNer,
			uCharts,
			tiPs
		},
		onLoad() {

		},
		methods: {
			next() {
				//跳转页面，该方法会将地址加入堆栈
				uni.navigateTo({
					url: '../fee/totalCost',
					animationType: 'pop-in',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: #eff2f5;
	}
	.iconfont{
		color: #0191fb;
	}
	.alarm-msg,
	.alarm-left {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.msg-list {
		display: flex;
		align-items: center;
		font-size: 28upx;
		width: 480upx;
	}

	.alarm-content {
		margin-right: 20upx;
		overflow: hiddren;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.alarm-time {
		font-size: 24upx;
		color: #C0C0C0;
	}

	.message {
		color: #0191fb;
		font-size: 80upx !important;
	}

	.arrow-right {
		font-size: 40upx !important;
		color: #C0C0C0;
	}

	.content-box {
		width: 100%;
		margin-bottom: 100upx;
		overflow: hidden;
	}

	.box {
		width: 100%;
		margin-top: 20upx;
		background-color: #FFFFFF;
		width: 100%;
		padding: 20upx 20upx;
		box-sizing: border-box;
	}

	.type {
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		margin: 20upx 0 20upx 0;
	}

	.type view {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 28upx;
	}

	.iconfont {
		font-size: 60upx;
	}
</style>
