import React from 'react';

import Login          from '../account/Login';
import Logout         from '../account/Logout';
import CreateAccount  from '../account/CreateAccount';
import ChangePassword from '../account/ChangePassword';
 


class Account extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
//
//  initialGallery(){
//    const swiper = new Swiper('.swiper-container', {
//        pagination: '.swiper-pagination',
//        paginationClickable: true,
//        nextButton: '.swiper-button-next',
//        prevButton: '.swiper-button-prev',
//        spaceBetween: 0,
//        autoplay: 6000,
//        autoplayDisableOnInteraction: true
//    });
//  }
      
  render() {
    return (
  
      <div id="Account">

        
        
        
        
        
        <section>
          { Meteor.user() ?
            <Logout/>
            :
            <Login/>
          }
          { Meteor.user() ?
            <ChangePassword/>
            :
            <CreateAccount/>
          }
        </section>
        
      </div>

    );
  }

};


export default Account;