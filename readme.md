# 封装 vue-element-ui 的组件
基于element-ui封装quill的在线编辑器

- 1.0.0 调试版本
- 1.0.1 添加readme注释

## 1. 下载安装
```
npm install @qingbing/vue2-editor
```


## 2. 使用参数说明

### 2.1 传递参数

| 参数名 | 类型 | 是否必填 | 默认 | 描述 |
|:---|:---|:---|:---|:---|
| customModules | Array | 否 | [] | 自定义模块 |
| placeholder | String | 否 | "" | 提示输入信息 |
| value | String | String | 否 | 默认内容 |
| disabled | Boolean | 否 | false | 是否可编辑 |
| toolbarMode | String | 否 | "" | 工具栏模式: simple,common(default),common,code,full |
| editorToolbar | Array | 否 | [] | 自定义工具栏，一旦定义， toolbarMode 将无效 |
| editorOptions | Object | 否 | {} | 编辑器参数选项 |
| useSource | Boolean | 否 | false | 是否使用源代码标记，在自定义 toolbar 时无效，将"source"作为一个工具即可 |
| useImageUrl | Boolean | 否 | false | 图片添加已 prompt 的方式输入 url |
| useImageHandle | Boolean | 否 | false | 图片上传方法，优先级高于 useImageUrl |
| useMarkdownShortcuts | Boolean | 否 | false | 是否使用 markdown的编辑风格转换 |


### 2.2 传递事件

| 事件名 | 参数 | 描述 |
|:---|:---|:---|
| ready | quill | 编辑器准备完成 |
| blur | quill | 编辑器失去焦点事件 |
| focus | quill | 编辑器获取焦点事件 |
| input | editorContent | 编辑器内容变化 |
| image-added | file, Editor, cursorLocation | 开启 useImageHandle 时的上传图片事件 |
| image-removed | file, Editor, cursorLocation | 开启 useImageHandle 时的删除图片事件 |
| selection-change | range, oldRange, source | Quill 支持的 selection-change 事件 |
| text-change | delta, oldDelta, source | Quill 支持的 text-change 事件 |
| ... | ... | 其它 Quill 支持的事件 |

## 3. 使用

### 3.1 导入
```
import Vue2Editor from "@qingbing/vue2-editor";
```

### 3.2 使用
```html
<p>简单模式</p>
<vue2-editor
  v-model="simpleContent"
  :toolbarMode="'simple'"
  :useSource="true"
></vue2-editor>
<p>普通模式(默认)</p>
<vue2-editor
  v-model="commonContent"
  :toolbarMode="'common'"
  :useSource="true"
  :useImageHandle="true"
  @image-upload="handleImageUpload"
></vue2-editor>
<p>文章模式</p>
<vue2-editor
  v-model="articleContent"
  :toolbarMode="'article'"
  :useImageUrl="true"
  :useSource="true"
></vue2-editor>
<p>代码模式</p>
<vue2-editor
  v-model="codeContent"
  :toolbarMode="'code'"
  :useSource="true"
></vue2-editor>
<p>全按钮模式</p>
<vue2-editor
  v-model="fullContent"
  :toolbarMode="'full'"
  :useSource="true"
></vue2-editor>
<p>自定义模式</p>
<vue2-editor
  v-model="customContent"
  :editorToolbar="editorToolbar"
  :editorOptions="editorOptions"
></vue2-editor>
```

```js
data() {
    return {
      simpleContent: "<p>simpleContent</p>",
      commonContent: "<p>common-default</p>",
      articleContent: "<p>articleContent</p>",
      codeContent: "<p>codeContent</p>",
      fullContent: "<p>fullContent</p>",
      customContent: "<p>customContent</p>",
      editorToolbar: [["source"], ["image"], [{ header: [false, 1, 2, 3, 4, 5, 6] }]],
    };
  }
```
