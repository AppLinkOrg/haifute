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
  SolutionApi
} from "../../apis/solution.api.js";


class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    var solution = new SolutionApi();
    solution.solution1({}, (solution1) => {
      console.log(solution1)
      // console.log("啦啦啦")
      this.Base.setMyData({
        solution1
      });
    })

    solution.solution2({}, (solution2) => {
      console.log(solution2)
      this.Base.setMyData({
        solution2
      });
    })

    solution.solution3({}, (solution3) => {
      console.log(solution3)
      this.Base.setMyData({
        solution3
      });
    })

    solution.solution4({}, (solution4) => {
      console.log(solution4)
      this.Base.setMyData({
        solution4
      });
    })
  }
  onMyShow() {
    var that = this;
  }

  setPageTitle(instinfo) {
    wx.setNavigationBarTitle({
      title: '解决方案',
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)