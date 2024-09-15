import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center">
      <div
        onClick={() => setCategory("Beach")}
        className={`w-24 pb-4 flex flex-col items-center justify-center space-y-2 border-b-2 
            ${dataCategory === "Beach" ? "border-gray-800" : "border-white"}
            hover:border-gray-200 opacity-60 hover:opacity-100`}
      >
        <Image
          src="/icn_category.png"
          alt="Category image"
          width={20}
          height={20}
        />

        <span className="text-xs">Superstars</span>
      </div>

      <div
        onClick={() => setCategory("Villas")}
        className={`w-24 pb-4 flex flex-col items-center justify-center space-y-2 border-b-2
        ${dataCategory === "Villas" ? "border-gray-800" : "border-white"} 
        hover:border-gray-200 opacity-60 hover:opacity-100`}
      >
        <Image
          src="/icn_category.png"
          alt="Category image"
          width={20}
          height={20}
        />

        <span className="text-xs">New</span>
      </div>

      <div
        onClick={() => setCategory("Cabins")}
        className={`w-24 pb-4 flex flex-col items-center justify-center space-y-2 border-b-2
            ${dataCategory === "Cabins" ? "border-gray-800" : "border-white"}
            hover:border-gray-200 opacity-60 hover:opacity-100`}
      >
        <Image
          src="/icn_category.png"
          alt="Category image"
          width={20}
          height={20}
        />

        <span className="text-xs">Wow!</span>
      </div>

      <div
        onClick={() => setCategory("Tiny homes")}
        className={`w-24 pb-4 flex flex-col items-center justify-center space-y-2 border-b-2
            ${
              dataCategory === "Tiny homes" ? "border-gray-800" : "border-white"
            } 
            hover:border-gray-200 opacity-60 hover:opacity-100`}
      >
        <Image
          src="/icn_category.png"
          alt="Category image"
          width={20}
          height={20}
        />

        <span className="text-xs">Great view</span>
      </div>
    </div>
  );
};

export default Categories;
