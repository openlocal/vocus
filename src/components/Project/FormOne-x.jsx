import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form';
import { Progress, InputGroup, InputGroupAddon, Col, Label, Form, FormGroup, Input, Button, FormFeedback, Alert } from 'reactstrap';

export const fields = ['name','funding','category','summary','description','reason','outcome1','outcome2','outcome3', ]



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

class FormOne extends Component {
  render() {
    const {
      fields: { name, summary, renderInput},
      handleSubmit
    } = this.props
    return (<form onSubmit={handleSubmit}>

      <div className="text-center">What are you waiting for?</div>
      <Progress multi>
        <Progress bar animated color="success" value="25">The Idea</Progress>
        <Progress bar animated color="info" value="25">The Community</Progress>
        <Progress bar animated color="info" value="25">Marketing</Progress>
        <Progress bar animated color="info" value="25">Go!</Progress>
      </Progress>

      <p>
      </p>

      <FormGroup>

        <label htmlFor="name">Idea Name</label>
        <Field name="name" component={renderInput} type="text" placeholder="Make it catchy!" {...name}/>

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
        <Field name="outcome1" component={renderInput} type="outcome1" placeholder="Hows it going to help the community?"/>
        <Field name="outcome2" component={renderInput} type="outcome2" placeholder="Outcome 2"/>
        <Field name="outcome3" component={renderInput} type="outcome3" placeholder="Outcome 3"/>

      </FormGroup>

      <div>
        <button type="submit">
          Next <i/>
        </button>
      </div>

    </form>
    )
  }
}

FormOne.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}


 export default reduxForm({
   form: 'wizard',
   fields,                      // <------ only fields on this page
   destroyOnUnmount: false,     // <------ preserve form data
   validate
 })(FormOne)



