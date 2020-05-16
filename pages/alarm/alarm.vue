<template>
	<view class="alarm-page">
		<head-top title="告警中心" :bool="false"></head-top>

		<view class="alarm-select">
			<uni-collapse accordion="true">
				<uni-collapse-item title="告警类型" class="alarm-type">
					<view style="padding: 20rpx;" class="types">
						<icon type="" class="iconfont icon-zengchang"></icon>
						<text>用能突增告警</text>
					</view>
					<view style="padding: 20rpx;" class="types">
						<icon type="" class="iconfont icon-zulinfeiyongbaobiao"></icon>
						<text>区域费用告警</text>
					</view>
					<view style="padding: 20rpx;" class="types">
						<icon type="" class="iconfont icon-dianbiao"></icon>
						<text>电表通信告警</text>
					</view>
				</uni-collapse-item>
				<navigator url="./alarm-record/alarm-record"><uni-collapse-item title="告警记录"></uni-collapse-item></navigator>
				<uni-collapse-item title="常见问题">
				</uni-collapse-item>
			</uni-collapse>
		</view>
		
	</view>
</template>

<script>

	import headTop from '@/components/page-head/page-head.vue'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
			headTop
		}
	}
</script>

<style>
	.alarm-page {
		background-color: #f0f3f6;
		width: 750upx;
	}

	.alarm-select {
		margin-top: 20upx;
		background-color:FFFFF;
		font-size: 24upx;
	}

	.alarm-title {
		display: flex;
		align-items: center;
	}

	.alarm-type {
		background-color: #FFFFFF;

	}

	.alarm-type .iconfont {
		margin-right: 20upx;
		margin-left: 20upx;
		font-size: 50upx;
	}

	.types {
		width: 750upx;
		display: flex;
		align-items: center;
		border-bottom: 1upx #000000 solid;
	}

	.alarm-type view:nth-child(3) {
		border-bottom: none;
	}

	.icon-zengchang {
		color: #E05454;
	}

	.icon-zulinfeiyongbaobiao {
		color: #E02828;
	}

	.icon-dianbiao {
		color: #EF0B0B;
	}
</style>
