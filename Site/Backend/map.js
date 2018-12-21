// 4. Пишем скрипт который создаст и отобразит карту Google Maps на странице.

// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function InitMap() {

	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	map = new google.maps.Map(document.getElementById('map'), {
		// При создании объекта карты необходимо указать его свойства
		// center - определяем точку на которой карта будет центрироваться
		center: {
			lat: 50.450282,
			lng: 30.524430
		},
		// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
		zoom: 15,

		// Добавляем свои стили для отображения карты
		styles: [{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#444444"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"color": "#f2f2f2"
			}]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 45
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"color": "#46bcec"
			}, {
				"visibility": "on"
			}]
		}]
	});






	// Создаем маркер на карте  //marker 1
	var marker1 = new google.maps.Marker({

		// Определяем позицию маркера
		position: {
			lat: 50.451200,
			lng: 30.521522
		},

		// Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
		map: map,

		// Пишем название маркера - появится если навести на него курсор и немного подождать
		title: 'Обмінник: Change Kiev ',

		// Укажем свою иконку для маркера
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	// Создаем наполнение для информационного окна
	var contentString1 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Change Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://change.kiev.ua" target="_blank"> Change Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';

	// Создаем информационное окно
	var infowindow1 = new google.maps.InfoWindow({
		content: contentString1,
		maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker1.addListener('click', function () {
		infowindow1.open(map, marker1);
	});







	//marker 2
	var marker2 = new google.maps.Marker({
		position: {
			lat: 50.447726,
			lng: 30.522361
		},
		map: map,
		title: 'Обмінник: Обмін валют Київ ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString2 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмін валют Київ</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмін валют Київ </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow2 = new google.maps.InfoWindow({
		content: contentString2,
		maxWidth: 400
	});
	marker2.addListener('click', function () {
		infowindow2.open(map, marker2);
	});

	//marker 3
	var marker3 = new google.maps.Marker({
		position: {
			lat: 50.452152,
			lng: 30.526623
		},
		map: map,
		title: 'Обмінник: Apay ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString3 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow3 = new google.maps.InfoWindow({
		content: contentString3,
		maxWidth: 400
	});
	marker3.addListener('click', function () {
		infowindow3.open(map, marker3);
	});

	// Создаем маркер на карте  //marker 4
	var marker4 = new google.maps.Marker({

		// Определяем позицию маркера
		position: {
			lat: 50.513126,
			lng: 30.494154
		},

		// Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
		map: map,

		// Пишем название маркера - появится если навести на него курсор и немного подождать
		title: ' Деждавний обмінник валют ',

		// Укажем свою иконку для маркера
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	// Создаем наполнение для информационного окна
	var contentString4 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank"> Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';

	// Создаем информационное окно
	var infowindow4 = new google.maps.InfoWindow({
		content: contentString4,
		maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker4.addListener('click', function () {
		infowindow4.open(map, marker4);
	});

	// Создаем маркер на карте  //marker 5
	var marker5 = new google.maps.Marker({

		// Определяем позицию маркера
		position: {
			lat: 50.513131,
			lng: 30.494130
		},

		// Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
		map: map,

		// Пишем название маркера - появится если навести на него курсор и немного подождать
		title: 'Обмінник: MoneyGram ',

		// Укажем свою иконку для маркера
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	// Создаем наполнение для информационного окна
	var contentString5 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com" target="_blank"> MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';

	// Создаем информационное окно
	var infowindow5 = new google.maps.InfoWindow({
		content: contentString5,
		maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker5.addListener('click', function () {
		infowindow5.open(map, marker5);
	});



	// Создаем маркер на карте  //marker 6
	var marker6 = new google.maps.Marker({

		// Определяем позицию маркера
		position: {
			lat: 50.523544,
			lng: 30.500387
		},

		// Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
		map: map,

		// Пишем название маркера - появится если навести на него курсор и немного подождать
		title: 'Обмінник: MoneyGram ',

		// Укажем свою иконку для маркера
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	// Создаем наполнение для информационного окна
	var contentString6 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com" target="_blank"> MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';

	// Создаем информационное окно
	var infowindow6 = new google.maps.InfoWindow({
		content: contentString6,
		maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker6.addListener('click', function () {
		infowindow6.open(map, marker6);
	});

	//marker 7
	var marker7 = new google.maps.Marker({
		position: {
			lat: 50.500833,
			lng: 30.507175
		},
		map: map,
		title: 'Обмінник: Currency Exchange ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString7 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Apay.Co</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="apay.kiev.ua" target="_blank">Apay.co </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow7 = new google.maps.InfoWindow({
		content: contentString7,
		maxWidth: 400
	});
	marker7.addListener('click', function () {
		infowindow7.open(map, marker7);
	});

	//marker 8
	var marker8 = new google.maps.Marker({
		position: {
			lat: 50.489511,
			lng: 30.493655
		},
		map: map,
		title: 'Обмінник: Обмен Валют Петровка ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString8 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен Валют Петровка</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="change.kiev.ua" target="_blank">Обмен Валют Петровка</a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow8 = new google.maps.InfoWindow({
		content: contentString8,
		maxWidth: 400
	});
	marker8.addListener('click', function () {
		infowindow8.open(map, marker8);
	});


	//marker 9
	var marker9 = new google.maps.Marker({
		position: {
			lat: 50.488791,
			lng: 30.490575
		},
		map: map,
		title: 'Альфа инвест петровка маяк ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString9 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Альфа инвест петровка маяк</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="change.kiev.ua" target="_blank">Альфа инвест петровка маяк</a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow9 = new google.maps.InfoWindow({
		content: contentString9,
		maxWidth: 400
	});
	marker9.addListener('click', function () {
		infowindow9.open(map, marker9);
	});

	//marker 10
	var marker10 = new google.maps.Marker({
		position: {
			lat: 50.488817,
			lng: 30.524872
		},
		map: map,
		title: 'Обменний пункт “24/7 Exchange” ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString10 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обменний пункт “24/7 Exchange”</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обменний пункт “24/7 Exchange”</a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow10 = new google.maps.InfoWindow({
		content: contentString10,
		maxWidth: 400
	});
	marker10.addListener('click', function () {
		infowindow10.open(map, marker10);
	});


	//marker d11
	var markerd11 = new google.maps.Marker({
		position: {
			lat: 50.484498,
			lng: 30.475379
		},
		map: map,
		title: 'Обмінник: Currensy Exchange ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentStringd11 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Currensy Exchange</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Currensy Exchange </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindowd11 = new google.maps.InfoWindow({
		content: contentStringd11,
		maxWidth: 400
	});
	markerd11.addListener('click', function () {
		infowindowd11.open(map, markerd11);
	});

	//marker 12
	var marker12 = new google.maps.Marker({
		position: {
			lat: 50.485541,
			lng: 30.498816
		},
		map: map,
		title: 'Обмінник: Обмен валют КИТ Group ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString12 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют КИТ Group</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмен валют КИТ Group </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow12 = new google.maps.InfoWindow({
		content: contentString12,
		maxWidth: 400
	});
	marker12.addListener('click', function () {
		infowindow12.open(map, marker12);
	});

	//marker 13
	var marker13 = new google.maps.Marker({
		position: {
			lat: 50.447726,
			lng: 30.522361
		},
		map: map,
		title: 'Обмінник: Обмен валют КИТ Group ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString13 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют КИТ Group</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="kit-group.in.ua" target="_blank">Обмен валют КИТ Group </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow13 = new google.maps.InfoWindow({
		content: contentString13,
		maxWidth: 400
	});
	marker13.addListener('click', function () {
		infowindow13.open(map, marker13);
	});

	//marker 14
	var marker14 = new google.maps.Marker({
		position: {
			lat: 50.447726,
			lng: 30.522361
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString14 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="apay.kiev.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow14 = new google.maps.InfoWindow({
		content: contentString14,
		maxWidth: 400
	});
	marker14.addListener('click', function () {
		infowindow14.open(map, marker14);
	});

	//marker 15
	var marker15 = new google.maps.Marker({
		position: {
			lat: 50.485568,
			lng: 30.488581
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString15 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow15 = new google.maps.InfoWindow({
		content: contentString15,
		maxWidth: 400
	});
	marker15.addListener('click', function () {
		infowindow15.open(map, marker15);
	});

	//marker 16
	var marker16 = new google.maps.Marker({
		position: {
			lat: 50.483062,
			lng: 30.482994
		},
		map: map,
		title: 'Обмінник: Обмен валют Альфа-Инвест Групп ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString16 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют Альфа-Инвест Групп</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank">Обмен валют Альфа-Инвест Групп </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow16 = new google.maps.InfoWindow({
		content: contentString16,
		maxWidth: 400
	});
	marker16.addListener('click', function () {
		infowindow16.open(map, marker16);
	});


	//--------------------------------------------------------------------------------------------
	//marker 17
	var marker17 = new google.maps.Marker({
		position: {
			lat: 50.447726,
			lng: 30.522361
		},
		map: map,
		title: 'Обмінник: Currensy Exchange ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString17 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Currensy Exchange</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Currensy Exchange </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow17 = new google.maps.InfoWindow({
		content: contentString17,
		maxWidth: 400
	});
	marker17.addListener('click', function () {
		infowindow17.open(map, marker17);
	});


	//--------------------------------------------------------------------------------------------
	//marker 18
	var marker18 = new google.maps.Marker({
		position: {
			lat: 50.522755,
			lng: 30.460046
		},
		map: map,
		title: 'Обмінник: MoneyGram ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString18 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com" target="_blank">MoneyGram </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow18 = new google.maps.InfoWindow({
		content: contentString18,
		maxWidth: 400
	});
	marker18.addListener('click', function () {
		infowindow18.open(map, marker18);
	});


	//--------------------------------------------------------------------------------------------
	//marker 19
	var marker19 = new google.maps.Marker({
		position: {
			lat: 50.474827,
			lng: 30.513476
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString19 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow19 = new google.maps.InfoWindow({
		content: contentString19,
		maxWidth: 400
	});
	marker19.addListener('click', function () {
		infowindow19.open(map, marker19);
	});


	//--------------------------------------------------------------------------------------------
	//marker 20
	var marker20 = new google.maps.Marker({
		position: {
			lat: 50.470403,
			lng: 30.521959
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString20 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://change.kiev.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow20 = new google.maps.InfoWindow({
		content: contentString20,
		maxWidth: 400
	});
	marker20.addListener('click', function () {
		infowindow20.open(map, marker20);
	});


	//--------------------------------------------------------------------------------------------
	//marker 21
	var marker21 = new google.maps.Marker({
		position: {
			lat: 50.469868,
			lng: 30.522656
		},
		map: map,
		title: 'Обмінник: Обмін валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString21 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмін валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмін валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow21 = new google.maps.InfoWindow({
		content: contentString21,
		maxWidth: 400
	});
	marker21.addListener('click', function () {
		infowindow21.open(map, marker21);
	});



	//--------------------------------------------------------------------------------------------
	//marker 22
	var marker22 = new google.maps.Marker({
		position: {
			lat: 50.466738,
			lng: 30.515911
		},
		map: map,
		title: 'Обмінник: Обмін Валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString22 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмін Валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://ukrobmen.net" target="_blank">Обмін Валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow22 = new google.maps.InfoWindow({
		content: contentString22,
		maxWidth: 400
	});
	marker22.addListener('click', function () {
		infowindow22.open(map, marker22);
	});



	//--------------------------------------------------------------------------------------------
	//marker 23
	var marker23 = new google.maps.Marker({
		position: {
			lat: 50.465734,
			lng: 30.511123
		},
		map: map,
		title: 'Обмінник: Гуртовий обмін всіх валют світу ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString23 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник:Гуртовий обмін всіх валют світу</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank">Обмен Валют Киев </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow23 = new google.maps.InfoWindow({
		content: contentString23,
		maxWidth: 400
	});
	marker23.addListener('click', function () {
		infowindow23.open(map, marker23);
	});



	//--------------------------------------------------------------------------------------------
	//marker 24
	var marker24 = new google.maps.Marker({
		position: {
			lat: 50.463459,
			lng: 30.507613
		},
		map: map,
		title: 'Обмінник: Обмен Валют Киев ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString24 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен Валют Киев</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://change.kiev.ua" target="_blank">Обмен Валют Киев </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow24 = new google.maps.InfoWindow({
		content: contentString24,
		maxWidth: 400
	});
	marker24.addListener('click', function () {
		infowindow24.open(map, marker24);
	});



	//--------------------------------------------------------------------------------------------
	//marker 25
	var marker25 = new google.maps.Marker({
		position: {
			lat: 50.463143,
			lng: 30.509011
		},
		map: map,
		title: 'Обмінник: обменный пункт криптовалют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString25 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: обменный пункт криптовалют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://CashOut.biz" target="_blank">обменный пункт криптовалют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow25 = new google.maps.InfoWindow({
		content: contentString25,
		maxWidth: 400
	});
	marker25.addListener('click', function () {
		infowindow25.open(map, marker25);
	});



	//--------------------------------------------------------------------------------------------
	//marker 26
	var marker26 = new google.maps.Marker({
		position: {
			lat: 50.460421,
			lng: 30.523042
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString26 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow26 = new google.maps.InfoWindow({
		content: contentString26,
		maxWidth: 400
	});
	marker26.addListener('click', function () {
		infowindow26.open(map, marker26);
	});



	//--------------------------------------------------------------------------------------------
	//marker 27
	var marker27 = new google.maps.Marker({
		position: {
			lat: 50.459929,
			lng: 30.511079
		},
		map: map,
		title: 'Обмінник: MoneyGram ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString27 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com" target="_blank">MoneyGram </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow27 = new google.maps.InfoWindow({
		content: contentString27,
		maxWidth: 400
	});
	marker27.addListener('click', function () {
		infowindow27.open(map, marker27);
	});



	//--------------------------------------------------------------------------------------------
	//marker 28
	var marker28 = new google.maps.Marker({
		position: {
			lat: 50.459929,
			lng: 30.511079
		},
		map: map,
		title: 'Обмінник: MoneyGram ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString28 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com" target="_blank">MoneyGram </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow28 = new google.maps.InfoWindow({
		content: contentString28,
		maxWidth: 400
	});
	marker28.addListener('click', function () {
		infowindow28.open(map, marker28);
	});



	//--------------------------------------------------------------------------------------------
	//marker 29
	var marker29 = new google.maps.Marker({
		position: {
			lat: 50.456458,
			lng: 30.502639
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString29 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow29 = new google.maps.InfoWindow({
		content: contentString29,
		maxWidth: 400
	});
	marker29.addListener('click', function () {
		infowindow29.open(map, marker29);
	});



	//--------------------------------------------------------------------------------------------
	//marker 30
	var marker30 = new google.maps.Marker({
		position: {
			lat: 50.456307,
			lng: 30.501806
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString30 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow30 = new google.maps.InfoWindow({
		content: contentString30,
		maxWidth: 400
	});
	marker30.addListener('click', function () {
		infowindow30.open(map, marker30);
	});



	//--------------------------------------------------------------------------------------------
	//marker 31
	var marker31 = new google.maps.Marker({
		position: {
			lat: 50.447726,
			lng: 30.522361
		},
		map: map,
		title: 'Обмінник: Embassy of Bitcoin ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString31 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Embassy of Bitcoin</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Embassy of Bitcoin </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow31 = new google.maps.InfoWindow({
		content: contentString31,
		maxWidth: 400
	});
	marker31.addListener('click', function () {
		infowindow31.open(map, marker31);
	});



	//--------------------------------------------------------------------------------------------
	//marker 32
	var marker32 = new google.maps.Marker({
		position: {
			lat: 50.455990,
			lng: 30.495080
		},
		map: map,
		title: 'Обмінник: Obmin Valyut Europoshta ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString32 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Obmin Valyut Europoshta</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://europoshta.com.ua" target="_blank">Obmin Valyut Europoshta </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow32 = new google.maps.InfoWindow({
		content: contentString32,
		maxWidth: 400
	});
	marker32.addListener('click', function () {
		infowindow32.open(map, marker32);
	});



	//--------------------------------------------------------------------------------------------
	//marker 33
	var marker33 = new google.maps.Marker({
		position: {
			lat: 50.455828,
			lng: 30.487758
		},
		map: map,
		title: 'Обмінник: Обмен валют КИТ Group ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString33 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют КИТ Group</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmenka24.kiev.ua" target="_blank">Обмен валют КИТ Group </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow33 = new google.maps.InfoWindow({
		content: contentString33,
		maxWidth: 400
	});
	marker33.addListener('click', function () {
		infowindow33.open(map, marker33);
	});



	//--------------------------------------------------------------------------------------------
	//marker 34
	var marker34 = new google.maps.Marker({
		position: {
			lat: 50.454608,
			lng: 30.488311
		},
		map: map,
		title: 'Обмінник: ACE Automatic Currency Exchange ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString34 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: ACE Automatic Currency Exchange</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://ace.ceo" target="_blank">ACE Automatic Currency Exchange </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow34 = new google.maps.InfoWindow({
		content: contentString34,
		maxWidth: 400
	});
	marker34.addListener('click', function () {
		infowindow34.open(map, marker34);
	});



	//--------------------------------------------------------------------------------------------
	//marker 35
	var marker35 = new google.maps.Marker({
		position: {
			lat: 50.453786,
			lng: 30.504997
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString35 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow35 = new google.maps.InfoWindow({
		content: contentString35,
		maxWidth: 400
	});
	marker35.addListener('click', function () {
		infowindow35.open(map, marker35);
	});



	//--------------------------------------------------------------------------------------------
	//marker 36
	var marker36 = new google.maps.Marker({
		position: {
			lat: 50.453647,
			lng: 30.519936
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString36 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://businessloans.mirfinance.biz" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow36 = new google.maps.InfoWindow({
		content: contentString36,
		maxWidth: 400
	});
	marker36.addListener('click', function () {
		infowindow36.open(map, marker36);
	});



	//--------------------------------------------------------------------------------------------
	//marker 37
	var marker37 = new google.maps.Marker({
		position: {
			lat: 50.451133,
			lng: 30.506382
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString37 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow37 = new google.maps.InfoWindow({
		content: contentString37,
		maxWidth: 400
	});
	marker37.addListener('click', function () {
		infowindow37.open(map, marker37);
	});



	//--------------------------------------------------------------------------------------------
	//marker 38
	var marker38 = new google.maps.Marker({
		position: {
			lat: 50.448445,
			lng: 30.513119
		},
		map: map,
		title: 'Обмінник: Currency Exchange ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString38 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Currency Exchange</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Currency Exchange </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow38 = new google.maps.InfoWindow({
		content: contentString38,
		maxWidth: 400
	});
	marker38.addListener('click', function () {
		infowindow38.open(map, marker38);
	});



	//--------------------------------------------------------------------------------------------
	//marker 39
	var marker39 = new google.maps.Marker({
		position: {
			lat: 50.448445,
			lng: 30.513119
		},
		map: map,
		title: 'Обмінник: ОБМІН ВАЛЮТ  Money 24/7 ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString39 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: ОБМІН ВАЛЮТ  Money 24/7</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">ОБМІН ВАЛЮТ  Money 24/7 </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow39 = new google.maps.InfoWindow({
		content: contentString39,
		maxWidth: 400
	});
	marker39.addListener('click', function () {
		infowindow39.open(map, marker39);
	});



	//--------------------------------------------------------------------------------------------
	//marker 40
	var marker40 = new google.maps.Marker({
		position: {
			lat: 50.451183,
			lng: 30.521516
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString40 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://change.kiev.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow40 = new google.maps.InfoWindow({
		content: contentString40,
		maxWidth: 400
	});
	marker40.addListener('click', function () {
		infowindow40.open(map, marker40);
	});



	//--------------------------------------------------------------------------------------------
	//marker 41
	var marker41 = new google.maps.Marker({
		position: {
			lat: 50.447720,
			lng: 30.522359
		},
		map: map,
		title: 'Обмінник: Обмін валют Київ ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString41 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмін валют Київ</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмін валют Київ </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow41 = new google.maps.InfoWindow({
		content: contentString41,
		maxWidth: 400
	});
	marker41.addListener('click', function () {
		infowindow41.open(map, marker41);
	});



	//--------------------------------------------------------------------------------------------
	//marker 42
	var marker42 = new google.maps.Marker({
		position: {
			lat: 50.448244,
			lng: 30.526059
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString42 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow42 = new google.maps.InfoWindow({
		content: contentString42,
		maxWidth: 400
	});
	marker42.addListener('click', function () {
		infowindow42.open(map, marker42);
	});



	//--------------------------------------------------------------------------------------------
	//marker 43
	var marker43 = new google.maps.Marker({
		position: {
			lat: 50.444111,
			lng: 30.519533
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString43 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow43 = new google.maps.InfoWindow({
		content: contentString43,
		maxWidth: 400
	});
	marker43.addListener('click', function () {
		infowindow43.open(map, marker43);
	});



	//--------------------------------------------------------------------------------------------
	//marker 44
	var marker44 = new google.maps.Marker({
		position: {
			lat: 50.443598,
			lng: 30.519875
		},
		map: map,
		title: 'Обмінник: Обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString44 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank">Обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow44 = new google.maps.InfoWindow({
		content: contentString44,
		maxWidth: 400
	});
	marker44.addListener('click', function () {
		infowindow44.open(map, marker44);
	});



	//--------------------------------------------------------------------------------------------
	//marker 45
	var marker45 = new google.maps.Marker({
		position: {
			lat: 50.441063,
			lng: 30.520748
		},
		map: map,
		title: 'Обмінник: Пункт обмена валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString45 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Пункт обмена валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Пункт обмена валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow45 = new google.maps.InfoWindow({
		content: contentString45,
		maxWidth: 400
	});
	marker45.addListener('click', function () {
		infowindow45.open(map, marker45);
	});



	//--------------------------------------------------------------------------------------------
	//marker 46
	var marker46 = new google.maps.Marker({
		position: {
			lat: 50.440322,
			lng: 30.523427
		},
		map: map,
		title: 'Обмінник: Валюто обмін ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString46 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Валюто обмін</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Валюто обмін </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow46 = new google.maps.InfoWindow({
		content: contentString46,
		maxWidth: 400
	});
	marker46.addListener('click', function () {
		infowindow46.open(map, marker46);
	});



	//--------------------------------------------------------------------------------------------
	//marker 47
	var marker47 = new google.maps.Marker({
		position: {
			lat: 50.440113,
			lng: 30.523838
		},
		map: map,
		title: 'Обмінник: Currency Exchange ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString47 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Currency Exchange</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Currency Exchange </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow47 = new google.maps.InfoWindow({
		content: contentString47,
		maxWidth: 400
	});
	marker47.addListener('click', function () {
		infowindow47.open(map, marker47);
	});



	//--------------------------------------------------------------------------------------------
	//marker 48
	var marker48 = new google.maps.Marker({
		position: {
			lat: 50.439901,
			lng: 30.513478
		},
		map: map,
		title: 'Обмінник: Оптовий обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString48 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Оптовий обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valyt-kiev.business.site" target="_blank">Оптовий обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow48 = new google.maps.InfoWindow({
		content: contentString48,
		maxWidth: 400
	});
	marker48.addListener('click', function () {
		infowindow48.open(map, marker48);
	});



	//--------------------------------------------------------------------------------------------
	//marker 49
	var marker49 = new google.maps.Marker({
		position: {
			lat: 50.438997,
			lng: 30.513301
		},
		map: map,
		title: 'Обмінник: Оптовий обмен валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString49 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник: Оптовий обмен валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmen-valut.com.ua" target="_blank">Оптовий обмен валют </a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow49 = new google.maps.InfoWindow({
		content: contentString49,
		maxWidth: 400
	});
	marker49.addListener('click', function () {
		infowindow49.open(map, marker49);
	});



	//--------------------------------------------------------------------------------------------
	//marker 50
	var marker50 = new google.maps.Marker({
		position: {
			lat: 50.435573,
			lng: 30.516528
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString50 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://ffru.com.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow50 = new google.maps.InfoWindow({
		content: contentString50,
		maxWidth: 400
	});
	marker50.addListener('click', function () {
		infowindow50.open(map, marker50);
	});
	var marker51 = new google.maps.Marker({
		position: {
			lat: 50.429052,
			lng: 30.521955
		},
		map: map,
		title: 'Обмінник:Артада  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString51 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Артада</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://finance.ua"' +
		'target="_blank">Артада</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow51 = new google.maps.InfoWindow({
		content: contentString51,
		maxWidth: 400
	});
	marker51.addListener('click', function () {
		infowindow51.open(map, marker51);
	});
	var marker52 = new google.maps.Marker({
		position: {
			lat: 50.454996,
			lng: 30.587255
		},
		map: map,
		title: 'Обмінник:MoneyGram  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString52 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com"' +
		'target="_blank">MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow52 = new google.maps.InfoWindow({
		content: contentString52,
		maxWidth: 400
	});
	marker52.addListener('click', function () {
		infowindow52.open(map, marker52);
	});
	var marker53 = new google.maps.Marker({
		position: {
			lat: 50.455217,
			lng: 30.590078
		},
		map: map,
		title: 'Обмінник:MoneyGram  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString53 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com"' +
		'target="_blank">global.moneygram.com</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow53 = new google.maps.InfoWindow({
		content: contentString53,
		maxWidth: 400
	});
	marker53.addListener('click', function () {
		infowindow53.open(map, marker53);
	});
	var marker54 = new google.maps.Marker({
		position: {
			lat: 50.451333,
			lng: 30.599081
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString54 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow54 = new google.maps.InfoWindow({
		content: contentString54,
		maxWidth: 400
	});
	marker54.addListener('click', function () {
		infowindow54.open(map, marker54);
	});
	var marker55 = new google.maps.Marker({
		position: {
			lat: 50.450728,
			lng: 30.597097
		},
		map: map,
		title: 'Обмінник:”Альфа-Інвест груп”  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString55 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:”Альфа-Інвест груп”</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">”Альфа-Інвест груп”</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow55 = new google.maps.InfoWindow({
		content: contentString55,
		maxWidth: 400
	});
	marker55.addListener('click', function () {
		infowindow55.open(map, marker55);
	});
	var marker56 = new google.maps.Marker({
		position: {
			lat: 50.449541,
			lng: 30.594478
		},
		map: map,
		title: 'Обмінник:ІдеяБанк  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString56 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:ІдеяБанк</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://ideabank.ua"' +
		'target="_blank">ІдеяБанк</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow56 = new google.maps.InfoWindow({
		content: contentString56,
		maxWidth: 400
	});
	marker56.addListener('click', function () {
		infowindow56.open(map, marker56);
	});
	var marker57 = new google.maps.Marker({
		position: {
			lat: 50.443963,
			lng: 30.591721
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString57 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow57 = new google.maps.InfoWindow({
		content: contentString57,
		maxWidth: 400
	});
	marker57.addListener('click', function () {
		infowindow57.open(map, marker57);
	});
	var marker58 = new google.maps.Marker({
		position: {
			lat: 50.442934,
			lng: 30.598864
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString58 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow58 = new google.maps.InfoWindow({
		content: contentString58,
		maxWidth: 400
	});
	marker58.addListener('click', function () {
		infowindow58.open(map, marker58);
	});
	var marker59 = new google.maps.Marker({
		position: {
			lat: 50.465555,
			lng: 30.625572
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString59 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow59 = new google.maps.InfoWindow({
		content: contentString59,
		maxWidth: 400
	});
	marker59.addListener('click', function () {
		infowindow59.open(map, marker59);
	});
	var marker60 = new google.maps.Marker({
		position: {
			lat: 50.462677,
			lng: 30.628862
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString60 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow60 = new google.maps.InfoWindow({
		content: contentString60,
		maxWidth: 400
	});
	marker60.addListener('click', function () {
		infowindow60.open(map, marker60);
	});
	var marker61 = new google.maps.Marker({
		position: {
			lat: 50.457822,
			lng: 30.623292
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString61 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow61 = new google.maps.InfoWindow({
		content: contentString61,
		maxWidth: 400
	});
	marker61.addListener('click', function () {
		infowindow61.open(map, marker61);
	});
	var marker62 = new google.maps.Marker({
		position: {
			lat: 50.464575,
			lng: 30.644200
		},
		map: map,
		title: 'Обмінник:change.kiev.ua  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString62 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:change.kiev.ua</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://change.kiev.ua"' +
		'target="_blank">change.kiev.ua</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow62 = new google.maps.InfoWindow({
		content: contentString62,
		maxWidth: 400
	});
	marker62.addListener('click', function () {
		infowindow62.open(map, marker62);
	});
	var marker63 = new google.maps.Marker({
		position: {
			lat: 50.463820,
			lng: 30.645147
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString63 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow63 = new google.maps.InfoWindow({
		content: contentString63,
		maxWidth: 400
	});
	marker63.addListener('click', function () {
		infowindow63.open(map, marker63);
	});
	var marker64 = new google.maps.Marker({
		position: {
			lat: 50.469067,
			lng: 30.656274
		},
		map: map,
		title: 'Обмінник:КИТ Group  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString64 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:КИТ Group</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://kit-group.in.ua"' +
		'target="_blank">kit-group.in.ua</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow64 = new google.maps.InfoWindow({
		content: contentString64,
		maxWidth: 400
	});
	marker64.addListener('click', function () {
		infowindow64.open(map, marker64);
	});
	var marker65 = new google.maps.Marker({
		position: {
			lat: 50.454817,
			lng: 30.635683
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString65 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow65 = new google.maps.InfoWindow({
		content: contentString65,
		maxWidth: 400
	});
	marker65.addListener('click', function () {
		infowindow65.open(map, marker65);
	});
	var marker66 = new google.maps.Marker({
		position: {
			lat: 50.447891,
			lng: 30.628642
		},
		map: map,
		title: 'Обмінник:Оптовий Обмен Валют  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString66 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Оптовий Обмен Валют</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href=""' +
		'target="_blank"></a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow66 = new google.maps.InfoWindow({
		content: contentString66,
		maxWidth: 400
	});
	marker66.addListener('click', function () {
		infowindow66.open(map, marker66);
	});
	var marker67 = new google.maps.Marker({
		position: {
			lat: 50.441380,
			lng: 30.621145
		},
		map: map,
		title: 'Обмінник:LOTOS  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString67 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:LOTOS</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href=""' +
		'target="_blank"></a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow67 = new google.maps.InfoWindow({
		content: contentString67,
		maxWidth: 400
	});
	marker67.addListener('click', function () {
		infowindow67.open(map, marker67);
	});
	var marker68 = new google.maps.Marker({
		position: {
			lat: 50.435044,
			lng: 30.633523
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString68 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow68 = new google.maps.InfoWindow({
		content: contentString68,
		maxWidth: 400
	});
	marker68.addListener('click', function () {
		infowindow68.open(map, marker68);
	});
	var marker69 = new google.maps.Marker({
		position: {
			lat: 50.431313,
			lng: 30.634140
		},
		map: map,
		title: 'Обмінник: Киев ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString69 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник: Киев</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://change.kiev.ua"' +
		'target="_blank">Achange.kiev.ua</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow69 = new google.maps.InfoWindow({
		content: contentString69,
		maxWidth: 400
	});
	marker69.addListener('click', function () {
		infowindow69.open(map, marker69);
	});
	var marker70 = new google.maps.Marker({
		position: {
			lat: 50.430852,
			lng: 30.649306
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString70 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"'
	'class="firstHeading">Обмінник:Apay Kiev</h1>' +
	'<div id="bodyContent">' +
	'<p></p>' +
	'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
	'target="_blank">Apay Kiev</a>' +
	'</p>' +
	'</div>' +
	'</div>';
	var infowindow70 = new google.maps.InfoWindow({
		content: contentString70,
		maxWidth: 400
	});
	marker70.addListener('click', function () {
		infowindow70.open(map, marker70);
	});
	var marker71 = new google.maps.Marker({
		position: {
			lat: 50.421368,
			lng: 30.649850
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString71 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow71 = new google.maps.InfoWindow({
		content: contentString71,
		maxWidth: 400
	});
	marker71.addListener('click', function () {
		infowindow71.open(map, marker71);
	});
	var marker72 = new google.maps.Marker({
		position: {
			lat: 50.415806,
			lng: 30.635299
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString72 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow72 = new google.maps.InfoWindow({
		content: contentString72,
		maxWidth: 400
	});
	marker72.addListener('click', function () {
		infowindow72.open(map, marker72);
	});
	var marker73 = new google.maps.Marker({
		position: {
			lat: 50.415614,
			lng: 30.626276
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString73 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow73 = new google.maps.InfoWindow({
		content: contentString73,
		maxWidth: 400
	});
	marker73.addListener('click', function () {
		infowindow73.open(map, marker73);
	});
	var marker74 = new google.maps.Marker({
		position: {
			lat: 50.410825,
			lng: 30.625812
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString74 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow74 = new google.maps.InfoWindow({
		content: contentString74,
		maxWidth: 400
	});
	marker74.addListener('click', function () {
		infowindow74.open(map, marker74);
	});
	var marker75 = new google.maps.Marker({
		position: {
			lat: 50.412294,
			lng: 30.645334
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString75 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading"></h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href=""' +
		'target="_blank"></a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow75 = new google.maps.InfoWindow({
		content: contentString75,
		maxWidth: 400
	});
	marker75.addListener('click', function () {
		infowindow75.open(map, marker75);
	});
	var marker76 = new google.maps.Marker({
		position: {
			lat: 50.414140,
			lng: 30.650972
		},
		map: map,
		title: 'Обмінник:Обмен Валют в New Way  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString76 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href=""' +
		'target="_blank"></a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow76 = new google.maps.InfoWindow({
		content: contentString76,
		maxWidth: 400
	});
	marker76.addListener('click', function () {
		infowindow76.open(map, marker76);
	});
	var marker77 = new google.maps.Marker({
		position: {
			lat: 50.406045,
			lng: 30.621991
		},
		map: map,
		title: 'Обмінник:change  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString77 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://change.kiev.ua"' +
		'target="_blank">change</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow77 = new google.maps.InfoWindow({
		content: contentString77,
		maxWidth: 400
	});
	marker77.addListener('click', function () {
		infowindow77.open(map, marker77);
	});
	var marker78 = new google.maps.Marker({
		position: {
			lat: 50.404146,
			lng: 30.630011
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString78 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow78 = new google.maps.InfoWindow({
		content: contentString78,
		maxWidth: 400
	});
	marker78.addListener('click', function () {
		infowindow78.open(map, marker78);
	});
	var marker79 = new google.maps.Marker({
		position: {
			lat: 50.405249,
			lng: 30.631429
		},
		map: map,
		title: 'Обмінник:kit-group  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString79 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://kit-group.in.ua"' +
		'target="_blank">kit-group</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow79 = new google.maps.InfoWindow({
		content: contentString79,
		maxWidth: 400
	});
	marker79.addListener('click', function () {
		infowindow79.open(map, marker79);
	});
	var marker80 = new google.maps.Marker({
		position: {
			lat: 50.405345,
			lng: 30.655096
		},
		map: map,
		title: 'Обмінник:afinance  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString80 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://afinance.kiev.ua"' +
		'target="_blank">afinance</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow80 = new google.maps.InfoWindow({
		content: contentString80,
		maxWidth: 400
	});
	marker80.addListener('click', function () {
		infowindow80.open(map, marker80);
	});
	var marker81 = new google.maps.Marker({
		position: {
			lat: 50.405469,
			lng: 30.655904
		},
		map: map,
		title: 'Обмінник:ТОВ “ФК” “Альфа-Інвест груп”  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString81 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow81 = new google.maps.InfoWindow({
		content: contentString81,
		maxWidth: 400
	});
	marker81.addListener('click', function () {
		infowindow81.open(map, marker81);
	});
	var marker82 = new google.maps.Marker({
		position: {
			lat: 50.396286,
			lng: 30.629169
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString82 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com"' +
		'target="_blank">MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow82 = new google.maps.InfoWindow({
		content: contentString82,
		maxWidth: 400
	});
	marker82.addListener('click', function () {
		infowindow82.open(map, marker82);
	});
	var marker83 = new google.maps.Marker({
		position: {
			lat: 50.398624,
			lng: 30.644769
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString83 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow83 = new google.maps.InfoWindow({
		content: contentString83,
		maxWidth: 400
	});
	marker83.addListener('click', function () {
		infowindow83.open(map, marker83);
	});
	var marker84 = new google.maps.Marker({
		position: {
			lat: 50.393615,
			lng: 30.618196
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString84 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://change.kiev.ua"' +
		'target="_blank"></a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow84 = new google.maps.InfoWindow({
		content: contentString84,
		maxWidth: 400
	});
	marker84.addListener('click', function () {
		infowindow84.open(map, marker84);
	});
	var marker85 = new google.maps.Marker({
		position: {
			lat: 50.391199,
			lng: 30.625554
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString85 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com"' +
		'target="_blank">MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow85 = new google.maps.InfoWindow({
		content: contentString85,
		maxWidth: 400
	});
	marker85.addListener('click', function () {
		infowindow85.open(map, marker85);
	});
	var marker86 = new google.maps.Marker({
		position: {
			lat: 50.389375,
			lng: 30.624464
		},
		map: map,
		title: 'Обмінник:ФК Магнат  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString86 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href=""' +
		'target="_blank"></a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow86 = new google.maps.InfoWindow({
		content: contentString86,
		maxWidth: 400
	});
	marker86.addListener('click', function () {
		infowindow86.open(map, marker86);
	});
	var marker87 = new google.maps.Marker({
		position: {
			lat: 50.391764,
			lng: 30.635058
		},
		map: map,
		title: 'Обмінник:MoneyGram  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString87 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com"' +
		'target="_blank">MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow87 = new google.maps.InfoWindow({
		content: contentString87,
		maxWidth: 400
	});
	marker87.addListener('click', function () {
		infowindow87.open(map, marker87);
	});
	var marker88 = new google.maps.Marker({
		position: {
			lat: 50.428302,
			lng: 30.444842
		},
		map: map,
		title: 'Обмінник: ФК Европочта ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString88 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href=""' +
		'target="_blank"></a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow88 = new google.maps.InfoWindow({
		content: contentString88,
		maxWidth: 400
	});
	marker88.addListener('click', function () {
		infowindow88.open(map, marker88);
	});
	var marker89 = new google.maps.Marker({
		position: {
			lat: 50.428933,
			lng: 30.464874
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString89 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow89 = new google.maps.InfoWindow({
		content: contentString89,
		maxWidth: 400
	});
	marker89.addListener('click', function () {
		infowindow89.open(map, marker89);
	});
	var marker90 = new google.maps.Marker({
		position: {
			lat: 50.428520,
			lng: 30.465340
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString90 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow90 = new google.maps.InfoWindow({
		content: contentString90,
		maxWidth: 400
	});
	marker90.addListener('click', function () {
		infowindow90.open(map, marker90);
	});
	var marker91 = new google.maps.Marker({
		position: {
			lat: 50.426879,
			lng: 30.461733
		},
		map: map,
		title: 'Обмінник: MoneyGram  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString91 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://global.moneygram.com"' +
		'target="_blank">MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow91 = new google.maps.InfoWindow({
		content: contentString91,
		maxWidth: 400
	});
	marker91.addListener('click', function () {
		infowindow91.open(map, marker91);
	});
	var marker92 = new google.maps.Marker({
		position: {
			lat: 50.424353,
			lng: 30.458739
		},
		map: map,
		title: 'Обмінник: Obmenion ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString92 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Obmenion</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://obmenion.com"' +
		'target="_blank">Obmenion</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow92 = new google.maps.InfoWindow({
		content: contentString92,
		maxWidth: 400
	});
	marker92.addListener('click', function () {
		infowindow92.open(map, marker92);
	});
	var marker93 = new google.maps.Marker({
		position: {
			lat: 50.422931,
			lng: 30.459284
		},
		map: map,
		title: 'Обмінник: MoneyGram  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString93 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="global.moneygram.com"' +
		'target="_blank">MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow93 = new google.maps.InfoWindow({
		content: contentString93,
		maxWidth: 400
	});
	marker93.addListener('click', function () {
		infowindow93.open(map, marker93);
	});
	var marker94 = new google.maps.Marker({
		position: {
			lat: 50.464478,
			lng: 30.355069
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString94 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow94 = new google.maps.InfoWindow({
		content: contentString94,
		maxWidth: 400
	});
	marker94.addListener('click', function () {
		infowindow94.open(map, marker94);
	});
	var marker95 = new google.maps.Marker({
		position: {
			lat: 50.456898,
			lng: 30.347365
		},
		map: map,
		title: 'Обмінник: MoneyGram ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString95 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:MoneyGram</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="global.moneygram.com"' +
		'target="_blank">MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow95 = new google.maps.InfoWindow({
		content: contentString95,
		maxWidth: 400
	});
	marker95.addListener('click', function () {
		infowindow95.open(map, marker95);
	});
	var marker96 = new google.maps.Marker({
		position: {
			lat: 50.456725,
			lng: 30.365555
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString96 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow96 = new google.maps.InfoWindow({
		content: contentString96,
		maxWidth: 400
	});
	marker96.addListener('click', function () {
		infowindow96.open(map, marker96);
	});
	var marker97 = new google.maps.Marker({
		position: {
			lat: 50.435506,
			lng: 30.380856
		},
		map: map,
		title: 'Обмінник: MoneyGram  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString97 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="global.moneygram.com"' +
		'target="_blank">MoneyGram</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow97 = new google.maps.InfoWindow({
		content: contentString97,
		maxWidth: 400
	});
	marker97.addListener('click', function () {
		infowindow97.open(map, marker97);
	});
	var marker98 = new google.maps.Marker({
		position: {
			lat: 50.430341,
			lng: 30.383443
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString98 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank"></a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow98 = new google.maps.InfoWindow({
		content: contentString98,
		maxWidth: 400
	});
	marker98.addListener('click', function () {
		infowindow98.open(map, marker98);
	});
	var marker99 = new google.maps.Marker({
		position: {
			lat: 50.428624,
			lng: 30.356179
		},
		map: map,
		title: 'Обмінник:  ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});
	var contentString99 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading"' +
		'class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua"' +
		'target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';
	var infowindow99 = new google.maps.InfoWindow({
		content: contentString99,
		maxWidth: 400
	});
	marker99.addListener('click', function () {
		infowindow99.open(map, marker99);
	});





	//marker 100
	var marker100 = new google.maps.Marker({
		position: {
			lat: 50.430341,
			lng: 30.383443
		},
		map: map,
		title: 'Обмінник валют ',
		icon: 'https://cdn0.iconfinder.com/data/icons/travel-volume-3-2/256/115-32.png'
	});

	var contentString100 = '<div id="content" class="cont">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Обмінник:Apay Kiev</h1>' +
		'<div id="bodyContent">' +
		'<p></p>' +
		'<p><b>Веб-сайт:</b> <a href="http://apay.kiev.ua" target="_blank">Apay Kiev</a>' +
		'</p>' +
		'</div>' +
		'</div>';

	var infowindow100 = new google.maps.InfoWindow({
		content: contentString100,
		maxWidth: 400
	});
	marker100.addListener('click', function () {
		infowindow100.open(map, marker100);
	});











}