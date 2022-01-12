import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
 
import { updateProductAction } from '../actions/productsAction';

const EditProduct=()=>{

	const navigate=useNavigate();
	const dispatch=useDispatch();

	const [ product, setProduct ]=useState({
		name:'',
		price:''
	})


	//DISPATCHES Y SELECTORS
	const editproduct=useSelector(state=>state.products.putproduct);
		
	const updateProduct=product=>dispatch(updateProductAction(product));


	//USEEFFECT
	useEffect(()=>{
		
		if(editproduct)
			setProduct(editproduct);
		else
			setProduct({name:'',price:''});

	},[editproduct])

	if(!editproduct) return null;
	var { name, price }=product;



	//HANDLES
	const handleSubmit=e=>{
		e.preventDefault();


		updateProduct(product);
		
		Swal.fire(
			'Correcto',
			'El producto se agregó correctamente',
			'Perfecto'
		)

		setTimeout(()=>{
			navigate('/');
		},2000)
	}

	const handleChanges=e=>{
		setProduct({
			...product,
			[e.target.name]:e.target.value
		})
	}

	return(
		<>
			{ !product ? null
			: 
				<>
					<div className="row justify-content-center mt-4">
						<div className="col-md-8">
							<div className="card">
								<div className="card-body">
									<h2 className="text-center mb-4 font-weight-bold">
										Editar producto
									</h2>

									<form onSubmit={e=>handleSubmit(e)}>
										<div className="form-group mt-4">
											<label htmlFor="name">Nombre del producto</label>
											<input className="form-control" name="name" id="name" type="text" value={name} onChange={e=>handleChanges(e)} />
										</div>

										<div className="form-group mt-4">
											<label htmlFor="price">Precio del producto</label>
											<input className="form-control" name="price" id="price" type="number" value={price} onChange={e=>handleChanges(e)} />
										</div>

										<button type="submit" className="btn btn-primary mt-4">Editar producto</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>

			 }
		</>
	)
}

export default EditProduct;