/* login */
$(document).ready(function(){

	//아이디찾기,비밀번호찾기
	$(".btn_find_id").click(function(){
		$(".find_id").addClass("on");
	});
	$(".done_find_id").click(function(){
		$(".find_id").removeClass("on");
	});
	$(".btn_find_pw").click(function(){
		$(".find_pw").addClass("on");
	});
	$(".done_find_pw").click(function(){
		$(".find_pw").removeClass("on");
	});

	//아이디찾기,비밀번호찾기 창닫기
	$(".find_id .close").click(function(){
		$(".find_id").removeClass("on");
	});
	$(".find_pw .close").click(function(){
		$(".find_pw").removeClass("on");
	});

});

$(document).ready(function(){

	//head메뉴
	$(".header_inner ul li a").click(function(){
		$(".header_inner ul li a").removeClass("on");
		$(this).addClass("on");
	});

	//snb메뉴 열고닫기
	$(".snb ul li dl dt").click(function(e){
		e.preventDefault();
		
		if($(this).parents().children("dd").is(":hidden")){
			$(this).parents().children("dd").slideDown();
		}
		else if($(this).parents().children("dd").is(":visible")){
			$(this).parents().children("dd").slideUp();
		}

		$(this).toggleClass("on");

	});

	//snb메뉴 전체열고닫기
	$(".snb h2 i").click(function(e){
		e.preventDefault();
		
		if($(".snb ul li dl dd").is(":hidden")){
			$(".snb ul li dl dd").slideDown();
		}
		else if($(".snb ul li dl dd").is(":visible")){
			$(".snb ul li dl dd").slideUp();
		}

		$(".snb ul li dl dt").toggleClass("on");
		$(this).toggleClass("on");

	});

});

$(document).ready(function(){

	//페이지버튼
	$(".page_num p .nmb").click(function(){
		$(".page_num p .nmb").removeClass("on");
		$(this).addClass("on");
	});

	//상세검색(열고닫기)
	$(".return_btn").click(function(){
		$(".area_detail").toggleClass("on");
		$(".xi-bars").toggleClass("on");
		$(".xi-close").toggleClass("on");
		$(".td_btn_area").toggleClass("on");
	});
	$(".search_area .area_detail table tbody .td_row span").click(function(){
		$(this).toggleClass("on");
	});

	//검색 기간선택
	$(".day_day button").click(function(){
		$(".day_day button").removeClass("on");
		$(this).addClass("on");
	});

	//타이틀 열고닫기
	$(".title .arr").click(function(e){
		e.preventDefault();
		
		if($(this).parents().next(".conbox").is(":hidden")){
			$(this).parents().next(".conbox").slideDown();
		}
		else if($(this).parents().next(".conbox").is(":visible")){
			$(this).parents().next(".conbox").slideUp();
		}

		$(this).toggleClass("on");
		$(this).parents(".title").toggleClass("b0");

	});

	//타이틀 전체열고닫기
	$(".navi .btn .onf").click(function(e){
		e.preventDefault();
		
		if($(".conbox").is(":hidden")){
			$(".conbox").slideDown();
			$(".title .arr").removeClass("on");
			$(".title").removeClass("b0");
		}
		else if($(".conbox").is(":visible")){
			$(".conbox").slideUp();
			$(".title .arr").addClass("on");
			$(".title").addClass("b0");
		}

		$(this).toggleClass("on");

	});

});

