import React from 'react';
import {Row, Col, Form} from 'reactstrap';
import CompanyInformation from './../components/companies/add_company/CompanyInformation'
import ContactInformation from './../components/companies/add_company/ContactInformation'
import BankDetails from './../components/companies/add_company/BankDetails'
import MailingAddress from './../components/companies/add_company/MailingAddress'
import CustomButton from '../components/buttons/CustomButton';
import { connect } from 'react-redux';
import { addCompanyAction } from './../actions/companyAction'

const AddCompanyContainer = (props) => {

  const { form, addCompanyAction } = props;

  const onSubmit = async (e) => {
    e.preventDefault();
    addCompanyAction(form)
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col sm={6}>
            <CompanyInformation/>
            <ContactInformation/>
            <BankDetails/>
          </Col>
          <Col sm={6}>
            <MailingAddress/>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <CustomButton
              type="submit"
              name="Submit" 
              color="primary"
              size="sm"/>
          </Col>
        </Row>
      </Form>
    </>
  )
}

const mapDispatchTopProps = { addCompanyAction };

function mapStateToProps (state) {
  return {
    form: state.Company.form,
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(AddCompanyContainer);