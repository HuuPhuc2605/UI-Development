import { useState } from "react";

import Image from "/src/assets/images/Avatar 42.png"; 
import Image1 from "/src/assets/images/Avatar 120.png"; 
import Image2 from "/src/assets/images/Avatar 121.png"; 
import Image3 from "/src/assets/images/Avatar 122.png"; 
import Image4 from "/src/assets/images/Avatar 123.png"; 
import Image5 from "/src/assets/images/Avatar 124.png"; 
import Image6 from "/src/assets/images/Avatar 125.png"; 
import Image7 from "/src/assets/images/Avatar 126.png"; 
import Image8 from "/src/assets/images/Avatar 127.png"; 

export default function Chefify() {
    const [savedRecipes, setSavedRecipes] = useState([
        { id: 1, name: "Italian-style tomato salad", time: "14 minutes", image: Image7 },
        { id: 2, name: "Vegetable and shrimp spaghetti", time: "15 minutes", image: Image1 },
        { id: 3, name: "Lotus delight salad", time: "20 minutes", image: Image2 },
        { id: 4, name: "Snack cakes", time: "21 minutes", image: Image3 },
        { id: 5, name: "Salad with cabbage and shrimp", time: "32 minutes", image: Image4 },
        { id: 6, name: "Bean, shrimp, and potato salad", time: "32 minutes", image: Image5 },
        { id: 7, name: "Sunny-side up fried eggs", time: "32 minutes", image: Image6 }
    ]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
                <img src={Image} alt="Profile" className="rounded-full w-20 h-20" />
                <div>
                    <h2 className="text-xl font-bold">Emma Gonzalez's Recipe Box</h2>
                    <p className="text-gray-600">Deputy editor at Chefify, former cooking editor at LA Times.</p>
                </div>
            </div>
            <div className="mt-4 flex gap-2">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full">6.5k Subscribers</button>
                <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded-full">Share</button>
            </div>
            
            <div className="mt-6 border-b pb-2">
                <button className="font-semibold text-pink-500 border-b-2 border-pink-500 pb-2">Saved Recipes</button>
                <button className="ml-6 text-gray-600">Folders</button>
                <button className="ml-6 text-gray-600">Recipes by Genevieve</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {savedRecipes.map(recipe => (
                    <div key={recipe.id} className="border p-4 rounded-lg shadow-sm">
                        <img src={recipe.image} alt={recipe.name} className="w-full rounded-lg" />
                        <h3 className="mt-2 font-semibold">{recipe.name}</h3>
                        <p className="text-gray-500 text-sm">{recipe.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
