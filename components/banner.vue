<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" >
                        <swiper-item>
                            <view class="swiper-item">
								<image src="/static/1.png" mode="scaleToFil"></image>
							</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item">
								<image src="/static/2.png" mode="scaleToFil"></image>
							</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item">
								<image src="/static/3.png" mode="scaleToFil"></image>
							</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots:true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
	}
</script>

<style>
.swiper{
	width: 750upx;
	height: 400upx;
}
swiper-item{
	/* background-color: #007AFF; */
	height: 400px;
	width: 750upx;
}
.swiper-item{
	width: 100%;
	height: 400upx;
}
image{
	width: 100%;
	height: 400upx;
}
</style>
