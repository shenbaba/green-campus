<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("http://at.alicdn.com/t/font_1633081_lo8idqjx459.css");
	@import "components/m-icon/m-icon.css";
	button {
		background-color: #0191fb;
		font-size: 24upx;
		color: #FFFFFF;
		width: 120upx;
		height: 60upx;
	}
	button.primary {
		background-color: #0191fb;
	}
	.uni-list-cell {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 28upx;
		padding: 20upx 20upx;
		border-bottom: 1px #EEEEEE solid;
		background-color: #ffffff;
	}
	.uni-list-cell-left {
		margin-right: 20upx;
	}
	
	.uni-list-cell-db {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1upx #C8C7CC solid;
		padding: 10upx 40upx;
	}
	
</style>
