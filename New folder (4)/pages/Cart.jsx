cart.map(item => (
    <div key={item.id}>
      {item.title} - {item.quantity}
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  ));
  