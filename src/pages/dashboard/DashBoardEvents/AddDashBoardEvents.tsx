import { useMutation, useQueryClient } from "@tanstack/react-query";

import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormData {
  event: string;
  description: string;
  features: string;
  image: string;
}

const AddDashBoardEvents = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        const response = await fetch("http://localhost:5000/eventItem", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!response.ok) {
          toast.error("Event not added!");
          const errorText = await response.text();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${errorText}`
          );
        } else {
          alert("Event added succesfully");
          toast.success("Event added successfully!");
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
      queryClient.invalidateQueries({ queryKey: ["services"] });
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
    <h1 className="text-center text-4xl font-bold my-12">Add Event Items</h1>
    <div className="flex justify-center ">
    <ToastContainer />
    <form className="bg-purple-600/20 p-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[70%] max-w-md">
        <label
          className="block text-black font-bold rounded-s-md"
          htmlFor="event"
        >
          Event Name
        </label>
        <input
         className="w-[250px] p-2 rounded-md"
       
          type="text"
          id="event"
          placeholder="Event"
          {...register("event", { required: "event is required" })}
        />
        {formState.errors.event && (
          <span className="text-red-900 font-semibold">
            {formState.errors.event.message}
          </span>
        )}
      </div>
      <div className="w-[70%] max-w-md">
        <label
          className="block text-black font-bold rounded-s-md"
          htmlFor="description"
        >
          Description
        </label>
        <input
         className="w-[250px] p-2 rounded-md"
          type="text"
          id="description"
          placeholder="Description"
          {...register("description", {
            required: "Description is required",
          })}
        />
        {formState.errors.description && (
          <span className="text-red-900 font-semibold">
            {formState.errors.description.message}
          </span>
        )}
      </div>
      <div className="w-[70%] max-w-md">
        <label
          className="block text-black font-bold rounded-s-md"
          htmlFor="features"
        >
          Features
          
        </label>
        <textarea
         className="w-[250px] p-2 rounded-md"
          
          id="features"
          placeholder="Features"
          {...register("features", { required: "Features is required" })}
        />
        <p className="text-xs font-bold text-green-600">N.B:Use comma(,) after each feature. Max five <br></br>features Recommended</p>
        {formState.errors.features && (
          <span className="text-red-900 font-semibold">
            {formState.errors.features.message}
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
      <button className="bg-green-600 hover:bg-green-400 text-white font-semibold py-1 px-2 rounded-md my-4" type="submit">Submit</button>
    </form>
  </div>
  </div>
  );
};

export default AddDashBoardEvents;


