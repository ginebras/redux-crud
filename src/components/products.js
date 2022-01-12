import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductsAction } from '../actions/productsAction';

import Product from './product';

const Products=()=>{
	
	//REDUCERS
	const dispatch=useDispatch();

	//STATE VARIABLES
	var products=useSelector(state=>state.products.products);

	useEffect(()=>{

		const productsFunction=()=>dispatch(getProductsAction());
		productsFunction();

	},[])

	return(
		<>
			<h2 className="text-center my-5">Listado de productos</h2>

			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Precio</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>

				<tbody>
					{!products ? null
						: products.map((product,index)=>(
						<Product
							key={index}
							product={product}
						></Product>
					))}
				</tbody>

			</table>
		</>
	)
}

export default Products;