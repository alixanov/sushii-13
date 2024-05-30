import React from "react";

const Location = () => {
  return (
    <div className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d810.9978867443476!2d71.6685961276353!3d40.99437090254216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d50.903746999999996!2d34.8072958!4m3!3m2!1d50.906!2d34.793991999999996!5e1!3m2!1sru!2s!4v1712387568202!5m2!1sru!2s"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
