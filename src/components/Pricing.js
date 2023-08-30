import React from 'react'
import priceImg from '../images/pricing/desktop/hero.jpg'
import priceImgM from '../images/pricing/mobile/hero.jpg'
import priceImgT from '../images/pricing/tablet/hero.jpg'
import check from '../images/pricing/desktop/check.svg'

const plan = (e) =>{
    var planm = document.querySelector('.b-m')
    var plany = document.querySelector('.b-y')
    var proplanm = document.querySelector('.p-m')
    var proplany = document.querySelector('.p-y')
    var busplanm = document.querySelector('.bus-m')
    var busplany = document.querySelector('.bus-y')
    var basicPricem = document.querySelector('.basic-m') 
    var basicPricey = document.querySelector('.basic-y') 
    var proPricem = document.querySelector('.pro-m') 
    var proPricey = document.querySelector('.pro-y') 
    var businessPricem = document.querySelector('.business-m') 
    var businessPricey = document.querySelector('.business-y') 
    if(e.target.checked){
        basicPricem.classList.add('active')
        basicPricey.classList.remove('active')
        proPricem.classList.add('active')
        proPricey.classList.remove('active')
        businessPricem.classList.add('active')
        businessPricey.classList.remove('active')

        planm.classList.add('active')
        plany.classList.remove('active')
        proplanm.classList.add('active')
        proplany.classList.remove('active')
        busplanm.classList.add('active')
        busplany.classList.remove('active')
    }
    else{
        basicPricem.classList.remove('active')
        basicPricey.classList.add('active')
        proPricem.classList.remove('active')
        proPricey.classList.add('active')
        businessPricem.classList.remove('active')
        businessPricey.classList.add('active')
        planm.classList.remove('active')
        plany.classList.add('active')
        proplanm.classList.remove('active')
        proplany.classList.add('active')
        busplanm.classList.remove('active')
        busplany.classList.add('active')
    }
}

function Price() {
  return (
    <>
    <main className='price-page'>
        <div className='price-con'>
            <div className='price-text'>
                <h1>Pricing</h1>
                <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
            </div>
            <div className='price-img'>
                <img className='priceimg-d' src={priceImg} alt='price hero' />
                <img className='priceimg-m' src={priceImgM} alt='price hero' />
                <img className='priceimg-t' src={priceImgT} alt='price hero' />
            </div>
        </div>
        <section className='pricing'>
           <div className='pricing-toggle'>
           <h3 className='monthly'>Monthly</h3>
        <label className="switch">
            <input type="checkbox" className='checkbox' onChange={plan}/>
            <span className="slider round"></span>
        </label>
        <h3 className='yearly'>Yearly</h3>
           </div>
           <div className='plans-wrapper'>
                <div className='basic'>
                    <h2>Basic</h2>
                    <p className='pkg-details'>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                    <h1 className='price basic-m'>$ 19.00</h1>
                    <h1 className='price basic-y active'>$ 199.00</h1>
                    <p className='plan-type b-m'>per month</p>
                    <p className='plan-type b-y active'>per year</p>
                    <button>pick plan</button>
                </div>
                <div className='pro'>
                    <h2>Pro</h2>
                    <p className='pkg-details'>More advanced features available. Recommended for photography veterans and professionals.</p>
                    <h1 className='price pro-m'>$ 39.00</h1>
                    <h1 className='price pro-y active'>$ 390.00</h1>
                    <p className='plan-type p-m'>per month</p>
                    <p className='plan-type p-y active'>per year</p>
                    <button>pick plan</button>
                
                </div>
                <div className='business'>
                <h2>Business</h2>
                    <p className='pkg-details'>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                    <h1 className='price business-m'>$ 99.00</h1>
                    <h1 className='price business-y active'>$ 990.00</h1>
                    <p className='plan-type bus-m'>per month</p>
                    <p className='plan-type bus-y active'>per year</p>
                    <button>pick plan</button>
                </div>
           </div>
        </section>
        <section className='compare'>
            <h1>compare</h1>
            <table>
                <tr>
                    <th>the features</th>
                    <th>basic</th>
                    <th>pro</th>
                    <th>business</th>
                </tr>
                <tr>
                    <td>UNLIMITED STORY POSTING</td>
                    <td><img src={check} /></td>
                    <td><img src={check} /></td>
                    <td><img src={check} /></td>
                </tr>
                <tr>
                    <td>UNLIMITED PHOTO UPlLOAD</td>
                    <td><img src={check} /></td>
                    <td><img src={check} /></td>
                    <td><img src={check} /></td>
                </tr>
                <tr>
                    <td>EMBEDDING CUSTOM CONTENT</td>
                    <td></td>
                    <td><img src={check} /></td>
                    <td><img src={check} /></td>
                </tr>
                <tr>
                    <td>CUSTOMIZE METADATA</td>
                    <td></td>
                    <td><img src={check} /></td>
                    <td><img src={check} /></td>
                </tr>
                <tr>
                    <td>ADVANCED METRICS</td>
                    <td></td>
                    <td></td>
                    <td><img src={check} /></td>
                </tr>
                <tr>
                    <td>PHOTO DOWNLOADS</td>
                    <td></td>
                    <td></td>
                    <td><img src={check} /></td>
                </tr>
                <tr>
                    <td>SEARCH ENGINE INDEXING</td>
                    <td></td>
                    <td></td>
                    <td><img src={check} /></td>
                </tr>
                <tr>
                    <td>CUSTOM ANALYTICS</td>
                    <td></td>
                    <td></td>
                    <td><img src={check} /></td>
                </tr>
            </table>
        </section>
    </main>
    </>
  )
}

export default Price