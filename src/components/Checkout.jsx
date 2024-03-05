import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="my-5 p-2 col-8 bg-light text-center ">
        <h4 className="text-bold mb-2">THANK YOU!</h4>
        <p>Your Order has been placed. we will contact you soon.</p>
        <button
          type="submit"
          className="btn btn-primary m-2 col-5"
          onClick={() => navigate("/RRT_myself/")}
        >
          Go Back
        </button>
      </div>

      <div className="col-2"></div>
    </div>
  );
}
