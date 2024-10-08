import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { PropertyType } from "./PropertyList";
import FavoriteButton from "../FavoriteButton";

interface PropertyProps {
  property: PropertyType;
  markFavorite?: (is_favorite: boolean) => void;
}

const PropertyListItem: React.FC<PropertyProps> = ({
  property,
  markFavorite,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/properties/${property.id}`)}
      className="cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={property.image_url}
          sizes="(max-width: 768) 768px, (max-width:1200px): 768px, 768px "
          alt="Beach House"
          className="hover:scale-110 object-cover transition h-full w-full"
        />

        {markFavorite && (
          <FavoriteButton
            id={property.id}
            is_favorite={property.is_favorite}
            markFavorite={(is_favorite) => markFavorite(is_favorite)}
          />
        )}
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>{property.price_per_night}</strong> per night
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
