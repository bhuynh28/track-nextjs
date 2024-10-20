'use client'; //to change component to client side, included in JS bundle
import React from 'react'

const AddToCart = () => {
    return (
        <div>
            <button className='btn btn-primary' onClick={() => console.log('Click')}>Add to Cart</button>
        </div>
    )
}

export default AddToCart
