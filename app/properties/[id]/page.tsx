import React from "react";
import Image from "next/image";

import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";

import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`/api/properties/${params.id}`);

  const userId = await getUserId();

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach_1.jpg"
          alt="Beach house"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">{property.title}</h1>

          <div className="mb-6 block text-lg text-gray-600">
            <span>{property.guests} guest(s)</span> -{" "}
            <span>{property.bedrooms} bedroom(s)</span> -{" "}
            <span>{property.bathrooms} bathroom(s)</span>
          </div>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            {property.host.avatar_url && (
              <Image
                src={property.host.avatar_url}
                width={50}
                height={50}
                alt="Profile picture"
                className="rounded-full"
              />
            )}

            <p>
              <strong>{property.host.name}</strong> is your host
            </p>
          </div>

          <hr />

          <p className="mt-6 text-lg">{property.description}</p>
        </div>

        <ReservationSidebar property={property} userId={userId} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
