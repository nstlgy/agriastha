import React, { useState } from "react";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    specialization: "",
    dateOfBirth: "",
    officialAddress: "",
    correspondingAddress: "",
    email: "",
    contactNo: "",
    paymentMethod: "DD",
    transactionId: "",
    amount: 500,
    date: "",
    bankName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-10">
            <h1 className="text-3xl font-bold mb-2 text-center text-green-800">
              AGRIASTHA - MEMBERSHIP FORM
            </h1>
            <h2 className="text-xl mb-6 text-center text-gray-700">
              Society of Human Resource and Innovation
            </h2>
            <div className="text-center mb-8 text-gray-600">
              <p>812, Paschimpuri, Agra -282007</p>
              <p>E-mail: <a href="mailto:agriastha@gmail.com" className="text-green-600 hover:underline">agriastha@gmail.com</a></p>
              <p>Mob. 09806710726, 7000232700, 09837650525</p>
              <p><a href="http://www.agriastha.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">www.agriastha.com</a></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  label="1. Name of applicant (Capital letters)"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="2. Designation"
                    name="designation"
                    type="text"
                    value={formData.designation}
                    onChange={handleChange}
                  />
                  <FormField
                    label="3. Specialization"
                    name="specialization"
                    type="text"
                    value={formData.specialization}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">4. Date of birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">
                    5. Official address (Capital letters)
                  </label>
                  <textarea
                    name="officialAddress"
                    value={formData.officialAddress}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows="3"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block mb-2">6. Corresponding address</label>
                  <textarea
                    name="correspondingAddress"
                    value={formData.correspondingAddress}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows="3"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Contact No</label>
                    <input
                      type="tel"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="DD">DD</option>
                    <option value="Internet Banking">Internet Banking</option>
                    <option value="Paytm">Paytm</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2">DD No/ Transaction ID</label>
                    <input
                      type="text"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Amount</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Name of the bank</label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>

                <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700">
                    Payment should be made by DD/ internet banking in favour of "Society
                    of Human Resource and Innovation" payable at Agra, "Punjab National
                    Bank" Shastripuram, Agra- 282007 U.P. Account No. -
                    4955000100011651, IFS Code- 0495500, Payment can also be made by
                    Paytm on +91 9806710726
                  </p>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Update the FormField component
const FormField = ({ label, name, type, value, onChange, required, ...props }) => (
  <div>
    <label htmlFor={name} className="block mb-2 font-medium text-gray-700">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        required={required}
        {...props}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        required={required}
        {...props}
      />
    )}
  </div>
);

export default MembershipForm;