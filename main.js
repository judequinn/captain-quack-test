$( document ).ready(function() {

	// Dropdown acting like select
	 $(".dropdown-menu li a").click(function(){
		var selText = $(this).text();
		$(this).parent().parent().parent().find('button[data-toggle="dropdown"]').html('<div class="caret pull-right"></div>' + selText);
	}); 

	// Toggle caption on click
	$(".carousel-inner-item").on("click", ".carousel-inner-circle", function(){
		$(this).parent().find(".carousel-inner-description").toggleClass("opacity-visible");
		// Allowing only one visible caption
		$.each($(this).parent().siblings().find(".carousel-inner-description"), function(item, val) {
			$(val).removeClass("opacity-visible");
		});
	});

	// Hiding caption on slide event
	var $carousel = $('#myCarousel');
	$carousel.bind("slide.bs.carousel", function (e) {
		$.each($(".baka").find(".carousel-inner-description"), function (item, val) {
			$(val).removeClass("opacity-visible");
		});
	});

	// Hiding caption if mouse leaves slider
	$(".carousel-inner").mouseleave(function() {
		$.each($(".baka").find(".carousel-inner-description"), function (item, val) {
			$(val).removeClass("opacity-visible");
		});
	});

	// Circle coordinates & captions
	var items = {
		"slide-0": [
			{"left": "600px",
			 "top": "120px",
			 "text": "Куртка<br>Burton Poacher Jacket<br>6 430 руб<br><a href='#'>Посмотреть в каталоге</a>"
			},
			{"left": "420px",
			 "top": "350px",
			 "text": "Штаны<br>Burton Poacher Pants<br>5 500 руб<br><a href='#'>Посмотреть в каталоге</a>"
			}
		],
		"slide-1": [
			{"left": "740px",
			 "top": "270px",
			 "text": "Остров в Тихом океане<br>Цена договорная<br><a href='#'>Выбор острова</a>"
			},
			{"left": "320px",
			 "top": "430px",
			 "text": "Частная акватория<br>Скидка 15%<br><a href='#'>Заказать</a>"
			}
		],
		"slide-2": [
			{"left": "700px",
			 "top": "360px",
			 "text": "Тонна морской воды<br>10 000 000 руб.<br><a href='#'>Выгодно!</a>"
			},
			{"left": "400px",
			 "top": "120px",
			 "text": "Прыжок со скалы<br>$ 666<br><a href='#'>Шанс выжить один из миллиона</a>"
			}
		],
		"slide-3": [
			{"left": "500px",
			 "top": "100px",
			 "text": "Вывод из осеннего запоя<br>Быстро и эффективно<br><a href='#'>Лучшие специалисты</a>"
			},
			{"left": "200px",
			 "top": "150px",
			 "text": "Белочка не вернется!<br>Гарантия 6 месяцев<br><a href='#'>Только у нас!</a>"
			},
			{"left": "750px",
			 "top": "300px",
			 "text": "Отдых в психиатрической клинике<br>От 60 000 руб/месяц<br><a href='#'>Успей заказать!</a>"
			}
		]
	};

	// Creating circles & captions on document load
	$.each(items, function(index, val){
		$.each(val, function(key, value){
			$("#" + index).parent().append("<div class='baka'><div class='carousel-inner-circle' style='left:" + 
				value["left"] + ";top:" + value["top"] + ";'>+</div><div class='carousel-inner-description' style='left:" + (parseInt(value["left"]) + 55) + "px;top:" +
				value["top"] + ";'>" + value["text"] + "</div></div>");
		});
	});
	
});