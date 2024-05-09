import React from 'react';


const AboutPage = () => {
  return (
    <>
      
      {/* Page Title */}
      <section>
        <div className="page-title">
		<div className="overlay"></div>
                <div className="row">
                    <div className="col-md-12">
						<div className="block text-center">
							<span className="text-white">About Us</span>
                        	<h1 className="text-capitalize mb-5 text-lg">About Us</h1>
						</div>
                    </div>
                </div>
        </div>
      </section>

      {/* About Page */}
      <section className="section about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title-color">Personal care for your healthy living</h2>
            </div>
            <div className="col-lg-8">
              <p>Personal care is vital for a healthy lifestyle, encompassing hygiene, balanced nutrition, regular exercise, and adequate sleep. These habits boost overall well-being, help prevent illnesses, and improve mental health, ensuring a more fulfilling life.</p>
              <img src="/about/sign.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="fetaure-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="about-block-item mb-5 mb-lg-0">
                <img src="/about/about-1.jpg" alt="" className="img-fluid w-100" />
                <h4 className="mt-3">Healthcare for Kids</h4>
                <p>Nurturing Little Smiles, Ensuring a Healthy Future for Our Tiny Treasures</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
				<div className="about-block-item mb-5 mb-lg-0">
					<img src="/about/about-2.jpg" alt="" class="img-fluid w-100"/>
					<h4 className="mt-3">Medical Counseling</h4>
					<p>Personalized Guidance to Empower Informed Decisions for Optimal Well-being</p>
				</div>
			</div>
            <div className="col-lg-3 col-md-6">
				<div className="about-block-item mb-5 mb-lg-0">
					<img src="/about/about-3.jpg" alt="" class="img-fluid w-100"/>
					<h4 className="mt-3">Modern Equipments</h4>
					<p>State-of-the-Art Facilities, Equipped to Deliver Cutting-Edge Care with Accuracy and Efficiency.</p>
				</div>
			</div>
            <div className="col-lg-3 col-md-6">
				<div className="about-block-item">
					<img src="/about/about-4.jpg" alt="" class="img-fluid w-100"/>
					<h4 className="mt-3">Qualified Doctors</h4>
					<p>Entrusting Your Health to the Skilled Hands of Highly Trained Medical Professionals.A Team of Dedicated Experts, Committed to Delivering Excellence in Patient Care.</p>
				</div>
			</div>
          </div>
        </div>
      </section>
      
      
      <section className="section awards">
	    <div className="container">
		    <div className="row align-items-center">
			    <div className="col-lg-4">
				    <h2 className="title-color">Our Doctors achievements </h2>
				    <div className="divider mt-4 mb-5 mb-lg-0">

                </div>
			</div>
			<div className="col-lg-8">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="/about/3.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="/about/4.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="/about/1.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="/about/2.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="/about/5.png" alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="award-img">
							<img src="/about/6.png" alt="" className="img-fluid"/>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
     </section>

      
    <section className="section team">
	    <div className="container">
		    <div className="row justify-content-center">
			    <div className="col-lg-6">
				    <div className="section-title text-center">
					    <h2 className="mb-4">Meet Our Specialists</h2>
					    <div className="divider mx-auto my-4">

                        </div>
					<p>Discover a World of Expertise: Personalized Care from Our Distinguished Team of Specialists.</p>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="/team/1.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single.html">John Marshal</a></h4>
						<p>Internist, Emergency Physician</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div clasName="team-block mb-5 mb-lg-0">
					<img src="/team/2.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single.html">Marshal Root</a></h4>
						<p>Surgeon, Сardiologist</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="/team/3.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single.html">Siamon john</a></h4>
						<p>Internist, General Practitioner</p>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="team-block">
					<img src="/team/4.jpg" alt="" className="img-fluid w-100"/>

					<div className="content">
						<h4 className="mt-4 mb-0"><a href="doctor-single.html">Rishat Ahmed</a></h4>
						<p>Orthopedic Surgeon</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
     
    </>
  );
};

export default AboutPage;