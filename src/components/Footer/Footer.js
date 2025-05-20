import React, { forwardRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="footer" className="footer_parent_div">
      <div>
        <div className="footer_grid_div">
          <div className="footer_first_div">
            <h2 className="Sarenterprise">Sar Enterprise</h2>
            <p className="Head_Office">
              <b>Head Office :</b> 20/5, Wests Manikdi, Dhaka 1206.
            </p>
            <p className="Brance_Office">
              <b>Brance Office:</b> House 28-30, West Avenue Road, Sector 16/B,
              Uttara New Market, Uttara, Dhaka 1230
            </p>
            <div className="footer_head_office_flex_div">
              <div className="footer_number-div">
                <h4>General Contact</h4>
                <p>01712-874402</p>
                <p>01716-532061</p>
                <p>0187-632259</p>
              </div>
              <div className="footer_email_div">
                <h4>Send A Message</h4>
                <p>mssarenterprise2024@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="footer_second_div">
            <h4>Company</h4>
            <p>News</p>
            <p>Career</p>
            <p>Businesses</p>
            <p>Sustainability</p>
          </div>
          <div className="footer_third_div">
            <h4>Useful Links</h4>
            <p>
              {/* <b>Website:</b>  */}
              <Link>www.sarenterprise.com</Link>
            </p>
            <p>Sponsorship</p>
            <p>Contact</p>
            <p>Sitemap</p>
          </div>
          <div className="footer_forth_div">
            <h4>Legal</h4>
            <p>Cookie Policy</p>
            <p>Data Privacy</p>
            <p>Exclusion of Liability</p>
            <p>Imprint</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
});

export default Footer;
