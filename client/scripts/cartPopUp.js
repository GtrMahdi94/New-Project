const Form = {
  render: _.template(`
            <div class='blog-list-item'>
                <div class="blog-list-item-name"> <%= name %> </div>
                <div class="blog-list-item-byline">
                    <span class="blog-list-item-byline-price"> <%= price %> </span>
                
      `),
}

export default Form
{/* <div class="cart-item">
   <div class="cart-header">
      <h4>Product Name</h4>
   </div>
   <div class="product-details">
      <p>Description of the product...</p>
   </div>
   <div class="counter">
      <button>-</button>
      <span>1</span>
      <button>+</button>
   </div>
   <div class="price-section">
      <p>$Price</p>
   </div>
</div> */}