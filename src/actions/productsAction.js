import { 
	ADD_PRODUCT,
	ADD_PRODUCT_OK,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_PRODUCTS_OK,
	DELETE_PRODUCT,
	DELETE_PRODUCT_OK,
	PUT_PRODUCT,
	UPDATE_PRODUCT,
} from '../types';

import axiosClient from '../config/axios';

//POST PRODUCTS
export function addProductAction(product){
	return async(dispatch)=>{
		dispatch(addProduct());

		try{

			await axiosClient.post("http://localhost:4000/products",product);

			dispatch(addProductOk(product));

		}catch(error){
			console.log(error);
			dispatch(addProductError());
		}
	}
}

const addProduct=()=>({
	type:ADD_PRODUCT
})

const addProductOk=product=>({
	type:ADD_PRODUCT_OK,
	payload:product
})

const addProductError=()=>({
	type:ADD_PRODUCT_ERROR,
})


//GET PRODUCTS
export function getProductsAction(){
	return async(dispatch)=>{
		dispatch(getProducts());

		try{

			let products=await axiosClient.get("http://localhost:4000/products");
			dispatch(getProductsOk(products.data));

		}catch(error){
			console.log(error);
		}

	}
}

const getProducts=()=>({
	type:GET_PRODUCTS
})

const getProductsOk=products=>({
	type:GET_PRODUCTS_OK,
	payload:products
})


//DELETE PRODUCTS
export function deleteProductAction(id){
	return async(dispatch)=>{
		dispatch(deleteProduct(id));

		try{

			await axiosClient.delete(`http://localhost:4000/products/${id}`);
			dispatch(deleteProductOk());

		}catch(error){
			console.log(error);
		}
	}
}

const deleteProduct=id=>({
	type:DELETE_PRODUCT,
	payload:id
})

const deleteProductOk=()=>({
	type:DELETE_PRODUCT_OK
})

//EDIT PRODUCT
export function putProductAction(id){
	return async(dispatch)=>{
		
		try{

			let product=await axiosClient.get(`http://localhost:4000/products/${id}`);
			dispatch(putProduct(product.data));


		}catch(error){
			console.log(error);
		}
	}
}

const putProduct=product=>({
	type:PUT_PRODUCT,
	payload:product
})


//UPDATE PRODUCT
export function updateProductAction(product){
	return async(dispatch)=>{

		try{

			await axiosClient.put(`http://localhost:4000/products/${product.id}`,product);
			dispatch(updateProduct(product));

		}catch(error){
			console.log(error);
		}
	}
}

const updateProduct=id=>({
	type:UPDATE_PRODUCT,
	payload:id
});