var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    $scope.number = 25;
    $scope.cards = ["1", "2", "3", "4", "5", "uwaga", "krol", "pole"];
    $scope.changeCard = function (id, card) {
        $scope.animate(card, id);
    };

    $scope.changeAll = function (card) {
        let resetCard = card;
        $(".pole").each(function () {
            let cardID = $(this).attr("id");
            $scope.animate (resetCard, cardID);
        });
    };

    var hoverElementID = "-1";
    $(document).ready(function () {
        $(".pole").mouseenter(function () {
            hoverElementID = $(this).attr("id");
        });
        $(".pole").mouseleave(function () {
            hoverElementID = "-1";
        });
    });

    document.onkeyup = function (e) {
        if (e.key === "1") {
            $scope.animate("1", hoverElementID);
        } else if (e.key === "2") {
            $scope.animate("2", hoverElementID);
        } else if (e.key == "3") {
            $scope.animate("3", hoverElementID);
        } else if (e.key == "4") {
            $scope.animate("4", hoverElementID);
        } else if (e.key == "5") {
            $scope.animate("5", hoverElementID);
        } else if (e.key == "6") {
            $scope.animate("uwaga", hoverElementID);
        } else if (e.key == "7") {
            $scope.animate("krol", hoverElementID);
        } else if (e.key == "8") {
            $scope.animate("pole", hoverElementID);
        }
        else if (e.key === "r") {
            $scope.changeAll("pole");
        }
        else if (e.key === "t") {
            $scope.changeAll("uwaga");
        }
    };

  $scope.animate = function (card, id) {
        if (id !== "-1" && $("#" + id).attr("set-card") !== card) {
            let this1 = "#" + id;
            if ($(this1).attr("fade") === "0") {

                $(this1).removeClass("fade0");
                $(this1).addClass("fade1");
                $(this1).attr("set-card", card);
                setTimeout(function () {
                    $(this1).attr("src", 'images/' + card + ".jpg");
                    $(this1).attr("fade", "1");

                }, 125);
            }
            else {
                $(this1).removeClass("fade1");
                $(this1).addClass("fade0");
                $(this1).attr("set-card", card);
                setTimeout(function () {
                    $(this1).attr("src", 'images/' + card + ".jpg");
                    $(this1).attr("fade", "0");
                }, 125);
            }
        }
    };

});





