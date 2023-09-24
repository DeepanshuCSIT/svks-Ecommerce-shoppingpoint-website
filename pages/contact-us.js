import React from "react";

export default function ContactUs() {
  return <div className="app__bg app__wrapper section__padding" id="contact">
      <div style={{width: '100%',display: 'flex',justifyContent: 'center',flexDirection: 'column' }}>
        <div className="app__wrapper-content">
          <p style={{fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400' , letterSpacing: '0.04em',lineHeight: '28px',fontSize: '16px',textAlign: 'center' }}>@ Aligarh,UttarPradesh--202125,Contact Us: 84***3277* </p>
          <p style={{ color: '#DCCA87', margin: '1rem 0',fontFamily: 'var(--font-base)', color: 'var(--color-white)',fontWeight: '700',letterSpacing: '0.04em',textTransform: 'capitalize',lineHeight: '29.9px',fontSize: '23px',textAlign: 'center' }}>Opening Hours</p>
          <p style={{fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400' , letterSpacing: '0.04em',lineHeight: '28px',fontSize: '16px',textAlign: 'justify',textAlign: 'center' }}>Mon - Fri: 10:00 am - 02:00 am</p>
          <p style={{fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400' , letterSpacing: '0.04em',lineHeight: '28px',fontSize: '16px',textAlign: 'justify',textAlign: 'center' }}>Fri - Sun: 10:00 am - 03:00 am</p>
        </div>
      </div>
    </div>
}
