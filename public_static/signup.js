$(function () {
    var pass1=$("#pass1");
    var pass2=$("#pass2");
    var inf=$("#pass-det");
    $('#signup').click(()=> {
        if(pass1.val().length<8) {
            pass1.val("");
            pass2.val("");
        }
        else if (pass1.val() !== pass2.val()) {
            pass1.val("");
            pass2.val("");
            console.log("Passwords dont match");
        }
        else {
        $.post("/SignUpPage/addNew", {user: {fn:$("#fn").val(), ln:$("#ln").val(), em:$("#em").val(), mob:$("#mob").val(),
                un:$("#un").val(), password:pass1.val(), pl: $("#pl").val(), pass:pass2.val()}},()=>{
            window.open("/afterSignUp.html","_self");
        })
    }
    })
    $('#mob').attr('maxlength','10');
    $('#mob').attr('minlength','10');
    pass1.mouseenter(()=>{
        if(pass1.val().length<8) {
            inf.css("visibility","visible");
        }
    })
    pass1.mouseleave(()=>{
        if(pass1.val().length>=8) {
            inf.css("visibility","hidden");
        }
    })
    

})
