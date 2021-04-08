import Products from "../models/products.js";

// ADD A NEW PRODUCT INTO DATABASE
export const addProduct = async (req, res) => {
  const newProduct = new Products({
    productName: req.body.productName,
    image: req.body.image,
    origin: req.body.origin,
    nutrients: req.body.nutrients,
    quantity: req.body.quantity,
    price: req.body.price,
    taste: req.body.taste,
    description: req.body.description,
  });

  try {
    const createdProduct = await newProduct.save();
    res.send({
      message: `Following product is added to the Database`,
      product: createdProduct,
    });
  } catch (err) {
    res.send({ message: err.message });
  }
};

// GET/FETCH ALL THE PRODUCTS FROM DATABASE
export const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});

    res.send(products);
  } catch (err) {
    res.send({ message: err.message });
  }
};

// GET A PRODUCT BY ID
export const getProductByID = async (req, res) => {
  try {
    const productWithID = await Products.findById(req.params.id);

    res.send(productWithID); // we can also write it as res.json(productWithID)
  } catch (err) {
    res.send(`Error: ${err.message}`);
  }
};

// REMOVE A PRODUCT
export const removeProduct = async (req, res) => {
  try {
    const removedProduct = await Products.deleteOne({ _id: req.params.id });

    res.send(removedProduct); // we can also write it as res.json(removedProduct)
  } catch (err) {
    res.send(`Error: ${err.message}`);
  }
};

// UPDATE A PRODUCT
export const updateProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [`nutrients`, `quantity`, `price`];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: `invalid request` });
  }

  try {
    const product = await Products.findById(req.params.id);

    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();
    res.send(product);
  } catch (err) {
    res.send({ message: err });
  }
};
