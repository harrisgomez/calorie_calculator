describe('calorieCalculator', function(){
    beforeEach(function(){
        foods_eaten = [{name: 'Coke, 16 oz', calories: '140'}, {name: 'Honey Cake - 1 cup', calories: '272.4'}]
    });

    afterEach(function(){
        foods_eaten = [];
    });

    it('should add total number of calories for foods listed', function(){
        expect(add()).toBe(412.4);
    });

    it('should return nutrition facts for food items that the user inputs', function(){
        fake_userInput = `Coke, 16 oz
                        Honey Cake - 1 cup
                        Milk Chocolate Flavored Candy Bites`;

        expect(getResults(fake_userInput)).toEqual(jasmine.any(Object)); // jasmine compares to type-Object
        expect(getResults(fake_userInput).length).toEqual(3);
        $('.food_item').remove(); // clears tested food items from food log
    });
});
