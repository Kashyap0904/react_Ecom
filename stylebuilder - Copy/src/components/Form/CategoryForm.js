import React from "react";
import "../../styles/createCategory.css";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {/* <button type="submit" className="submit-button">
          Submit
        </button> */}
        <button type="submit" className="button">
          <span className="button__text">Add</span>
          <span className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              height={24}
              fill="none"
              className="svg"
            >
              <line y2={19} y1={5} x2={12} x1={12} />
              <line y2={12} y1={12} x2={19} x1={5} />
            </svg>
          </span>
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
