import { useQuery, useMutation, useQueryClient, InvalidateQueryFilters } from "@tanstack/react-query";


import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../../component/Loader";
interface IReview {
  _id: string;
  name: string;
  designation: string;
  image: string;
  review: string;
}
const deletereview = async (id:string) => {
  const response = await fetch(
    `https://event360-server-phi.vercel.app/reviews/${id}`,
    {
      method: "DELETE",
    }
  );
  const deleteData = await response.json();

  if (deleteData.deletedCount) {
    toast.success("review Deleted Succesfully");
  }
  return deleteData;
};
const DashBoardReviews = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteReviewMutation } = useMutation({
    mutationFn: deletereview,
    onSuccess: () => {
      queryClient.invalidateQueries("reviews" as InvalidateQueryFilters);
    },
  });

  const fetchData = async () => {
    const response = await fetch(
      "https://event360-server-phi.vercel.app/reviews"
    );
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const handleUpdate = (id) => {
  //   console.log(id);
  // };

  const handleDelete = (id:string) => {
    deleteReviewMutation(id);
  };

  return (
    <div className="">
      <h1 className="text-4xl text-center font-extrabold my-12">
        Client Review
      </h1>
      <ToastContainer />

      {data.map((review:IReview) => (
        <div
          className="bg-green-400/20 p-2  flex mx-[20px] lg:flex-row flex-col-reverse gap-8 my-4"
          key={review._id}
        >
          <div>
            <img
              className="w-[250px] h-[250px] mx-auto rounded-lg"
              src={review.image}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold my-2">{review.name}</h2>
            <h2 className="text-xl font-semibold my-2">{review.designation}</h2>
            <p className="max-w-[300px]">{review.review.slice(0, 200)}</p>

            <div className="flex gap-2 my-2">
              <button className="  bg-green-600 text-green-400 text-md font-semibold hover:bg-blue-200 hover:text-green-600 px-2 py-1 rounded-sm flex gap-2 items-center duration-500">
                <span className="text-2xl border-2 border-green-400 rounded-full p-1 text-green-400">
                  <GrDocumentUpdate />
                </span>
                <NavLink to={`/admin/updateservice/${review._id}`}>
                  Update Review
                </NavLink>
              </button>
              <button
                onClick={() => handleDelete(review._id)}
                className="bg-red-600 text-red-400 text-md font-semibold hover:bg-blue-200 px-2 py-1 rounded-sm flex gap-2 items-center duration-500"
              >
                <span className="text-2xl border-2 border-red-400 rounded-full p-1 text-red-400">
                  <RiDeleteBin5Line />
                </span>
                Delete Review
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardReviews;
