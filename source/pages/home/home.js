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
  ModuleApi
} from "../../apis/module.api.js";

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
    // console.log(545555555555);
    var that = this;
    var instapi = new InstApi();
    var moduleapi = new ModuleApi();
    instapi.indexbanner({}, (indexbanner) => {
      this.Base.setMyData({
        indexbanner
      });
    });

    moduleapi.module1({}, (module1) => {
      console.log(module1);
      this.Base.setMyData({
        module1
      });
    });

    moduleapi.module2({}, (module2) => {
      console.log(module2);
      this.Base.setMyData({
        module2
      });
    });

    moduleapi.module3({}, (module3) => {
      console.log(module3);
      this.Base.setMyData({
        module3
      });
    });

    moduleapi.module4({}, (module4) => {
      console.log(module4);
      this.Base.setMyData({
        module4
      });
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)