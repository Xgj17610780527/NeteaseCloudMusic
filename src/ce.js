/**
 * Created by Administrator on 2019/9/17 0017.
 */
const data = {"loginType":1,"code":200,"account":{"id":1545970329,"userName":"1_17610780527","type":1,"status":0,"whitelistAuthority":0,"createTime":1533601746235,"salt":"[B@4cc32b9d","tokenVersion":0,"ban":0,"baoyueVersion":0,"donateVersion":0,"vipType":0,"viptypeVersion":0,"anonimousUser":false},"profile":{"nickname":"ClearLoveDreamsOne","userId":1545970329,"vipType":0,"gender":1,"accountStatus":0,"avatarImgId":109951163446014530,"birthday":-2209017600000,"city":110101,"backgroundImgId":109951162868128400,"userType":0,"djStatus":0,"experts":{},"mutual":false,"remarkName":null,"expertTags":null,"authStatus":0,"province":110000,"defaultAvatar":false,"avatarUrl":"https://p3.music.126.net/435sDl-qtSIN5vS-18eXlQ==/109951163446014536.jpg","detailDescription":"","backgroundUrl":"https://p3.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg","description":"","avatarImgIdStr":"109951163446014536","backgroundImgIdStr":"109951162868128395","followed":false,"signature":"","authority":0,"avatarImgId_str":"109951163446014536","followeds":0,"follows":3,"eventCount":0,"playlistCount":3,"playlistBeSubscribedCount":0},"bindings":[{"userId":1545970329,"tokenJsonStr":"{\"countrycode\":\"\",\"cellphone\":\"17610780527\",\"hasPassword\":true}","url":"","bindingTime":1533601778380,"expiresIn":2147483647,"refreshTime":1533601788,"expired":false,"id":6649502434,"type":1},{"userId":1545970329,"tokenJsonStr":"{\"access_token\":\"45B8EC27EB8186536FEB16D4A2E53515\",\"openid\":\"2CB5938EDF30AC8355AF4A731429AE36\",\"nickname\":\"醉后一夜\",\"partnerType\":\"0\",\"expires_in\":7776000,\"bind_time\":1.5336017450012832E9}","url":"","bindingTime":1533601746395,"expiresIn":7776000,"refreshTime":1533601746,"expired":true,"id":6649502435,"type":5}]}
console.log( data.profile.nickname )