/* This service is designed to handle all the communication from the object View to BE*/
app.factory('dataService', ['backendService', function (backendService) {
    //var baseUrl = "http://192.168.22.10/v1";
    var baseUrl = "http://85.214.221.164:8000/";
    var urls = {
       getDrugsUrl: baseUrl + 'drugs/'
    }

    var getDrugs = function(){
        return backendService.ajaxGetRequest(urls.getDrugsUrl)
    }
    

    return {
        getDrugs:getDrugs
    };
}])
