import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{

	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between">
			<div className="container">
				<Link to="/" className="text-light">CRUD - REACT, Redux, REST API & Axios</Link>
			</div>

			<Link to="/products/create" className="btn btn-danger d-block d-md-inline-block" href="/products/new">Crear producto &#43;</Link>
		</nav>
	)

}

export default Navbar;