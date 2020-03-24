import React from 'react';
import {Row, Col} from 'reactstrap';
import CompanyInformation from './../components/companies/add_company/CompanyInformation'
import ContactInformation from './../components/companies/add_company/ContactInformation'
import BankDetails from './../components/companies/add_company/BankDetails'
import MailingAddress from './../components/companies/add_company/MailingAddress'

const AddCompanyContainer = () => {

  return (
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
  )
}

export default AddCompanyContainer;