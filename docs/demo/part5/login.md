# 登录

## 登录表单

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

```javascript
function refreshCode(){
    $("#vimage").attr("src",contextPath+"/verifyCode/generate.action?rand="+new Date().getTime());
                    }
```

