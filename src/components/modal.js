import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ModalExample = ({modal, setModal, hideModal}) => {

  return (
 modal && 
    (<>
    <section className='password-modal' onClick={hideModal} >
    </section>
    <div className='faint-backdrop p-3 card'>
        <header class='fs-10 fw-bolder text-center'>Change Password</header>
        <Form>
      <FormGroup className='mb-3'>
        <Label for="exampleEmail">old password</Label>
        <Input  type='password' valid />
      </FormGroup>
      <FormGroup className='mb-3'> 
        <Label for="examplePassword">New Password</Label>
        <Input type='password' invalid />
      </FormGroup>
      <FormGroup className='mb-3'>
        <Label for="exampleEmail">Re-enter New Password</Label>
        <Input type='password' />
      </FormGroup>
      <Button onClick={()=>setModal(false)} outline color='primary'> Cancel</Button>  <Button color='primary'> Change</Button>
    </Form>
    </div>
     </> 
    )
   
    
  );
}

export default ModalExample;