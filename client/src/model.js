class Model {
    constructor() {
        this.items = [] 
        this.total = 0
        console.log(this.items)
    }
    
   addItems = (item)=>{
       this.items.push(item) 
   }
   emptycart = ()=>{
    this.items = []
   }
   TotalPrice = ()=>{
    for (let i = 0; i < this.items.length; i++) {
        this.total = this.total +this.items[i].price
        
    }
   }

}

export default Model