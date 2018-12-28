$("main form").submit(function(e){
    e.preventDefault();
    var re=/^1[3589]\d{9,}$/;
    console.log(re.test($("#tel").val()));
    if(re.test($("#tel").val())){
        $("main form").hide();
        $(".reg").show();
        $(".dy span").text("").css("background-position","0 0");
        $(".bz>span:eq(0)").css("background-position","0 -130px")
        $(".de p").addClass("active");
        $(".de span").css("background-position","0 -200px")
    }else{
        alert("请填写正确的手机号");
    }
    $.cookie("tel",$("#tel").val());
})


$(".reg form").submit(function(e){
    e.preventDefault();
    $.post("/reg",$(this).serialize(),function(data){
        console.log(data);
    })
})

