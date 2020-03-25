import React from 'react'
import { Col, FormGroup, Label, Input } from 'reactstrap';


const InputText = ({label, handleInputTextChange, error, ...restProps}) => {

  const handleChange = (e) => {
    const {name, value} = e.target;
    let data = {name, value};
    handleInputTextChange(data);
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

export default InputText;
