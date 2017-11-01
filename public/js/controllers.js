app.controller("getPicsFromGoogle", function ($scope,scrapPics,imageData) {
    $scope.output = imageData;
    $scope.seachPics=function (input) {
        $scope.output.loading=true;
        $scope.output.item=input;
        scrapPics.getPics(input).then(function(resp){
            $scope.output.loading=false;
            $scope.output.images=resp;
        })
    }
});

app.controller("getPicsFromDb", function ($scope,dbImages) {
    dbImages.getPics().then(function(resp){
        $scope.dbImages=resp
    })
});

