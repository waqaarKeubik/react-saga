import React from 'react'
import { Col, FormGroup, Label, Input } from 'reactstrap';

const InputFile = ({label, handleInputFileChange, error, ...restProps}) => {

  const handleChange = (e) => {
    let data = {
      name: e.target.name,
      value: e.target.files[0]
    }
    handleInputFileChange(data);
  }

  return (
    <FormGroup row>
      <Label sm={4}>{label}</Label>
      <Col sm={8}>
        <Input
          onChange={handleChange}
          {...restProps}
          />
          {error && <span>{error}</span>}
      </Col>
    </FormGroup>
  )
}

export default InputFile;