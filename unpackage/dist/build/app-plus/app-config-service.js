
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login-1","pages/index/index","components/page-head/page-head","pages/fee/totalCost","pages/index/regionCost","pages/fee/equipmentCost","pages/energy/totalEnergy","pages/energy/regionEnergy","pages/energy/equipmentEnergy","pages/admin/admin","pages/judge/judge","pages/admin/about-app","pages/admin/personal-msg","pages/reg/reg","pages/admin/user-manage/user-manage","pages/admin/equipment-manage/equipment-manage","pages/admin/region-manage/region-manage","pages/admin/indicator-manage/indicator-manage","pages/admin/work-day/work-day","pages/login/login-1","pages/query/query-data","pages/admin/monthAlarm","pages/query/rapport/rapport","pages/query/history-data/history-data","pages/query/history-dosage/history-dosage","pages/query/history-telemeterimg/history-telemeterimg","pages/index/enery-analyze","pages/judge/allDiaBattery","pages/judge/Battery","pages/judge/allDiaQuota","pages/judge/allDiaDevice","pages/admin/alarm_info","pages/admin/serve_record/serve_record","pages/index/balance","pages/index/pay/pay","pages/index/electricity/electricity","pages/index/electricity/electticity_des","pages/index/quota/quota","pages/fee/WorkHolidayFree","pages/judge/Diaquota","pages/judge/Diadevice","pages/admin/region-manage/chlid_region","pages/login/findPassword","pages/index/isReadAlarm","pages/index/isRead_child"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"color":"#7dc5eb","selectedColor":"#0191fb","backgroundColor":"#fff","borderStyle":"white","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"./static/icon/home%20(4).png","selectedIconPath":"./static/icon/home.png"},{"pagePath":"pages/judge/judge","text":"诊断","iconPath":"static/icon/company-fill%20(1).png","selectedIconPath":"static/icon/company-fill.png"},{"pagePath":"pages/query/query-data","text":"查询","iconPath":"static/icon/rank%20(1).png","selectedIconPath":"static/icon/rank.png"},{"pagePath":"pages/admin/admin","text":"管理","iconPath":"static/icon/account%20(1).png","selectedIconPath":"static/icon/account.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"绿色能耗app","compilerVersion":"2.7.9","entryPagePath":"pages/login/login-1","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login-1","meta":{"isQuit":true},"window":{}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/components/page-head/page-head","meta":{},"window":{}},{"path":"/pages/fee/totalCost","meta":{},"window":{"navigationBarTitleText":"总费用","enablePullDownRefresh":true}},{"path":"/pages/index/regionCost","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/fee/equipmentCost","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/energy/totalEnergy","meta":{},"window":{"navigationBarTitleText":"总费用","enablePullDownRefresh":true}},{"path":"/pages/energy/regionEnergy","meta":{},"window":{}},{"path":"/pages/energy/equipmentEnergy","meta":{},"window":{}},{"path":"/pages/admin/admin","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/judge/judge","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/admin/about-app","meta":{},"window":{}},{"path":"/pages/admin/personal-msg","meta":{},"window":{}},{"path":"/pages/reg/reg","meta":{},"window":{}},{"path":"/pages/admin/user-manage/user-manage","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/admin/equipment-manage/equipment-manage","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/admin/region-manage/region-manage","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/admin/indicator-manage/indicator-manage","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/admin/work-day/work-day","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/query/query-data","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/admin/monthAlarm","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/query/rapport/rapport","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/query/history-data/history-data","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/query/history-dosage/history-dosage","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/query/history-telemeterimg/history-telemeterimg","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/enery-analyze","meta":{},"window":{}},{"path":"/pages/judge/allDiaBattery","meta":{},"window":{}},{"path":"/pages/judge/Battery","meta":{},"window":{}},{"path":"/pages/judge/allDiaQuota","meta":{},"window":{}},{"path":"/pages/judge/allDiaDevice","meta":{},"window":{}},{"path":"/pages/admin/alarm_info","meta":{},"window":{}},{"path":"/pages/admin/serve_record/serve_record","meta":{},"window":{}},{"path":"/pages/index/balance","meta":{},"window":{}},{"path":"/pages/index/pay/pay","meta":{},"window":{}},{"path":"/pages/index/electricity/electricity","meta":{},"window":{}},{"path":"/pages/index/electricity/electticity_des","meta":{},"window":{}},{"path":"/pages/index/quota/quota","meta":{},"window":{}},{"path":"/pages/fee/WorkHolidayFree","meta":{},"window":{}},{"path":"/pages/judge/Diaquota","meta":{},"window":{}},{"path":"/pages/judge/Diadevice","meta":{},"window":{}},{"path":"/pages/admin/region-manage/chlid_region","meta":{},"window":{}},{"path":"/pages/login/findPassword","meta":{},"window":{}},{"path":"/pages/index/isReadAlarm","meta":{},"window":{}},{"path":"/pages/index/isRead_child","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
