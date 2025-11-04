import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CasteWiseSearchList({casteName}) {

    const [showPartner, setShowPartner] = useState(true)

    const showPartnerButton = (value) => {
      if(value === 1){
        setShowPartner(false)
      } else {
        setShowPartner(true)
      }

    }

  return (
    <>
     <div className="astroDetailsWrap detailbdrcont">
  <div className="navWrapper">
    <ul className="navcontaienr gap-2 d-flex flex-wrap justify-content-center">
      <li>
        {" "}
        <Link className={`navibtn ${showPartner ? 'active':''}`} data-target="#detpro" to="#" onClick={() => showPartnerButton(0)}>
          {" "}
          <img src="assets/img/femalee.png" alt="" style={{width:'25px'}} /> {casteName} Brides{" "}
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link className={`navibtn ${showPartner ? '':'active'}`} data-target="#parterpre" to="#" onClick={() => showPartnerButton(1)}>
          {" "}
          <img src="assets/img/malee.png" alt="" style={{width:'25px'}} /> {casteName} Grooms{" "}
        </Link>{" "}
      </li>
    </ul>
  </div>


  {showPartner && 
  <div className="sectionTop tabContentBox" id="detpro">
    Brides

  </div> 
  }

  {!showPartner && 
  <div className="sectionTop tabContentBox" id="parterpre">
     Grooms
    
   </div>
  }



  </div>
    </>
  )
}

export default CasteWiseSearchList