$(document).ready(function(){

	//제휴문의리스트 (관리자 이메일등록)
	$(".btn_emailup").click(function(){
		$(".emailup").addClass("on");
	});
	$(".emailup .emailup_inn .close").click(function(){
		$(".emailup").removeClass("on");
	});

	//상품관리 (카테고리이동)
	$(".btn_moveup").click(function(){
		$(".cate_moveup").addClass("on");
	});
	$(".cate_moveup .cate_moveup_inn .close").click(function(){
		$(".cate_moveup").removeClass("on");
	});

	//출발 선택 (공항)
	$(".btn_start_airport").click(function(){
		$(".start_airport").addClass("on");
	});
	$(".start_airport .start_airport_inn .close").click(function(){
		$(".start_airport").removeClass("on");
	});

	//출발 선택 (숙소)
	$(".btn_start_accommodations").click(function(){
		$(".start_accommodations").addClass("on");
	});
	$(".start_accommodations .start_accommodations_inn .close").click(function(){
		$(".start_accommodations").removeClass("on");
	});

	//출발 선택 (골프장)
	$(".btn_start_golf").click(function(){
		$(".start_golf").addClass("on");
	});
	$(".start_golf .start_golf_inn .close").click(function(){
		$(".start_golf").removeClass("on");
	});

	//출발 선택 (음식점)
	$(".btn_start_food").click(function(){
		$(".start_food").addClass("on");
	});
	$(".start_food .start_food_inn .close").click(function(){
		$(".start_food").removeClass("on");
	});

	//출발 선택 (관광)
	$(".btn_start_tourist").click(function(){
		$(".start_tourist").addClass("on");
	});
	$(".start_tourist .start_tourist_inn .close").click(function(){
		$(".start_tourist").removeClass("on");
	});

	//도착 선택 (공항)
	$(".btn_end_airport").click(function(){
		$(".end_airport").addClass("on");
	});
	$(".end_airport .end_airport_inn .close").click(function(){
		$(".end_airport").removeClass("on");
	});

	//도착 선택 (숙소)
	$(".btn_end_accommodations").click(function(){
		$(".end_accommodations").addClass("on");
	});
	$(".end_accommodations .end_accommodations_inn .close").click(function(){
		$(".end_accommodations").removeClass("on");
	});

	//도착 선택 (골프장)
	$(".btn_end_golf").click(function(){
		$(".end_golf").addClass("on");
	});
	$(".end_golf .end_golf_inn .close").click(function(){
		$(".end_golf").removeClass("on");
	});

	//도착 선택 (음식점)
	$(".btn_end_food").click(function(){
		$(".end_food").addClass("on");
	});
	$(".end_food .end_food_inn .close").click(function(){
		$(".end_food").removeClass("on");
	});

	//도착 선택 (관광)
	$(".btn_end_tourist").click(function(){
		$(".end_tourist").addClass("on");
	});
	$(".end_tourist .end_tourist_inn .close").click(function(){
		$(".end_tourist").removeClass("on");
	});

	//상품유형
	$(".btn_product_type_vew").click(function(){
		$(".product_type_vew").addClass("on");
	});
	$(".product_type_vew .product_type_vew_inn .close").click(function(){
		$(".product_type_vew").removeClass("on");
	});

	//레이어 팝업 가격설정 (항공)
	$(".btn_flight_price").click(function(){
		$(".flight_price").addClass("on");
	});
	$(".flight_price .flight_price_inn .close").click(function(){
		$(".flight_price").removeClass("on");
	});

	//레이어 팝업 가격설정 (숙소)
	$(".btn_purchase_price").click(function(){
		$(".purchase_price").addClass("on");
	});
	$(".purchase_price .purchase_price_inn .close").click(function(){
		$(".purchase_price").removeClass("on");
	});

	//레이어 팝업 가격설정 (숙소,골프_부대시설)
	$(".btn_facilities").click(function(){
		$(".facilities").addClass("on");
	});
	$(".facilities .facilities_inn .close").click(function(){
		$(".facilities").removeClass("on");
	});

	//레이어 팝업 개별가격설정 (골프)
	$(".btn_golf_each_price").click(function(){
		$(".golf_each_price").addClass("on");
	});
	$(".golf_each_price .golf_each_price_inn .close").click(function(){
		$(".golf_each_price").removeClass("on");
	});

	//레이어 팝업 가격설정 (음식점)
	$(".btn_food_price").click(function(){
		$(".food_price").addClass("on");
	});
	$(".food_price .food_price_inn .close").click(function(){
		$(".food_price").removeClass("on");
	});

	//레이어 팝업 가격설정 (관광)
	$(".btn_tourist_price").click(function(){
		$(".tourist_price").addClass("on");
	});
	$(".tourist_price .tourist_price_inn .close").click(function(){
		$(".tourist_price").removeClass("on");
	});

	//레이어 팝업 가격설정 (교통수단)
	$(".btn_transportation_price").click(function(){
		$(".transportation_price").addClass("on");
	});
	$(".transportation_price .transportation_price_inn .close").click(function(){
		$(".transportation_price").removeClass("on");
	});

	//레이어 팝업 환불 (메모)
	$(".btn_refund_memo").click(function(){
		$(".refund_memo").addClass("on");
	});
	$(".refund_memo .refund_memo_inn .close").click(function(){
		$(".refund_memo").removeClass("on");
	});

	//레이어 팝업 국가추가
	$(".btn_nation").click(function(){
		$(".nation").addClass("on");
	});
	$(".nation .nation_inn .close").click(function(){
		$(".nation").removeClass("on");
	});

	//회원등급
	$(".btn_member_level").click(function(){
		$(".member_level").addClass("on");
	});
	$(".member_level .member_level_inn .close").click(function(){
		$(".member_level").removeClass("on");
	});

	//온오프버튼
	$(".btn_onoff").click(function(){
		$(this).children(".btn_on").toggleClass("on");
		$(this).children(".btn_off").toggleClass("on");
		$(this).children(".dong").toggleClass("on");
	});

	//알림톡관리 (카카오관리자번호입력)
	$(".btn_phoneup").click(function(){
		$(".kakao_list .phoneup").addClass("on");
	});
	$(".kakao_list .phoneup .phoneup_inn .close").click(function(){
		$(".kakao_list .phoneup").removeClass("on");
	});

	//레이어 팝업 meta 태그 (서브사이트)
	$(".btn_meta").click(function(){
		$(".meta").addClass("on");
	});
	$(".meta .meta_inn .close").click(function(){
		$(".meta").removeClass("on");
	});

}); 

