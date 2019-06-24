import React, { Component } from "react"
import '../css/Footer.css'
// import "/Users/hp/Desktop/frontendexam/src/css/Footer.css"
class Footer extends Component {
    render() {
      return (
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-sm-4">
              <div className="mb-2">
                <strong>About</strong>
              </div>
              <p>
                Created in 2019 in Bogor , We only sell swim tools for begginer and intermediate swimmer
              </p>
            </div>
            <div className="col-sm-2">
              <div className="mb-2">
                <strong>Address</strong>
              </div>
              <p>Bogor Nirwana Residence F 35 </p>
            </div>
            <div className="col-sm-2">
              <div className="mb-2">
                <strong>Contact</strong>
              </div>
              <p>Email us</p>
              <p>jojgb96@gmail.com</p>
              <p>02518211419</p>
            </div>
            <div className="col-sm-2">
              <div className="mb-2">
                <strong>Follow us</strong>
              </div>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Footer;