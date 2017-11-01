app.service('scrapPics', function ($http) {
    this.getPics = function (input) {
        var promise={};
            promise = $http.get(API_URL+"scrapPics?imgName="+input)
                .then(function (response) {
                    return response.data
                });
        return promise;
    }
});

app.service('dbImages', function ($http) {
    this.getPics = function () {
        var promise={};
        promise = $http.get(API_URL+"getPicsFromDb")
            .then(function (response) {
                var data={};
                for(var i=0;i<response.data.length;i++){
                    if(data[response.data[i].keyword]==undefined){
                        data[response.data[i].keyword]=[]
                    }
                    data[response.data[i].keyword].push(response.data[i])
                }
                return data
            });
        return promise;
    }
});

app.factory('imageData', function(){
        return {
        item:"",
        loading: false,
        images:[]
    }
});

