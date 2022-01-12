import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { deleteProductAction,putProductAction } from '../actions/productsAction';

const Product=({product})=>{
	const { name,price,id } = product;

	const dispatch=useDispatch();
	const navigate=useNavigate();

	//DISPATCHES
	const deleteProduct=id=>dispatch(deleteProductAction(id));
	const putProduct=id=>dispatch(putProductAction(id));

	//HANDLES
	const handleDelete=id=>{

		Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
		  if (result.isConfirmed) {

		  	deleteProduct(id);

		    Swal.fire(
		      'Deleted!',
		      'Your file has been deleted.',
		      'success'
		    )
		  }
		})
	}

	const handleEdit=id=>{

		putProduct(id);
		navigate(`/products/edit/${id}`);

	}


	return(
		<tr>
			<td>{name}</td>
			<td> <span className="font-weight-bold">${price}</span> </td>
			<td>
				<button onClick={()=>handleEdit(id)} className="btn btn-primary mr-2"> EDITAR </button>
				<button className="btn btn-danger" onClick={()=>handleDelete(id)}>ELIMINAR</button>
			</td>
		</tr>
	)
}

export default Product;