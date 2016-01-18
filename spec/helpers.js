GLOBAL.frisby = require('../node_modules/frisby/lib/frisby');
var define = require("node-constants")(exports);

function HimexOptionsContentType( type, version) {
    return  'application/vnd.com.himexubi.' + type + '.' + version + '+json'
}

function HimexStateContentType( type, version) {
    return  'application/vnd.himex.state.' + type + '.' + version + '+json'
}

function HimexJSONPatch() {
    return 'application/json-patch+json'
}

define("SANDBOX", 'http://sandbox.evogihub.com/');
define("LOCALHOST", 'http://localhost:8081');
define("USER", '3v06i');
define("PASS", 'ABC123');
define("BASIC_AUTH", 'Basic M3YwNmk6QUJDMTIz');
define("APIDESC", "Search for accounts matching the required fields. It is possible to separate values with a pipe '|' character. It is also possible to use < (less than), > (greater than), and ! (not)");

define("HimexOptionsContentType", HimexOptionsContentType('options', 'v1'));

define("HimexStateCarrierContentType", HimexStateContentType('Carrier', 'v1'));
define("HimexStateCarrierListContentType", HimexStateContentType('CarrierList', 'v1'));
define("HimexStateVehicleSummaryContentType", HimexStateContentType('VehicleSummary', 'v1'));
define("HimexStateAccountSummaryListContentType", HimexStateContentType('AccountSummaryList', 'v1'));
define("HimexStateAccountContentType", HimexStateContentType('Account', 'v1'));
define("HimexStateVehicleContentType", HimexStateContentType('Vehicle', 'v1'));
define("HimexStateDeviceSummaryListContentType", HimexStateContentType('DeviceSummaryList', 'v1'));
define("HimexStateDeviceContentType", HimexStateContentType('Device', 'v1'));
define("HimexJSONUpdate", HimexJSONPatch());

frisby.globalSetup({ // globalSetup is for ALL requests
    request: {
        headers: { "Authorization": "Basic M3YwNmk6QUJDMTIz", "Content-type": "application/json"},
        timeout: 20000
    }
});





