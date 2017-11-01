//导航栏
function login_index() {

    mdui.dialog({
        title: '<div class="mdui-typo"><h5 class="mdui-typo-body-6">请登录</h5></div>',

        content: '<div class="mdui-textfield mdui-textfield-floating-label mdui-p-t-0">\n' +
        '<label class="mdui-textfield-label">注册邮箱</label>\n' +
        '<input class="mdui-textfield-input" type="email" id="login_account"/>\n' +
        '</div>\n' +
        '<div class="mdui-textfield mdui-textfield-floating-label">\n' +
        '<label class="mdui-textfield-label">密码</label>\n' +
        '<input class="mdui-textfield-input" type="password" id="login_password"/>\n' +
        '</div>',

        buttons: [
            {
                text: '取消'
            },
            {
                text: '登录',
                onClick: function(inst){
                    login_push();
                }
            }
        ]
    });
}

function register_index() {
    mdui.dialog({
        title: '<div class="mdui-typo"><h5 class="mdui-typo-body-6">注册新账号</h5></div>',

        content:'<div class="mdui-textfield mdui-textfield-floating-label mdui-p-t-0">\n' +
        '<label class="mdui-textfield-label">注册邮箱</label>\n' +
        '<input class="mdui-textfield-input" type="email" id="register_account">\n' +
        '</div>\n' +
        '<div class="mdui-textfield mdui-textfield-floating-label">\n' +
        '<label class="mdui-textfield-label">密码</label>\n' +
        '<input class="mdui-textfield-input" type="password" id="register_password">\n' +
        '</div>\n' +
        '<div class="mdui-textfield mdui-textfield-floating-label">\n' +
        '<label class="mdui-textfield-label">确认密码</label>\n' +
        '<input class="mdui-textfield-input" type="password" id="register_surepw">\n' +
        '</div>\n' +
        '<div class="mdui-textfield mdui-textfield-floating-label mdui-col-xs-8 mdui-m-l-0 mdui-p-l-0">\n' +
        '<label class="mdui-textfield-label">输入验证码</label>\n' +
        '<input class="mdui-textfield-input" type="text" id="register_code">\n' +
        '</div>\n' +
        '<div class="mdui-col-xs-4">\n' +
        '<div class="mdui-center mdui-m-l-2">\n' +
        '<img class="mdui-m-t-3" src = "pic/codetest" style="height: 35px;width: auto;" >\n' +
        '</div>\n' +
        '</div>'
        ,

        buttons: [
            {
                text: '取消'
            },
            {
                text: '注册',
                onClick: function(inst){
                    register_push();
                }
            }
        ]
    });
}


function login_push() {
    var login_account =document.getElementById("login_account").value;
    var login_pw=document.getElementById("login_password").value;
    mdui.alert(login_account+"&"+login_pw+' 登录按钮回调');


}

function register_push() {
    var register_account = document.getElementById("register_account");
    var register_passowrd = document.getElementById("register_passowrd");
    var register_surepw = document.getElementById("register_surepw");
    var register_code=document.getElementById("register_code");
    mdui.alert(register_account.value+'点击确认按钮的回调');


}

function startFindHer() {
    mdui.dialog({
        title: '<div class="mdui-typo"><p class="mdui-typo-body-6 mdui-p-b-0 mdui-m-b-0">请输入分享信息</p></div>',

        content: '<div class="mdui-textfield mdui-textfield-floating-label mdui-p-t-0">\n' +
        '<label class="mdui-textfield-label">寻她分享码</label>\n' +
        '<input class="mdui-textfield-input" type="email" id="findher_code">\n' +
        '</div>\n' +
        '<div class="mdui-textfield mdui-textfield-floating-label">\n' +
        '<label class="mdui-textfield-label">访问密码</label>\n' +
        '<input class="mdui-textfield-input" type="password" id="findher_pw">\n' +
        '</div>',

        buttons: [
            {
                text: '取消'
            },
            {
                text: '访问',
                onClick: function(inst){
                    startFindHer_push();
                }
            }
        ]
    });
}

function startFindHer_push() {
    var findher_code=document.getElementById("findher_code").value;
    var findher_pw=document.getElementById("findher_pw").value;
    mdui.alert(findher_code+"&" + findher_pw +"回调回调");

    window.location.href= 'gallery.html';

}

function loadNavigation() {
    document.getElementsByTagName("body")[0].innerHTML +=
        "<div class=\"mdui-container mdui-appbar-with-toolbar\">\n" +
        "    <div class=\"mdui-drawer \" id=\"drawer\" >\n" +
        "        <ul class=\"mdui-list\">\n" +
        "            <li class=\"mdui-subheader\">用户</li>\n" +
        "            <li class=\"mdui-list-item mdui-ripple\" onclick=\'goto_static()\'>\n" +
        "                <i class=\"mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue\">&#xe88a;</i>\n" +
        "                <div class=\"mdui-list-item-content\">用户主页</div>\n" +
        "            </li>\n" +

        "            <li class=\"mdui-list-item mdui-ripple\" onclick=\'goto_gallery()\'>\n" +
        "                <i class=\"mdui-list-item-icon mdui-icon material-icons mdui-text-color-deep-orange\">&#xe3b6;</i>\n" +
        "                <div class=\"mdui-list-item-content\">相片库</div>\n" +
        "            </li>\n" +

        "            <li class=\"mdui-subheader\">帮助</li>\n" +

        "            <li class=\"mdui-list-item mdui-ripple\">\n" +
        "                <i class=\"mdui-list-item-icon mdui-icon material-icons mdui-text-color-pink\">&#xe80b;</i>\n" +
        "                <div class=\"mdui-list-item-content\">关于寻她</div>\n" +
        "            </li>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "    </div>\n" +
        "</div>";
}



//退出登录
function drop_out() {
    window.location.href = "index.html";
}

//引入 card
function load_card(dom_name,card_json) {

    var container = document.getElementById(dom_name);
    container.innerHTML += "<div class=\"mdui-col-lg-3 mdui-col-md-4 mdui-col-sm-6\">\n" +
        "<div class=\"mdui-card card_size mdui-center mdui-hoverable\">\n" +
        "<div class=\"mdui-card-media\">\n" +
        "<img src=\"pic/card.jpg\"/>\n" +
        "<div class=\"mdui-card-media-covered\">\n" +
        "<div class=\"mdui-card-primary\">\n" +
        "<div class=\"mdui-card-primary-title\">图片名称</div>\n" +
        "<div class=\"mdui-card-primary-subtitle\">图片id 15005021502314</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "<div class=\"mdui-card-actions \">\n" +
        "<div class=\"mdui-m-t-1\">\n" +
        "<button class=\"mdui-btn mdui-btn-dense mdui-ripple mdui-color-theme mdui-float-left\" onclick=\'goto_photo_edit()\'>编辑</button>\n" +
        "<button class=\"mdui-btn mdui-btn-dense mdui-ripple mdui-color-theme-accent mdui-float-right\">删除</button>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>"
    ;
}

//返回用户主页
function goto_static() {
    window.location.href = "static.html";
}

//返回用户相册库
function goto_gallery() {
    new mdui.Drawer();
    window.location.href = "gallery.html";
}

//编辑照片页面
function goto_photo_edit() {
    window.location.href="photo.html";
}