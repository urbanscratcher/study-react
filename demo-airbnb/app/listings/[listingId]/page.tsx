import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";
import getListingById from "@/app/api/actions/getListingById";
import getReservations from "@/app/api/actions/getReservations";
import getCurrentUser from "@/app/api/actions/getCurrentUser";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
    />
  );
};

export default ListingPage;
