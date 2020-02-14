$(function(){

    $('.big__banner-dropDown').styler();
    $('.jq-selectbox__trigger-arrow').addClass('lnr lnr-chevron-down'); 
    $('.jq-selectbox').on('click', function(){
        $('.jq-selectbox__trigger-arrow').toggleClass('active');
    }); 
    
});