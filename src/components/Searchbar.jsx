import React from "react";
import { useForm } from "react-hook-form";

export default function Searchbar({ setSearch, setContentType }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.fineArts);
    setContentType();
    setSearch(data.search);
    setValue("search", "");
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: 5 }}
      >
        <div style={{ alignSelf: "start" }}>
          <input
            {...register("fineArts", { required: true })}
            type="radio"
            value="literature"
            style={{ alignSelf: "start" }}
          />
          <label htmlFor="">LITERATURE</label>
        </div>
        <div style={{ alignSelf: "start" }}>
          <input
            {...register("fineArts", { required: true })}
            type="radio"
            value=" music"
          />
          <label htmlFor="">MUSIC</label>
        </div>
        <div style={{ alignSelf: "start" }}>
          <input
            {...register("fineArts", { required: true })}
            type="radio"
            value=" art"
            style={{ alignSelf: "start" }}
          />
          <label htmlFor="">ART</label>
        </div>
        <input {...register("search")} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