$(function(){	

	//pop_temp.html (친구톡 문자직접입력 버튼)
	$(".sms_temp_btn").click(function(){
		$(".pop_temp .search .sms_write").css("display","block");
		$(".pop_temp .search .talk_write").css("display","none");
	});
	$(".talk_temp_btn").click(function(){
		$(".pop_temp .search .talk_write").css("display","block");
		$(".pop_temp .search .sms_write").css("display","none");
	});
	$(".arlim_temp_btn").click(function(){
		$(".pop_temp .search .talk_write").css("display","none");
		$(".pop_temp .search .sms_write").css("display","none");
	});

});

$(document).ready(function(){

	//popup_temp.html (템플릿 텝)
	$(".temp_kind > ul > li > a").click(function(){
		$(".temp_kind > ul > li").removeClass("on");
		$(this).parents().addClass("on");
		$(".temp_list > ul").removeClass("on");
	});
	$(".temp_kind > ul > li > a").eq(0).click(function(){
		$(".temp_list > ul").eq(0).addClass("on");
	});
	$(".temp_kind > ul > li > a").eq(1).click(function(){
		$(".temp_list > ul").eq(1).addClass("on");
	});
	$(".temp_kind > ul > li > a").eq(2).click(function(){
		$(".temp_list > ul").eq(2).addClass("on");
	});

	//popup_temp.html (템플릿 즐겨찾기)
	$(".pop_temp .temp_list ul li .tit .star").click(function(){
		$(this).toggleClass("on");
	});

	//popup_temp.html (템플릿 발송구분삭제)
	$(".pop_temp .temp_list ul li .vid p i").click(function(){
		$(this).parent().parent().css("display","none");
	});
	
	//레이어팝업
	$(".layer_pop .layer_pop_inn .close").click(function(){
		$(".layer_pop").hide();
		$("body,html").css("overflow","auto");
	});

	//pop_shop_category (대표카테고리 선택)
	$(".btn_pop_shop_category").click(function(){
		$(".pop_shop_category").show();
		$("body,html").css("overflow","hidden");
	});
});

$(document).ready(function(){

	//클라이언트 이미지등록
	$(".btn_imgup").click(function(){
		$(".client_list .imgup").addClass("on");
	});
	$(".client_list .imgup .imgup_inn .close").click(function(){
		$(".client_list .imgup").removeClass("on");
	});

	//클라이언트관리 (드래그&드랍)
	$( "#sortable" ).disableSelection().sortable({
		cursor: "move",
		forceHelperSize: true,
		revert: "invalid"
	});

}); 

