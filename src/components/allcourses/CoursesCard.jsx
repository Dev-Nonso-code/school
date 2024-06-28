import React from "react"
import "./courses.css"
// import { useNavigate } from "react-router-dom"
import { coursesCard, price } from "../../dummydata"
// import {coursesCard.priceAll} from "../../dummydata"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';   


const CoursesCard = (val) => {
 // let navigate = useNavigate()
// let priceAll = courseCard.priceAll
const config = {
  
    public_key: 'FLWPUBK-TEST-38ff9144bcb3581d755ae013f575a9a2-X',
    tx_ref: Date.now().toString(),
    amount: price,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    redirect_url: "https://google.com",
    customer: {
      email: 'acreekane@gmail.com',
       phone_number: '09130521416',
      name: 'john doe',
    },
    customizations: {
      title: 'my Google School',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config, val);

  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='onh' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className="bi bi-star icon"></i>
                    <i className='bi bi-star icon'></i>
                    <i className='bi bi-star icon'></i>
                    <i className='bi bi-star icon'></i>
                    <i className='bi bi-star icon'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn' onClick={(priceAll) => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
              ENROLL NOW</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
