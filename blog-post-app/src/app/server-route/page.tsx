// app/server-route/page.tsx
// import { serverSideFunction } from '@/utils/server-utils';
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ServerRoutePage() {
//   const result = serverSideFunction();
//   const settings = {
//     dots: true,
//   };
//   return (
//     <div className="image-slider-container">
//     <h1>Server Route {result}</h1>
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





import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route {result}</h1>
      <ImageSlider />
    </>
  );
}











// import { clientSideFunction } from '@/utils/client-utils';

// export default function ServerRoutePage() {
//   const clientResult = clientSideFunction(); // Error

//   return <h1>{clientResult}</h1>;
// }