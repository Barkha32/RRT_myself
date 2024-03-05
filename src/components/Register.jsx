import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate();
  return (
    <div className="row">
      <div className="col-2"></div>
      <form className="my-5 p-3 col-8 bg-light">
      <div className="form-group ">
          <label>Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group ">
          <label>Age</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group ">
          <label>Email address</label>
          <input type="email" className="form-control" required />
        </div>
        
        <div className="form-group mt-3">
          <label>Password</label>
          <input type="password" className="form-control" required />
        </div>

        <div className="row mt-3">
          <button
            type="submit"
            className="btn btn-primary m-2 col-5 justify-content-right"
          >
            Register Me!
          </button>
          <button type="submit" className="btn btn-primary m-2 col-5"
           onClick={()=>navigate("/RRT_myself/")}>
            Cancel
          </button>
        </div>
      </form>
      <div className="col-2"></div>
    </div>
  );
}
