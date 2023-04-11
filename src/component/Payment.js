import React from "react";
function Payment() {
  return (
    <div>
      <div className="container mt-5 p-5">
        <form className="" novalidate="">
          <h4 className="mb-5 display-3 text-start">Payment</h4>

          <div className="my-3 text-start">
            <div className="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                checked=""
                required=""
              />
              <label className="form-check-label" for="credit">
                Credit card
              </label>
            </div>
            <div className="form-check">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required=""
              />
              <label className="form-check-label" for="debit">
                Debit card
              </label>
            </div>
            <div className="form-check">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required=""
              />
              <label className="form-check-label" for="paypal">
                PayPal
              </label>
            </div>
          </div>

          <div className="row gy-3 text-start">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small className="text-muted">
                Full name as displayed on card
              </small>
              <div className="invalid-feedback">Name on card is required</div>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">
                Credit card number
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">
                Expiration
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>

          <div className="my-5"></div>
          <div className="text-center mt-5 text-start">
            <button className="w-100 btn btn-primary" type="submit">
              PAY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
