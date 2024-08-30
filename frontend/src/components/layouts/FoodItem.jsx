import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";


export default function FoodItem() {
    return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className="card p-3 rounded">
            <img src="https://production-media.gousto.co.uk/cms/mood-image/2338---Creamy-Spaghetti-Carbonara-copy-1675769448672.jpg" alt="Spaghetti" className="card-img-top mx-auto" />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Carbonara</h5>
                <p className="fooditem_des">
                Classic Italian pasta dish with creamy egg sauce, Pecorino Romano, crispy guanciale, and black pepper. Rich, savory, and perfectly balanced for a comforting meal.
                </p>
                <p className="card-text">
                    <LiaRupeeSignSolid /> 550
                    <br />
                </p>
                <button type='button' id='cart_btn' className="btn btn-primary d-inline ml-4">
                    Add to Cart
                </button>
                <br /> 
                <p>
                    Status: {" "}
                    <span id='stock_status' className={10>5 ? "greenColor":"redColor"}>{10<5 ? "In Stock": "Out of Stock"}</span>
                </p>

            </div>
        </div>
    </div>
    )
}
