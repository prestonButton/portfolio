"use client";

const Form = () => {
  return (
    <form
      action={""}
      autoComplete="off"
      className="flex flex-col gap-2 p-4 w-72"
    >
      <label htmlFor="" className="">
        Label
        <input type="" className="" />
      </label>
      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
};

export default Form;
