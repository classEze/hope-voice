import React, {useState} from 'react'
import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri'
import { Card, Button } from 'reactstrap'
import ModalExample from './modal'

const PersonalInformation = () => {
    const [modal, setModal] = useState(false)
    const hideModal = (e) => {
        if(e.target.tagName === 'SECTION' ) setModal(false)
    }
  
    return (
       <Card className='w-90 mx-auto rounded-0 p-3 mb-3 position-relative'>
          <span className='fw-bolder'> Personal Information </span>
    <main className='d-flex justify-content-between align-items-center'>
    <section className='card-user-info d-flex flex-column'>
        <div className='d-flex fw-bold '>
            <aside>
            <span className='text-muted'>First Name</span><br/>
            Samuel
            </aside>
            <aside>
            <span className='text-muted'>Last Name</span><br/>
            Chukwudi
            </aside>
            <aside>
            <span className='text-muted'>Account Type</span><br/>
            Tailor
            </aside>
        </div>

         <hr />

        <div className='d-flex fw-bold '>
            <aside>
            <span className='text-muted'>Phone No</span><br/>
            2348120987654
            </aside>
            <aside>
            <span className='text-muted'>Password</span><br/>
            ..........
            </aside>
            <aside>
            <Button onClick={()=>setModal(true)} outline color="primary" size='sm'>Change Password</Button>
            </aside>
        </div>
        </section>
        <section className='d-flex flex-column align-items-center'>
            <img className='profile-image rounded-circle' src='image.png' alt='profile' />
           <figure className='edit-profile-icons-wrapper text-muted h1 mt-1'> 
               <RiEdit2Line/>
               <RiDeleteBin2Line/>
           </figure>
        </section>
          </main>
          <ModalExample modal={modal} hideModal={hideModal} setModal={setModal}/>
       </Card>
    )
}
export default PersonalInformation
