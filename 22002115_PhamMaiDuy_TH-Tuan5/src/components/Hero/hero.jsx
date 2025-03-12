import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bookmark } from 'lucide-react'
import { Menu } from 'lucide-react';
function Hero() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get("https://67c81bc40acf98d07084dff5.mockapi.io/api/header/tet")
            .then((response) => setProduct(response.data))
            .catch(console.error);
    }, []);

    return (
        <section className="bg-white text-black py-12 px-6 md:px-12 shadow-md">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row gap-8">

                    <aside className="md:w-1/4 ">
                     <div className="flex flex-auto">
                     <Menu />
                        <p className="text-lg font-semibold">FILLTERS</p>

                     </div>
            <div>
                <h3 className="text-lg font-semibold mb-6 md-9">Type</h3>
                <table>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                       
                    </tr>
                    <tr>
                        <td>dfasd</td>
                       
                    </tr>
                </table>
            </div>

                    </aside>

                

                    <div className="md:w-3/4">
                        <div className="flex justify-between ">

                            <h2 className="text-lg font-semibold mb-6">Salad (32)</h2>

                            <form >
                              
                                <select id="countries" class="h-12 w-50 border rounded-md">
                                    <option selected>A-Z</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
                            {product.map((item) => (
                                <div
                                    key={item.name}
                                    className="bg-white border shadow-md rounded-lg p-4 min-h-[full] flex flex-col"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                    <div className="flex justify-between ">
                                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                        <div class="w-10 h-10 rounded-full border-2 border-pink  border-pink-500 flex justify-center items-center">
                                            <Bookmark className="stroke-pink-500 " />
                                        </div>

                                    </div>
                                    <p className="text-pink-600 ">{item.description || "15 minutes"}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
