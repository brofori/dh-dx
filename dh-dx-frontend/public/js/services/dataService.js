/* This service is designed to handle all the communication from the object View to BE*/
app.factory('dataService', ['backendService', function (backendService) {
    //var baseUrl = "http://192.168.22.10/v1";
    var baseUrl = "http://85.214.221.164:8000/";
    var urls = {
       getDrugsUrl: baseUrl + 'drugs/',
       getUsersUrl: baseUrl + 'users/',
        getIllnessesUrl: function (userId) {
            return baseUrl + 'users/'+userId+'/illnesses'
        }
    }

    var getDrugs = function(){
        return backendService.ajaxGetRequest(urls.getDrugsUrl)
    }
    var getMedicalHistory = function(userId){
        return backendService.ajaxGetRequest(urls.getIllnessesUrl(userId))
    }
    var getUsers = function(){
        return backendService.ajaxGetRequest(urls.getUsersUrl)
    }
    

    return {
        getDrugs:getDrugs,
        getUsers:getUsers,
        getMedicalHistory:getMedicalHistory,
    };
}])
