import React from 'react'
import { Link } from 'react-router-dom';
import BeautifulStories from'../images/home/desktop/beautiful-stories.jpg'
import CreateandShare from'../images/home/desktop/create-and-share.jpg'
import DesignedForEveryone from'../images/home/desktop/designed-for-everyone.jpg'
import arrow from '../images/shared/desktop/arrow.svg'
import responsive from'../images/features/desktop/responsive.svg'
import noLimit from'../images/features/desktop/no-limit.svg'
import embed from'../images/features/desktop/embed.svg'
import BeautifulStoriesT from'../images/home/tablet/beautiful-stories.jpg'
import CreateandShareT from'../images/home/tablet/create-and-share.jpg'
import DesignedForEveryoneT from'../images/home/tablet/designed-for-everyone.jpg'
import BeautifulStoriesM from'../images/home/mobile/beautiful-stories.jpg'
import CreateandShareM from'../images/home/mobile/create-and-share.jpg'
import DesignedForEveryoneM from'../images/home/mobile/designed-for-everyone.jpg'
import Header from './Header'
import Footer from './Footer'
function Home() {
  return (
    <>
      <main className='home-main'>
        <div className='main-wrapper'>
            <div className='card'>
                <div className='bar'></div>
                <div className='card-wrapper'>
                <h2>CREATE AND SHARE YOUR PHOTO STORIES.</h2>
                <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                <button>
                    <p>get an invite</p>
                    <img src={arrow} alt="Photosnap-logo"/>
                </button>
                </div>
            </div>
            <img src={CreateandShare} alt="Photosnap-logo" className='card-img'/>
            <img src={CreateandShareT} alt="Photosnap-logo" className='hero-tablet'/>
            <img src={CreateandShareM} alt="Photosnap-logo" className='hero-mobile'/>
        </div>
        <div className='main-wrapper white-card'>
        <img className='card-img' src={BeautifulStories} alt="Photosnap-logo"/>
        <img className='hero-tablet' src={BeautifulStoriesT} alt="Photosnap-logo"/>
        <img className='hero-mobile' src={BeautifulStoriesM} alt="Photosnap-logo"/>
            <div className='card'>
                <div className='card-wrapper'>
                <h2>BEAUTIFUL STORIES EVERY TIME</h2>
                <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                <button>
                    <p>view the stories</p>
                    <img src={arrow} alt="Photosnap-logo"/>
                </button>
                </div>
            </div>
        </div>
        <div className='main-wrapper white-card white-card2'>
            <div className='card'>
                <div className='card-wrapper'>
                <h2>DESIGNED FOR EVERYONE</h2>
                <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
                <button>
                    <p>view the stories</p>
                    <img src={arrow} alt="Photosnap-logo"/>
                </button>
                </div>
            </div>
            <img className='card-img' src={DesignedForEveryone} alt="Photosnap-logo"/>
            <img className='hero-tablet' src={DesignedForEveryoneT} alt="Photosnap-logo"/>
            <img className='hero-mobile' src={DesignedForEveryoneM} alt="Photosnap-logo"/>
        </div>
        <section className='home-stories'>
            <div className='home-story one'>
                <div className='story-text'>
                    <h3>The Mountains</h3>
                    <p>by jhon appleaseed</p>
                    <div className='line'></div>
                    <button>
                        <p>Read story</p>
                        <img src={arrow} alt='arrow' />
                    </button>
                </div>
            </div>
            <div className='home-story two'>
                <div className='story-text'>
                    <h3>Sunset Cityscapes</h3>
                    <p>by Benjamin Cruz</p>
                    <div className='line'></div>
                    <button>
                        <p>Read story</p>
                        <img src={arrow} alt='arrow' />
                    </button>
                </div>
            </div>
            <div className='home-story three'>
                <div className='story-text'>
                    <h3>18 Days Voyage</h3>
                    <p>by Alexei Borodin</p>
                    <div className='line'></div>
                    <button>
                        <p>Read story</p>
                        <img src={arrow} alt='arrow' />
                    </button>
                </div>
            </div>
            <div className='home-story four'>
                <div className='story-text'>
                    <h3>Architecturals</h3>
                    <p>by Samantha Brooke</p>
                    <div className='line'></div>
                    <button>
                        <p>Read story</p>
                        <img src={arrow} alt='arrow' />
                    </button>
                </div>
            </div>
        </section>
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
        </section>
      </main>
     
    </>
  )
}

export default Home