;(function($){
    "use strict";

    const sliderSection2 = $('.ba-section-2-slider');

    sliderSection2.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
      });
    

})(jQuery);

// Initialize and add the map
function initMap() {
    // The location of Uluru
    
    const centerCoord = {lat:40.6577148, lng:-73.9147717};
    // The map, centered at Uluru
    var baMap = new google.maps.Map(
        document.querySelector('.ba-map'), {
            zoom: 13, 
            center: centerCoord,
            disableDefaultUI: true,
        });
        
        const marker = {lat:40.6451594, lng:-74.0850816}
    
        baMap.setCenter(centerCoord);
    
        const selectCity = $('#cities-select');
    
      // The marker, positioned at Uluru
      for (const city in markers) {
        const centerCoords = markers[city];
    
        const marker = new google.maps.Marker({
            position: markers[city], 
            map: baMap,
            icon: 'img/marker.svg'
          });
          
          marker.addListener('click', function() {
              
            const newCenter = this.position;
            baMap.panTo(newCenter);
          });
    
          //Add option ti select
          const option = $('<option>');
          option.val(city);
          option.text(city);
          option.appendTo(selectCity);
        
        }
    
        selectCity.on('change', function(e){
            const newCity = this.value;
            baMap.panTo(markers[newCity]);
        });
    }