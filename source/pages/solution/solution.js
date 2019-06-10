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
    this.Base.setMyData({
      close: 'a'
    })
  }
  onMyShow() {
    var that = this;
    var solution = new SolutionApi();
    var inst = new InstApi();
    inst.info({}, (info) => {
      console.log(info)
      this.Base.setMyData({
        info
      });
    })
    solution.solution1({}, (solution1) => {
      console.log(solution1)
      // console.log("啦啦啦")
      this.Base.setMyData({
        solution1
      });
    }) 
    // solution.solutioninfo({ id: id }, (info) => {
    //   this.Base.setMyData({
    //     info
    //   });
    // })
  }

  setPageTitle(instinfo) {
    wx.setNavigationBarTitle({
      title: '解决方案',
    })
  }
  
  open(e){
    var id=e.currentTarget.id;
    console.log(id+"搜索");
    var solution = new SolutionApi();
    solution.solutioninfo({ id: id }, (solutioninfo) => {
      this.Base.setMyData({
        solutioninfo
      });
    })
    this.Base.setMyData({
      close: 'b'
    });
  }

  close(e){
    var solution = new SolutionApi();
    solution.solutioninfo({}, (solutioninfo) => {
      this.Base.setMyData({
        solutioninfo
      });
    })
    this.Base.setMyData({
      close: 'a'
    });

  }



}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.open = content.open;
body.close = content.close;
Page(body)