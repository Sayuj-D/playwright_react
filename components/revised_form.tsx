"use client";
import React, { useState, useEffect } from "react";

type Errors = {
  name?: string;
  email?: string;
  date?: string;
  gender?: string;
  termsAgreed?: string;
  url_here?: string;
};

type FormData = {
  name: string;
  email: string;
  date: string;
  countries: string;
  gender: string;
  termsAgreed: boolean;
  url_here: string;
};

const Revised_form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [countries, setCountries] = useState("nepal");
  const [gender, setGender] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [url_here, setUrl_here] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [storedData, setStoredData] = useState<FormData[]>([]);

  useEffect(() => {
    const existing = localStorage.getItem("formData_revised");
    if (existing) {
      setStoredData(JSON.parse(existing));
    }
  }, []);

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!date) newErrors.date = "Date is required.";
    if (!gender) newErrors.gender = "Please select your gender.";
    if (!termsAgreed)
      newErrors.termsAgreed = "You must accept the terms and conditions.";
    if (!url_here) newErrors.url_here = "Please enter the URL.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData_revised: FormData = {
      name,
      email,
      date,
      countries,
      gender,
      termsAgreed,
      url_here,
    };

    if (typeof window !== "undefined") {
      const existing = localStorage.getItem("formData_revised");
      const obtained_data = existing ? JSON.parse(existing) : [];
      obtained_data.push(formData_revised);
      localStorage.setItem("formData_revised", JSON.stringify(obtained_data));
      setStoredData(obtained_data);
    }

    alert("Form submitted successfully!");

    // Reset form
    setErrors({});
    setName("");
    setEmail("");
    setDate("");
    setGender("");
    setTermsAgreed(false);
    setUrl_here("");
  };

  return (
    <>
      <div className="flex flex-col items-center mb-14">
        <div className="bg-gray-100 rounded-3xl mt-20 p-8 max-w-140 shadow-xl">
          <form
            className="flex flex-col gap-4 max-w-100"
            onSubmit={handleSubmit}
          >
            <input
              className="border-2 border-slate-400 rounded-md py-3 px-2 text-md"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}

            <input
              className="border-2 border-slate-400 rounded-md py-3 px-2 text-md"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}

            <input
              className="border-2 border-slate-400 rounded-md py-3 px-2 text-md"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <p className="text-red-600">{errors.date}</p>}

            <select
              title="countries"
              className="border-2 border-slate-400 rounded-md py-3 px-2 text-md max-w-100"
              value={countries}
              onChange={(e) => setCountries(e.target.value)}
            >
              <option value="nepal">Nepal</option>
              <option value="india">India</option>
              <option value="china">China</option>
            </select>

            <div className="flex gap-3">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>

              <input
                type="radio"
                id="others"
                name="gender"
                value="others"
                checked={gender === "others"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="others">Others</label>
            </div>
            {errors.gender && <p className="text-red-600">{errors.gender}</p>}

            <div className="flex gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
              />
              <label htmlFor="terms">
                I agree to all the terms and conditions
              </label>
            </div>
            {errors.termsAgreed && (
              <p className="text-red-600">{errors.termsAgreed}</p>
            )}

            <input
              className="border-2 border-slate-400 rounded-md py-3 px-2 text-md"
              type="url"
              placeholder="https://example.com"
              value={url_here}
              onChange={(e) => setUrl_here(e.target.value)}
            />
            {errors.url_here && (
              <p className="text-red-600">{errors.url_here}</p>
            )}

            <button
              type="submit"
              className="bg-blue-400 py-2 font-semibold text-white rounded-md cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* display the data */}
      <p>
        <div className="text-center mb-8">Submitted Data</div>
        <div className="flex justify-center items-center">
          <table className="border-2 border-slate-400">
            <thead>
              <tr>
                <th className="px-4 py-2 border-2 border-slate-400 rounded-2xl ">
                  Name
                </th>
                <th className="px-4 py-2 border-2 border-slate-400 rounded-2xl ">
                  Email
                </th>
                <th className="px-4 py-2 border-2 border-slate-400 rounded-2xl ">
                  Date
                </th>
                <th className="px-4 py-2 border-2 border-slate-400 rounded-2xl ">
                  Country
                </th>
                <th className="px-4 py-2 border-2 border-slate-400 rounded-2xl ">
                  Gender
                </th>
                <th className="px-4 py-2 border-2 border-slate-400 rounded-2xl ">
                  URL
                </th>
              </tr>
            </thead>
            <tbody>
              {storedData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2  border-2 border-slate-400">
                    {item.name}
                  </td>
                  <td className="px-4 py-2  border-2 border-slate-400">
                    {item.email}
                  </td>
                  <td className="px-4 py-2  border-2 border-slate-400">
                    {item.date}
                  </td>
                  <td className="px-4 py-2  border-2 border-slate-400">
                    {item.countries}
                  </td>
                  <td className="px-4 py-2  border-2 border-slate-400">
                    {item.gender}
                  </td>
                  <td className="px-4 py-2  border-2 border-slate-400">
                    {item.url_here}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>
    </>
  );
};

export default Revised_form;
