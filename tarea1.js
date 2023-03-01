class ProductManager {
    constructor() {
      this.products = []
      this.lastId = 0
    }
  
    addProduct({title, description, price, thumbnail, code, stock}) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Todos los campos son obligatorios')
        return;
      }
  
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        console.error('Ya existe un producto con ese codigo')
        return;
      }
  
      const id = ++this.lastId
      const newProduct = {id, title, description, price, thumbnail, code, stock}
      this.products.push(newProduct)
      console.log(`Se agrego el producto "${title}" con el siguiente id. ${id}`)
    }
  
    getProducts() {
      return this.products
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id)
      if (!product) {
        console.error('No encontre lo que estas buscando')
      }
      return product
    }
  }

  
  // Ejemplo de uso

  const productManager = new ProductManager()
  
  console.log(productManager.getProducts())
  
  productManager.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  })
  
  console.log(productManager.getProducts());

  productManager.addProduct({
    title: 'otro producto',
    description: 'Este es otro producto',
    price: 100,
    thumbnail: 'Otra imagen',
    code: 'abc123',
    stock: 10,
  })
  
  console.log(productManager.getProductById(2))
  
  console.log(productManager.getProductById(1));