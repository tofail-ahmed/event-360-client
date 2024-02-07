import { InvalidateQueryFilters, UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
interface UpdatedData {
  service: string;
  description: string;
  features: string;
  image: string;
}


const UpdateService = () => {
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [image, setImage] = useState("");


  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  // console.log(id)


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://event360-server-phi.vercel.app/services/${id}`
      );
      const data = await response.json();
      setService(data.service);
      setDescription(data.description);
      setFeatures(data.features);
      setImage(data.image);
      console.log(data);
    };

    fetchData();
  }, [id]);

  const updateService = async (id:string, updatedData:UpdatedData) => {
    const response = await fetch(
      `https://event360-server-phi.vercel.app/services/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      }
    );

    if (!response.ok) {
      throw new Error("something went wrong");
    }

    return response.json();
  };
 

 

  type UpdateServiceOptions = UseMutationOptions<void, Error, UpdatedData, unknown> & {
    mutationFn: (updatedData: UpdatedData) => Promise<void>;
  };
  
  const { mutate: updateServiceMutate } = useMutation<void, Error, UpdatedData, unknown>({
    mutationFn: async (updatedData: UpdatedData) => {
      if (!id) throw new Error("ID is undefined");
      await updateService(id, updatedData);
      return;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("services" as InvalidateQueryFilters);
      navigate("/admin/service");
    },
   
  } as UpdateServiceOptions);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!id) return; // If id is undefined, return early
    const updatedData: UpdatedData = { service, description, features, image };
    updateServiceMutate(updatedData);
  };

  
  return (
    <div className="flex justify-center my-16">
      <form onSubmit={handleSubmit} className="bg-slate-400/30 p-14 rounded-md">
        <div className="flex flex-col gap-2 my-2">
          <p className="font-semibold">Service Name:</p>
          <input
            className="lg:w-[300px] w-[150px] p-1"
            type="text"
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <p className="font-semibold">Service Description:</p>
          <input
            className="lg:w-[300px] w-[150px] p-1"
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <p className="font-semibold">Service Features:</p>
          <textarea
            className="lg:w-[300px] w-[150px] p-1"
            name="features"
            id=""
            value={features}
            onChange={(event) => setFeatures(event.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 my-2">
          <p className="font-semibold">Service Image URL:</p>
          <input
            className="lg:w-[300px] w-[150px] p-1"
            type="text"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-1 rounded-md"
        >
          Submit Updated Data
        </button>
      </form>
    </div>
  );
};

export default UpdateService;