$(document).ready(function(){

	//시나리오 단계
	$(".tit > .btn_txt").click(function(e){
		e.preventDefault();
		$(this).next(".txt").css("display","block");
	});
	$(".tit > .btn_arr").click(function(){
		$(this).parent().siblings("ul").toggleClass("on");
		$(this).children(".xi-minus-square").toggleClass("on");
		$(this).children(".xi-plus-square").toggleClass("on");
	});

	//시나리오 사용법
	$(".ma_inner .explain dl dt").click(function(){
		$(this).toggleClass("on");
		$(this).next("dd").toggleClass("on");
	});

}); 

$(document).ready(function(){

	var acodian = {
		click: function(target){
			var _self = this,
			$target = $(target);

			$target.on('click', function(e){
			e.preventDefault();

			var $this = $(this);
				if ($this.next('.answer').css('display') == 'none'){
					$('.answer').slideUp();
					_self.onremove($target);
					$this.addClass('active');
					$this.next().slideDown();
				} else {
					$('.answer').slideUp();
					_self.onremove($target);
				}
			});
		},
		onremove: function($target){
			$target.removeClass('active');
		}
	};
	acodian.click('.question');

}); //FAQ (아코디언)


$(document.body).on('click', '.dropdown-menu li', function (event) {

    var $target = $(event.currentTarget);

    $target.closest('.btn-group')
        .find('[data-bind="label"]').text($target.text())
        .end()
        .children('.dropdown-toggle').dropdown('toggle');

    return false;

});

$(function () {

    function contentSwitcher(settings) {
        var settings = {
            contentClass: '.filter',
            navigationId: '#switcher'
        };

        //탐색에서 첫 번째 내용을 제외한 모든 내용 숨기기
        $(settings.contentClass).not(':first').hide();
        $(settings.navigationId).find('li:first').addClass('active');

        //on 클릭 활성 상태 설정, 
        //컨텐츠 패널을 숨기고 올바른 패널을 표시합니다.
        $(settings.navigationId).find('a').click(function (e) {
            var contentToShow = $(this).attr('href');
            contentToShow = $(contentToShow);

            //비활성 정상 링크 동작
            e.preventDefault();

            //활성 상태 CSS에 대한 적절한 활성 클래스를 설정합니다.
            $(settings.navigationId).find('li').removeClass('active');
            $(this).parent('li').addClass('active');

            //오래된 내용을 숨기고 새로운 내용을 보여주다
            $(settings.contentClass).hide();
            contentToShow.show();
        });//셀렉터 폼 변환
    }
    contentSwitcher();
});

$(".date-picker").datepicker();

$(".date-picker-1").datepicker();

$(".date-picker-2").datepicker();


// 휴대폰 번호 자동 하이픈
$(document).ready(function () {
   $(function () {
            
            $('#MOBILE_NO').keydown(function (event) {
             var key = event.charCode || event.keyCode || 0;
             $text = $(this); 
             if (key !== 8 && key !== 9) {
                 if ($text.val().length === 3) {
                     $text.val($text.val() + '-');
                 }
                 if ($text.val().length === 8) {
                     $text.val($text.val() + '-');
                 }
             }

             return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
			 // Key 8번 백스페이스, Key 9번 탭, Key 46번 Delete 부터 0 ~ 9까지, Key 96 ~ 105까지 넘버패트
			 // 한마디로 JQuery 0 ~~~ 9 숫자 백스페이스, 탭, Delete 키 넘버패드외에는 입력못함
         })
   });

});

// 화폐단위 컴마
$(document).ready(function () {
   $(function () {
            
            $('#monetary').keydown(function (event) {
             var key = event.charCode || event.keyCode || 0;
             $text = $(this); 
             if (key !== 8 && key !== 9) {
                 if ($text.val().length === 3) {
                     $text.val($text.val() + ',');
                 }
                 if ($text.val().length === 7) {
                     $text.val($text.val() + ',');
                 }
                 if ($text.val().length === 11) {
                     $text.val($text.val() + ',');
                 }
                 if ($text.val().length === 15) {
                     $text.val($text.val() + ',');
                 }
                 if ($text.val().length === 19) {
                     $text.val($text.val() + ',');
                 }
             }

             return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
			 // Key 8번 백스페이스, Key 9번 탭, Key 46번 Delete 부터 0 ~ 9까지, Key 96 ~ 105까지 넘버패트
			 // 한마디로 JQuery 0 ~~~ 9 숫자 백스페이스, 탭, Delete 키 넘버패드외에는 입력못함
         })
   });

});