import React from 'react';
import '../Homepage.css';
import home_banner_vector1 from '../assets/Home/home-banner-vector1.webp';
import fold1 from '../assets/Home/fold-1.png';
import fold2 from '../assets/Home/fold-2.webp';
import fold3 from '../assets/Home/fold-3.png';
import fold4 from '../assets/Home/fold-4.webp';
import fold5 from '../assets/Home/fold-5.webp';
import web1 from '../assets/Home/web1.png';
import web2 from '../assets/Home/web2.png';
import web3 from '../assets/Home/web3.png';
import web4 from '../assets/Home/web4.png';



const Homepage = () => {
  return (
    <div className='landingpage-cnt'>

      {/* Fold 1: Hero */}
      <div className='bgsection1'>
        <section className="container my-5 text-center">
          <div className='row'>
            <div className='col-7'>
              <h1 className='hero-title'>AI Powered EduTrack<sup><small>365</small></sup></h1>
              <p>EduTrack365 is an all-in-one digital platform for schools, colleges, and universities.
                It streamlines everything from admissions to placements with smart, AI-powered tools for students, parents, and educators.</p>
            </div>
            <div className='col-5'>
              <div className='header-banner-vector1'>
                <img src={home_banner_vector1} alt="EduTrack Hero" height={300} className="img-fluid rounded" />
              </div>
            </div>
          </div>


        </section>
      </div>
      <section className="fold-init">
        <div className='row mt-5'>
          <div className="col-md-8 offset-md-2 p-4 text-center">
            <div className="text-center">
              <h2>Manage Your Academic Journey Digitally from admission to career with dedicated server</h2>
            </div>
          </div>


          <div className='col-6 gap text-center'>
            <img src={web1} alt="Lifecycle" className="" style={{ height: "330px" }} />
          </div>
          <div className='col-6 gap text-center'>
            <img src={web2} alt="Lifecycle" className="" style={{ height: "330px" }} />
          </div>
          <div className='col-6 gap text-center'>
            <img src={web3} alt="Lifecycle" className="" style={{ height: "330px" }} />
          </div>
          <div className='col-6 gap text-center'>
            <img src={web4} alt="Lifecycle" className="" style={{ height: "330px" }} />
          </div>
        </div>

      </section>

      {/* Fold 1 - Pre-Admission to Graduation */}
      <section className="parallax-section zigzag left ">
        <div className="text-content">
          <h2>From Pre-Admission to Graduation</h2>
          <p> EduTrack365 streamlines the complete student journey.
From registration to academic profiling,
it ensures every step is digitized and efficient.
Track student performance in real time with ease.
Seamlessly manage final assessments and certifications.</p>
        </div>
        <img src={fold1} alt="Lifecycle" className="image-box-shadow" />
      </section>

      {/* Fold 2 - Parent & Student Dashboard */}
      <section className="parallax-section zigzag right">
        <img src={fold2} alt="Parent Dashboard" className="image-box-shadow theme-bg" />
        <div className="text-content">
          <h2>Real-Time Access for Parents & Students</h2>
          <p>Track attendance, test results, and performance insights. EduTrack365 offers secure logins for parents and students to stay aligned with academic progress.</p>
        </div>
      </section>

      {/* Fold 3 - AI-Based Smart Alerts */}
      <section className="parallax-section zigzag left">
        <div className="text-content">
          <h2>Smart Alerts Powered by AI</h2>
          <p>
            Our smart alert system keeps parents instantly informed.
Receive real-time updates on irregular attendance.
Get notified about low academic performance.
Stay aware of upcoming exams and school events.
Be informed about placement drives and deadlines.
Alerts are delivered directly via WhatsApp or SMS.
          </p>
        </div>
        <img src={fold3} alt="AI Alerts" className="image-box-shadow" />
      </section>

      {/* Fold 4 - Placement Connect */}
      <section className="parallax-section zigzag right">
        <img src={fold4} alt="Placements" className="image-box-shadow" />
        <div className="text-content">
          <h2>Placement Connect</h2>
          <p>
           Empower institutions with a dedicated placement management system.
Centralize all student resume data in one secure place.
Allow students to create and update professional profiles.
Seamlessly manage job openings and company listings.
Schedule interviews with real-time coordination tools.
Notify students about interview slots and company updates.
Track attendance and participation during recruitment drives.
Enable recruiters to share hiring feedback directly through the portal.
Generate insightful reports on placement performance and trends.
Ensure transparency for students, faculty, and hiring partners.
All fully integrated within the institution’s existing portal.
            </p>
        </div>
      </section>

      {/* Fold 5 - One Portal, Limitless Possibilities */}
      <section className="parallax-section center theme-bg">
        <div className="content-box center-text">
          <h2 className='text-white'>One Portal, Limitless Possibilities</h2>
          <p>Customizable for schools, colleges, and universities with NAAC/NBA-ready reporting, real-time data analytics, multilingual support, and seamless mobile access.</p>
          <img src={fold5} alt="Unified Portal" className="hero-image mt-4 theme-bg" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
