import { Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'
import ProductPage from './Pages/products/ProductPage'
import CarPage from './Pages/car/CarPage'

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/cars" element={<CarPage />} />
				<Route path="/products" element={<ProductPage />} />
			</Routes>
		</Layout>
	)
}

export default App
