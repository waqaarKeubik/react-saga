import React from 'react';
import AddCompanyHoc from './../../../HOCs/add_company'
import InputText from './../../forms/InputText'
import { InputStringAction } from './../../../actions/companyAction'
import { connect } from 'react-redux';

const ContactInformation = (props) => {

  let form_key = 'contact_information';
  const { form, InputStringAction, errors } = props;

  const handleInputTextChange = async (data) => {
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
        type="text"
        label="Email Address"
        name="email"
        placeholder="john@unifynd.com"
        handleInputTextChange={handleInputTextChange}
        value={form.email.input_val}
        />

      <InputText 
        type="number"
        label="Contact Number"
        name="contact_number"
        placeholder="98779889**"
        handleInputTextChange={handleInputTextChange}
        value={form.contact_number.input_val}
        />

      <InputText 
        type="number"
        label="Secondary Number"
        name="secondary_number"
        placeholder="98779889**"
        handleInputTextChange={handleInputTextChange}
        value={form.secondary_number.input_val}
        />

      <InputText 
        type="number"
        label="Authorized Contact"
        name="authorized_contact"
        placeholder="98779889**"
        handleInputTextChange={handleInputTextChange}
        value={form.authorized_contact.input_val}
        />
    </div>
  )
}

const mapDispatchToProps = { InputStringAction };

function mapStateTopProps (state) {
  return {
    form: state.Company.form.contact_information,
    errors: state.Company.form.errors
  }
}

export default AddCompanyHoc('Contact Information', connect(mapStateTopProps, mapDispatchToProps)(ContactInformation));
