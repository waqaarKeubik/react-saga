import React from 'react'
import { Col, FormGroup, Label, Input } from 'reactstrap';

const InputFile = ({type, label, name, placeholder, handleInputFileChange}) => {

  const handleChange = (e) => {
    let file = e.target.files[0];
    if (file) handleInputFileChange(file);
  }

  return (
    <FormGroup row>
      <Label sm={4}>{label}</Label>
      <Col sm={8}>
        <Input 
          type={type} 
          name={name} 
          placeholder={placeholder}
          onChange={handleChange}
          />
      </Col>
    </FormGroup>
  )
}

export default InputFile;