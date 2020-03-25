import React from 'react';
import AddCompanyHoc from './../../../HOCs/add_company'
import InputText from './../../forms/InputText'
import { InputStringAction } from './../../../actions/companyAction'
import { connect } from 'react-redux';

const BankDetails = (props) => {
  
  let form_key = 'bank_details';
  const { form, InputStringAction, errors } = props;

  const handleInputTextChange = (data) => {
    const { name } = data;
    const object = {
      target: data,
      initialState: form[name],
      key: form_key
    }
    InputStringAction(object);
  }

  return (
    <div>
      <InputText 
        type="number"
        label="Account Number"
        name="account_number"
        placeholder="389238923******"
        handleInputTextChange={handleInputTextChange}
        value={form.account_number.input_val}
        />
      <InputText 
        type="text"
        label="Bank Name"
        name="bank_name"
        placeholder="Eg - ICICI"
        handleInputTextChange={handleInputTextChange}
        value={form.bank_name.input_val}
        />
      <InputText 
        type="text"
        label="IFSC Code"
        name="ifsc_code"
        placeholder="FG568HF**"
        handleInputTextChange={handleInputTextChange}
        value={form.ifsc_code.input_val}
        />
      <InputText 
        type="text"
        label="Branch Name"
        name="branch_name"
        placeholder="Mumbai central"
        handleInputTextChange={handleInputTextChange}
        value={form.branch_name.input_val}
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