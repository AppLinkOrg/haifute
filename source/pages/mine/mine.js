// pages/mine/mine.js
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
  AboutApi
} from "../../apis/about.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);

  }
  onMyShow() {
    var that = this;
    var about = new AboutApi();
    var inst = new InstApi();
    inst.indexbanner({
      location: "C"
    }, (indexbanner) => {
      this.Base.setMyData({
        indexbanner
      });
    });
    about.aboutinfo({}, (about) => {
      console.log(about)
      this.Base.setMyData({
        about
      });
    })
    inst.info({}, (info) => {
      console.log(info)
      this.Base.setMyData({
        info
      });
    })
  }

  stopTouchMove() {
    return false;
  }

  setPageTitle(instinfo) {
    wx.setNavigationBarTitle({
      title: '关于我们',
    })
  }

  viewPhoto(e) {
    var img = e.currentTarget.id;
    var type = e.currentTarget.dataset.type;
    var url = e.currentTarget.dataset.url;
    console.log(url);
    console.log(type);
    if (type == "A") {
      wx.reLaunch({
        url: url,
      })
    }
    if (type == "B") {
      wx.previewImage({
        urls: [img],
      })
      console.log("盛世嫡妃")
    }
  }

  
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.stopTouchMove = content.stopTouchMove;
body.viewPhoto = content.viewPhoto;
Page(body)