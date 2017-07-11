$(document).ready(function(){
        var totalWidth = 0;
    var positions = new Array();

    $('#slides .slide').each(function(i){
        //get slider widths
        positions[i] = totalWidth;
        totalWidth += $(this).width();

        //check widths
        if(!$(this).width()){
            alert('Please add a width to your images');
            return false;
        }
    });
    //make this element the width of the combined width of each image
    $('#slides').width(totalWidth);

    //menu item click handler
    $('#menu ul li a').click(function(e, keepScroll){
        //remove active class and add inactive
        $('li.product').removeClass('active').addClass('inactive');
        //add active class to parent
        $(this).parent().addClass('active');

        var pos = $(this).parent().prevAll('.product').length;

        $('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);

        //prevent default action of following a link
        e.preventDefault();

        //stop autoScroll
        if(!autoScroll){
            clearInterval (itvl);
        }
    });

    //make first image active
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

    //autoScroll
    var current=1;
    function autoScroll(){
        if(current==-1){
            return false;}

            $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
            current++;
    
    }
    //duration for auto scroll
    var duration = 5;
    var itvl = setInterval(function(){
        autoScroll();    
    }, duration*1000);
    
});
