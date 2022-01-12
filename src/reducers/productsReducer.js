import { 
	ADD_PRODUCT,
	ADD_PRODUCT_OK,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_PRODUCTS_OK,
	GET_PRODUCTS_ERROR,
	DELETE_PRODUCT,
	DELETE_PRODUCT_OK,
	PUT_PRODUCT,
	UPDATE_PRODUCT,
} from '../types';

const initialtate={
	products:null,
	error:false,
	loading:false,
	deleteproduct:null,
	putproduct:null
}

export default function(state=initialtate,action){
	switch(action.type){

		case GET_PRODUCTS:
		case ADD_PRODUCT:
			return {
				...state,
				loading:true
			}

		case GET_PRODUCTS_OK:
		case ADD_PRODUCT_OK:
			return{
				...state,
				products:action.payload,
				loading:false,
				error:false
			}

		case GET_PRODUCTS_ERROR:
		case ADD_PRODUCT_ERROR:
			return{
				...state,
				error:true,
				loading:false
			}

		case DELETE_PRODUCT:
			return{
				...state,
				deleteproduct:action.payload
			}

		case DELETE_PRODUCT_OK:
			return{
				...state,
				products:state.products.filter(product => product.id !== state.deleteproduct)
			}

		case PUT_PRODUCT:
			return{
				...state,
				putproduct:action.payload
			}

		case UPDATE_PRODUCT:
			return{
				...state,
				products:state.products.map(product=> product.id===action.payload.id ? action.payload : product)
			}

		default:
			return state;
	}
}