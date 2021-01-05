var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    $scope.number = 25;
    $scope.cards = ["1", "2", "3", "4", "5", "uwaga", "krol", "pole"];
    $scope.changeCard = function (id, card) {
        let setCard = $("#" + id).attr("set-card");
        if (card !== setCard) {
            if ($("#" + id).attr("fade") === "0") {
                $("#" + id).removeClass("fade0");
                $("#" + id).addClass("fade1");
                $("#" + id).attr("set-card", card);
                setTimeout(function () {
                    $("#" + id).attr("src", 'images/' + card + ".jpg");
                    $("#" + id).attr("fade", "1");

                }, 125);
            }
            else {
                $("#" + id).removeClass("fade1");
                $("#" + id).addClass("fade0");
                $("#" + id).attr("set-card", card);
                setTimeout(function () {
                    $("#" + id).attr("src", 'images/' + card + ".jpg");
                    $("#" + id).attr("fade", "0");

                }, 125);
            }
        }

 
};
    
});




