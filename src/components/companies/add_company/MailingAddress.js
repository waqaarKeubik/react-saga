import React from 'react';
import AddCompanyHoc from './../../../HOCs/add_company'
import InputText from './../../forms/InputText'
import { InputStringAction } from './../../../actions/companyAction'
import { connect } from 'react-redux';

const MailingAddress = (props) => {

  let form_key = 'mailing_address';
  const { form, InputStringAction, errors } = props;

  const initialState = {
    address_line_1: {
      input_val: form.address_line_1,
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 200
      }
    },
    address_line_2: {
      input_val: form.address_line_2,
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 200
      }
    },
    city: {
      input_val: form.city,
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 25
      }
    },
    state: {
      input_val: form.state,
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 30
      }
    },
    zip_code: {
      input_val: form.zip_code,
      required: true,
      type: Number,
      condition: {
        min: 6,
        max: 6
      }
    },
  }

  const handleInputTextChange = async (data) => {
    const { name } = data;
    const object = {
      target: data,
      initialState: initialState[name],
      key: form_key
    }
    InputStringAction(object);
  }

  return (
    <div>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <InputText 
        type="text"
        label="Address Line 1"
        name="address_line_1"
        placeholder="Eg - 3/4 Sosade road"
        handleInputTextChange={handleInputTextChange}
        value={initialState.address_line_1.input_val}
        />
      <InputText 
        type="text"
        label="Address Line 2"
        name="address_line_2"
        placeholder="Eg - Near Store"
        handleInputTextChange={handleInputTextChange}
        value={initialState.address_line_2.input_val}
        />
      <InputText 
        type="text"
        label="City"
        name="city"
        placeholder="Mumbai"
        handleInputTextChange={handleInputTextChange}
        value={initialState.city.input_val}
        />
      <InputText 
        type="text"
        label="State"
        name="state"
        placeholder="Maharashtra"
        handleInputTextChange={handleInputTextChange}
        value={initialState.state.input_val}
        />
      <InputText 
        type="number"
        label="Zip Code"
        name="zip_code"
        placeholder="400008"
        handleInputTextChange={handleInputTextChange}
        value={initialState.zip_code.input_val}
        />
    </div>
  )
}

const mapDispatchToProps = { InputStringAction };

function mapStateTopProps (state) {
  return {
    form: state.Company.form.mailing_address,
    errors: state.Company.form.errors
  }
}

export default AddCompanyHoc('Mailing Address', connect(mapStateTopProps, mapDispatchToProps)(MailingAddress));