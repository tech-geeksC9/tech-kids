import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
function Cards() {
  return (
    <div >
      <h1 style={{fontFamily:"cursive",marginTop:"90px"}} className="courseCrard">Our Courses!</h1>
      <div className='cards__container'             
>
        <div className='cards__wrapper' >
          <ul className='cards__items'>
          </ul>
          <ul className='cards__items'  
 >
            <CardItem 
              src='https://www.flaticon.com/premium-icon/icons/svg/377/377306.svg'
              text='HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. '
              label='HTML Free'
              path='/html-des'
              style={{marginRight:"2000px"}}
            />
              <CardItem
              src='https://www.flaticon.com/svg/static/icons/svg/977/977511.svg'
              text='CSS (Cascading Style Sheets) is the code that styles web content. CSS basics walks through what you need to get started. '
              label='CSS Free'
              path='/css-des'
            />
          <CardItem
              src='https://www.flaticon.com/svg/static/icons/svg/1165/1165730.svg'
              text='check out our new courses from Elete teachers only.'
              label='New Courses'
              path='/teacher/card'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;