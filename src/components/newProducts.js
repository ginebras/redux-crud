import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../actions/productsAction';
import Swal from 'sweetalert2';

const NewProduct=()=>{
	
	//REDUCERS
	const dispatch=useDispatch();
	const addProduct=(product)=>dispatch(addProductAction(product));

	//STATES
	const [ name,setName ]=useState('');
	const [ price,setPrice]=useState('');

	//STORE'S STATE
	const loading=useSelector(state=>state.products.loading);
	const error=useSelector(state=>state.products.error);

	//HANDLES
	const handleSubmit=e=>{
		e.preventDefault();

		if(name.trim() ==='' || price.trim()===''){
			return;
		}

		addProduct({name,price});

		Swal.fire(
			'Correcto',
			'El producto se agregó correctamente',
			'Ok'
		);

		setTimeout(()=>{
			window.location.href="/";
		},2000)
	}

	return(
		<>
			<div className="row justify-content-center mt-4">
				<div className="col-md-8">
					<div className="card">
						<div className="card-body">
							<h2 className="text-center mb-4 font-weight-bold">
								Agregar nuevo producto
							</h2>

							<form onSubmit={handleSubmit}>
								<div className="form-group mt-4">
									<label htmlFor="name">Nombre del producto</label>
									<input className="form-control" name="name" id="name" type="text" onChange={e=>setName(e.target.value)}/>
								</div>

								<div className="form-group mt-4">
									<label htmlFor="price">Precio del producto</label>
									<input className="form-control" name="price" id="price" type="number" onChange={e=>setPrice(e.target.value)}/>
								</div>

								<button type="submit" className="btn btn-primary mt-4">Agregar producto</button>
							
								{loading ? <p>Cargando...</p> : null}
								{error? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> :null}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NewProduct;