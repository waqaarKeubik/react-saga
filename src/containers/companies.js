import React, {useEffect} from 'react';
import { companiesListAction } from './../actions/companyAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import CompaniesList from './../components/companies/companies_list';
import {Row, Col} from 'reactstrap';

const Companies = (props) => {

  const { companiesListAction, companies, loading } = props;

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
      <h1>Companies</h1>
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
  loading: PropTypes.bool.isRequired,
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

const mapDispatchToProps = {companiesListAction}

function mapStateToProps(state) {
  return {
    companies: state.Company.companies,
    loading: state.Company.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);