import { useState } from "react"

const AddCar = () => {

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [model, setModel] = useState('')
  const [message, setMessage] = useState('')

  const nameChangeHandler = (e)=> {
    setName(e.target.value)
  }
  const companyChangeHandler = (e)=> {
    setCompany(e.target.value)
  }
  const modelChangeHandler = (e)=> {
    setModel(e.target.value)
  }

  const submitHandler = (e)=>{

    const submitReq = async ()=>{
      try {
        const response = await fetch('http://localhost:8080/car', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name, company, model
          })
        })
        const result = await response.json()

        setMessage(result.message)
      } catch (error) {
        setMessage(error.message)
      }
    }
    submitReq()
    e.preventDefault()
  }
	return (
    <>
		<div className="flex justify-center relative">
			<form method="post" onSubmit={submitHandler}>
				<div className="form-floating mb-3 xl:w-96">
					<input
						type="text"
            onChange={nameChangeHandler}
            required
						className="form-control
        block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						id="carName"
						placeholder="name@example.com"
					/>
					<label htmlFor="carName" className="text-gray-700">
						car name
					</label>
				</div>
				<div className="form-floating mb-3 xl:w-96">
					<input
						type="text"
            required
            onChange={companyChangeHandler}
						className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						id="model"
						placeholder="Honda"
					/>
					<label htmlFor="model" className="text-gray-700">
						car company
					</label>
				</div>
				<div className="form-floating mb-3 xl:w-96">
					<input
						type="text"
            required
            onChange={modelChangeHandler}
						className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						id="model"
						placeholder="2018"
					/>
					<label htmlFor="model" className="text-gray-700">
						car model
					</label>
				</div>
				<div className="flex space-x-2 justify-center">
					<button
						type="submit"
						className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						add company
					</button>
				</div>
			</form>
      <div className="mt-6">{message}</div>
		</div>
    
    </>
	)
}

export default AddCar
