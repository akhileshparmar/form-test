import { useState } from "react";

const FormBuilder = ({ getusers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("A");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, about, gender, department });

    const response = await fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, about, gender, department }),
    });

    const json = await response.json();
    console.log(json);
    getusers();

    alert("user created");
  };

  return (
    <>
      <div className="max-w-xl m-auto border border-4 p-4">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="enter name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email"
            required
          />

          <textarea
            name="about"
            id="about"
            value={about}
            placeholder="about you..."
            onChange={(e) => setAbout(e.target.value)}
            required
          ></textarea>

          <label htmlFor="gender">select gender</label>
          <select
            name="gender"
            id="gender"
            required
            onChange={(e) => setGender(e.target.value)}
            defaultValue={gender}
          >
            <option value="" disabled>
              select gender
            </option>

            <option value="male">male</option>
            <option value="female">female</option>
          </select>

          <label htmlFor="department">select department</label>

          <input
            type="radio"
            name="department"
            value="A"
            required
            onChange={(e) => setDepartment(e.target.value)}
          />
          <span>A</span>
          <input
            type="radio"
            name="department"
            value="B"
            required
            onChange={(e) => setDepartment(e.target.value)}
          />
          <span>B</span>

          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default FormBuilder;
