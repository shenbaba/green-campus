<template>
	<view class="judge-page">
		<head-top title="用能诊断" :bool="false"></head-top>
		<view class="judge-content">
			<view class="judge add-judge">
				<ti-ps msg="能耗诊断" :bool="true"></ti-ps>
				<view class="add-judge-list">
					<text>诊断内容：临潼校区能耗突增</text>
					<text>诊断时间：2020-02-23</text>
				</view>
				<view class="add-judge-list">
					<text>诊断内容：临潼校区能耗突增</text>
					<text>诊断时间：2020-02-23</text>
				</view>
				<view class="add-judge-list">
					<text>诊断内容：临潼校区能耗突增</text>
					<text>诊断时间：2020-02-23</text>
				</view>
				<view class="add-judge-list">
					<text>诊断内容：临潼校区能耗突增</text>
					<text>诊断时间：2020-02-23</text>
				</view>
				<view class="add-judge-list">
					<text>诊断内容：临潼校区能耗突增</text>
					<text>诊断时间：2020-02-23</text>
				</view>
			</view>
			<view class="judge unusual-judge">
				<ti-ps msg="指标诊断" :bool="true"></ti-ps>
				<view class="unusual-chat">
					<text>2020年1月12日教学楼13#照明用电异常</text>
					<un-usual></un-usual>
					<view class="suggest">
						<text>诊断意见：该区域在16:00至17:00之间出现能耗突增</text>
					</view>
				</view>
			</view>
			<view class="judge time-judge">
				<ti-ps msg="设备诊断" :bool="true"></ti-ps>
				<view class="unusual-chat">
					<text>2020年1月12日教学楼13#照明用电异常</text>
					<un-usual></un-usual>
					<view class="suggest">
						<text>诊断意见：该区域在16:00至17:00之间出现能耗突增</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	import headTop from '@/components/page-head/page-head.vue'
	import tiPs from "@/components/page-tips/tips.vue"
	import unUsual from"@/components/chat/line/unusual-judge.vue"
	export default {
		data() {
			return {
				
			}
		},
		components:{
			headTop,
			tiPs,
			unUsual
		},
		methods: {
			
		}
	}
</script>

<style>
.judge-page{
	background-color: #f0f3f6;
	padding-bottom: 120upx;
}
.judge{
	background-color: #FFFFFF;
	margin-top: 20upx;
	padding: 20upx;
	font-size: 24upx;
}
.add-judge-list{
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.unusual-chat{
	border: 1upx #C8C7CC solid;
	padding-bottom: 10upx;
	padding-top: 10upx;
}
.suggest{
	margin-top: 20upx;
	padding: 10upx;
	border-top: 1upx #C8C7CC solid;
}
</style>
