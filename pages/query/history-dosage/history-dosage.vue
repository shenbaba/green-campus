<template>
	<view class="page">
		<head-top title="实时遥测数据" :bool="true" uRl="../../../pages/query/query-data"></head-top>
		<view class="query-lists">
			<view class="query-data">
				<ti-ps msg="监控列表"></ti-ps>
				<view v-for="(item, index) in list" class="list" :key="index">
					<text>测量点名称：{{item.deviceName}}</text>
					<text>安装位置：{{item.address}}</text>
					<text>设备名称：{{item.deviceName}}</text>
					<text>信号名称：{{item.signalName}}</text>
					<text>采集时间：{{item.time}}</text>
					<text>状态：<icon class="iconfont icon-normal" style="color:#00BA0C;margin-top: 4upx;"></icon>({{item.state}})</text>
					<text>示值：{{item.battery}}</text>
					<text>单位：{{item.unit}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import headTop from "@/components/page-head/page-head.vue"
	import tiPs from "@/components/page-tips/tips.vue"
	import calenDar from "@/components/calendar.vue"
	import unUsual from "@/components/chat/line/unusual-judge.vue"
	export default {
		data() {
			return {
				list: [],
			}
		},
		components: {
			headTop,
			tiPs,
			calenDar,
			unUsual
		},
		onShow() {
			uni.request({
				url: 'http://192.168.1.101:8085/GreenCampus/real/telemetry',
				success: (res) => {
					console.log(res);
					this.list = res.data.detail;
				},
				fail: () => {
					uni.showToast({
						title: '网络出错'
					})
				}
			})
		}
	}
</script>

<style>
	.query-data {
		margin-top: 40upx;
	}

	.page {
		background-color: #f0f3f6;
		color: #4e6070;
		padding-top: 120upx;
		height: calc(100vh - 120upx);
	}

	.query {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		font-size: 24upx;
		padding: 16upx;
		margin: 20upx;
		border-radius: 16upx;
	}

	input {
		width: 400upx;
		border: 1upx #CCCCCC solid;
		border-radius: 6upx;
		margin-left: 20upx;
		height: 54upx;
		padding-left: 10upx;
	}

	.query-chat {
		margin-top: 20upx;
		background-color: #f0f3f6;
		padding: 10upx 20upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24upx;
	}

	.query-data {
		margin-top: 20upx;
		background-color: #f0f3f6;
		padding: 10upx 20upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24upx;

	}

	.list {
		width: 694upx;
		line-height: 20px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		border-radius: 16upx;
		background-color: #FFFFFF;
		text-align: left;
		border: 1px solid #FFFFFF;
		padding: 20upx 10upx;
		box-sizing: border-box;
		margin-bottom: 20upx;
		overflow: hidden;

	}

	.list text {
		flex: 1;
		width: 50%;
		min-width: 50%;
		max-width: 50%;
		font-size: 24upx;
		overflow: hiddren;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.more {
		display: flex;
		justify-content: center;
		font-size: 28upx;
		background-color: #F0F3F6;
	}
</style>
