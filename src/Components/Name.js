import React from "react"
const Name = () => {
    const [namesArray, setNamesArray] = React.useState([""])
    
    // const namesElements = namesArray.map((name, i) => <p key={i}>{name}</p>)
    const namesElements = namesArray.map((name, i) => {
        if (typeof name === 'string') return (<p key={i}>{name}</p>)
        if (typeof name === 'object') return (<p key={i}>{name.firstName + ' ' + name.lastName}</p>)
})
    
  

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: ""
    })

    const handleChange = (event) => {
        const {name, value, type} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
        return name
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setNamesArray(prevName => {
            return [...prevName, formData]
        })
    }
    
    return (
        <div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <label><h2>Enter Your Name Here!</h2></label>
                    <input 
                        type="text" 
                        placeholder="First Name"
                        className="form--input"
                        name="firstName"
                        onChange={handleChange}
                        value={formData.firstName}
                        />
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        className="form--input"
                        name="lastName"
                        onChange={handleChange}
                        value={formData.lastName}
                        />
                    <button className="form--submit">Submit</button>
                </form>
                <br />
                <div className="list">
                    <label><h1>Current Names List:</h1></label>
                    <h2>{namesElements}</h2>
                </div>
            </div>
        </div>
    )
}


export default Name