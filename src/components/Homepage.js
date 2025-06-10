import React from 'react';
import '../Homepage.css';
import home_banner_vector1 from '../assets/Home/home-banner-vector1.webp';
import fold1 from '../assets/Home/fold-1.png';
import fold2 from '../assets/Home/fold-2.webp';
import fold3 from '../assets/Home/fold-3.png';
import fold4 from '../assets/Home/fold-4.webp';
import fold5 from '../assets/Home/fold-5.webp';
import web1 from '../assets/Home/web1.gif';
import web2 from '../assets/Home/web2.png';
import web3 from '../assets/Home/web3.png';
import web4 from '../assets/Home/web4.png';
import edutrek_par from '../assets/Home/edutrek-par.jpg';



const Homepage = () => {
  return (
    <div className='landingpage-cnt'>

      {/* Fold 1: Hero */}
      <div className='bgsection1'>
        <section className="container my-5 text-center">
          <div className='row'>
            <div className='col-lg-7 col-sm-12'>
              <span className='hero-title'> AI Powered EduTrack365 </span>
              <p>All-in-one digital platform for schools, colleges, and universities.
                It streamlines everything from admissions to placements with smart, AI-powered tools for students, parents, and educators.</p>
            </div>
            <div className='col-lg-5 col-sm-12'>
              <div className='header-banner-vector1'>
                <img src={home_banner_vector1} alt="EduTrack Hero" height={300} className="img-fluid rounded" />
              </div>
            </div>
          </div>


        </section>
      </div>
<div className='edutrack-wrapper'>
   <section className="media-and-text">
    <div className="media">
      <img src={edutrek_par} alt="" />
    </div>
    <div className="text">
    <div className="row mb-5">
      <div className="col-md-12 text-center">
        <h2 className="fw-bold">
          Manage Your Academic Journey Digitally — From Admission to Career
        </h2>
        <p className="text-muted">
          Empower your institution with EduTrack365’s advanced features that combine reliability, automation, and real-time intelligence.
        </p>
      </div>
    </div>

    <div className="row g-4">
      {/* Card 1 - Dedicated Server */}
      <div className="col-md-12">
        <div className="card h-100 shadow-sm border-0">
          <img src={web1} className="card-img-top img-fluid" alt="Dedicated Servers" style={{ height: "330px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title fw-semibold">Dedicated & Secure Hosting</h5>
            <p className="card-text text-muted">
              Enjoy uninterrupted access and top-tier performance with our dedicated server infrastructure.
              Ensure secure, scalable, and private data storage tailored for your institution’s digital academic lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 - AI Enabled */}
      <div className="col-md-12">
        <div className="card h-100 shadow-sm border-0">
          <img src={web2} className="card-img-top img-fluid" alt="AI Enabled" style={{ height: "330px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title fw-semibold">AI-Enabled Insights</h5>
            <p className="card-text text-muted">
              Harness artificial intelligence to monitor student performance trends, identify risks early, and enable proactive academic support.
              Drive smarter decisions through predictive analytics and auto-generated insights.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 - Automation Rules */}
      <div className="col-md-12">
        <div className="card h-100 shadow-sm border-0">
          <img src={web3} className="card-img-top img-fluid" alt="Automation Rules" style={{ height: "330px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title fw-semibold">Smart Automation Rules</h5>
            <p className="card-text text-muted">
              Reduce manual effort with customizable workflows.
              Automate tasks like attendance alerts, performance notifications, and report card generation with minimal setup.
            </p>
          </div>
        </div>
      </div>

      {/* Card 4 - Real-Time Sync */}
      <div className="col-md-12">
        <div className="card h-100 shadow-sm border-0">
          <img src={web4} className="card-img-top img-fluid" alt="Real-Time Sync" style={{ height: "330px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title fw-semibold">Real-Time Data Sync</h5>
            <p className="card-text text-muted">
              Keep every user — student, teacher, parent, and admin — in sync with real-time data updates.
              Changes in attendance, grades, and schedules reflect instantly across platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  
</div>




      
   


      {/* Fold 1 - Pre-Admission to Graduation */}
      <section className="parallax-section zigzag left d-flex align-items-center">
        <div className="row">
          <div className="col-lg-8 col-sm-12 d-flex align-items-center">
        <div className="text-content">
                      <h2>From Pre-Admission to Graduation</h2>
          <p> EduTrack365 streamlines the complete student journey.
From registration to academic profiling,
it ensures every step is digitized and efficient.
Track student performance in real time with ease.
Seamlessly manage final assessments and certifications.</p>
        </div>
        </div>
        <div className="col-lg-4  col-sm-12">
          
        <img src={fold1} alt="Lifecycle" className="col-sm-12 image-box-shadow" />
          </div>
        </div>
      </section>

      {/* Fold 2 - Parent & Student Dashboard */}
<section className="parallax-section zigzag right">
  <div className="row align-items-center">
    <div className="col-lg-4 col-sm-12">
      <img src={fold2} alt="Parent Dashboard" className="img-fluid image-box-shadow theme-bg" />
    </div>
    <div className="col-lg-8 col-sm-12 d-flex align-items-center">
      <div className="text-content">
        <h2>Real-Time Access for Parents & Students</h2>
        <p>
          Track attendance, test results, and performance insights. EduTrack365 offers secure logins
          for parents and students to stay aligned with academic progress.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Fold 3 - AI-Based Smart Alerts */}
<section className="parallax-section zigzag left">
  <div className="row align-items-center">
    <div className="col-lg-8 col-sm-12 d-flex align-items-center">
      <div className="text-content">
        <h2>Smart Alerts Powered by AI</h2>
        <p>
          Our smart alert system keeps parents instantly informed.<br />
          Receive real-time updates on irregular attendance.<br />
          Get notified about low academic performance.<br />
          Stay aware of upcoming exams and school events.<br />
          Be informed about placement drives and deadlines.<br />
          Alerts are delivered directly via WhatsApp or SMS.
        </p>
      </div>
    </div>
    <div className="col-lg-4 col-sm-12">
      <img src={fold3} alt="AI Alerts" className="img-fluid image-box-shadow" />
    </div>
  </div>
</section>

{/* Fold 4 - Placement Connect */}
<section className="parallax-section zigzag right">
  <div className="row align-items-center">
    <div className="col-lg-4 col-sm-12">
      <img src={fold4} alt="Placements" className="img-fluid image-box-shadow" />
    </div>
    <div className="col-lg-8 col-sm-12 d-flex align-items-center">
      <div className="text-content">
        <h2>Placement Connect</h2>
        <p>
          Empower institutions with a dedicated placement management system.<br />
          Centralize all student resume data in one secure place.<br />
          Allow students to create and update professional profiles.<br />
          Seamlessly manage job openings and company listings.<br />
          Schedule interviews with real-time coordination tools.<br />
          Notify students about interview slots and company updates.<br />
          Track attendance and participation during recruitment drives.<br />
          Enable recruiters to share hiring feedback directly through the portal.<br />
          Generate insightful reports on placement performance and trends.<br />
          Ensure transparency for students, faculty, and hiring partners.<br />
          All fully integrated within the institution’s existing portal.
        </p>
      </div>
    </div>
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
