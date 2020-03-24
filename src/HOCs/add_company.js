import React from 'react';
import './../assets/css/add_company.css';

const AddCompanyHoc = (heading, OriginalComponent) => {
  const WrappedComponent = () => {
    return (
      <div className="add-company">
        <div className="heading">
          <h6>{heading}</h6>
        </div>
        <div className="body">
          <OriginalComponent />
        </div>
      </div>
    )
  }

  return WrappedComponent;
}

export default AddCompanyHoc;