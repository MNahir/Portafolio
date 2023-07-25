import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';


function LottieAnimation() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
     // path: 'https://assets6.lottiefiles.com/private_files/lf30_zdeFcW.json',
    // path: 'https://assets3.lottiefiles.com/packages/lf20_bhofanhx.json',
    //path: 'https://assets7.lottiefiles.com/packages/lf20_9oliqaij.json',
    path: 'https://assets2.lottiefiles.com/packages/lf20_em3fxxfe.json',
    });
  }, []);

  return (
    <div ref={container} style={{ width: '600px', height: '600px' }}>
    </div>
  );
}

export default LottieAnimation;