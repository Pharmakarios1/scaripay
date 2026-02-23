import img1 from "@assets/Rectangle 77.png";
import img2 from "@assets/Rectangle 78.png";
import img3 from "@assets/Rectangle 81.png";
import img4 from "@assets/Rectangle 80.png";
const WhyScaripayImage = () => {
  return (
    <div className="grid grid-cols-6 gap-2 max-w-5xl mx-auto p-4">
      <img
        src={img1}
        alt=""
        className="w-full h-48 col-span-2 object-cover rounded-xl"
      />
      <img
        src={img2}
        alt=""
        className="w-full h-48 col-span-4 object-cover rounded-xl"
      />
      <img
        src={img3}
        className="col-span-4 w-full h-64 object-cover rounded-xl"
      />
      <img
        src={img4}
        className="col-span-2 row-span-6 w-full h-full object-cover rounded-xl"
      />
    </div>
  );
};

export default WhyScaripayImage;
