import Link from 'next/link'
// import Layout from '../components/Layout'

const AboutPage = () => (
  // <Layout title="About | Next.js + TypeScript Example">
      <div>
      <header className="py-sm-3 pt-3 pb-2" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div id="logo">
            <h1>
              <a href="index.html">
                <span className="fa fa-bars"></span>{' '}
                <span style={{ color: 'black' }}>Uber</span>{' '}
                <span style={{ color: 'green' }}>Eats </span>
              </a>
            </h1>
          </div>
          {/* nav */}
          <nav className="">
            <div className="ml-2" style={{ textAlign: 'right' }}>
              <a className="btn btn-danger" style={{ backgroundColor: '#EF6328' }} href="#">
                Login
              </a>

              <a className="btn btn-danger" style={{ backgroundColor: '#EF6328' }} href="#">
                Register
              </a>
            </div>
          </nav>
          <div className="clear"></div>
          {/* //nav */}
        </div>
      </header>
      {/* //header */}
      <div className="banner" id="home" style={{ backgroundImage: "url('images/banner.png')" }}>
        <div className="layer">
          <div className="container">
            <div className="banner-text-agile">
              <div className="row">
                <div className="col-lg-6 p-0">
                  {/* banner slider*/}
                  <div className="csslider infinity" id="slider1">
                    <input type="radio" name="slides" checked={true} id="slides_1" />
                    <input type="radio" name="slides" id="slides_2" />
                    <input type="radio" name="slides" id="slides_3" />
                    <ul className="banner_slide_bg">
                      <li>
                        <div className="container-fluid">
                          <div className="w3ls_banner_txt">
                            <h4 className="b-w3ltxt text-capitalize " style={{ fontSize: '40px' }}>
                              Order food to your door
                            </h4>
                            <br />
                            <form className="d-flex" role="search">
                              <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Enter Your Delivery Address"
                                aria-label="Search"
                              />
                              <a className="btn btn-danger" style={{ backgroundColor: '#EF6328' }} href="#">
                                Get Started
                              </a>
                            </form>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  {/* //banner slider*/}
                </div>
                <div className="col-lg-6 col-md-8 mt-lg-0 mt-5">
                  <img src="images/banner.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //banner */}
      <section className="about py-5" style={{ backgroundColor: 'whitesmoke' }}>
        <div className="container py-md-3">
          <h5 className="heading">Eat Good Feel Good</h5>
          <br />
          <div className="row">
            <div className="col-lg-4">
              <img src="images/1.jpg" alt="" />
              <br />
              <br />
              <h4 className="heading">Feed Your Employees</h4>
              <p>Create a business account</p>
              <br />
            </div>
            <div className="col-lg-4">
              <img src="images/2.jpg" alt="" />
              <br />
              <br />
              <h4 className="heading">Your restaurant, delivered</h4>
              <p>Add your restaurant</p>
              <br />
            </div>
            <div className="col-lg-4">
              <img src="images/3.jpg" alt="" />
              <br />
              <br />
              <h4 className="heading">Deliver with Uber Eats</h4>
              <p>Sign up to deliver</p>
              <br />
            </div>
          </div>
        </div>
      </section>
      <section className="about py-5">
        <div className="container py-md-3">
          <h5 className="heading">Uber Eats is available in these cities</h5>
          <div className="row">
            <div className="col-4">
              <p className="py-3">Australia</p>
              <p className="py-3">Belgium</p>
              <p className="py-3">Canada</p>
              <p className="py-3">Chile</p>
              <p className="py-3">Costa Rica</p>
              <p className="py-3">Dominican Republic</p>
              <p className="py-3">Ecuador</p>
            </div>
            <div className="col-4">
              <p className="py-3">El Salvador</p>
              <p className="py-3">France</p>
              <p className="py-3">Germany</p>
              <p className="py-3">Guatemala</p>
              <p className="py-3">Ireland</p>
              <p className="py-3">Italy</p>
              <p className="py-3">Japan</p>
            </div>
            <div className="col-4">
              <p className="py-3">Kenya</p>
              <p className="py-3">Mexico</p>
              <p className="py-3">Netherlands</p>
              <p className="py-3">New Zealand</p>
              <p className="py-3">Panama</p>
              <p className="py-3">Poland</p>
              <p className="py-3">Portugal</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-5" style={{ backgroundColor: '#EF6328' }}>
        <div className="container-fluid py-sm-3">
          <div className="row footer-grids">
            <div className="col-lg-5 col-sm-6 mb-lg-0 mb-sm-5 mb-4">
              <div className="al fy am b9 dr">
                <div className="al g0 g1">
                  <h3 className="mb-4" style={{ color: 'white' }}>
                    Uber Eats
                  </h3>
                  <br />
                  <br />
                  <br />
                  <div className="d-lg-flex">
                    <a href="#">
                      <img
                        alt="Download on the App Store"
                        role="img"
                        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/783bb4a82e5be29e.svg"
                        loading="lazy"
                        decoding="async"
                        height="40"
                        width="135"
                        className="cr"
                      />
                    </a>
                    <a href="#">
                      <img
                        alt="Get it on Google Play"
                        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/163bdc9b0f1e7c9e.png"
                        loading="lazy"
                        decoding="async"
                        height="40"
                        width="134"
                        className="cr"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-md-0 mb-sm-5 mb-4">
              <h4 className="mb-4" style={{ color: 'white' }}>
                About Us
              </h4>
              <ul>
                <li style={{ color: 'white' }}>Concept</li>
                <li style={{ color: 'white' }} className="phone py-3">
                  Franchise
                </li>
                <li style={{ color: 'white' }}>Business</li>
                <li style={{ color: 'white' }} className="phone py-3">
                  Restaurant signup
                </li>
                <li style={{ color: 'white' }}>For Investors</li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-6 mb-lg-0 mb-sm-5 mb-4">
              <h4 className="mb-4" style={{ color: 'white' }}>
                Get Help
              </h4>
              <ul>
                <li style={{ color: 'white' }}>Read FAQs</li>
                <li style={{ color: 'white' }} className="phone py-3">
                  Restaurants
                </li>
                <li style={{ color: 'white' }}>Specialties</li>
                <li style={{ color: 'white' }} className="phone py-3">
                  Specialties
                </li>
                <li style={{ color: 'white' }}>English</li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-6 mb-lg-0 mb-sm-5 mb-4">
              <h4 className="mb-4" style={{ color: 'white' }}>
                Contact Us
              </h4>
              <ul>
                <li style={{ color: 'white' }}>uber eats Paris 11</li>
                <li className="phone py-3" style={{ color: 'white' }}>
                  69 avenue de la Republique 75011 Paris
                </li>
                <li style={{ color: 'white' }}>0800 111 126</li>
                <li className="phone py-3" style={{ color: 'white' }}>
                  contact@ubereats.com
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <div className="row footer-grids">
            <div className="col"></div>
            <div className="col">
              <i className="fa fa-instagram" style={{ fontSize: '25px', color: 'whitesmoke' }}></i>
            </div>
            <div className="col">
              <i className="fa fa-twitter" style={{ fontSize: '25px', color: 'whitesmoke' }}></i>
            </div>
            <div className="col">
              <i className="fa fa-facebook" style={{ fontSize: '25px', color: 'whitesmoke' }}></i>
            </div>
            <div className="col"></div>
            <div className="col">
              <a href="">
                <p style={{ color: 'white' }}>Privacy</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <p style={{ color: 'white' }}>Terms</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <p style={{ color: 'white' }}>© 2020 Yellow Kitchen</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="move-top text-right">
        <a href="#home" className="move-top">
          <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
        </a>
      </div>
    </div>

  // </Layout>
)

export default AboutPage
