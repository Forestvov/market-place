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
    
    var mixer = mixitup('.newrelease__inner');
});