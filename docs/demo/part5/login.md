

# 登录

## 登录表单

**举个**:chestnut:

![An image](../../images/login.png)

### 前台代码

```html
<form id="form1" method="post">
    <div class="box">
        <div class="input-header">账号登录</div>
        <span class="input-split"></span>
        <span id="inputArea">
            <div class='login-input-container'>
               <img src='/common/zt_webframe/imgs/login/input1.gif' alt="">
               <input type="text" placeholder="用户名" class="input1" name="userName" id="userName" onmouseover="$(this).select()">
            </div>
            <div class='login-input-container'>
               <img src='/common/zt_webframe/imgs/login/input2.gif' alt="">
               <input type="password" placeholder="密码" class="input1" name="pwd" id="pwd" onmouseover="$(this).select()">
            </div>
           <i>
               <img src="/common/zt_webframe/imgs/login/eye_close.png" />
           </i>
           <input type="text" id="verifyCode" name="verifyCode" class="check" placeholder="验证码" onmouseover="$(this).select()">
           <img  id="vimage" class="pic" title="点击图片切换验证码" alt="点击刷新" onclick="refreshCode(this)">
           <a id="codeReplace" onclick="refreshCode()">换一组</a>
           <input type="button"  name="submit" id="login" value="登&nbsp;&nbsp;&nbsp;录" class="input3"  onclick="doLogin()" >
        </span>
    </div>
</form>
```

::: details 点击查看样式表

```css
.box{
    position: absolute;
    width: 386px;
    height: 411px;
    border-radius:5px;
    background-color: rgba(255,255,255,0.4);
    top:20%;
    right: 10%;
}

.box input {
    font-family: "Microsoft Yahei";
}

.box .login-input-container{
    position:relative;
    border: none;
    border: 1px solid #e8e8e8;
    margin: 37px 39px 27px;
    display:block;
    height:39px;
    width:auto;
    padding: 10px 100px 10px 45px;
    line-height:27px\9;
    background-repeat: no-repeat;
    background-position: 2.9017% center;
    -webkit-background-size: 6%;
    background-size: 6%;
    outline: none;
    background-color:#f9faff;
}

.login-input-container .input1 {
    border: none;
    height:33px;
    background-color:#f9faff;
    position: absolute;
    top: 2px;
    left: 45px;
    width: 80%;
    outline: none
}

.login-input-container img{
    position:absolute;
    left:20px;
    z-index: 444
}
 
.box .check {
    background-color:#f9faff;
    width: 156px;
    height:39px;
    outline: none;
    border: none;
    border: 1px solid #e8e8e8;
    margin-left:38.5px;
    padding:10px 0px 10px 15px;
    margin-right: 10px;
}

.box .img {
    width: 225px;
    height: 32px;
    margin: 0 auto;
    margin-top: 10px;
}

.input-header{
     position: relative;
     height:55px;
     width:100%;
     line-height:55px;
     font-size:16px;
     text-align:center;
     font-weight: 700;
}

.input-split{
     display:block;
     width:100%;
     height:4px;
     background:url('/common/zt_webframe/imgs/login/input_split.png');
}

#inputArea a{
    display:inline;
    margin-left: 10px;
    font-weight: 800;
    color: #002244;
}
```

:::

### 后台代码

:::tip

后台代码涉及方面较多，和其他文件关联性复杂，需后期整理，以便更好的使用。

:::

