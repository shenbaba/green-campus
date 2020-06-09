<template>
	<view class="query-page">
		<head-top title="数据查询" :bool="false"></head-top>
		<view class="query_list">
			<navigator url="./rapport/rapport">
				<view class="query rapport">
					<icon type="" class="iconfont icon-baobiao"></icon>
					<text>报表查看</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
			<navigator url="./history-data/history-data">
				<view class="query history">
					<icon type="" class="iconfont icon-lishi"></icon>
					<text>历史抄表示数</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
			<navigator url="./history-dosage/history-dosage">
				<view class="query dosage">
					<icon type="" class="iconfont icon-3yongliang"></icon>
					<text>历史用量数据</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
			<navigator url="./history-telemeterimg/history-telemeterimg">
				<view class="query telemetering">
					<icon type="" class="iconfont icon-dengguangyaokongqibeifen"></icon>
					<text>历史遥测数据</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import headTop from "@/components/page-head/page-head.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			headTop,
		},
		methods: {
			
		}
	}
</script>

<style>
.query-page{
	background-color: #f0f3f6;
	width: 750upx;
	padding-top: 120upx;
}
.query_list{
	margin-top: 20upx;
	font-size: 28upx;
	background-color: #FFFFFF;
}
.query{
	height: 100upx;
	line-height: 100upx;
	border-bottom: 1upx #bbbbbb solid;
	padding:0 30upx;
}
.query icon{
	margin-right: 20upx;
	color: #000000;
	font-size: 32upx;
}
</style>
