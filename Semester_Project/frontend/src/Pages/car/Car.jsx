import { useState } from 'react'
import useFetch from '../../hooks/useFetch'

const Item = ({ data }) => {
	const deleteHandler = () => {
		const submitReq = async () => {
			try {
				console.log(data._id)
				const res = await fetch('http://localhost:8080/delete-car', {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id: data._id,
					}),
				})
				const result = await res.json()
				console.log(result)
			} catch (error) {
				console.log(error)
			}
		}
		submitReq()
	}

	return (
		<>
			<tr
				key={data._id}
				className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
			>
				<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
					{data._id}
				</td>
				<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
					{data.name}
				</td>
				<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
					{data.company}
				</td>
				<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
					{data.model}
				</td>
				<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
					<button
						className="bg-rose-500 p-5"
						type="submit"
						onClick={deleteHandler}
					>
						delete
					</button>
				</td>
			</tr>
		</>
	)
}

const Car = () => {
	const { response, loading, error } = useFetch('http://localhost:8080/car')

	const [message, setMessage] = useState()

	if (loading) {
		return (
			<tr>
				<td>loading...</td>
			</tr>
		)
	}

	if (error) {
		return (
			<tr>
				<td>error while fetching</td>
			</tr>
		)
	}

	if (response) {
		return (
			<>
				{response.data.map((item) => {
					return <Item key={item._id} data={item} />
				})}
			</>
		)
	}

	return (
		<tr>
			<td>some error still</td>
		</tr>
	)
}

export default Car
