import React from "react";
import { toast } from "react-toastify";
import config from "../core/config/config";
import { FormsOperations, ValidateAllFields } from "../core/interactiveforms";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";

function Contact() {
  const SaveClickHanlder = () => {
    const { Email, FullName, Phone, Message } = document.forms[0];
    const data = {
      Email: Email.value,
      FullName: FullName.value,
      Mobile: Phone.value,
      Message: Message.value,
    };
    if (!ValidateAllFields(data)) {
      return;
    }

    service
      .post(UrlConstant.ContactUs, data)
      .then((response) => {
        if (response.status === 200) {
          FormsOperations.clearForm(document.forms[0]);
          toast.success(
            "Your message sent. We will get back to you on this.",
            config.ToastConfig
          );
        } else {
          toast.error("Error occured. Please try again.", config.ToastConfig);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error occured. Please try again.", config.ToastConfig);
      });
  };

  return (
    <div>
      <div className="container mt-5 py-5 text-start">
        <form className="" novalidate="">
          <h4 className="mb-5 display-5 mb-5">
            Contact <span className="text-danger">Us</span>
          </h4>
          <hr />

          <div className="row gy-3  my-5">
            <div className="col-md-7">
              <label htmlFor="contact-name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="contact-name"
                placeholder=""
                name="FullName"
                required
              />

              <div className="invalid-feedback">Name is required</div>
            </div>

            <div className="col-md-7">
              <label htmlFor="c-email" className="form-label">
                Email-Address
              </label>
              <input
                type="email"
                className="form-control"
                id="c-email"
                name="Email"
                placeholder=""
                required
              />
              <div className="invalid-feedback">Email-Address is required</div>
            </div>

            <div className="col-md-7">
              <label htmlFor="c-phone" className="form-label">
                Phone No.
              </label>
              <input
                type="text"
                className="form-control"
                id="c-phone"
                placeholder=""
                name="Phone"
                required
              />
              <div className="invalid-feedback">Phone number. is required</div>
            </div>

            <div className="col-md-7">
              <label htmlFor="c-message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="Message"
              ></textarea>
              <small className="text-muted">Ask about your queries</small>
              <div className="invalid-feedback"></div>
            </div>
          </div>

          <div className="my-4">
            <button
              className="btn btn-primary"
              type="button"
              onClick={SaveClickHanlder}
            >
              Submit
            </button>
            &nbsp;&nbsp;
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                window.location.reload();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
