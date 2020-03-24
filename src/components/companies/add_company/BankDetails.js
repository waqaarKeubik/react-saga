import React from 'react';
import AddCompanyHoc from './../../../HOCs/add_company'
import InputText from './../../forms/InputText'
import { InputStringAction } from './../../../actions/companyAction'
import { connect } from 'react-redux';

const BankDetails = (props) => {
  
  let form_key = 'bank_details';
  const { form, InputStringAction, errors } = props;

  const initialState = {
    account_number: {
      input_val: form.account_number,
      required: true,
      type: Number,
      condition: {
        min: 15,
        max: 15
      }
    },
    bank_name: {
      input_val: form.bank_name,
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 15
      }
    },
    ifsc_code: {
      input_val: form.ifsc_code,
      required: true,
      type: String,
      condition: {
        min: 15,
        max: 15
      }
    },
    branch_name: {
      input_val: form.branch_name,
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 50
      }
    }
  }

  const handleInputTextChange = (data) => {
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
        type="number"
        label="Account Number"
        name="account_number"
        placeholder="389238923******"
        handleInputTextChange={handleInputTextChange}
        value={initialState.account_number.input_val}
        />
      <InputText 
        type="text"
        label="Bank Name"
        name="bank_name"
        placeholder="Eg - ICICI"
        handleInputTextChange={handleInputTextChange}
        value={initialState.bank_name.input_val}
        />
      <InputText 
        type="text"
        label="IFSC Code"
        name="ifsc_code"
        placeholder="FG568HF**"
        handleInputTextChange={handleInputTextChange}
        value={initialState.ifsc_code.input_val}
        />
      <InputText 
        type="text"
        label="Branch Name"
        name="branch_name"
        placeholder="Mumbai central"
        handleInputTextChange={handleInputTextChange}
        value={initialState.branch_name.input_val}
        />
    </div>
  )
}

const mapDispatchToProps = { InputStringAction };

function mapStateTopProps (state) {
  return {
    form: state.Company.form.bank_details,
    errors: state.Company.form.errors
  }
}

export default AddCompanyHoc('Bank Details', connect(mapStateTopProps, mapDispatchToProps)(BankDetails));