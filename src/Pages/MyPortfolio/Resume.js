import React from 'react';
import './Resume.css'
import profileImg from '../../assets/portFolioImg/profile (1).png'

const Resume = () => {
    return (
        <>
           <div className="container">
    <div className="left-side">
       <div className="profile_text">
        <div className="imgBx">
            <img src={profileImg} alt="" />
        </div>
        <h2>Rahat Hosen <br /><span>MERN Stack Developer</span></h2>
       </div>
       <div className="contact_info">
         <h3 className="title">Contact info</h3>
         <ul>
            <li>
                <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                <span className="text">+880 01790418248</span>
            </li>
            <li>
                <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                <span className="text"><small>snrahat.stud4143@gmail.com</small></span>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/rahat-hosen-74a9b7203/">
                    <span className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                <span className="text">linkedin </span>
                </a>  
               
            </li>
            <li>
                <a href="https://github.com/Rahat-hosen4mj">
                    <span className="icon"><i className="fa fa-github" aria-hidden="true"></i></span>
                <span className="text">GitHub</span>
                </a>
            </li>
            <li>
                <span className="icon"><i className="fa fa-globe" aria-hidden="true"></i></span>
                <span className="text">mirpur_12/Dhaka</span>
            </li>
         </ul>
       </div> 
       <div className="contact_info education">
         <h3 className="title">Education</h3>
         <ul>
           <li>
            <h5>2018 - Present</h5>
            <h4>Bachelor Degree in CSE</h4>
            <h4>Daffodil Institute of IT</h4>
           </li>
           <li>
            <h5>2016 - 2018</h5>
            <h4>HSC</h4>
            <h4>Mahilara Degree College</h4>
           </li>
           <li>
            <h5>2014 - 2016</h5>
            <h4>SSC</h4>
            <h4>Dhamura High School</h4>
           </li>
         </ul>
       </div> 
       
       <div className="contact_info language">
         <h3 className="title">Language</h3>
         <ul>
            <li>
                <span className="text">Native Bangla</span>
                <span className="percentage">
                    <div style={{width: "95%"}}></div>
                </span>
            </li>
            <li>
                <span className="text">English</span>
                <span className="percentage">
                    <div style={{width: "70%"}}></div>
                </span>
            </li>
            <li>
                <span className="text">Hindi</span>
                <span className="percentage">
                    <div style={{width: "55%"}}></div>
                </span>
            </li>
         </ul>
       </div> 
    </div>
    <div className="right-side">
        <div className="about">
            <h2 className="title2">Profile</h2>
            <p>I'm a 22 years old boy with a passion for technology, Reading books, and music that hails from Bangladesh. I can speak English and bengali fluently, and I have some rudimentary knowledge of hindi. <br /><br />

                I have no professional experience so far If you have any interesting projects that involve my skills, feel free to contact me!</p>
        </div>
        <div className="about">
            <h2 className="title2">Projects</h2>
            <div className="box">
                <div className="year_company">
                    <h5>Full Stack Project -</h5>
                    <h5>(July 2022 - August 2022)</h5>
                </div>
                <div className="text">
                    <h4>Doctor-Appointment</h4>
                    <p>It's service appointment, service provider project people will take appointment by date of
                        doctors then they can manage their service date and also select doctor to get an
                        appointment</p>
                        <p><b>More Info : </b> <span><a href="https://doctor-portal-c49a0.web.app/">Live Site</a></span> || <span><a href="https://github.com/Rahat-hosen4mj/doctor-server-side">Server Code</a></span> || <span><a href="https://github.com/Rahat-hosen4mj/doctor-portal-client">Code Link Client</a></span> </p>
                </div>
            </div>
            <div className="box">
                <div className="year_company">
                    <h5>Full Stack <br /> ECommerce Project </h5>
                    <h5>(July 2022 - Present)</h5>
                </div>
                <div className="text">
                    <h4>Purnoboti-Computer-World</h4>
                    <p>It's an E-commerce based website. It provides users to order products and need to pay and then user payment
                        will allow successful users to Delete their order and also they can give a review and see their order status.
                        .</p>
                        <p><b>More Info : </b> <span><a href="https://purnoboti-computers-world.web.app/">Live Site</a></span> || <span><a href="https://github.com/Rahat-hosen4mj/computers-world-server">Server Code</a></span> || <span><a href="https://github.com/Rahat-hosen4mj/doctor-portal-client">Code Link Client</a></span> </p>
                </div>
            </div>
            <div className="box">
                <div className="year_company">
                    <h5>Full Stack <br /> WareHouse Project </h5>
                    <h5>(Jun 2022 - Present)</h5>
                </div>
                <div className="text">
                    <h4>Purnoboti-Book-Stock</h4>
                    <p>It's a book Warehouse project. Users can add a book on this Website. He can also manage
                        this collection of books . Also can deliver the book.
                        </p>
                        <p><b>More Info : </b> <span><a href="https://purnoboti-book-stock.web.app/">Live Site</a></span> || <span><a href="https://github.com/Rahat-hosen4mj/book-stock-server">Server Code</a></span> || <span><a href="https://github.com/Rahat-hosen4mj/purnoboti-book-stock">Code Link Client</a></span> </p>
                </div>
            </div>
        </div>
        <div className="skills">
            <h2 className="title2">TECHNICAL SKILLS</h2>
            <div style={{display: "flex"}}>
                <h4 className="title2">Experience:</h4>
                <span style={{marginLeft: "9px" , fontSize: "14px"}}> React, Javascript, ES6, Express.js, Bootstrap 4/5, DaisyUI, Tailwind-CSS, HTML5, CSS3,
                    jQuery, NoSQL.
                </span>
            </div>
            <div style={{display: "flex", margin: "16px 0"}}>
                <h4 className="title2">Familiar:</h4>
                <span style={{marginLeft: "9px" , fontSize: "14px"}}> React, JavaScript, ES6, Node.js, Express.js, MongoDB, Mongoose, Firebase, Bootstrap
                    4/5, React-hook-form, Tailwind-CSS CSS3.
                </span>
            </div>
            <div style={{display: "flex"}}>
                <h4 className="title2">Tools:</h4>
                <span style={{marginLeft: "9px" , fontSize: "14px"}}>  Git, GitHub, Npm, Yarn, VS Code, Chrome dev tool, Heroku, Netlify, Figma, Adobe XD, Postman,
                    MongoDB Compass
                </span>
            </div>
           
           
        </div>
        <div className="about interest">
            <h2 className="interest">Interest</h2>
          
            <ul>
                <li><i className="fa fa-gamepad" aria-hidden="true"></i>Gaming</li>
                <li><i className="fa fa-microphone" aria-hidden="true"></i>Singing</li>
                <li><i className="fa fa-book" aria-hidden="true"></i>Reading</li>
                <li><i className="fa fa-cutlery" aria-hidden="true"></i>Cooking</li>
            </ul>
        </div>
       </div>
       </div> 
    </>
    );
};

export default Resume;