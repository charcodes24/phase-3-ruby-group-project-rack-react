import React, { useState } from "react";

function AddPark({ addPark }) {
    const [formData, setFormData] = useState({
        name: "",
        image_url: ""
    })

    function handleInput(e) {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const configObj = {
          method: "POST", 
          headers: {
            "content-type": "application/json"
          }, 
          body: JSON.stringify({
            name: formData.name, 
            image_url: formData.image_url,
          })
        }
        fetch('http://localhost:9393/national_parks', configObj)
          .then(res => res.json())
          .then(newPark => {
              console.log(newPark)
              addPark(newPark)})
      }

    console.log(formData)
    return (
        <div>
            <h2>Add National Park</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} type="text" name="name" value={formData.name} placeholder="Enter name..."/>
                <input onChange={handleInput} type="text" name="image_url" value={formData.image_url} placeholder="Add image..."/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddPark;