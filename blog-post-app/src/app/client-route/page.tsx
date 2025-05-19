// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ClientRoutePage() {
//   const settings = {
//     dots: true,
//   };
//   return (
//     <div className="image-slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src="https://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="https://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="https://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="https://picsum.photos/400/200" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

'use client';

import { useTheme } from '@/components/ThemeProvider';
import { clientSideFunction } from '@/utils/client-utils';

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <h1 style={{ color: theme.colors.primary }}>
      Client Route Page

      <p>{result}</p>
    </h1>
  );
}