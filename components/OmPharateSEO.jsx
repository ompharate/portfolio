import React from 'react';

function OmPharateSEO() {
  const omPharateStructuredData = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Om Pharate",
    "jobTitle": "Software Engineer",
    "description": "Om Pharate is a talented software engineer and a 3rd-year student at I2IT College in Pune.",
    "url": "https://ompharate.tech/",
    "sameAs": [
      "https://www.linkedin.com/in/om-pharate/",
      "https://github.com/ompharate",
      "https://www.instagram.com/ompharate_11/"
    ],
    "memberOf": {
      "@type": "EducationalOrganization",
      "name": "I2IT College",
      "sameAs": "http://www.isquareit.edu.in/"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(omPharateStructuredData)}
    </script>
  );
}

export default OmPharateSEO;
