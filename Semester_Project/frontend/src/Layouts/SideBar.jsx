import { Link } from 'react-router-dom'

const SideBar = () => {
	return (
		<div className="w-60 h-screen shadow-md bg-white px-1">
			<ul className="relative">
				<li className="relative">
					<Link
						className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
						to="/cars"
						data-mdb-ripple="true"
						data-mdb-ripple-color="dark"
					>
						Cars
					</Link>
				</li>
				<li className="relative">
					<Link
						className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
						to="/products"
						data-mdb-ripple="true"
						data-mdb-ripple-color="dark"
					>
						Product
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default SideBar
