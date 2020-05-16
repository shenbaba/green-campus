<template>
	<view class="history-page">
		<head-top title="数据查询" :bool="true" uRl="../../../pages/query/query-data"></head-top>
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
.history-page{
	background-color: #F0F3F6;
	width: 750upx;
}
</style>
