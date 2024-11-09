const dummyData = {
  1: {
    name: "Apple",
    quantity: "10",
    quality: "Fresh",
    userImage: "path/to/image.jpg",
    recipes: [
      {
        title: "Apple Pie",
        description: "A delicious apple pie recipe.",
        ingredients: [
          { ingredient_name: "Apple", quantity: "5" },
          { ingredient_name: "Sugar", quantity: "1 cup" },
          { ingredient_name: "Flour", quantity: "2 cups" },
          { ingredient_name: "Butter", quantity: "1/2 cup" },
          { ingredient_name: "Cinnamon", quantity: "1 tsp" },
        ],
        steps: [
          "Preheat the oven to 350°F (175°C).",
          "Peel and slice the apples.",
          "Mix the apples with sugar, flour, and cinnamon.",
          "Roll out the dough and place it in a pie dish.",
          "Fill the pie dish with the apple mixture.",
          "Cover with another layer of dough and seal the edges.",
          "Bake for 45 minutes or until golden brown.",
          "Let it cool before serving.",
        ],
      },
      {
        title: "Apple Crumble",
        description: "A simple and tasty apple crumble.",
        ingredients: [
          { ingredient_name: "Apple", quantity: "6" },
          { ingredient_name: "Brown Sugar", quantity: "1 cup" },
          { ingredient_name: "Oats", quantity: "1 cup" },
          { ingredient_name: "Butter", quantity: "1/2 cup" },
          { ingredient_name: "Cinnamon", quantity: "1 tsp" },
        ],
        steps: [
          "Preheat the oven to 375°F (190°C).",
          "Peel and slice the apples.",
          "Mix the apples with cinnamon and place them in a baking dish.",
          "Combine brown sugar, oats, and butter in a bowl.",
          "Sprinkle the oat mixture over the apples.",
          "Bake for 30 minutes or until the topping is golden brown.",
          "Serve warm with ice cream.",
        ],
      },
    ],
  },
  2: {
    name: "Banana",
    quantity: "12",
    quality: "Ripe",
    userImage: "path/to/image.jpg",
    recipes: [
      {
        title: "Banana Bread",
        description: "A moist and delicious banana bread.",
        ingredients: [
          { ingredient_name: "Banana", quantity: "3" },
          { ingredient_name: "Sugar", quantity: "1 cup" },
          { ingredient_name: "Flour", quantity: "2 cups" },
          { ingredient_name: "Butter", quantity: "1/2 cup" },
          { ingredient_name: "Baking Soda", quantity: "1 tsp" },
        ],
        steps: [
          "Preheat the oven to 350°F (175°C).",
          "Mash the bananas in a bowl.",
          "Mix the bananas with sugar, flour, and baking soda.",
          "Add melted butter and mix well.",
          "Pour the batter into a greased loaf pan.",
          "Bake for 60 minutes or until a toothpick inserted into the center comes out clean.",
          "Let it cool before slicing.",
        ],
      },
    ],
  },
  // Add more food items as needed
};

export default dummyData;
