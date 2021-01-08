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
    }

    $scope.changeAll = function (card) {
        let resetCard = card;
        $(".pole").each(function () {
            let card = $(this).attr("set-card");
            let cardID = $(this).attr("id");
            if (card !== resetCard) {
                if ($(this).attr("fade") === "0") {

                    $(this).removeClass("fade0");
                    $(this).addClass("fade1");
                    $(this).attr("set-card", resetCard);
                    setTimeout(function () {
                        $("#" + cardID).attr("src", 'images/' + resetCard + ".jpg");
                        $("#" + cardID).attr("fade", "1");

                    }, 125);
                }
                else {

                    $(this).removeClass("fade1");
                    $(this).addClass("fade0");
                    $(this).attr("set-card", resetCard);
                    setTimeout(function () {
                        $("#" + cardID).attr("src", 'images/' + resetCard + ".jpg");
                        $("#" + cardID).attr("fade", "0");


                    }, 125);
                }
            }
        });
    }

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
            animate("1");
        } else if (e.key === "2") {
            animate("2");
        } else if (e.key == "3") {
            animate("3");
        } else if (e.key == "4") {
            animate("4");
        } else if (e.key == "5") {
            animate("5");
        } else if (e.key == "6") {
            animate("uwaga");
        } else if (e.key == "7") {
            animate("krol");
        } else if (e.key == "8") {
            animate("pole");
        }
        else if (e.key === "r") {
            $scope.changeAll("pole");
        }
        else if (e.key === "t") {
            $scope.changeAll("uwaga");
        }
    };
    function animate(card) {

        if (hoverElementID !== "-1" && $("#" + hoverElementID).attr("set-card") !== card) {
            let this1 = "#" + hoverElementID;
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





