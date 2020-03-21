import React, {useEffect} from 'react';
import { companiesListAction } from './../actions/companyAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import CompaniesList from './../components/companies/companies_list';
import {Row, Col} from 'reactstrap';

const Companies = (props) => {

  const { companiesListAction, Company } = props;
  const { loading, companies } = Company;
 
  useEffect(() => {
    companiesListAction()
  }, []);

  const loadCompanies = () => {
    return (
      <Row>
        {
          companies.map((company, index) => {
            return (
              <Col sm={3} key={company.id}>
                <CompaniesList company={company} key={company.id} />
              </Col>
            )
          })
        }
      </Row>
    )
  } 

  return (
    <>
      <h4>Companies</h4>
      {
        loading
          ? 
          'Loading' 
          : 
          loadCompanies()
      }
    </>
  )
}

Companies.propTypes = {
  companiesListAction: PropTypes.func.isRequired,
  loadCompanies: PropTypes.func,
  Company: PropTypes.shape({
    companies: PropTypes.arrayOf(
      PropTypes.shape({
          albumId: PropTypes.number.isRequired,
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          thumbnailUrl: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
    loading: PropTypes.bool.isRequired
  })
}

const mapDispatchToProps = {companiesListAction}

function mapStateToProps(state) {
  return {
    Company: state.Company
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);