'use client';

import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up if needed
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Elfsight Flipbook Widget */}
      <div
        className="elfsight-app-a6a135d9-eca0-483b-aaf7-1e900a42c412"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default Page;
