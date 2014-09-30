/// <reference path="scripts/MapInitialiser.js"/>
/// <reference path="camera.js" />
/// <reference path="../kendo/js/jquery.min.js" />

(function () {
    var app;

    window.APP = {
        models: {
            map: {
                    title: 'Map'
                },
            contacts: {
                    title: 'Contacts'
                },
            authors: {
                    title: 'Authors',
                    ds: new kendo.data.DataSource({
                        data: [
                            { id: 1, name: 'Georgis', email: 'georgis@abv.bg' },
                            { id: 2, name: 'Ianko', email: 'ianko@abv.bg' }
                              ]
                        }),
                    alert: function (e) {
                        alert('Send Mail to ' + e.data.name + '\n' + e.data.email);
                    }
                }
        }
    };

    document.addEventListener('deviceready', function () {

        navigator.splashscreen.hide();

        setInterval(deviceConnection, 5000);

        shake.startWatch(onShakeDetected);

        app = new kendo.mobile.Application(document.body, { transition: 'slide', skin: 'flat', initial: 'views/map.html' });
        window.addEventListener("batterylow", batterLowStatus, false);
    }, false);

}());

function batterLowStatus(info) {
    alert("Low battery: " + info.level + " %");
}

function deviceConnection() {

    var networkState = navigator.connection.type;
    var isConnected = checkConnnection(networkState);
   
    if (!isConnected) {
        alert('No Connection! Please check your internet');
    }
}

function onShakeDetected(){
	showConfirm();
}

 function showConfirm() {
	navigator.notification.confirm('Do you really want to exit?', exitFromApp, 'Exit', 
	'Cancel, OK');
}
 
function exitFromApp(buttonIndex) {
	if (buttonIndex == 2){
		navigator.app.exitApp();
	}
}