import React from "react";
import Footer from "./Footer";
function Home(props) {
  return (
    <>
      {/* <div
        id="carouselExampleFade"
        className="mt-5 carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/home-top-bg2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Nutrition</h3>
              <p className="lead">
                Learn how crucial your puppy diet is in helping them grow into
                healthy adults.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/home-top-bg3.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Grooming</h3>
              <p className="lead">
                Upgrade your pet's visit with our seasonal goodies
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/home-top-bg4.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Dog Training</h3>
              <p className="lead">
                Puppy or Beginner Training thru 4/2, terms apply
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div>
        <div className="card text-bg-dark border-0 rounded-0">
          <img src="./images/home-top-bg2.jpg" className="card-img rounded-0 border-0" alt="..." />
          <div className="card-img-overlay mt-5 rounded-0">
            <h5 className="text-light display-2 my-3 p-5 fw-normal text-start">Pet Stays</h5>
            <div className="d-none d-sm-none d-md-none d-lg-block">
              <p className=" text-light display-5 fw-light px-5 pt-3 text-start">We'll <span className="text-danger">care</span> for your pets </p>
              <p className=" text-light display-5 fw-light px-5 text-start">the same way you <span className="text-danger">do.</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container marketing my-5 py-5">
        <div className="row text-center my-5">
          <div className="col-lg-4">
            <img
              className="rounded-circle mb-5"
              src="./images/200-4.jpg"
              alt=""
              srcset=""
              style={{ height: "200px" }}
            />

            <h2 className="my-2 display-6 text-danger">Nutrition</h2>
            <p>
              Learn how crucial your puppy diet is in helping them grow into
              healthy adults.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle mb-5"
              src="./images/200-5.jpg"
              alt=""
              srcset=""
              style={{ height: "200px" }}
            />
            <h2 className="my-2 display-6 text-danger">Grooming</h2>
            <p>Upgrade your pet's visit with our seasonal goodies</p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle mb-5 "
              src="./images/200-6.jpg"
              alt=""
              srcset=""
              style={{ height: "200px" }}
            />

            <h2 className="my-2 display-6 text-danger">Dog Training</h2>
            <p>Puppy or Beginner Training thru 4/2, terms apply</p>
          </div>
        </div>
      </div>

      <div className="container px-5 d-flex flex-column justify-content-center">
        <hr className="featurette-divider mt-5 py-2" />

        <div className="row featurette text-start">
          <div className="col-md-7 my-3">
            <h2 className="display-6">
              Doggie Day <span className="text-danger">Camp</span>
            </h2>
            <p className="lead">
              Introducing the ultimate experience! Doggie Day Camp offers a
              great new way to play. Open 7 days a week with full-day and
              half-day playtime sessions of scheduled activities. We also offer
              special savings packages and themed playdates !
            </p>
          </div>
          <div className="col-md-5 my-3">
            <img
              src="./images/500-1.jpg"
              alt=""
              srcset=""
              style={{ width: "30vw" }}
            />
          </div>
        </div>

        <hr className="featurette-divider mt-5 py-2" />

        <div className="row featurette text-start">
          <div className="col-md-7 my-3">
            <img
              src="./images/500-2.jpg"
              alt=""
              srcset=""
              style={{ width: "30vw" }}
            />
          </div>
          <div className="col-md-5 my-3">
            <h2 className="display-6">
              Dog <span className="text-danger">Training</span>
            </h2>
            <p className="lead">
              Training is all about learning to enjoy each other and working to
              reach a goal—whether its building confidence, learning a new sport
              or trick, or teaching a dog to navigate a human- centric world.
            </p>
          </div>
        </div>

        <hr className="featurette-divider mt-5 py-2" />

        <div className="row featurette text-start mb-5">
          <div className="col-md-7 my-3">
            <h2 className="display-6">
              Pet Stays Safety & Wellness{" "}
              <span className="text-danger">Standards</span>
            </h2>
            <p className="lead">
              <span className="text-danger"> Advanced Cleaning Measures.</span>{" "}
              We sanitize all rooms, bowls, toys, play equipment and common
              areas of the PetsHotel daily and perform additional cleaning
              throughout the day.{" "}
            </p>
          </div>
          <div className="col-md-5 my-3">
            <img
              src="./images/500-3.jpg"
              alt=""
              srcset=""
              style={{ width: "30vw" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="card text-bg-dark border-0 rounded-0">
          <img src="./images/home-top-bg7.jpg" className="card-img rounded-0 border-0" alt="..." />
          <div className="card-img-overlay mt-5 rounded-0">
            <h5 className="text-dark display-2 my-3 p-5 fw-normal text-start">Pet Stays</h5>
            <div className="d-none d-sm-none d-md-none d-lg-none d-xl-block">
              <p className=" text-dark display-5 fw-light px-5 pt-3 text-start">Our pets' lives revolve <span className="text-danger">around us.</span> Let's give</p>
              <p className=" text-dark display-5 fw-light px-5 text-start">back to them as much as <span className="text-danger"> they give us.</span></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
