(function(window, document, undefined) {
    "use strict";

    var markers = [];
    var searchSpaceCoords = [];

    function addMarker(latLng, map) {
        searchSpaceCoords.push(latLng);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: true
        })

        markers.push(marker);
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: 18.0050379, lng: -76.7488265},
        mapTypeId: 'terrain'
    });

    var customControls = document.getElementById('customControls');

    map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(customControls);

    var backBtn = document.getElementById('back');

    backBtn.addEventListener('click', function() {
        var notification = document.querySelector('.mdl-js-snackbar');
        var data = { message: 'Not implemented yet.' };
        notification.MaterialSnackbar.showSnackbar(data);
    });

    var nextBtn = document.getElementById('next');

    nextBtn.addEventListener('click', function() {
        if (searchSpaceCoords == 0) {
            var notification = document.querySelector('.mdl-js-snackbar');
            var data = { message: 'You didn\'t set the search space.' };
            notification.MaterialSnackbar.showSnackbar(data);

            return;
        }

        var searchSpace = new google.maps.Polygon({
            paths: searchSpaceCoords
        });

        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }

        searchSpace.setMap(map);

        back.style.display = 'inline-block';

        var notification = document.querySelector('.mdl-js-snackbar');
        var data = { message: 'Search space saved.' };
        notification.MaterialSnackbar.showSnackbar(data);

        var anotherOne = document.getElementById('another-one');

        anotherOne.addEventListener('click', function() {
            var notification = document.querySelector('.mdl-js-snackbar');
            var data = { message: 'Not implemented yet.' };
            notification.MaterialSnackbar.showSnackbar(data);
        });

        anotherOne.style.display = 'inline-block';

        var modal2 = document.getElementById('modal2');
        if (! modal2.showModal) {
            dialogPolyfill.registerDialog(modal2);
        }

        modal2.querySelector('.mdl-button').addEventListener('click', function() {
            modal2.close();
        });

        modal2.showModal();
    })

    map.addListener('click', function(e) {
        addMarker(e.latLng, map);
    });

    var modal1 = document.getElementById('modal1');

    if (! modal1.showModal) {
        dialogPolyfill.registerDialog(modal1);
    }

    modal1.querySelector('.mdl-button').addEventListener('click', function() {
        modal1.close();
    });

    modal1.showModal();
})(window, document);
