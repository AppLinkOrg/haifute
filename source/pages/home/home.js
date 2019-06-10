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
import {
  InformationApi
} from "../../apis/information.api.js";
import {
  RegisterApi
} from "../../apis/register.api.js";


class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
      itemname: "请填写项目名称",
      describe: "请详细描述你的项目需求，包括但不限于项目简介、主要功能点。",
      reference: "请填写参考的产品",
      name: "请填写姓名",
      mobile: "请填写手机号"
    });
    // console.log(666666666666666);
    var informationapi = new InformationApi();
    var instapi = new InstApi();
    instapi.info({}, (info) => {
      console.log(info);
      this.Base.setMyData({
        info
      });
    });
    informationapi.guishu({}, (guishu) => {
      console.log(guishu);
      this.Base.setMyData({
        guishu
      });
    });


    informationapi.yusuan({}, (yusuan) => {
      console.log(yusuan);
      this.Base.setMyData({
        yusuan
      });
    });

    informationapi.zhouqi({}, (period) => {
      console.log(period);
      this.Base.setMyData({
        period
      });
    });

  }


  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    var moduleapi = new ModuleApi();
    instapi.indexbanner({
      location: "A"
    }, (indexbanner) => {
      this.Base.setMyData({
        indexbanner
      });
    });
    instapi.indexbanner({
      location: "B"
    }, (lunbo) => {
      this.Base.setMyData({
        lunbo
      });
    });

    moduleapi.module({}, (module) => {
      console.log(module);
      this.Base.setMyData({
        module
      });
    });
    this.backtotop();
  }



  guishuChange(e) {
    var guishu = this.Base.getMyData().guishu;
    this.Base.setMyData({
      guishu1: guishu[e.detail.value].name
    })
    // console.log(this.Base.getMyData().name)
  }
  yusuanChange(e) {
    var yusuan = this.Base.getMyData().yusuan;
    this.Base.setMyData({
      yusuan1: yusuan[e.detail.value].yusuan
    })
  }
  // zhouqiChange(e) {
  //   console.log(e)
  //   var period = this.Base.getMyData().period;
  //   this.Base.setMyData({
  //     period1: period[e.detail.value].period
  //   })
  // }

  itemnameChange(e) {
    console.log(e)
    this.Base.setMyData({
      itemname: e.detail.value
    });
  }
  describeChange(e) {
    console.log(e)
    this.Base.setMyData({
      describe: e.detail.value
    })
  }
  referenceChange(e) {
    console.log(e)
    this.Base.setMyData({
      reference: e.detail.value
    })
  }
  nameChange(e) {
    console.log(e)
    this.Base.setMyData({
      name: e.detail.value
    })
  }
  // weixinChange(e) {
  //   console.log(e)
  //   this.Base.setMyData({
  //     weixin: e.detail.value
  //   })
  // }
  mobileChange(e) {
    console.log(e)
    this.Base.setMyData({
      mobile: e.detail.value
    })
  }


  // bindRegionChange(e) {

  //   this.Base.setMyData({
  //     city: e.detail.value
  //   })
  // }

  phonenoCallback(phoneno, e) {
    // console.log(phoneno + "手术室");
    this.Base.setMyData({
      mobile: phoneno
    });
  }



  fabu(e) {
    var that = this;
    var data = this.Base.getMyData();
    var name = this.Base.getMyData().name;
    var mobile = this.Base.getMyData().mobile
    var id = that.Base.getMyData().id;

    if (!id) {
      id = that.Base.getMyData().id;
    }
    if (data.guishu1 == undefined) {
      this.Base.info("请选择项目归属");
      return;
    }
    // console.log(55555555555);
    // console.log(data); 
    if (data.itemname == "请填写项目名称") {
      this.Base.info("请填写项目名称");
      return;
    }
    console.log(data.itemname);
    if (data.yusuan1 == undefined) {
      this.Base.info("请选择项目预算");
      return;
    }
    // if (data.period1 == undefined) {
    //   this.Base.info("请选择项目周期");
    //   return;
    // }
    if (data.describe == "请详细描述你的项目需求，包括但不限于项目简介、主要功能点。") {
      this.Base.info("请填写项目描述");
      return;
    }
    console.log(data.describe);
    // if (data.reference == "请填写参考小程序名称") {
    //   this.Base.info("请填写参考小程序名称");
    //   return;
    // }
    // if (data.city == undefined) {
    //   this.Base.info("请选择所在城市");
    //   return;
    // }
    if (data.name == "请填写姓名" || data.name == "") {
      this.Base.info("请填写姓名");
      return;
    }
    if (data.mobile == "undefined" || data.mobile == "请填写手机号") {
      this.Base.info("请填写手机号");
      return;
    }



    var guishu1 = this.Base.getMyData().guishu1;
    var itemname = this.Base.getMyData().itemname;
    var yusuan1 = this.Base.getMyData().yusuan1;
    // var period1 = this.Base.getMyData().period1;
    var describe = this.Base.getMyData().describe;
    var reference = this.Base.getMyData().reference;
    var city = this.Base.getMyData().city;
    var name = this.Base.getMyData().name;
    var mobile = this.Base.getMyData().mobile;

    console.log(guishu1);
    console.log(itemname);
    console.log(yusuan1);
    // console.log(period1);
    console.log(describe);
    console.log(reference);
    console.log(city);
    console.log(name);
    console.log(mobile);

    // return;


    var registerapi = new RegisterApi();
    registerapi.message({
      guishu: guishu1,
      itemname: itemname,
      budget: yusuan1,
      // period: period1,
      describe: describe,
      reference: reference,
      // city: city,
      name: name,
      mobile: mobile
    }, (message) => {

      wx.showModal({
        title: '确认提交吗？',
        content: '',
        success: function(res) {
          if (res.confirm) {
            wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 1000
            })
            that.backtotop();
            that.qinchu();
          }

        }

      })

    });

    // this.onMyShow();
  }
  qinchu() {
    this.Base.setMyData({
      guishu1:"",
      itemname: "请填写项目名称",
      yusuan1: "",
      describe: "请详细描述你的项目需求，包括但不限于项目简介、主要功能点。",
      reference: "请填写参考的产品",
      name: "请填写姓名",
      mobile: "请填写手机号"
    })
  }

  bindRegionChange(e) {
    this.Base.setMyData({
      city: e.detail.value
    })
  }

  // viewPhoto1(e) {
  //   var img = e.currentTarget.id;
  //   var type = e.currentTarget.dataset.type;
  //   var url = e.currentTarget.dataset.url;
  //   console.log(url);
  //   console.log(type);
  //   if (type == "A") {
  //     wx.reLaunch({
  //       url: url,
  //     })
  //   }
  //   if (type == "B") {
  //     wx.previewImage({
  //       urls: [img],
  //     })
  //     console.log("盛世嫡妃")
  //   }
  // }


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
  ss(e) {
    this.Base.setMyData({
      itemname: " "
    })
  }
  ss1() {
    var aaa = this.Base.getMyData().itemname;
    if (aaa == " " || aaa == "") {
      this.Base.setMyData({
        itemname: "请填写项目名称"
      })
    }
  }
  a(e) {
    this.Base.setMyData({
      describe: ""
    })
  }
  a1() {
    var a = this.Base.getMyData().describe;
    if (a == " " || a == "") {
      this.Base.setMyData({
        describe: "请详细描述你的项目需求，包括但不限于项目简介、主要功能点。"
      })
    }
  }

  b(e) {
    this.Base.setMyData({
      reference: ""
    })
  }
  b1() {
    var b = this.Base.getMyData().reference;
    if (b == " " || b == "") {
      this.Base.setMyData({
        reference: "请填写参考的产品"
      })
    }
  }

  c(e) {
    this.Base.setMyData({
      name: ""
    })
  }
  c1() {
    var c = this.Base.getMyData().name;
    if (c == " " || c == "") {
      this.Base.setMyData({
        name: "请填写姓名"
      })
    }
  }

  d(e) {
    this.Base.setMyData({
      mobile: ""
    })
  }
  d1() {
    var d = this.Base.getMyData().mobile;
    if (d == " " || d == "") {
      this.Base.setMyData({
        mobile: "请填写手机号"
      })
    }
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.guishuChange = content.guishuChange;
body.yusuanChange = content.yusuanChange;
// body.zhouqiChange = content.zhouqiChange;
body.itemnameChange = content.itemnameChange;
body.describeChange = content.describeChange;
body.referenceChange = content.referenceChange;
body.bindRegionChange = content.bindRegionChange;
body.nameChange = content.nameChange;
body.mobileChange = content.mobileChange;
body.fabu = content.fabu;
body.phonenoCallback = content.phonenoCallback;
body.ss = content.ss;
body.ss1 = content.ss1;
body.a = content.a;
body.a1 = content.a1;
body.b = content.b;
body.b1 = content.b1;
body.c1 = content.c1;
body.qinchu = content.qinchu;
body.d1 = content.d1;
body.c = content.c;
body.d = content.d;
Page(body)