$(function(){
    var usernm=$("#usernm");
    var passw=$("#passw");
    var ut=$("#user-text");
    var pt=$("#pass-text");
    $("#sign-in").click(()=>{
        $.post("/SignInPage/checkid",{username: usernm.val(), password: passw.val()},(data)=>{
            if(data === "success") {
                console.log("in succ");
                window.open("/index.html","_self");
            } else if(data === "userni") {
                console.log("in uni");
                usernm.focus();
                usernm.select();
                // ut.append("Username not identified");
            } else if(data === "passic"){
                console.log("in passic");
                passw.val("");
                passw.focus();
                passw.select();
                // pt.append("Incorrect password");
            }
        })
    })

})