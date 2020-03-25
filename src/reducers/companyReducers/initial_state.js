export const formInitialState = {
  company_information: {
    company_name: {
      input_val: '',
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 20
      }
    },
    company_logo: {
      input_val: '',
      required: true,
      type: File,
      condition: {
        min: 1,
        max: 20
      }
    }
  },
  contact_information: {
    email: {
      input_val: '',
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
      input_val: '',
      required: true,
      type: Number,
      condition: {
        min: 10,
        max: 10
      }
    },
    secondary_number: {
      input_val: '',
      required: true,
      type: Number,
      condition: {
        min: 10,
        max: 15
      }
    },
    authorized_contact: {
      input_val: '',
      required: true,
      type: Number,
      condition: {
        min: 10,
        max: 20
      }
    }
  },
  bank_details: {
    account_number: {
      input_val: '',
      required: true,
      type: Number,
      condition: {
        min: 15,
        max: 15
      }
    },
    bank_name: {
      input_val: '',
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 15
      }
    },
    ifsc_code: {
      input_val: '',
      required: true,
      type: String,
      condition: {
        min: 15,
        max: 15
      }
    },
    branch_name: {
      input_val: '',
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 50
      }
    }
  },
  mailing_address: {
    address_line_1: {
      input_val: '',
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 200
      }
    },
    address_line_2: {
      input_val: '',
      required: false,
      type: String,
      condition: {
        min: 1,
        max: 200
      }
    },
    city: {
      input_val: '',
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 25
      }
    },
    state: {
      input_val: '',
      required: true,
      type: String,
      condition: {
        min: 1,
        max: 30
      }
    },
    zip_code: {
      input_val: '',
      required: true,
      type: Number,
      condition: {
        min: 6,
        max: 6
      }
    },
  },
  errors: []
}