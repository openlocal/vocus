import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Progress, InputGroup, InputGroupAddon, Col, Label, Form, FormGroup, Input, Button, FormFeedback, Alert } from 'reactstrap';
import cx from 'classnames';

class renderInput extends React.PureComponent {
  componentDidMount() {
  }

  render() {
    const {
      input,
      placeholder,
      type,
      meta: {
        touched,
        error,
      },
    } = this.props;

    const classes = cx({
      success: touched && !error,
      danger: touched && error,
    });

    return (
      <FormGroup color={classes}>
        <Input {...input} type={type} placeholder={placeholder} state={classes} />
        {touched && error && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>
    );
  }
}

const Login = props => {
  const { handleSubmit, submitState, errors } = props;
  return (
    <Form onSubmit={handleSubmit}>

      <div className="text-center">What are you waiting for?</div>
      <Progress multi>
        <Progress bar animated color="success" value="25">The Idea</Progress>
        <Progress bar animated color="info" value="25">The Community</Progress>
        <Progress bar animated color="info" value="25">Communication</Progress>
        <Progress bar animated color="info" value="25">Go!</Progress>


      </Progress>

      <p>
      </p>

      <FormGroup>
        <label htmlFor="name">Idea Name</label>
        <Field name="name" component={renderInput} type="name" placeholder="Make it catchy!" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="funding">Crowd Funding Target $$$</label>
        <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <Input placeholder="cashhh money" type="number" step="1" />
          <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
      </FormGroup>


      <FormGroup>
        <label for="category">Category</label>
        <Input type="select" name="select" id="category">
          <option>Community Spirit</option>
          <option>Sport & Activity</option>
          <option>Cultural Impact</option>
          <option>Infrastructure</option>
          <option>Music</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <label htmlFor="summary">Provide a short summary</label>
        <Field name="summary" component={renderInput} type="summary" placeholder="Whats your awesome idea?" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="description"> Description</label>

        <Input type="textarea" name="text" id="description" placeholder="Talk about what you want to do and how you're going to achieve it!"/>

      </FormGroup>



      <FormGroup>
        <label htmlFor="reason">Why is this a good idea?</label>
        <Field name="reason" component={renderInput} type="reason" placeholder="In one sentence or less"/>
      </FormGroup>

      <FormGroup>
        <label htmlFor="outcome">Final Outcomes</label>
        <Field name="outcome" component={renderInput} type="outcome" placeholder="Hows it going to help the community?"/>
      </FormGroup>




      { errors && errors.status === 401 &&
      <Alert color="danger">
        <span> Hm, that isn&apos;t be quite right. </span>
        <br />
        <span> Please double-check and try again. </span>
      </Alert>}
      <Button color="primary">
        { submitState ? <span> <i className="fa fa-refresh fa-spin" /> </span> : 'Next' }
      </Button>
    </Form>
  );
};

const LoginForm = reduxForm({
  form: 'Login', // a unique name for this form
})(Login);


export default LoginForm;