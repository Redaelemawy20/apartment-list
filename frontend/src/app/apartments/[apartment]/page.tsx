import { getApartment } from '@/api';
import ApartmentDetails from '@/components/sections/Details/Details';
import { notFound } from 'next/navigation';

export default async function ApartmentDetailsPage({
  params,
}: {
  params: { apartment: string };
}) {
  const apartmentDetails = await getApartment(params.apartment);
  if (!apartmentDetails) {
    notFound();
  }

  return <ApartmentDetails apartment={apartmentDetails} />;
}
