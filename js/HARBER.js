$(document).ready(function(){
    $(".rolling").click(function(){
        $(".suitcase").toggle(400);
    });

    $(".plus").click(function(){
        $num = parseInt($(".text1").val());
        $(".text1").val($num + 1);
    }); 

    $(".minas").click(function(){
        $num = parseInt($(".text1").val());
        $(".text1").val($num - 1);
    });
    /////////////////////////////////////////////////////////////////////////
    $(".magnifying").click(function(){
        $(".search").show();
        $(".inputsearch").animate({width : '90%'} , "slow");
    })
    $(".circlex").click(function(){
        $(".search").hide();
        $(".inputsearch").animate({width : '0%'},"slow");
    })
    /////////////////////////////////////////////////////////////////////////
    $(".bars").click(function(){
        $(".div-right").animate({right:'0%'},"1000");
    })
    $(".fa_x").click(function(){
        $(".div-right").animate({right: '-500px'},"slow");
    })
    $(".row-right").click(function(){
        $(".div-left").animate({left : '0'} );
        $(".row-right").hide();
        $(".bars-right").show();
    })
    $(".bars-right").click(function(){
        $(".div-left").animate({left : '-500px'});
        $(".bars-right").hide();
        $(".row-right").show();
    })
});
