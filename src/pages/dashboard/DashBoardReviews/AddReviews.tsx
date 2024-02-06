import { useMutation, useQueryClient } from "@tanstack/react-query";

import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormData {
  name: string;
  image: string;
  designation: string;
  review: string;
}

const AddReviews = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        const response = await fetch(
          "https://event360-server-phi.vercel.app/review",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        if (!response.ok) {
          toast.error("Review not added!");
          const errorText = await response.text();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${errorText}`
          );
        } else {
         
          toast.success("Review added successfully!");
        }
        return response.json();
      } catch (error) {
        throw new Error(`Error during mutation: ${error.message}`);
      }
    },
  });

  const { register, handleSubmit, setError, formState, reset } =
    useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await mutateAsync(data);
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      // Reset form on success
      reset();
    } catch (error) {
      console.error(error);
      // Set error message
      setError("global", { message: error.message });
    }
  };
  return (
    <div>
    <h1 className="text-center text-4xl font-bold my-12">Add Client Review</h1>
    <div className="flex justify-center ">
    <ToastContainer />
    <form className="bg-purple-600/20 p-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[70%] max-w-md">
        <label
          className="block text-black font-bold rounded-s-md"
          htmlFor="name"
        >
          Name
        </label>
        <input
         className="w-[250px] p-2 rounded-md"
       
          type="text"
          id="name"
          placeholder="Name"
          {...register("name", { required: "name is required" })}
        />
        {formState.errors.name && (
          <span className="text-red-900 font-semibold">
            {formState.errors.name.message}
          </span>
        )}
      </div>
      <div className="w-[70%] max-w-md">
        <label
          className="block text-black font-bold rounded-s-md"
          htmlFor="designation"
        >
          Designation
        </label>
        <input
         className="w-[250px] p-2 rounded-md"
          type="text"
          id="designation"
          placeholder="Designation"
          {...register("designation", {
            required: "designation is required",
          })}
        />
        {formState.errors.designation && (
          <span className="text-red-900 font-semibold">
            {formState.errors.designation.message}
          </span>
        )}
      </div>
      <div className="w-[70%] max-w-md">
        <label
          className="block text-black font-bold rounded-s-md"
          htmlFor="review"
        >
          Review
          
        </label>
        <textarea
         className="w-[250px] p-2 rounded-md"
          
          id="review"
          placeholder="Review"
          {...register("review", { required: "review is required" })}
        />
        {formState.errors.review && (
          <span className="text-red-900 font-semibold">
            {formState.errors.review.message}
          </span>
        )}
      </div>
      <div className="w-[70%] max-w-md">
        <label
          className="block text-black font-bold rounded-s-md"
          htmlFor="image"
        >
          Image URL
        </label>
        <input
         className="w-[250px] p-2 rounded-md"
          type="text"
          id="image"
          placeholder="Image URL"
          {...register("image", { required: "Image URL is required" })}
        />
        {formState.errors.image && (
          <span className="text-red-900 font-semibold">
            {formState.errors.image.message}
          </span>
        )}
      </div>
      <button className="bg-green-600 hover:bg-green-400 text-white font-semibold py-1 px-2" type="submit">Submit</button>
    </form>
  </div>
  </div>
  );
};

export default AddReviews;





