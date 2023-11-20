import { JetApp, JetView, EmptyRouter } from "webix-jet";

/**
 * 问题描述:第一次点击的view不存在或为空时，下次点击的view无法正常在subview中展示。webix自定义的protoui组件，是动态添加进主程序的。怎么样才能让view为undefined或者不存在的时候不报错，且下次渲染view正常显示。
 * 
 * The first time you click the rendered view is undefined, click another view to render the subview, and the page will be blank
 * webix custom protoui components, view is dynamically added into the main application. How to make the view undefined or does not exist without an error, and the next time the dom render properly display.
 */

class demo extends JetView{
    config() {
        return {
            rows:[
                { view: "toolbar", padding:3, elements: [
                  { view: "icon", icon: "mdi mdi-menu", click: function(){
                     $$("$sidebar1").toggle();
                   }
                  },
                  { view: "label", label: "My App"},
                  {},
                  { view: "icon", icon: "mdi mdi-comment",  badge:4},
                  { view: "icon", icon: "mdi mdi-bell",  badge:10}
                ]
                },
                { cols:[
                  {
                    view: "sidebar",
                    data: [
                      {id: "page1", icon: "mdi mdi-book", value:"page1"},
                      {id: "page2", icon: "mdi mdi-book", value:"page2"}
                    ],
                    on:{
                      onAfterSelect: function(id){
                        let views = this.getItem(id).value;
                        this.$scope.show(views,{target:"sub_context"});
                      }
                    }
                  },
                  { $subview: true, name:"sub_context"}
                ]}
            ]
        }
    }

    init() {
      this.app.show("/home/page1",{target:"sub_context"} )
    }
}

class page2 extends JetView {
  config(){
    return {
      rows:[
        { view: "text", value:"22"},
        {}
      ],
    }
  }
}

export default class HomeApp extends JetApp {
  constructor(config) {
    const sysConfig = {
      webix: webix,
      debug: false,
      routerPrefix: "",
      animation: true,
      start: "/home",
      views: {
        home: demo,
        page1: {view:"undefined"},
        page2: page2
      },
    };
    super({ ...sysConfig, ...config });
  }
}
