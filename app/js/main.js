$(function(){
    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
      });
    $('.big__banner-dropDown').styler();
    $('.jq-selectbox__trigger-arrow').addClass('lnr lnr-chevron-down'); 
    $('.jq-selectbox').on('click', function(){
        $('.jq-selectbox__trigger-arrow').toggleClass('active');
 
    }); 

    $('.products__inner').slick({
        prevArrow: '<button type="button" class="arrw-box slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button type="button" class="arrw-box slick-next lnr lnr-chevron-right"></button>'
    });
    $('.uFollowes__inner').slick({
        prevArrow: '<button type="button" class="arrw-box slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button type="button" class="arrw-box slick-next lnr lnr-chevron-right"></button>',
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.profil__nickName').on('click',function(){
        $('.drop__profile').toggleClass('active');
    });

    $('.message__btn').on('click',function(){
        $(this).toggleClass('active');
        $('.message__drop').toggleClass('active');
    });
    
    $('.notification__btn').on('click',function(){
        $(this).toggleClass('active');
        $('.notification__drop').toggleClass('active');
    });
   
    $('.bascet__btn').on('click',function(){
        $(this).toggleClass('active');
        $('.basket__drop').toggleClass('active');
    });

    $('.page__list').on('click',function(){
        $(this).toggleClass('active');
        $('.pages__drop').toggleClass('active');
    });

    $('.products__all').on('click',function(){
        $(this).toggleClass('active');
        $('.all__products').toggleClass('active');
    });

    $('.home__list').on('click',function(){
        $(this).toggleClass('active');
        $('.list__home').toggleClass('active');
    });

    $('.wp__list').on('click',function(){
        $(this).toggleClass('active');
        $('.drop__wp').toggleClass('active');
    });
    
    $('.burger__menu').on('click',function(){
        $('.menu__list').toggleClass('active');
    });
    
    $(document).mouseup(function (e){
		var div = $(".header__menu-drop");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
            div.removeClass('active')
            $('.btn__list').removeClass('active')
		}
	});

    var mixer = mixitup('.newrelease__inner');
});

