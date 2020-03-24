import React from 'react';
import AddCompanyHoc from './../../../HOCs/add_company'
import InputText from './../../forms/InputText'
import { InputStringAction } from './../../../actions/companyAction'
import { connect } from 'react-redux';

const ContactInformation = (props) => {

  let form_key = 'contact_information';
  const { form, InputStringAction, errors } = props;

  const initialState = {
    email: {
      input_val: form.email,
      required: true,
      type: {
        name: 'Email'
      },
      condition: {
        min: 1,
        max: 20
      }
    },
    contact_number: {
      input_val: form.contact_number,
      required: true,
      type: Number,
      condition: {
        min: 10,
        max: 10
      }
    },
    secondary_number: {
      input_val: form.secondary_number,
      required: true,
      type: Number,
      condition: {
        min: 10,
        max: 15
      }
    },
    authorized_contact: {
      input_val: form.authorized_contact,
      required: true,
      type: Number,
      condition: {
        min: 10,
        max: 20
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
        label="Email Address"
        name="email"
        placeholder="john@unifynd.com"
        handleInputTextChange={handleInputTextChange}
        value={initialState.email.input_val}
        />

      <InputText 
        type="number"
        label="Contact Number"
        name="contact_number"
        placeholder="98779889**"
        handleInputTextChange={handleInputTextChange}
        value={initialState.contact_number.input_val}
        />

      <InputText 
        type="number"
        label="Secondary Number"
        name="secondary_number"
        placeholder="98779889**"
        handleInputTextChange={handleInputTextChange}
        value={initialState.secondary_number.input_val}
        />

      <InputText 
        type="number"
        label="Authorized Contact"
        name="authorized_contact"
        placeholder="98779889**"
        handleInputTextChange={handleInputTextChange}
        value={initialState.authorized_contact.input_val}
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
