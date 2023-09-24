import React from "react";
import Style1 from '../styles/Home.module.css'

export default function SignUp() {
  return (
  <div className={Style1.app__newsletter}>
    <div className={Style1.app__newsletter_heading}>
      <h1 className={Style1.headtext__cormorant}>Create your Account</h1>
      <p className={Style1.p__opensans}>And never miss latest Updates!</p>
    </div>
    <div className={Style1.app__newsletter_input} style={{margin: '29px 89px' }}>
      <input style={{width: '620px',border: '1px solid gold',borderRadius: '5px',fontSize: '1rer',color: '#a80000',marginRight: '2rem',padding: '0.75rem 1rem',background: 'linear-gradient(139deg, rgb(220 252 229 / 84%) 0%, rgb(62 143 117 / 39%) 35%, rgb(255 78 78) 100%)' }} type="text" placeholder="Enter your full name" /><br /><br />
      <input style={{width: '620px',border: '1px solid gold',borderRadius: '5px',fontSize: '1rer',color: '#a80000',marginRight: '2rem',padding: '0.75rem 1rem',background: 'linear-gradient(139deg, rgb(220 252 229 / 84%) 0%, rgb(62 143 117 / 39%) 35%, rgb(255 78 78) 100%)' }} type="number" placeholder="Enter your mobile number" /><br /><br />
      <input style={{width: '620px',border: '1px solid gold',borderRadius: '5px',fontSize: '1rer',color: '#a80000',marginRight: '2rem',padding: '0.75rem 1rem',background: 'linear-gradient(139deg, rgb(220 252 229 / 84%) 0%, rgb(62 143 117 / 39%) 35%, rgb(255 78 78) 100%)' }} type="text" placeholder="Enter your full address" /><br /><br />
      <input style={{width: '620px',border: '1px solid gold',borderRadius: '5px',fontSize: '1rer',color: '#a80000',marginRight: '2rem',padding: '0.75rem 1rem',background: 'linear-gradient(139deg, rgb(220 252 229 / 84%) 0%, rgb(62 143 117 / 39%) 35%, rgb(255 78 78) 100%)' }} type="email" placeholder="Enter your email address" /><br /><br /><br />
      <button style={{backgroundColor: 'white',color: 'black',fontWeight: '700',letterSpacing: '0.04em',lineHeight: '28px',fontSize: '16px',padding: '0.5rem 2.5rem',borderRadius: '13px',cursor: 'pointer',margin: '-20px 227px' }} type="button" className="custom__button">Submit</button>
    </div>
  </div>
  )
};