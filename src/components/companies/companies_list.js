import React from 'react';
import PropTypes from 'prop-types'
import {
  Card, CardImg, CardBody,
  CardTitle
} from 'reactstrap';

const CompaniesList = ({company}) => {

  return (
    <Card>
      <CardImg top width="100%" src={company.thumbnailUrl} alt="Card image cap" />
      <CardBody>
        <CardTitle>{company.title}</CardTitle>
      </CardBody>
    </Card>
  )
}

CompaniesList.propTypes = { // don't know if we need to check types again
  company: PropTypes.shape({
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  })
}

export default CompaniesList;