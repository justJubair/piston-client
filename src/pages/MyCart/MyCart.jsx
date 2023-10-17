

const MyCart = () => {
    const handleSubmit =e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const brand = {
            img, name
        }
        fetch("http://localhost:5000/brands",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(brand)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" className="border" type="text" />
        <br />
        <input name="img" className="border" type="text" />
        <input  type="submit" value="submit" />
      </form>
    </div>
  )
}

export default MyCart
