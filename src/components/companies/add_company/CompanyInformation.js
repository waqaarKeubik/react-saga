import React from 'react';
import AddCompanyHoc from './../../../HOCs/add_company'
import InputText from './../../forms/InputText'
import InputFile from './../../forms/InputFile'
import { connect } from 'react-redux';
import { InputStringAction } from './../../../actions/companyAction';
import { showInputFieldError } from './../../../utils/common';

const CompanyInformation = (props) => {

  let form_key = 'company_information';
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
  const handleInputFileChange = (file) => {
    let name = file.name;
    const data = {
      name: name,
      value: file.value ? file.value : ''
    }
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
        type="text"
        label="Company name"
        name="company_name"
        placeholder="Unifynd Technologies"
        error={showInputFieldError(errors, 'company_name')}
        handleInputTextChange={handleInputTextChange}
        value={form.company_name.input_val}
        />

      <InputFile
        type="file"
        label="Company logo"
        name="company_logo"
        placeholder="Company logo"
        error={showInputFieldError(errors, 'company_logo')}
        handleInputFileChange={handleInputFileChange}
        />
    </div>
  )
}

const mapDispatchToProps = { InputStringAction };

function mapStateTopProps (state) {
  return {
    form: state.Company.form.company_information,
    errors: state.Company.form.errors
  }
}

export default AddCompanyHoc('Company Information', connect(mapStateTopProps, mapDispatchToProps)(CompanyInformation));
