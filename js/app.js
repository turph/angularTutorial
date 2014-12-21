(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems =  [
		{
			name: 'Product Name 1',
			price: 123,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ante nec neque ultrices consequat. Vivamus eget suscipit eros, eu finibus turpis. Maecenas congue rutrum erat id sagittis. Suspendisse tortor metus, laoreet in lacinia sit amet, auctor aliquam dui. Fusce cursus nulla a lectus facilisis, eu eleifend ligula eleifend. Pellentesque tincidunt turpis nec dui mollis volutpat. Donec iaculis nisl nulla, sit amet posuere est luctus vitae. Aenean eleifend convallis ligula, dapibus aliquet orci varius et. Nam ullamcorper mattis sollicitudin. Cras mattis magna ut sapien sodales, non aliquam tellus posuere. Etiam mattis rhoncus tellus a elementum. In lacinia fermentum varius. Donec pharetra quam non sollicitudin euismod. Fusce sollicitudin risus ut tempor ultrices. Sed mattis iaculis tristique.',
			images: [
				{
					full: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg',
					thumb: 'img/product1-thumb.png'
				},
				{
					full: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg',
					thumb: 'img/product2-thumb.png'
				},
				{
					full: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg',
					thumb: 'img/product3-thumb.png'
				},
				{
					full: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg',
					thumb: 'img/product4-thumb.png'
				}
			],
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Product Name 2',
			price: 234.56,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ante nec neque ultrices consequat. Vivamus eget suscipit eros, eu finibus turpis. Maecenas congue rutrum erat id sagittis. Suspendisse tortor metus, laoreet in lacinia sit amet, auctor aliquam dui. Fusce cursus nulla a lectus facilisis, eu eleifend ligula eleifend. Pellentesque tincidunt turpis nec dui mollis volutpat. Donec iaculis nisl nulla, sit amet posuere est luctus vitae. Aenean eleifend convallis ligula, dapibus aliquet orci varius et. Nam ullamcorper mattis sollicitudin. Cras mattis magna ut sapien sodales, non aliquam tellus posuere. Etiam mattis rhoncus tellus a elementum. In lacinia fermentum varius. Donec pharetra quam non sollicitudin euismod. Fusce sollicitudin risus ut tempor ultrices. Sed mattis iaculis tristique.',
			images: [
				{
					full: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg',
					thumb: 'img/product2-thumb.png'
				},
				{
					full: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg',
					thumb: 'img/product1-thumb.png'
				},
				{
					full: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg',
					thumb: 'img/product3-thumb.png'
				},
				{
					full: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg',
					thumb: 'img/product4-thumb.png'
				}
			],
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Product Name 3',
			price: 345.67,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ante nec neque ultrices consequat. Vivamus eget suscipit eros, eu finibus turpis. Maecenas congue rutrum erat id sagittis. Suspendisse tortor metus, laoreet in lacinia sit amet, auctor aliquam dui. Fusce cursus nulla a lectus facilisis, eu eleifend ligula eleifend. Pellentesque tincidunt turpis nec dui mollis volutpat. Donec iaculis nisl nulla, sit amet posuere est luctus vitae. Aenean eleifend convallis ligula, dapibus aliquet orci varius et. Nam ullamcorper mattis sollicitudin. Cras mattis magna ut sapien sodales, non aliquam tellus posuere. Etiam mattis rhoncus tellus a elementum. In lacinia fermentum varius. Donec pharetra quam non sollicitudin euismod. Fusce sollicitudin risus ut tempor ultrices. Sed mattis iaculis tristique.',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Product Name 4',
			price: 456,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ante nec neque ultrices consequat. Vivamus eget suscipit eros, eu finibus turpis. Maecenas congue rutrum erat id sagittis. Suspendisse tortor metus, laoreet in lacinia sit amet, auctor aliquam dui. Fusce cursus nulla a lectus facilisis, eu eleifend ligula eleifend. Pellentesque tincidunt turpis nec dui mollis volutpat. Donec iaculis nisl nulla, sit amet posuere est luctus vitae. Aenean eleifend convallis ligula, dapibus aliquet orci varius et. Nam ullamcorper mattis sollicitudin. Cras mattis magna ut sapien sodales, non aliquam tellus posuere. Etiam mattis rhoncus tellus a elementum. In lacinia fermentum varius. Donec pharetra quam non sollicitudin euismod. Fusce sollicitudin risus ut tempor ultrices. Sed mattis iaculis tristique.',
			canPurchase: true,
			soldOut: false
		}
		
	];
	
	app.controller('PanelController', function(){
		this.tab = 1;
		this.setTab = function(value) {
			this.tab = value;
		};
		this.isSet = function(checkTab) {
			return this.tab === checkTab;
		};
	});
})();



