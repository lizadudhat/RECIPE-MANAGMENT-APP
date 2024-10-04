import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import './components/App.css';
import Header from './components/Header';

const App = () => {
    const [recipes, setRecipes] = useState([
        {
            name: "Spaghetti Bolognese",
            ingredients: "Spaghetti, minced beef, tomato sauce, onions, garlic, salt, pepper",
            image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg"
        },
        {
            name: " Curry",
            ingredients: "Chicken, curry powder, coconut milk, onions, garlic, ginger, salt",
            image: "https://www.budgetbytes.com/wp-content/uploads/2022/02/15-Minute-Vegetable-Curry-pot.jpg"
        },
        {
            name: "Caesar Salad",
            ingredients: "Lettuce, croutons, parmesan cheese, Caesar dressing, black pepper",
            image: "https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg"
        },
        {
            name: "Tacos",
            ingredients: "Ground beef, taco shells, lettuce, cheese, salsa",
            image: "https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg"
        },
        {
            name: "Chocolate Cake",
            ingredients: "Flour, sugar, cocoa powder, eggs, butter",
            image: "https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4117-feature.jpg"
        },
        {
            name: "Fried Rice",
            ingredients: "Rice, eggs, vegetables, soy sauce, green onions",
            image: "https://fullofplants.com/wp-content/uploads/2020/05/sweet-and-sour-spicy-thai-fried-rice-easy-vegan-meal-with-vegetables-thumb.jpg"
        },
        {
            name: "Grilled Cheese Sandwich",
            ingredients: "Bread, cheese, butter",
            image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese.jpg"
        },
        {
            name: "Pancakes",
            ingredients: "Flour, milk, eggs, sugar, baking powder",
            image: "https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg"
        },
        {
            name: "Margarita Pizza",
            ingredients: "Pizza dough, tomato sauce, mozzarella cheese, basil",
            image: "https://static.toiimg.com/photo/56868564.cms"
        },
        {
            name: "Greek Salad",
            ingredients: "Tomatoes, cucumbers, olives, feta cheese, olive oil",
            image: "https://www.allrecipes.com/thmb/SkWzUVjyC9DRoefa4t7tjkPS0no=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14373-GreekSaladi-mfs-4X3-0354-e8388819cafa4bae843ea433258aa03d.jpg"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe]);
    };

    const deleteRecipe = (index) => {
        const newRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(newRecipes);
    };

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
     
        <div className="container">
           <Header/>
            <h1>Book Your Order</h1>
            <RecipeForm addRecipe={addRecipe} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <RecipeList recipes={filteredRecipes} deleteRecipe={deleteRecipe} />
        </div>
    );
};

export default App;
