import React from 'react'
import featureHero from'../images/features/desktop/hero.jpg'
import featureHeroT from'../images/features/tablet/hero.jpg'
import featureHeroM from'../images/features/mobile/hero.jpg'
import responsive from'../images/features/desktop/responsive.svg'
import noLimit from'../images/features/desktop/no-limit.svg'
import embed from'../images/features/desktop/embed.svg'
import boostExposure from'../images/features/desktop/boost-exposure.svg'
import customDomain from'../images/features/desktop/custom-domain.svg'
import dragDrop from'../images/features/desktop/drag-drop.svg'
import arrow from '../images/shared/desktop/arrow.svg'

function Features() {
  return (
   <>
    <main className='features-page'>
    <div className='feature-card-wrapper'>
        <div className='feature-card'>
            <h1>features</h1>
            <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
            <div className='feature-bar'></div>
        </div>
            <img className='feature-hero' src={featureHero} alt='Hero img' />
            <img className='feature-hero-t' src={featureHeroT} alt='Hero img' />
            <img className='feature-hero-m' src={featureHeroM} alt='Hero img' />
        
    </div>
    <section className='features'>
            <div className='feature-wrapper'>
                <img src={responsive} alt='responsive' />
                <h3>100% Responsive</h3>
                <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
            </div>
            <div className='feature-wrapper'>
                <img src={noLimit} alt='responsive' />
                <h3>No Photo Upload Limit</h3>
                <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
            </div>
            <div className='feature-wrapper'>
                <img src={embed} alt='responsive' />
                <h3>Available to Embed</h3>
                <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.</p>
            </div>
            <div className='feature-wrapper'>
                <img src={customDomain} alt='responsive' />
                <h3>100% Responsive</h3>
                <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
            </div>
            <div className='feature-wrapper'>
                <img src={boostExposure} alt='responsive' />
                <h3>No Photo Upload Limit</h3>
                <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
            </div>
            <div className='feature-wrapper'>
                <img src={dragDrop} alt='responsive' />
                <h3>Available to Embed</h3>
                <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.</p>
            </div>
        </section>
        <div className='features-bg'>
            <h1>We're in beta. get your invite today</h1>
            <button>
                <p>read story</p>
                <img src={arrow} />
            </button>
        </div>
    </main>
   </>
  )
}

export default Features