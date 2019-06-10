// pages/content/content.js
import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  InstApi
} from "../../apis/inst.api.js";
import {
  ListApi
} from "../../apis/list.api.js";


class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    // console.error("555555555555555555555555");
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    var listapi = new ListApi();
    listapi.showcase({}, (showcaselist) => {
      console.log("niubi");
      this.Base.setMyData({
        showcaselist
      });
    });
    var inst = new InstApi();
    inst.info({}, (info) => {
      console.log(info)
      this.Base.setMyData({
        info
      });
    })
  }
  onMyShow() {
    var that = this;
    
  }

  setPageTitle(instinfo) {
    wx.setNavigationBarTitle({
      title: '案例展示',
    })
  }

  tiao(e) {
    var appid = e.currentTarget.id;
    wx.navigateToMiniProgram({
      appId: appid,
      path: '',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {}
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.tiao = content.tiao;
Page(body)