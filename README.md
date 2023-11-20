# issue_collect
webix+typeScript

# install
```npm install or yarn ```

# run
```npm run start or yarn start```

# build
```npm run build or yarn build```

# Problem Description
### 1. When the menu is rendered, the view that is clicked for the first time or the view that is rendered by default does not exist, it will affect the display of subsequent views in the same subview control.(当菜单渲染完毕后，首次点击或默认渲染的view不存在时，影响后续的view在同一subview控件的展示。)

### 2. When the page renders' this.show(view) ', if the current view does not exist, and the first click on the view does not exist, it will affect the subsequent views. For example: in this example, after installation and launch, clicking on the menu item page1 will cause a 'views is undefined' error, and then clicking on page2 will affect the display of page2 in the subview container.(在页面渲染`this.show(view)`时，如果当前view不存在，且首次点击这个不存在的视图，影响后续的views展示。例如：在本例子中，安装并启动后，先点击菜单项page1,会出现`views is undefined`的报错，再去点击page2，影响到了page2在subview容器中的展示。)

