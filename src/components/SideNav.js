import React from 'react'
import {MdMenu} from 'react-icons/md'
import {RiDashboardLine, RiSettings5Fill, RiUser3Fill} from 'react-icons/ri'
import IconText from './IconText'
import { } from 'reactstrap'

function SideNav() {
    return (
                   <>
                    <p className='mb-4 fw-bold'> Hope Voice .</p>
                   <IconText className='mt-4' text='Dashboard'>
                       <RiDashboardLine />
                   </IconText>
                   <IconText text='Orders'>
                       <MdMenu />
                   </IconText>
                   <IconText text='Finance'>
                       <MdMenu />
                   </IconText>
                   <IconText text='Inventory'>
                       <MdMenu />
                   </IconText>
                   <IconText text='Customers'>
                       <RiUser3Fill />
                   </IconText>
                   <IconText text='Coupon Codes'>
                       <RiUser3Fill />
                   </IconText>
                   <IconText text='Users'>
                       <RiUser3Fill />
                   </IconText>
                   <IconText text='Settings'>
                       <RiSettings5Fill />
                   </IconText>
                   </>
    )
    }
export default SideNav
