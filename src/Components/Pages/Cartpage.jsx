import { useContext } from "react"
import { CartContext } from "../Context/CartProvider"
import { AiTwotoneDelete } from "react-icons/ai"
import { NavLink } from "react-router-dom"


const CartPage = () => {
  const { state, dispatch } = useContext(CartContext)
  const CartItems = state.CartItems
  const totalItems = state.CartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);


  const totalAmount = state.CartItems.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);



  // console.log(state)
  return (
    <div className='flex justify-center mt-10'>
      <div className="w-[60%]">
        {CartItems.length > 0 ? (
          <div>
            <div className="p-2">
              {CartItems.map((item) => {
                return (
                  <div className="shadow-md my-5 rounded-md  p-3 shadow-stone-300 flex justify-between"
                    key={item.id}>
                    <div className="flex">
                      <img className="h-16"
                        src={item.image} alt="" />
                      <h1 className="ml-7">{item.name}</h1>
                    </div>

                    <div>
                      <p>Rs: {item.caloriesPerServing}</p>
                      <button
                        onClick={() => {
                          dispatch({ type: "Delete", payload: { id: item.id } })
                        }}
                      ><AiTwotoneDelete className="text-black text-3xl " /></button>
                    </div>
                    <div className=" w-24  space-x-2 mt-3 ">
                      <button
                        onClick={() => {
                          dispatch({ type: "Decrement", payload: { id: item.id } })
                        }}
                        className="bg-slate-500 rounded w-7">-</button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => {
                          dispatch({ type: "Increment", payload: { id: item.id } });
                        }}
                        className="bg-slate-500 rounded w-7">+</button>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        ) : (
          <div className=" flex items-center justify-center p-5 text-left">
            <div className=" flex-col items-center w-96 shadow-xl text-center mr-28 p-5 rounded-xl   " >
              <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" alt="cart_image" />
              <h1 className="font-semibold mt-5">There are no items in this Cart <br /> feel free to order with us <br /><br /> < NavLink className="text-orange-600 border-2 border-orange-600" to='/menu' >  Shop Now </NavLink></h1 >
            </div>
          </div>

        )}
      </div>

      {CartItems.length > 0 && (

        <div className="border-2 shadow flex  flex-wrap flex-col items-center justify-center shadow-slate-500 h-80 ml-8  rounded-lg w-[25%]  ">
          <p className="text-2xl font-medium">Order Summary :</p>
          <p className=" pl-8  items-center">Thank you for choosing us. If you have<br /> any questions, feel free to contact us.</p>
          <p className="text-2xl font-medium mt-4">Total Price :Rs {totalAmount} </p>

          <NavLink to="/payment " state={[...CartItems]}>
            <button
              className="bg-black text-white rounded p-2 w-52 " > Proceed to Checkout  ({totalItems})
            </button>
          </NavLink>

          <button
            onClick={() => {
              dispatch({ type: "ClearCart" })
            }}
            className="bg-red-600 text-white rounded p-2 w-52 mt-4 " > Clear Cart ({totalItems}) </button>
        </div>




      )}
    </div>
  )
}

export default CartPage;