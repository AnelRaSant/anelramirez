import React, { Component } from 'react'
import './ContactForm.css'

function ContactForm (){
    return (
<section className="contact" >
        <div className="containers">
                <div className="row text-center justify-content-center">
                  <div className="col-12 col-md-9 col-lg-7">
                    <p className="text-h3">I'm excited to meet you! Feel free to reach out.</p>
            
            <p className="text-h1">anel.rmrz.stgo7@gmail.com</p>
          
               {/* RIBBON AND FB BUTTON          */}
                    <a href="https://www.facebook.com/AnelRamirezSant/" className="btn btn-danger">| My FB Page |</a>
                    <a href="https://www.linkedin.com/in/anel-ramirez-santiago-" className="btn btn-danger">| My LinkedIn |</a>
                    <a href="https://github.com/AnelRaSant" className="btn btn-danger">| My GitHub |</a>

               {/* RIBBON          */}
               <br></br>
               <br></br>
               <p>© 2020. ANEL RAMÍREZ SANTIAGO. All Rights Reserved.</p>
              
            

          </div>
          
        </div>
        </div>
      </section>
      
      
    )
}
export default ContactForm