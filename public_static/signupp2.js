window.onload= function(){
    var pass1=document.getElementById("pass1");
    var pass2=document.getElementById("pass2");
    var btn=document.getElementById("signup");
    var inf=document.getElementById("pass-det");
    var mob=document.getElementById("mob");
    pass1.setAttribute=("maxlength","36");
    pass2.setAttribute=("maxlength","36");
    mob.setAttribute("maxlength","10")
    pass1.onfocus= function() {
        inf.style.visibility="visible";
        inf.innerHTML="Should contain at least 8 characters with 1 numeral and 1 capital letter";
    }
    pass1.onblur= function() {
        if(pass1.value.length<8){
            inf.innerHTML="Password isn't 8 characters long"
        } else{
            if(checkPassword()=="none"){
                inf.innerHTML="Include a capital letter and a numeral"
            }
            else if(checkPassword()=="num"){
                inf.innerHTML="Include a capital letter"
            }
            else if(checkPassword()=="caps"){
                inf.innerHTML="Include a numeral";
            }
            else{
                inf.innerHTML="";
                inf.style.visibility="hidden";
            }
        }
    }
    pass2.onblur= function() {
        if(pass1.value!==pass2.value){
            window.alert("Passwords don't match")
        }
    }
    function checkPassword() {
        var flag1=false;
        var flag2=false;
        for(count=0;count<pass1.value.length;count++){
            var character=pass1.value[count];
            if(!isNaN(character)){
                flag1=true;
            }else{
            if(character.toUpperCase()===character){
                flag2=true;
            }
        }
        }
        if(flag1 && flag2){
            return "both";
        }
        if(flag1){
            return "num";
        }
        if(flag2){
            return "caps";
        }
        return "none";
    }
    
}