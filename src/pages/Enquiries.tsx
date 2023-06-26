import PageTitle from "../components/PageTitle.tsx";
import EnquiriesTable from "../components/Enquiries/EnquiriesTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEnquiries } from "../features/enquiry/enquirySlice.ts";

function Enquiries() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(getEnquiries());
    };
  }, []);

  const enquiriesState = useSelector((state: any) => state.enquiry.enquiries);

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Enquiries" />

        <div>
          <EnquiriesTable enquiriesData={enquiriesState} />
        </div>
      </main>
    </>
  );
}

export default Enquiries;
