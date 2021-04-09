const Contact = () =>{
  return(
    <>
      <div className="text-center">
        <h1>Contact</h1>
        <div className="row">
      
      <div className="container-md col-6 align-self-center">
        <div className="mb-3">
          <label htmlfor="exampleFormControlInput1" className="form-label">Name:</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
  </div>
          <div className="mb-3">
            <label htmlfor="exampleFormControlInput1" className="form-label">Email address:</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
            <div className="mb-3">
              <label htmlfor="exampleFormControlTextarea1" className="form-label">Write Message:</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <br/>
              <button type="button" className="btn btn-primary">Sumbit</button>
            </div>
          </div>
          </div>
          </div>
    </>
  )
}

export default Contact