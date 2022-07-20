# 基础组件使用指南

## checkbox.vue（单选框）
####传入参数类型

|参数名|参数类型|含义|备注|
|:---:|:---:|:---:|:---:|
|label|String|模板标题||
|value|Boolean|模板参数|支持v-model传参|
####vue导入模板
```js
import EpCheckBox from "@/vue/basic-template/checkbox"
```
####vue使用模板
```vue
<ep-check-box v-model="选择框参数" label="标题"></ep-check-box>
```
####图片样式

## color-picker.vue（颜色选择器）
####传入数据类型

|参数名|参数类型|含义|备注|
|:---:|:---:|:---:|:---:|
|label|String|模板标题||
|value|String|模板参数|支持v-model传参|
####vue导入模板
```js
import EpColorPicker from "@/vue/basic-template/color-picker"
```

####vue使用模板

```vue

<ep-color-picker v-model="颜色参数" label="标题"></ep-color-picker>

```
####图片样式

## input.vue(文本输入框)
#### 传入数据类型

|参数名|参数类型|含义|备注|
|:---:|:---:|:---:|:---:|
|label|String|模板标题||
|placeholder|String|模板占位符|可不传，默认值为'please input'|
|value|String|模板参数|支持v-model传参|
####vue导入模板
```js
import EpInput from "@/vue/basic-template/input"
```
####vue使用模板

```vue

<ep-input v-model="文本参数" label="标题" placeholder="占位符"></ep-input>

```
####图片样式

## number-input.vue（数字输入框）
####传入数据类型

|参数名|参数类型|含义|备注|
|:---:|:---:|:---:|:---:|
|label|String|模板标题||
|min|Number|数值下限（最小值）|可为空|
|max|Number|数值上限（最大值）|可为空|
|step|Number|数值增减幅度|可不传，默认值为1|
|value|Number|模板参数|支持v-model传参|
####vue导入模板
```js
import EpNumberInput from "@/vue/basic-template/number-input"
```
####vue使用模板
```vue
<ep-number-input v-model="数字参数" label="标题" max="1" min="0" step="0.1"></ep-number-input>
```
####图片样式

## textarea.vue（文本列表输入）
####传入数据类型

|参数名|参数类型|含义|备注|
|:---:|:---:|:---:|:---:|
|label|String|模板标题||
|placeholder|String|模板占位符|可不传，默认值为'please input'|
|value|String|模板参数|支持v-model传参|
####vue导入模板
```js
import EpNumberInput from "@/vue/basic-template/number-input"
```
####vue使用模板
```vue
<ep-number-input v-model="数字参数" label="标题" max="1" min="0" step="0.1"></ep-number-input>
```
####图片样式

## option.vue（下拉框选项）
####传入数据类型

|参数名|参数类型|含义|备注|
|:---:|:---:|:---:|:---:|
|label|String|模板显示|内容显示|
|value|String|模板参数|复选框选项值|
####vue导入模板
```js
import EpOption from "@/vue/basic-template/option"
```
####vue使用模板
```vue
<ep-option value="复选框选项值" label="内容显示"></ep-option>
```
####图片样式

## select.vue（下拉框：通常于option.vue联合使用）
####传入数据类型

|参数名|参数类型|含义|备注|
|:---:|:---:|:---:|:---:|
|label|String|模板标题||
|placeholder|String|占位符|默认值'-select-'|
|value|String|模板参数|支持v-model传参，主要传值部分|
####vue导入模板
```js 
import EpOption from "@/vue/basic-template/select"
```
####vue使用模板
```vue
<ep-select v-model="文本参数" label="标题内容" placeholder="占位符">
  <ep-option></ep-option>
</ep-select>
```
####图片样式



## position-selector.vue（位置复用）
####传入数据类型

|参数名|参数类型|含义|备注|
|:---:|:---:|:---:|:---:|
|title|String|模板标题||
|t|Function|语言变换工具方法||
|useUnit|Boolean|单位显示||
|value|[Object,Array]|模板参数|支持v-model传参,可以为对象也可以为数组|

####vue导入模板
```js
import EpPositionSelector from "@/vue/basic-template/position-selector"
```
####vue使用模板
```vue
<ep-position-selector v-model="position||padding" title="标题" :t="t" useUnit="true"></ep-position-selector>
<!--数据格式样例-->
<script>  
export default {
  data(){
    return {
      position:{
        top:'',
        right:'',
        bottom:'',
        left:''
      },
      padding:[0,0,0,0]
    }
  },
  watch:{
    position:{
      handle(newValue){
        Object.assign(this.配置名称, newValue)
      },
      deep:true
    }
  }
}
</script>
```
####图片样式


