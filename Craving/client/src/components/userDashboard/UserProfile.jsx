import React, { useState } from "react";

const UserProfile = () => {
  const [error, setError] = useState({});
  const [loadin, setLoading] = useState(false)
  const [formm, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const Handale = (e) => {
    const { name, value } = e.target;
    setForm((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const Validate = () => {
    let err = {};

    if (formm.name.length < 6) {
      err.name = "Input must be more than 6 letters";
    }

    setError(err);
    return Object.keys(err).length === 0;
  };

  const HandaleSubmit = (e) => {
    e.preventDefault();
    if (!Validate()) return;

    console.log(formm);

    setForm({
      name: "",
      email: "",
      password: "",
      age: "",
    });
  };

  return (
    <>
      <div>
        <form onSubmit={HandaleSubmit}>
          <div className="gap-3 my-5 ms-5">
            <div className="flex gap-2 py-2 flex-col">
              <input
                type="text"
                name="name"
                onChange={Handale}
                value={formm.name}
                className="border-2"
              />

             {error.name && (
              <span className="text-red-600"> {error.name}</span>
             )}
            </div>

            <div className="flex gap-2 py-2 flex-col">
              <input
                type="text"
                name="email"
                onChange={Handale}
                value={formm.email}
                className="border-2"
              />
            </div>

            <div className="flex-col">
              <input
                type="password"
                name="password"
                onChange={Handale}
                value={formm.password}
                className="border-2 flex-col"
              />
            </div>

            <div className="flex py-2 flex-col">
              <input
                type="text"
                name="age"
                onChange={Handale}
                value={formm.age}
                className="border-2 "
              />
            </div>

            <button
              type="submit"
              className="w-20 py-2 bg-amber-600 text-white rounded hover:bg-blue-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
