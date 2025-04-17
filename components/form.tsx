// "use client";

// import React, { useState } from "react";

// type FormData = {
//   name: string;
//   email: string;
//   country: string;
//   gender: string;
//   termsAccepted: boolean;
// };

// type Errors = {
//   name?: string;
//   email?: string;
//   gender?: string;
//   terms?: string;
// };

// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [country, setCountry] = useState("nepal");
//   const [gender, setGender] = useState("");
//   const [termsAccepted, setTermsAccepted] = useState(false);

//   const [errors, setErrors] = useState<Errors>({});

//   const [storedData, setStoredData] = useState<FormData[]>([]);

//   const validate = () => {
//     const newErrors: Errors = {};

//     if (!name) newErrors.name = "Name is required.";
//     if (!email) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Invalid email format.";
//     }
//     if (!gender) newErrors.gender = "Please select your gender";
//     if (!termsAccepted)
//       newErrors.terms = "You must accept the terms and conditions.";

//     return newErrors;
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     const formData: FormData = {
//       name,
//       email,
//       country,
//       gender,
//       termsAccepted,
//     };

//     try {
//       const existing = localStorage.getItem("formData");
//       const parsed: FormData[] = existing ? JSON.parse(existing) : [];
//       parsed.push(formData);
//       localStorage.setItem("formData", JSON.stringify(parsed));
//       alert("Submitted successfully!");
//       setStoredData(parsed);
//     } catch (err) {
//       console.error("Saving error:", err);
//     }

//     setErrors({});
//     setName("");
//     setEmail("");
//     setCountry("nepal");
//     setGender("");
//     setTermsAccepted(false);
//   };

//   return (
//     <div className="bg-amber-50 p-8 inline-block rounded-3xl mt-4">
//       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="border-2 border-slate-500 rounded-md p-2"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         {errors.name && <p className="text-red-600">{errors.name}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           className="border-2 border-slate-500 rounded-md p-2"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {errors.email && <p className="text-red-600">{errors.email}</p>}

//         <select
//           className="border-2 border-slate-500 rounded-md p-2"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//         >
//           <option value="nepal">Nepal</option>
//           <option value="india">India</option>
//           <option value="china">China</option>
//           <option value="korea">Korea</option>
//         </select>

//         <div className="flex gap-4 items-center">
//           <input
//             type="radio"
//             id="male"
//             name="gender"
//             value="male"
//             checked={gender === "male"}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           <label htmlFor="male">Male</label>

//           <input
//             type="radio"
//             id="female"
//             name="gender"
//             value="female"
//             checked={gender === "female"}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           <label htmlFor="female">Female</label>
//         </div>
//         {errors.gender && <p className="text-red-600">{errors.gender}</p>}

//         <div className="flex gap-4 items-center">
//           <input
//             type="checkbox"
//             id="terms"
//             checked={termsAccepted}
//             onChange={(e) => setTermsAccepted(e.target.checked)}
//           />
//           <label htmlFor="terms">I agree to the terms and conditions.</label>
//         </div>
//         {errors.terms && <p className="text-red-600">{errors.terms}</p>}

//         <button
//           type="submit"
//           className="bg-amber-400 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
