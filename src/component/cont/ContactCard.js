import React from 'react'
// import user from"../image/user.png";

const ContactCard = (props) => {
    const {id, name, number}=
        props.contact;
    
  return (
    <div className='each-item'>
        
        {/* <img className='avtar'  src={user} alt ="user" /> */}
        <div className='item'>
           <div className='item-name'>{name}</div>
           <div className='item-number'>{number}</div>
           <i className="far fa-trash-alt add-btn" onClick={()=>props.clickHandler(id)}></i> 
        </div>

  
   
</div>
  )
}

export default ContactCard;