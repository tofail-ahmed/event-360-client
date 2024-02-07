import { InvalidateQueryFilters, UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
interface IUpdatedData {
  eventItem: string;
  description: string;
  features: string;
  image: string;
}


const UpdateDashBoardEvents = () => {
  const [eventItem, setEventItem] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [image, setImage] = useState("");


  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  console.log(id)


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://event360-server-phi.vercel.app/eventItems/${id}`
      );
      const data = await response.json();
      setEventItem(data.eventItem);
      setDescription(data.description);
      setFeatures(data.features);
      setImage(data.image);
      console.log(data);
    };

    fetchData();
  }, [id]);

  const updateService = async (id:string, updatedData:IUpdatedData) => {
    const response = await fetch(
      `https://event360-server-phi.vercel.app/eventItems/${id}`,
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
 
  type UpdateEventOptions = UseMutationOptions<void, Error, IUpdatedData, unknown> & {
    mutationFn: (updatedData: IUpdatedData) => Promise<void>;
  };
 

  const { mutate: updateServiceMutate } = useMutation<void, Error, IUpdatedData, unknown>({
    mutationFn: async (updatedData: IUpdatedData) => {
      if (!id) throw new Error("ID is undefined");
      await updateService(id, updatedData);
      return;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("services" as InvalidateQueryFilters);
      navigate("/admin/event");
    },
   
  } as UpdateEventOptions);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedData = { eventItem, description, features, image };
    // console.log(updatedData)
    updateServiceMutate(updatedData);
  };

  
  return (
    <div className="flex justify-center my-16">
      <form onSubmit={handleSubmit} className="bg-slate-400/30 p-14 rounded-md">
        <div className="flex flex-col gap-2 my-2">
          <p className="font-semibold">Event Name:</p>
          <input
            className="lg:w-[300px] w-[150px] p-1"
            type="text"
            name="service"
            value={eventItem}
            onChange={(event) => setEventItem(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <p className="font-semibold">Event Description:</p>
          <input
            className="lg:w-[300px] w-[150px] p-1"
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <p className="font-semibold">Event Features:</p>
          <textarea
            className="lg:w-[300px] w-[150px] p-1"
            name="features"
            id=""
            value={features}
            onChange={(event) => setFeatures(event.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 my-2">
          <p className="font-semibold">Event Image URL:</p>
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

export default UpdateDashBoardEvents;

