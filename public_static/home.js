$(function () {
    $("#btn-search").click(()=>{
        console.log($("#input-box").val());

        $.post("/locateKey",{"place": $("#input-box").val()});

        $.get("/",()=>{
            setTimeout(()=>{
                window.open("/weatherOfPlace.html","_self");
            },3000);

        })
    })
    $("#input-box").keypress(function (e) {
       
        if(e.which === 13){
            $("#btn-search").click();
        }
    })



})