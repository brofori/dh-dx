/* This service is designed to handle all the communication from the object View to BE*/
app.factory('dataService', ['backendService', function (backendService) {
    //var baseUrl = "http://192.168.22.10/v1";
    var baseUrl = "http://pioverzero.de/v1";
    var urls = {
        signInUrl: baseUrl + '/auth/signin',
        advancedSignInUrl: baseUrl + '/auth/advancedSignin',
        usersUrl: baseUrl + '/users?XDEBUG_SESSION_START=99999',
        changeUserRoleUrl: function (userId) {
            return baseUrl + '/users/' + userId + '/changeRole?XDEBUG_SESSION_START=99999'
        },
        eventsUrl: baseUrl + '/events?XDEBUG_SESSION_START=99999',
        uploadGuestUrl: function (eventId) {
            return baseUrl + '/events/' + eventId + '/uploadGuest'
        },
        pastEventsUrl: baseUrl + '/events/past',
        venueEventsUrl: function (venueId) {
            return baseUrl + '/venues/' + venueId + '/events'
        },
        eventsByCityUrl: function (cityName) {
            return baseUrl + '/events/' + cityName
        },
        pastEventsByCityUrl: function (cityName) {
            return baseUrl + '/events/' + cityName + '/past'
        },
        upcomingEventsByCityUrl: function (cityName) {
            return baseUrl + '/events/' + cityName + '/upcoming'
        },
        venuesUrl: baseUrl + '/venues',

        venueUrl: function (venueId) {
            return baseUrl + '/venues/' + venueId
        },
        eventUrl: function (eventId) {
            return baseUrl + '/events/' + eventId
        },
        atmosphereUrl: baseUrl + '/resources/atmospheres',
        currenciesUrl: baseUrl + '/resources/currencies',
        dresscodeUrl: baseUrl + '/resources/dresscodes',
        musicUrl: baseUrl + '/resources/music',
        citiesUrl: baseUrl + '/resources/cities',
        imageUploadUrl: baseUrl + '/upload/img',
        fbImportUrl: baseUrl + '/fbImport',
        getUserUrl: baseUrl + '/users',
        userProfileUrl: baseUrl + '/users/profile',
        eventNewsUrl: function (eventId) {
            return baseUrl + '/events/' + eventId + '/news/'
        },
        venueNewsUrl: function (venueId) {
            return baseUrl + '/venues/' + venueId + '/news/'
        },
        getUserByEmailUrl: function (email) {
            return baseUrl + '/users/' + email
        },
        getGuestlist: function (eventId) {
            return baseUrl + '/events/' + eventId + '/guestlist';
        },
        uploadGuestlist: function (eventId) {
            return baseUrl + '/events/' + eventId + '/uploadGuestFile';
        },
        promoterUserUrl: function (userId) {
            return baseUrl + '/users/' + userId + '/changeRole'
        },
    }
    var getUsers = function () {
        return backendService.ajaxGetRequest(urls.getUserUrl, {offset: 0, limit: 100000});
    }

    var getVenue = function (venueId) {
        return backendService.ajaxGetRequest(urls.venueUrl(venueId));
    }
    var updateVenue = function (venueId, venue) {
        return backendService.ajaxPostRequest(urls.venueUrl(venueId), venue);
    }

    var updateEvent = function (eventId, event) {
        return backendService.ajaxPostRequest(urls.eventUrl(eventId), event)
    }

    var getEvent = function (eventId) {
        return backendService.ajaxGetRequest(urls.eventUrl(eventId))
    }

    var getUserByEmail = function (email) {
        return backendService.ajaxGetRequest(urls.getUserByEmailUrl(email));
    }

    var fbImport = function (url) {
        return backendService.ajaxGetRequest(urls.fbImportUrl, {url: url});
    }

    var promoteUser = function (userId, role) {
        return backendService.ajaxPostRequest(urls.promoterUserUrl(userId), {newRole: role});
    }

    var createVenue = function (venue) {
        return backendService.ajaxPutRequest(urls.venuesUrl, venue);
    }

    var createEvent = function (event) {
        return backendService.ajaxPutRequest(urls.eventsUrl, event);
    }
    var getCurrencies = function () {
        return backendService.ajaxGetRequest(urls.currenciesUrl)
    }

    var getAtmospheres = function () {
        return backendService.ajaxGetRequest(urls.atmosphereUrl)
    }

    var getDresscodes = function () {
        return backendService.ajaxGetRequest(urls.dresscodeUrl)
    }
    var getMusic = function () {
        return backendService.ajaxGetRequest(urls.musicUrl)
    }
    var getCities = function () {
        return backendService.ajaxGetRequest(urls.citiesUrl);
    }

    var advancedLogin = function (email, password) {
        return backendService.ajaxPostRequest(urls.advancedSignInUrl, {email: email, password: password});
    }

    var getEvents = function () {
        return backendService.ajaxGetRequest(urls.eventsUrl);
    }

    var getVenueEvents = function (venueId) {
        return backendService.ajaxGetRequest(urls.venueEventsUrl(venueId));
    }
    var getUpcomingEvents = function () {
    };

    var getEventNews = function (eventId) {
        return backendService.ajaxGetRequest(urls.eventNewsUrl(eventId))
    }
    var createEventNews = function (eventId, message) {
        return backendService.ajaxPutRequest(urls.eventNewsUrl(eventId), message);
    }
    var getVenueNews = function (venueId) {
        return backendService.ajaxGetRequest(urls.venueNewsUrl(venueId))
    }
    var createVenueNews = function (venueId, message) {
        return backendService.ajaxPutRequest(urls.venueNewsUrl(venueId), message);
    }
    var uploadGuest = function (eventId, guest) {
        return backendService.ajaxPostRequest(urls.uploadGuestUrl(eventId), guest);
    }

    var getGuestlist = function (eventId) {
        return backendService.ajaxGetRequest(urls.getGuestlist(eventId));
    }

    var uploadGuestlist = function (eventId, formData) {
        return backendService.ajaxPostRequest(urls.uploadGuestlist(eventId), formData);
    }

    var getProfile = function(){
        return backendService.ajaxGetRequest(urls.userProfileUrl)
    }

    var saveProfile = function(profile){
        return backendService.ajaxPostRequest(urls.getUserUrl, profile)
    }

    return {
        getVenueNews: getVenueNews,
        createVenueNews: createVenueNews,
        createEventNews: createEventNews,
        getEventNews: getEventNews,
        advancedLogin: advancedLogin,
        getEvents: getEvents,
        getUpcomingEvents: getUpcomingEvents,
        getCurrencies: getCurrencies,
        getVenueEvents: getVenueEvents,
        getAtmospheres: getAtmospheres,
        getDresscodes: getDresscodes,
        getMusic: getMusic,
        getCities: getCities,
        createVenue: createVenue,
        getUsers: getUsers,
        promoteUser: promoteUser,
        createEvent: createEvent,
        fbImport: fbImport,
        getUserByEmail: getUserByEmail,
        getEvent: getEvent,
        updateEvent: updateEvent,
        updateVenue: updateVenue,
        getVenue: getVenue,
        uploadGuest: uploadGuest,
        getGuestlist: getGuestlist,
        uploadGuestlist: uploadGuestlist,
        getProfile: getProfile,
        saveProfile:saveProfile
    };
}])
