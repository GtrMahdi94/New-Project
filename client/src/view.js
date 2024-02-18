
import cart from   '../scripts/cartPopUp.js'
import Controller from './controller.js';
import model from './model'

class View {
    constructor() {
        
    }
    addTocart = (func)=>{
        $("#item1").on("click", () => {
              var item = {
                name : 'Dosa',
                price : 99
              }
              func(item)
            });
            $("#item2").on("click", () => {
                var item = {
                  name : 'Poori',
                  price : 59
                }
                func(item)
              });
              $("#item3").on("click", () => {
                var item = {
                  name : 'Idli',
                  price : 39
                }
                func(item)
              });
          }

        renderCart = (items)=>{
            
                $(".cart-item").append(`<div class="cart-header">
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
          </div>`)
                
            
        }  
    }
    


    
    
   



export default View