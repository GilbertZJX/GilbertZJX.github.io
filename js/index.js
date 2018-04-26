  $(document).ready(function() {
          $('#homepage').fullpage({
            scrollingSpeed: 2000,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 2000,
    				anchors: ['遇见', '聊天', '电影','礼物', '济南', '槟城','约饭','我房间','面包','表白'],
    				sectionsColor: ['#f2f2f2', '#1BBC9B', '#7E8F7C', '#C63D0F', '#C63D0F', '#C63D0F', '#C63D0F', '#C63D0F', '#C63D0F', '#C63D0F'],
            verticalCentered: true,
    				navigation: true,
    				navigationPosition: 'right',
    				navigationTooltips: ['遇见', '聊天', '电影','礼物', '济南', '槟城','约饭','我房间','面包','表白'],
    				responsiveWidth: 900,
            onLeave: function(index, nextIndex, direction){
                  if(direction == "up"){
                    $(".section").removeClass("down");
                    $(".section").removeClass("next");
                    $(".section").removeClass("prev");
                    $("#homepage .section:nth-child("+nextIndex+")").addClass("up");
                    $("#homepage .section:nth-child("+nextIndex+")").next().addClass("next up");
                    $("#homepage .section:nth-child("+nextIndex+")").prev().addClass("prev up");
                  }else{
                    $(".section").removeClass("up");
                    $(".section").removeClass("next");
                    $(".section").removeClass("prev");
                    $("#homepage .section:nth-child("+nextIndex+")").addClass("down");
                    $("#homepage .section:nth-child("+nextIndex+")").next().addClass("next down");
                    $("#homepage .section:nth-child("+nextIndex+")").prev().addClass("prev down");
                  }
                  console.log(direction + nextIndex);
    			    },
    			});
      });
