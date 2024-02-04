import { useMutation, useQueryClient } from "@tanstack/react-query";

import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormData {
  service: string;
  description: string;
  features: string;
  image: string;
}

const AddService = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isError, isSuccess, error } = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        const response = await fetch("http://localhost:5000/service", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        // console.log("res", response);
        // console.log("data", data);
        // console.log("isSuccess", isSuccess);
        // console.log("isError", isError);
        // console.log("error", error);
        if (!response.ok) {
          toast.error("Service added successfully!");
          const errorText = await response.text();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${errorText}`
          );
        } else {
          alert("Service added succesfully");
          toast.success("Service added successfully!");
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
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[70%] max-w-md">
          <label
            className="block text-red-600 font-bold rounded-s-md"
            htmlFor="service"
          >
            Service Name
          </label>
          <input
            type="text"
            id="service"
            placeholder="Service"
            {...register("service", { required: "Service is required" })}
          />
          {formState.errors.service && (
            <span className="text-red-900 font-semibold">
              {formState.errors.service.message}
            </span>
          )}
        </div>
        <div className="w-[70%] max-w-md">
          <label
            className="block text-red-600 font-bold rounded-s-md"
            htmlFor="description"
          >
            Description
          </label>
          <input
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
            className="block text-red-600 font-bold rounded-s-md"
            htmlFor="features"
          >
            Features
          </label>
          <input
            type="text"
            id="features"
            placeholder="Features"
            {...register("features", { required: "Features is required" })}
          />
          {formState.errors.features && (
            <span className="text-red-900 font-semibold">
              {formState.errors.features.message}
            </span>
          )}
        </div>
        <div className="w-[70%] max-w-md">
          <label
            className="block text-red-600 font-bold rounded-s-md"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddService;
