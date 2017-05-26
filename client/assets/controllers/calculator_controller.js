console.log('calculatorController loaded!');

app.controller('calculatorController', ['$scope', '$http', function($scope, $http){
    $scope.foods = {};
    $scope.results = [];

    $scope.getResults = function(userInput){
        var lines = userInput.split('\n'); // create separate searches for multi line inputs

        for(var i=0; i<lines.length; i++){
            var item = {};
            $.ajax({
                type: 'GET',
                async: true,
                url: 'https://api.nutritionix.com/v1_1/search/' + lines[i] + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=be442dad&appKey=8304222f1be7fb9964787d2fe2770630',
                success: function(data){
                    item.name = data.hits[0].fields.item_name;
                    item.calories = data.hits[0].fields.nf_calories;
                    console.log(item);
                    $scope.results.push(item);
                    console.log($scope.results);
                }
            })
        }
    }

    $scope.add = function() {
        $scope.getResults($scope.foods.name);
    }

}])
