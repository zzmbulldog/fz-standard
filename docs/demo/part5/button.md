# 按钮

## 一级列表按钮

### 按钮类型

一级列表页中按钮分为**优先操作按钮、次要操作和不常用及批量操作按钮**。

1. 优先操作按钮举例：新增、删除、提交
2. 次要操作按钮例如：撤回、下载
3. 不常用及批量操作按钮例如：导出

### 摆放顺序

同时出现时按照**通用、单项、批量**的顺序**从左至右**摆放。

### 按钮样式

1. 形式：采用图标+文字形式

2. 大小：easyui-button默认大小

3. 配色：以#4381e6背景色，#ffffff字体色为主

4. 间距：按钮内图标和文字间距5px，每个按钮之间的间距5px，两字中间距两个空格，三字及以上文字之间无间距

5. 使用方法举例：

   ```html
   <button class="easyui-linkbutton" onclick="click();">
   	<i class="iconfont icon-lianxiang"></i> 登&nbsp;&nbsp;记
   </button>
   ```

![An image](../../images/buttonInListPage.png)

## 二级功能页按钮

### 按钮类型

二级功能页中按钮分为操作按钮及内容按钮，其中操作按钮分为页面返回按钮和底部操作按钮

### 摆放顺序

一般只有底部操作按钮涉及摆放顺序，规则如下：

### 按钮样式

#### 页面返回按钮

1. 位置：置于页面标题行文字前
2. 内容：字体图标icon-arrow-left
3. 大小：16px
4. 边框：#cfcfcf
5. 间距：右外边距5px
6. 使用示例

```html
<span class='iconfont icon-arrow-left' onclick="back();"></span>
```

#### 底部操作按钮

1. 举例：暂存、提交、重置

2. 形式：仅文字

3. 大小：80px*28px

4. 位置：固定页面底部，局右对齐

5. 配色：以下提供几个常用按钮的配色方案

   |      | 边框颜色 | 背景色  | 文字颜色 |
   | ---- | -------- | ------- | -------- |
   | 重置 | #969696  | #ededed | #666666  |
   | 暂存 | #3379b7  | #3379b7 | #fff     |
   | 提交 | #26b99a  | #26b99a | #fff     |

6. 字体大小：16px

7. 边框弧度：5px

8. 使用示例：

```html
<input type="button" onclick="reset();" class="btn-win-white" title="重置" /> 
<input type="button" onclick="save();" class="btn-win-white" title="保存" /> 
<input type="button" onclick="push();" class="btn-win-white" title="提交" />
```

![An image](../../images/buttonInContentPage.png)

## 弹框按钮

### 按钮样式

框架弹框自带按钮

### 摆放顺序

保存/确认/提交在左，取消在右