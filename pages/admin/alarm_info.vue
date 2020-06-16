<template>
	<view class="page">
		<headTop title="详细信息" uRl="./monthAlarm"></headTop>
		<view class="content">
			<text style="color: #DD0000;">告警名称：<text >{{list.alarmName}}</text></text>
			<text style="border: 1upx #eeeeee solid;color: #B68D4C;">告警内容：{{list.alarmContent}}</text>
			<text>告警类型：{{list.alarmType}}</text>
			<text>是否已读：{{list.isReaded}}</text>
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
			renderTime(date) {
			  let dateee = new Date(date).toJSON();
			  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
			},
		},
		onLoad(option){
			this.indexs = option.index;
		},
		mounted() {
			uni.request({
				url:'http://118.178.126.209:8085/GreenCampus/alarm/oneAlarmRecord',
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
						this.list.alarmTime = this.renderTime(this.list.alarmTime);
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
