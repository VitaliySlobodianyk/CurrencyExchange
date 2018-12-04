// 4. Пишем скрипт который создаст и отобразит карту Google Maps на странице.

// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function InitMap() {

	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	map = new google.maps.Map(document.getElementById('map'), {
		// При создании объекта карты необходимо указать его свойства
		// center - определяем точку на которой карта будет центрироваться
		center: {lat: 50.450282, lng: 30.524430},
		// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
		zoom: 15,

		// Добавляем свои стили для отображения карты
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
	});


  

    
    
    // Создаем маркер на карте  //marker 1
	var marker1 = new google.maps.Marker({

		// Определяем позицию маркера
	    position: {lat: 50.451200, lng: 30.521522},

	    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
	    map: map,

	    // Пишем название маркера - появится если навести на него курсор и немного подождать
	    title: 'Обмінник: Change Kiev ',

	    // Укажем свою иконку для маркера
	    icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	// Создаем наполнение для информационного окна
	var contentString1 = '<div id="content" class="cont">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Обмінник: Change Kiev</h1>'+
	      '<div id="bodyContent">'+
	      '<p></p>'+
	      '<p><b>Веб-сайт:</b> <a href="http://change.kiev.ua" target="_blank"> Change Kiev</a>'+
	      '</p>'+
	      '</div>'+
	      '</div>';

	// Создаем информационное окно
	var infowindow1 = new google.maps.InfoWindow({
	   content: contentString1,
	   maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker1.addListener('click', function() {
		infowindow1.open(map, marker1);
    });
    






     //marker 2
	var marker2 = new google.maps.Marker({
	    position: {lat: 50.447726, lng: 30.522361},
	    map: map,
	    title: 'Обмінник: Обмін валют Київ ',
	    icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString2 = '<div id="content" class="cont">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Обмінник: Обмін валют Київ</h1>'+
	      '<div id="bodyContent">'+
	      '<p></p>'+
	      '<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмін валют Київ </a>'+
	      '</p>'+
	      '</div>'+
          '</div>';
          
	var infowindow2 = new google.maps.InfoWindow({
	   content: contentString2,
	   maxWidth: 400
	});
	marker2.addListener('click', function() {
		infowindow2.open(map, marker2);
    });
    
     //marker 3
	var marker3 = new google.maps.Marker({
	    position: {lat: 50.452152, lng: 30.526623},
	    map: map,
	    title: 'Обмінник: Apay ',
	    icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString3 = '<div id="content" class="cont">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Обмінник:Apay Kiev</h1>'+
	      '<div id="bodyContent">'+
	      '<p></p>'+
	      '<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank">Apay Kiev</a>'+
	      '</p>'+
	      '</div>'+
          '</div>';
          
	var infowindow3 = new google.maps.InfoWindow({
	   content: contentString3,
	   maxWidth: 400
	});
	marker3.addListener('click', function() {
		infowindow3.open(map, marker3);
	});


}