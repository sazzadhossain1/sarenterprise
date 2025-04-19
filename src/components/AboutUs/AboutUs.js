import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs_parent_div">
      <div className="Company_Overview_text_div">
        <h2>Company Overview</h2>
        <p>
          M/S SAR ENTERPRISE is a partnership firm established in 2024,
          dedicated to providing top-notch construction services.
        </p>
        <div>
          <p>📍 Head Office: House No 20/5, West Manikdi, Dhaka 1206.</p>
          <p>
            📍 Branch Office: House 28-30, West Avenue Road, Sector 16/B, Uttara
            New Market, Uttara, Dhaka 1230.
          </p>
          <p>📞 Phone: 01712-874402, 01716-532061, 01872-632259.</p>
          <p>📧 Email: mssarenterprise2024@gmail.com</p>
          <p>🌐 Website: www.sarenterprise.com</p>
        </div>
      </div>

      <div className="Mission_Vision_and_Values_text_div">
        <h2>Mission, Vision & Values</h2>
        <p>
          <b>Mission</b>: To provide high-quality and reliable construction
          services, ensuring customer satisfaction and project success.
        </p>
        <p>
          <b>Vision</b>: To be a leading contractor company recognized for
          excellence, efficiency, and sustainable construction solutions.
        </p>
        <p>
          <b>Core Values</b>: Integrity, Quality, Efficiency, Customer
          Satisfaction, and Sustainability
        </p>
      </div>
      <div className="Business_Description_text_div">
        <h2>Business Description</h2>
        <p>
          M/S SAR ENTERPRISE is a reputable contractor company specializing in
          essential construction
        </p>

        <p>
          services. We provide earth filling, sand filling, supply of
          construction materials, and complete building
        </p>
        <p>
          construction solutions. Our expertise ensures durable and
          cost-effective results for our clients.
        </p>
      </div>
      <div className="Why_Choose_Us_text_div">
        <h2>Why Choose Us?</h2>
        <p>
          ✅ Experienced team with expertise in construction and material
          supply.
        </p>
        <p>✅ High-quality materials and industry-best practices.</p>
        <p>✅ Commitment to timely delivery and cost-effectiveness.</p>
        <p>✅ Strong client relationships and transparent business dealings.</p>
      </div>
    </div>
  );
};

export default AboutUs;
