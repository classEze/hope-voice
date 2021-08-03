import React, {useState} from 'react'
import { RiCloudFill, RiNotification2Fill, RiStopMiniFill, RiUser2Fill } from 'react-icons/ri'
import {Popover, PopoverBody, Button} from 'reactstrap'


const HeaderArea = () => {
    const [isOpenn,setisOpenn] = useState(false)
    const [isOpenu,setisOpenu] = useState(false)
    const [notifications,setNotifications] = useState(0)

    const toggleu= () => {setisOpenu(!isOpenu)}
    const togglen= () => {setisOpenn(!isOpenn)}

return (
<div className='header d-flex align-items-center justify-content-end m-4'>
<span className='fw-bolder'>The hardware City</span>

<div>
<Button id='bread' type='button'>
<RiCloudFill className='bg-blue blue-text'
/>
</Button>
</div>

<div>
<Button id='notification' type='button'>
<RiNotification2Fill/>
</Button>
  <Popover
    placement="bottom"
    isOpen={isOpenn}
    target="notification"
    toggle={togglen}
  >
    {notifications === 0 ? 
        <PopoverBody>
            <div className='d-flex flex-column align-items-center'>
            <span><RiNotification2Fill className='bg-grey rounded-circle' size='40'/> </span>
            <span>No notifications</span>
            <span className='fs-10'> All your Hope Voice business notifications will show up here </span>
            </div>

        </PopoverBody>
    
    :
    <PopoverBody>
    <div className=' d-flex pb-2 border-bottom'>
        <RiStopMiniFill/>
        <p className='ms-2 mt-0'>
         Text paragraph yeah this is a text paragraph<br />
         Time
        </p> 
        </div>
    </PopoverBody>

}
  </Popover>
</div>
<div>
<Button id='user' type='button'>
<RiUser2Fill/>
</Button>
  <Popover
    placement="bottom"
    isOpen={isOpenu}
    target="user"
    toggle={toggleu}
  >
    <PopoverBody className='p-3'>
        <aside> 
            <div className='fw-bolder'>Number</div>
            <div className='text-muted mb-2 fs-10'>Role </div> 
            
        </aside>
        <Button className='bg-grey text-primary w-100 mb-2 d-block' size='sm'> Profile </Button>
        <Button outline className='d-block w-100' size='sm' > Sign Out</Button>

    </PopoverBody>
  </Popover>
</div>
    </div>
    )
}

export default HeaderArea
