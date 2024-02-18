import API from '../scripts/api.js'

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.view.addTocart(this.updateCart.bind(this))
        this.view.renderCart()
        console.log('test')
    }

    updateCart = (item)=>{
        this.model.addItems(item)
        console.log(item)
        console.log(this.model.items)

    }
    
}


export default Controller