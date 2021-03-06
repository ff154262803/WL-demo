import axios from './axios';
import { Message } from 'element-ui'
import router from '../routes'
import ip from '../vuex/store'
import da from "element-ui/src/locale/lang/da";

let base = ip.state.ip; // 'http://39.107.112.17:5000/api'
export default {
    POST(url, data, callback, errback) {
        var storage = JSON.parse(sessionStorage.getItem('user'));
        data.ver = '1.0';
        if (storage) {
            if (!data.uid) data.uid = storage.uid;
            data.uKey = storage.uKey;
        }
        axios.post(url, data)
            .then(res => {
                //   console.log(res);
                this.ajaxNext(res.data, callback, errback);
            });
    },
    GET(url, data, callback, errback) {
        axios.get(url, data)
            .then(res => {
                this.ajaxNext(res.data, callback, errback);
            })
    },
    ajaxNext(data, callback, errback) {
        // console.log(data);
        switch (data.resb) {
            case 200:
                callback(data);
                break;
            case 301:
                Message.error(data.resbInfo);
                router.push('login')
                break;
            case 996:
                errback(data);
                break;
            default:
                Message.error(data.resbInfo);
                errback && errback();
                break;
        }
    },
    //登录
    login(data, callback, errback) {
        console.log(data)
        this.POST(`${base}/manage/login`, data, callback, errback);
    },
    //登出
    loginOut(data, callback, errback) {
        this.POST(`${base}/manage/loginOut`, data, callback, errback);
    },
    //新增平台用户
    addManageUser(data, callback, errback) {
        this.POST(`${base}/manage/addManageUser`, data, callback, errback);
    },
    //获取平台用户列表
    queryManageUserList(data, callback, errback) {
        this.POST(`${base}/manage/queryManageUserList`, data, callback, errback);
    },
    //删除平台用户
    deleteManageUser(data, callback, errback) {
        this.POST(`${base}/manage/deleteManageUser`, data, callback, errback);
    },
    //设置平台用户可用状态
    setManageUserEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setManageUserEnableState`, data, callback, errback);
    },
    //修改平台用户
    updateManageUser(data, callback, errback) {
        this.POST(`${base}/manage/updateManageUser`, data, callback, errback);
    },
    //获取版本信息
    getAppVersion(data, callback, errback) {
        this.POST(`${base}/manage/getAppVersion`, data, callback, errback);
    },
    //发布新版本
    addAppUpdate(data, callback, errback) {
        this.POST(`${base}/manage/addAppUpdate`, data, callback, errback);
    },
    //获取服务器状态
    getServerStatus(data, callback, errback) {
        this.POST(`${base}/manage/getServerStatus`, data, callback, errback);
    },
    //修改服务器状态
    updateServerStatus(data, callback, errback) {
        this.POST(`${base}/manage/updateServerStatus`, data, callback, errback);
    },
    //查询园区管理
    queryParkList(data, callback, errback) {
        this.POST(`${base}/manage/queryParkList                                                                                                                                                                                                                                                                                                                                                                                                                                                                    `, data, callback, errback);
    },
    //批量删除园区
    deletePark(data, callback, errback) {
        this.POST(`${base}/manage/deletePark`, data, callback, errback);
    },
    //批量设置启用状态
    setParkEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setParkEnableState`, data, callback, errback);
    },
    //获取园区类型
    getParkTypeList(data, callback, errback) {
        this.POST(`${base}/manage/getParkTypeList`, data, callback, errback);
    },
    //获取含有园区的省市
    getParkAreaList(data, callback, errback) {
        this.POST(`${base}/manage/getParkAreaList`, data, callback, errback);
    },
    //新增园区
    addPark(data, callback, errback) {
        this.POST(`${base}/manage/addPark`, data, callback, errback);
    },
    //获取园区详情
    getParkDetails(data, callback, errback) {
        this.POST(`${base}/manage/getParkDetails`, data, callback, errback);
    },
    //编辑园区
    updatePark(data, callback, errback) {
        this.POST(`${base}/manage/updatePark`, data, callback, errback);
    },
    //查询景点列表
    querySiteList(data, callback, errback) {
        this.POST(`${base}/manage/querySiteList`, data, callback, errback);
    },
    //批量删除景点
    deleteSite(data, callback, errback) {
        this.POST(`${base}/manage/deleteSite`, data, callback, errback);
    },
    //批量设置启用状态
    setSiteEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setSiteEnableState`, data, callback, errback);
    },
    //获取景点类型
    getSiteTypeList(data, callback, errback) {
        this.POST(`${base}/manage/getSiteTypeList`, data, callback, errback);
    },
    //新增景点
    addSite(data, callback, errback) {
        this.POST(`${base}/manage/addSite`, data, callback, errback);
    },
    //获取景点详情
    getSiteDetails(data, callback, errback) {
        this.POST(`${base}/manage/getSiteDetails`, data, callback, errback);
    },
    //修改景点详情
    updateSite(data, callback, errback) {
        this.POST(`${base}/manage/updateSite`, data, callback, errback);
    },
    //查询全部类型列表
    queryTypeList(data, callback, errback) {
        this.POST(`${base}/manage/queryTypeList`, data, callback, errback);
    },
    //查询全部类型列表
    getGroupList(data, callback, errback) {
        this.POST(`${base}/manage/getGroupList`, data, callback, errback);
    },
    //新增景点类型
    addType(data, callback, errback) {
        this.POST(`${base}/manage/addType`, data, callback, errback);
    },
    //修改类型名
    updateType(data, callback, errback) {
        this.POST(`${base}/manage/updateType`, data, callback, errback);
    },
    //校验改类型是否可直接删除
    checkDeleteType(data, callback, errback) {
        this.POST(`${base}/manage/checkDeleteType`, data, callback, errback);
    },
    //删除类型
    deleteType(data, callback, errback) {
        this.POST(`${base}/manage/deleteType`, data, callback, errback);
    },
    //设置类型可用状态
    setTypeEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setTypeEnableState`, data, callback, errback);
    },
    //查询路线列表
    queryRouteList(data, callback, errback) {
        this.POST(`${base}/manage/queryRouteList`, data, callback, errback);
    },
    //批量删除路线
    deleteRoute(data, callback, errback) {
        this.POST(`${base}/manage/deleteRoute`, data, callback, errback);
    },
    //批量设置启用状态
    setRouteEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setRouteEnableState`, data, callback, errback);
    },
    //新增路线
    addRoute(data, callback, errback) {
        this.POST(`${base}/manage/addRoute`, data, callback, errback);
    },
    //获取路线详情
    getRouteDetails(data, callback, errback) {
        this.POST(`${base}/manage/getRouteDetails`, data, callback, errback);
    },
    //修改路线详情
    updateRoute(data, callback, errback) {
        this.POST(`${base}/manage/updateRoute`, data, callback, errback);
    },
    //查询产品列表
    queryCommodityList(data, callback, errback) {
        this.POST(`${base}/manage/queryCommodityList`, data, callback, errback);
    },
    //批量删除产品
    deleteCommodity(data, callback, errback) {
        this.POST(`${base}/manage/deleteCommodity`, data, callback, errback);
    },
    //批量设置启用状态
    setCommodityEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setCommodityEnableState`, data, callback, errback);
    },
    //新增产品
    addCommodity(data, callback, errback) {
        this.POST(`${base}/manage/addCommodity`, data, callback, errback);
    },
    //修改产品详情
    updateCommodity(data, callback, errback) {
        this.POST(`${base}/manage/updateCommodity`, data, callback, errback);
    },
    //删除移动端用户
    deleteAppUser(data, callback, errback) {
        this.POST(`${base}/manage/deleteAppUser`, data, callback, errback);
    },
    //获取移动端用户列表
    queryAppUserList(data, callback, errback) {
        this.POST(`${base}/manage/queryAppUserList`, data, callback, errback);
    },
    //设置可用状态
    setAppUserEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setAppUserEnableState`, data, callback, errback);
    },
    //获取数据统计信息
    getDataCube(data, callback, errback) {
        this.POST(`${base}/manage/getDataCube`, data, callback, errback);
    },
    //获取意见反馈列表
    queryUserFeedbackList(data, callback, errback) {
        this.POST(`${base}/manage/queryUserFeedbackList`, data, callback, errback);
    },
    //获取支付方式
    getPayType(data, callback, errback) {
        this.POST(`${base}/manage/payconfig/getPayType`, data, callback, errback);
    },
    //设置支付方式
    setPayType(data, callback, errback) {
        this.POST(`${base}/manage/payconfig/setPayType`, data, callback, errback);
    },
    //添加支付选项
    addPayOption(data, callback, errback) {
        this.POST(`${base}/manage/payconfig/addPayOption`, data, callback, errback);
    },
    //修改支付选项
    updatePayOption(data, callback, errback) {
        this.POST(`${base}/manage/payconfig/updatePayOption`, data, callback, errback);
    },
    //删除支付选项
    deletePayOption(data, callback, errback) {
        this.POST(`${base}/manage/payconfig/deletePayOption`, data, callback, errback);
    },
    //查询支付选项列表
    queryPayOptionList(data, callback, errback) {
        this.POST(`${base}/manage/payconfig/queryPayOptionList`, data, callback, errback);
    },
    //新增页面链接
    addPageLink(data, callback, errback) {
        this.POST(`${base}/manage/addPageLink`, data, callback, errback);
    },
    //查询页面链接列表
    queryPageLinkList(data, callback, errback) {
        this.POST(`${base}/manage/queryPageLinkList`, data, callback, errback);
    },
    //修改页面链接信息
    updatePageLink(data, callback, errback) {
        this.POST(`${base}/manage/updatePageLink`, data, callback, errback);
    },
    //添加商城商品
    addMallGoods(data, callback, errback) {
        this.POST(`${base}/manage/addMallGoods`, data, callback, errback);
    },
    //删除商城商品
    deleteMallGoods(data, callback, errback) {
        this.POST(`${base}/manage/deleteMallGoods`, data, callback, errback);
    },
    //商品详情信息
    getMallGoodsDetails(data, callback, errback) {
        this.POST(`${base}/manage/getMallGoodsDetails`, data, callback, errback);
    },
    //商城商品列表查询
    queryMallGoodsList(data, callback, errback) {
        this.POST(`${base}/manage/queryMallGoodsList`, data, callback, errback);
    },
    //修改商品信息
    updateMallGoods(data, callback, errback) {
        this.POST(`${base}/manage/updateMallGoods`, data, callback, errback);
    },
    //添加商城活动
    addMallActivity(data, callback, errback) {
        this.POST(`${base}/manage/addMallActivity`, data, callback, errback);
    },
    //删除商城活动
    deleteMallActivity(data, callback, errback) {
        this.POST(`${base}/manage/deleteMallActivity`, data, callback, errback);
    },
    //活动详情信息
    getMalllActivityDetails(data, callback, errback) {
        this.POST(`${base}/manage/getMalllActivityDetails`, data, callback, errback);
    },
    //商城活动查询
    queryMallActivityList(data, callback, errback) {
        this.POST(`${base}/manage/queryMallActivityList`, data, callback, errback);
    },
    //修改活动信息
    updateMallActivity(data, callback, errback) {
        this.POST(`${base}/manage/updateMallActivity`, data, callback, errback);
    },
    //设置活动的可用状态
    setMallActivityEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setMallActivityEnableState`, data, callback, errback);
    },
    //添加h5信息
    addH5(data, callback, errback) {
        this.POST(`${base}/manage/addH5`, data, callback, errback);
    },
    //获取h5信息
    getH5Details(data, callback, errback) {
        this.POST(`${base}/manage/getH5Details`, data, callback, errback);
    },
    //更新h5
    updateH5(data, callback, errback) {
        this.POST(`${base}/manage/updateH5`, data, callback, errback);
    },
    //添加预约活动
    addEvents(data, callback, errback) {
        this.POST(`${base}/manage/addEvents`, data, callback, errback);
    },
    //添加时段
    addTimePart(data, callback, errback) {
        this.POST(`${base}/manage/addTimePart`, data, callback, errback);
    },
    //删除预约活动
    deleteEvents(data, callback, errback) {
        this.POST(`${base}/manage/deleteEvents`, data, callback, errback);
    },
    //删除时段
    deleteTimePart(data, callback, errback) {
        this.POST(`${base}/manage/deleteTimePart`, data, callback, errback);
    },
    //商城活动列表查询
    queryEventsList(data, callback, errback) {
        this.POST(`${base}/manage/queryEventsList`, data, callback, errback);
    },
    //时间段列表查询
    queryTimePartList(data, callback, errback) {
        this.POST(`${base}/manage/queryTimePartList`, data, callback, errback);
    },
    //设置活动的可用状态
    setEventsEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setEventsEnableState`, data, callback, errback);
    },
    //设置时间段的可用状态
    setTimePartEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setTimePartEnableState`, data, callback, errback);
    },
    //商城活动列表查询
    updateEvents(data, callback, errback) {
        this.POST(`${base}/manage/updateEvents`, data, callback, errback);
    },
    //修改时间段信息
    updateTimePart(data, callback, errback) {
        this.POST(`${base}/manage/updateTimePart`, data, callback, errback);
    },
    //添加全景图信息
    addPanorama(data, callback, errback) {
        this.POST(`${base}/manage/addPanorama`, data, callback, errback);
    },
    //删除全景图信息
    deletePanorama(data, callback, errback) {
        this.POST(`${base}/manage/deletePanorama`, data, callback, errback);
    },
    //获取全景图列表信息
    queryPanoramaList(data, callback, errback) {
        this.POST(`${base}/manage/queryPanoramaList`, data, callback, errback);
    },
    //编辑全景图信息
    updatePanorama(data, callback, errback) {
        this.POST(`${base}/manage/updatePanorama`, data, callback, errback);
    },
    //设置全景图是否可以用
    setPanoramaEnableState(data, callback, errback) {
        this.POST(`${base}/manage/setPanoramaEnableState`, data, callback, errback);
    },
    //推送
    simplePush(data, callback, errback) {
        this.POST(`${base}/manage/simplePush`, data, callback, errback);
    },
    //获取预约人数信息
    getEventsNumList(data, callback, errback) {
        this.POST(`${base}/manage/getEventsNumList`, data, callback, errback);
    },
    //获取预约列表信息
    getEventsUserList(data, callback, errback) {
        this.POST(`${base}/manage/getEventsUserList`, data, callback, errback);
    },
    //添加园区公告
    addParkNotice(data, callback, errback) {
        this.POST(`${base}/manage/addParkNotice`, data, callback, errback);
    },
    //删除公告信息
    deleteParkNotice(data, callback, errback) {
        this.POST(`${base}/manage/deleteParkNotice`, data, callback, errback);
    },
    //查询公告列表信息
    queryParkNoticeList(data, callback, errback) {
        this.POST(`${base}/manage/queryParkNoticeList`, data, callback, errback);
    },
    //查询失物列表信息
    queryLostPropertyList(data, callback, errback) {
        this.POST(`${base}/manage/lost/queryLostPropertyList`, data, callback, errback);
    },
    //添加失物
    addLostProperty(data, callback, errback) {
        this.POST(`${base}/manage/lost/addLostProperty`, data, callback, errback);
    },
    //失物认领
    reclaim(data, callback, errback) {
        this.POST(`${base}/manage/lost/reclaim`, data, callback, errback);
    },
    //修改失物信息
    updateLostProperty(data, callback, errback) {
        this.POST(`${base}/manage/lost/updateLostProperty`, data, callback, errback);
    },
    //根据园区id获取园区领取须知
    getParkInstructions(data, callback, errback) {
        this.POST(`${base}/manage/lost/getParkInstructions`, data, callback, errback);
    },
    //添加领取须知
    addInstructions(data, callback, errback) {
        this.POST(`${base}/manage/lost/addInstructions`, data, callback, errback);
    },
    //游客租借
    visitorLease(data, callback, errback) {
        this.POST(`${base}/manage/lease/visitorLease`, data, callback, errback);
    },
    //租赁记录
    queryLeaseRecords(data, callback, errback) {
        this.POST(`${base}/manage/lease/queryLeaseRecords`, data, callback, errback);
    },
    //租赁物品-列表
    queryLeaseResList(data, callback, errback) {
        this.POST(`${base}/manage/lease/queryLeaseResList`, data, callback, errback);
    },
    //租赁物品-添加
    addLeaseRes(data, callback, errback) {
        this.POST(`${base}/manage/lease/addLeaseRes`, data, callback, errback);
    },
    //租赁物品-归还
    leaseGiveBack(data, callback, errback) {
        this.POST(`${base}/manage/lease/leaseGiveBack`, data, callback, errback);
    },
    //租赁物品-修改
    updateLeaseRes(data, callback, errback) {
        this.POST(`${base}/manage/lease/updateLeaseRes`, data, callback, errback);
    },
    //修改租赁信息
    updateVisitorLease(data, callback, errback) {
        this.POST(`${base}/manage/lease/updateVisitorLease`, data, callback, errback);
    },
    //租赁物品-删除
    deleteLeaseRes(data, callback, errback) {
        this.POST(`${base}/manage/lease/deleteLeaseRes`, data, callback, errback);
    },
    //租赁物品分布-查询
    queryLeaseResManagement(data, callback, errback) {
        this.POST(`${base}/manage/lease/queryLeaseResManagement`, data, callback, errback);
    },
    //租赁物品分布-增加
    allocationLeaseRes(data, callback, errback) {
        this.POST(`${base}/manage/lease/allocationLeaseRes`, data, callback, errback);
    },
    //租赁物品分布-修改
    updateLeaseResManagement(data, callback, errback) {
        this.POST(`${base}/manage/lease/updateLeaseResManagement`, data, callback, errback);
    },
    //租赁物品-设置启用禁用状态
    setLeaseResEnableState(data, callback, errback) {
        this.POST(`${base}/manage/lease/setLeaseResEnableState`, data, callback, errback);
    },
    //根据parkid获取全部服务中心信息
    getServiceCenterList(data, callback, errback) {
        this.POST(`${base}/manage/lease/getServiceCenterList`, data, callback, errback);
    },
    //根据parkid获取全部租赁物品名
    getLeaseResNames(data, callback, errback) {
        this.POST(`${base}/manage/lease/getLeaseResNames`, data, callback, errback);
    },
    //查询兑换记录
    queryExchangeList(data, callback, errback) {
        this.POST(`${base}/manage/scores/queryExchangeList`, data, callback, errback);
    },
    //查询积分列表
    queryScoreList(data, callback, errback) {
        this.POST(`${base}/manage/scores/queryScoreList`, data, callback, errback);
    },
    //新增修改头图信息
    addheadPic(data, callback, errback) {
        this.POST(`http://192.192.0.241:5005/api/manage/index/addOrModifyHeadPic`, data, callback, errback);
    },

    // 通过园区id查询头图信息
    getHeadPic(data, callback, errback) {
        this.POST(`http://192.192.0.241:5005/api/manage/index/getHeadPic`, data, callback, errback);
    },
    //通过id新增/修改首页元素信息
    addOrModifyTheme(data, callback, errback) {
        this.POST(`http://192.192.0.241:5005/api/manage/index/addOrModifyTheme`, data, callback, errback);
    },
    //通过园区id查询一级标题信息
    getTheme(data, callback, errback) {
        this.POST(`http://192.192.0.241:5005/api/manage/index/getTheme`, data, callback, errback);
    },
     //通过园区id查询一级标题信息
     deleteTheme(data, callback, errback) {
        this.POST(`http://192.192.0.241:5005/api/manage/index/deleteTheme`, data, callback, errback);
    }
}
