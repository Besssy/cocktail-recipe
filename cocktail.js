(function(){

    var app = angular.module('cocktail', []);
    app.controller('cocktailController', function($scope, $http){
        $http.get("data.json").then(function(res){
            $scope.cocktails = res.data.cocktaildata;
        });
        $scope.name = "";
        $scope.ingredients = [];
            $scope.ing_name = "";
            $scope.ing_quantity = 0;
        $scope.directions = "";
        $scope.url = "";

        $scope.addIngredient = function(){
            if($scope.ing_name != "" && $scope.ing_quantity > 0){
                $scope.ingredients.push({
                        name: $scope.ing_name,
                        quantity: $scope.ing_quantity
                    });
                }

            $scope.ing_name = "";
            $scope.ing_quantity = 0;

        }

        $scope.addCocktail = function(){
            if($scope.name != "" && $scope.ingredients.length > 1 && $scope.directions != "" && $scope.url !="")
                $scope.cocktails.push({
                    name: $scope.name,
                    ingredients: $scope.ingredients,
                    directions: $scope.directions,
                    image: $scope.url
                });

                $scope.name = "";
                $scope.ingredients = [];
                $scope.directions = "";
                $scope.url = "";
        }



        // $("#add_ing").click(function(){
        //     $scope.ingredients.push({
        //         name: $scope.ing_name,
        //         quantity: $scope.ing_quantity
        //     });
        //     console.log("gvrtgtgt");
        // });

    });

})();
