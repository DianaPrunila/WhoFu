const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
const totalAmount = getTotalCartAmount();

const navigate = useNavigate();

<div className="cart">
  <div className="cItems flex-col flex flex-wrap justify-center w-11/12 gap-x-9 gap-y-8">
    {PRODUCTS.map((p) => (
      <CartItem data={p} />
    ))}
  </div>

  {totalAmount > 0 ? (
    <div className="checkout">
      <p> Subtotal:{totalAmount} </p>
      <button onClick={() => navigate("/")}> Continue Shopping </button>
      <button
        onClick={() => {
          checkout();
          navigate("/checkout");
        }}
      >
        Checkout
      </button>
    </div>
  ) : (
    <h1> Your Shopping Cart is Empty</h1>
  )}
</div>;
