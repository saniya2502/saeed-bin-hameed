import React from "react";

const ProjectMain = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Our Projects</h1>
        </div>

        <div className="row g-4 portfolio-container">
          <div
            className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/project-1.jpg"
                  alt="Saeed Bin Hameed"
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/project-2.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div
                className="border border-5 border-light border-top-0 p-4"
                style={{ height: "120px" }}
              >
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">TURKEY ALHARBY.UBHOUR -JEDDAH</h5>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/project-5.jpg"
                  alt="Saeed Bin Hameed"
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/project-6.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div
                className="border border-5 border-light border-top-0 p-4"
                style={{ height: "120px" }}
              >
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">AL SUBAIE VILLA-RIYADH</h5>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/project-9.jpg"
                  alt="Saeed Bin Hameed"
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/project-12.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div
                className="border border-5 border-light border-top-0 p-4"
                style={{ height: "120px" }}
              >
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">
                  SAEED AL GHREB VILLA <br />AMER FAWAZ-JEDDAH
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/project-13.jpg"
                  alt="Saeed Bin Hameed"
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/project-14.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div
                className="border border-5 border-light border-top-0 p-4"
                style={{ height: "120px" }}
              >
                <p className="text-primary fw-medium mb-2"></p>
                <h5 className="lh-base mb-0">TAYBA MARKET AL BAWADI-JEDDAH</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
