# 基础组件使用指南

### checkbox.vue（单选框）
传入参数类型
```json
"label":"String"
 "value":"Boolean"
```

### color-picker.vue（颜色选择器）
传入数据类型
```json
  "label":"String"
  "value":"String"
```
### input.vue(文本输入框)
传入数据类型
```json
"label":"String",
"placeholder":{
    "type":"String",
    "default":'please input'
},
"value":"String"
```
### number-input.vue（数字输入框）
传入数据类型
```json
"label": "String",
"value": "Number",
"min": "Number",
"max": "Number",
"step": {
    "type": "Number",
    "default": "1"
}
```