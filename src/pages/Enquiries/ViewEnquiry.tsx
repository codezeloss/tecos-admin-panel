import PageTitle from "../../components/PageTitle.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEnquiry,
  updateEnquiry,
} from "../../features/enquiry/enquirySlice.ts";
import { useEffect } from "react";
import { Descriptions } from "antd";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { resetState } from "../../utils/reset_redux_states.ts";

function ViewEnquiry() {
  const location = useLocation();
  const enquiryId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // RTK
  const enquiryState = useSelector((state: any) => state.enquiry);
  const {
    enquiryName,
    enquiryMobile,
    enquiryEmail,
    enquiryComment,
    enquiryStatus,
  } = enquiryState;

  //
  useEffect(() => {
    // @ts-ignore
    dispatch(getEnquiry(enquiryId));
  }, [enquiryId]);

  // Handle Enquiry Status Change
  const setEnquiryStatus = (e: string, id: string) => {
    const data = { id, enquiryData: e };
    // @ts-ignore
    dispatch(updateEnquiry(data));

    dispatch(resetState());
    setTimeout(() => {
      // @ts-ignore
      dispatch(getEnquiry(enquiryId));
    }, 100);
  };

  return (
    <>
      <>
        <main className="h-screen p-8">
          <PageTitle title="View Enquiry" />

          <div
            className="flex items-center gap-2 mb-4 text-sm cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            <HiArrowNarrowLeft />
            <button type="button">Go Back</button>
          </div>

          <div className="bg-white p-6 rounded-md">
            <Descriptions layout="vertical">
              <Descriptions.Item label="Name">{enquiryName}</Descriptions.Item>
              <Descriptions.Item label="Mobile">
                <a href={`tel:${enquiryEmail}`}>{enquiryMobile}</a>
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                <a href={`mailto:${enquiryEmail}`}>{enquiryEmail}</a>
              </Descriptions.Item>
              <Descriptions.Item label="Comment" span={2}>
                <p className="mr-6">{enquiryComment}</p>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <p className="font-bold">{enquiryStatus}</p>
              </Descriptions.Item>
              <Descriptions.Item label="Change Status">
                <select
                  className="w-48 py-2 px-4 bg-gray-100 text-gray-800 text-sm outline-none font-medium"
                  placeholder="category 01"
                  defaultValue={enquiryStatus ? enquiryStatus : "Submitted"}
                  onChange={(e) => setEnquiryStatus(e.target.value, enquiryId)}
                >
                  <option value="Submitted">Submitted</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </Descriptions.Item>
            </Descriptions>
          </div>
        </main>
      </>
    </>
  );
}

export default ViewEnquiry;
