import React from "react"
const Name = () => {
    const [namesArray, setNamesArray] = React.useState([""])
    
    const namesElements = namesArray.map(name => <p key={name}>{name}</p>)
    
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
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setNamesArray(prevName => {
            return [...prevName, prevName]
        })
        return(
            <div>
                <h1>{formData.name}</h1>
            </div>
        )
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="name" 
                    placeholder="First Name"
                    className="form--input"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    />
                 <input 
                    type="name" 
                    placeholder="Last Name"
                    className="form--input"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    />
                <div>
                 <button className="form--submit" onClick={handleSubmit}>Submit</button>
                 <br />
                {namesElements}
                </div>
            </form>
        </div>
    )
}


export default Name