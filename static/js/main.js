$(document).ready(function(){
    $(".form-box").hide();
    $("#formout").click(function() { //event called
        $("#formout").hide(); // to hide all forms
        $(".form-box").show();
        return false; //option to stop
    });

    $('#fullpage').fullpage({
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#000', 'red'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000,
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 1 && direction =='down'){
                $("#menu").removeClass("whitemenu")
            }

            else if(index == 2 && direction == 'up'){
                $("#menu").addClass("whitemenu")
            }
        }
    });

    $('#showExamples').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#examplesList').toggle();
    });

    $('html').click(function(){
        $('#examplesList').hide();
    });

    $(".login").click(function(){
        //$(this).hide()
        $(".login-frame").show()

    })
    $("#open-letter").click(function(){
        $("#letter-paper").show()
    })
    $("#close-paper").click(function(){
        $("#letter-paper").hide()
    })
    $(".close").click(function(){
        $(this).parent().hide()
        $(".login").show()
    })
    // 提交表单事件
    $(".get-info").click(function(){

    })
 });
