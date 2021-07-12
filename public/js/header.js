$(document).ready(function(){
    $('.search-icon').click(function(){
        $('.search-icon').toggleClass('active')
        $('.search-box').toggleClass('active')
        $('header').toggleClass('active-search')                                   
        })
    });

$(document).ready(function(){
    $('ul li').click(function(){
        $(this).siblings().removeClass('active')
        $(this).toggleClass('active')//Add Active class first click
    })
});
       
$(document).ready(function(){
    $('.toggle').click(function(){
    $('.toggle').toggleClass('active')
    $('header').toggleClass('active-menu')
    })
});
   