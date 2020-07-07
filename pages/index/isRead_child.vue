<template>
	<view class="page">
		<headTop title="未读详情" uRl="./isReadAlarm"></headTop>
		<view class="content">
			<text style="color: #DD0000;">告警名称：<text >{{list.alarmName}}</text></text>
			<text style="border: 1upx #eeeeee solid;color: #B68D4C;">告警内容：{{list.alarmContent}}</text>
			<text>告警类型：{{list.alarmType}}</text>
			<!-- <text>是否已读：{{list.isReaded}}</text> -->
			<text>告警时间：{{list.alarmTime}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexs : 0,
				list:{}
			}
		},
		methods: {
		},
		onLoad(option){
			this.indexs = option.index;
		},
		mounted() {
			uni.request({
				url:'/api/GreenCampus/alarm/oneAlarmRecord',
				data:{
					alarmRecordId : this.indexs
				},
				success: (res) => {

					this.list=res.data.detail;
					
					for(let item in this.list){
						if(this.list.isReaded == 0){
							this.list.isReaded = '否'
						}else if(this.list.isReaded == 1){
							this.list.isReaded = '是'
						}
						item.alarmTime = item.alarmTime.split('T')[0]+'  '+item.alarmTime.split('T')[1].split('+')[0];
					}
				}
				
			})
		}
	}
</script>

<style lang="less">
.page{
	background-color: #F0F3F6;
	padding-top: 120upx;
	height: calc(100vh - 120upx);
	.content{
		margin-top: 10upx;
		background-color: #FFFFFF;
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		text{
			padding: 10upx 20upx;
			margin-bottom: 10upx;
		}
	}
}
</style>
