import React from 'react';
import AddCompanyHoc from './../../../HOCs/add_company'
import InputText from './../../forms/InputText'
import InputFile from './../../forms/InputFile'
import { connect } from 'react-redux';
import { InputStringAction, InputFileAction } from './../../../actions/companyAction'

const CompanyInformation = (props) => {

  let form_key = 'company_information';
  const { form, InputStringAction, errors } = props;

  const initialState = {
    company_name: {
      input_val: form.company_name,
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 20
      }
    },
    company_logo: {
      input_val: form.company_logo,
      required: true
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
  const handleInputFileChange = (file) => {
    console.log(file);
    let object = {
      data: file,
      key: form_key
    }
    InputFileAction(object);
  }

  return (
    <div>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <InputText 
        type="text"
        label="Company name"
        name="company_name"
        placeholder="Unifynd Technologies"
        handleInputTextChange={handleInputTextChange}
        value={initialState.company_name.input_val}
        />
      <InputFile
        type="file"
        label="Company logo"
        name="company_logo"
        placeholder="Company logo"
        handleInputFileChange={handleInputFileChange}
        />
    </div>
  )
}

const mapDispatchToProps = { InputStringAction, InputFileAction };

function mapStateTopProps (state) {
  return {
    form: state.Company.form.company_information,
    errors: state.Company.form.errors
  }
}

export default AddCompanyHoc('Company Information', connect(mapStateTopProps, mapDispatchToProps)(CompanyInformation));
