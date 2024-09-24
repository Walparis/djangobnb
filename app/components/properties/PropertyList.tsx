"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
  is_favorite: boolean;
};

interface PropertyListProps {
  host_id?: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({ host_id }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const markFavorite = (id: string, is_favorite: boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id === id) {
        property.is_favorite = is_favorite;

        if (is_favorite) {
          console.log("Added to list of favorited properties");
        } else {
          console.log("Removed from favorite list");
        }
      }

      return property;
    });

    setProperties(tmpProperties);
  };

  const getProperties = async () => {
    let url = "/api/properties/";

    if (host_id) {
      url += `?host_id=${host_id}`;
    }

    const tempProperties = await apiService.get(url);

    setProperties(
      tempProperties.data.map((property: PropertyType) => {
        if (tempProperties.favorites.includes(property.id)) {
          property.is_favorite = true;
        } else {
          property.is_favorite = false;
        }

        return property;
      })
    );
  };
  useEffect(() => {
    getProperties();
  }, []);
  return (
    <>
      {properties.map((property) => {
        return (
          <PropertyListItem
            key={property.id}
            property={property}
            markFavorite={(is_favorite) =>
              markFavorite(property.id, is_favorite)
            }
          />
        );
      })}
    </>
  );
};

export default PropertyList;
