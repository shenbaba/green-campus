<template>
	<view>
		<view class="Calendar">
			<view class="uni-list-cell-left-time">
				时间范围:
			</view>
			<view class="uni-list-cell-db-left">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</view>
			<text>到</text>
			<view class="uni-list-cell-db-right">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
			            format: true
			        })
			return {
				date: currentDate,
				time: '12:01'
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style>
.Calendar{
		width: 750upx;
		display: flex;
		justify-content: space-between;
		padding: 20upx 20upx;
		align-items: center;
		background-color: #FFFFFF;
		font-size: 24upx;
		box-sizing: border-box;
	}
	.uni-list-cell-db-left,.uni-list-cell-db-right{
		margin: 0 40upx;
		border: 1upx #C8C7CC solid;
		padding: 10upx 20upx;
		border-radius: 10upx;
}
</style>
