import React from 'react'

import heroimgm from'../images/stories/mobile/moon-of-appalacia.jpg';
import heroimgd from'../images/stories/desktop/moon-of-appalacia.jpg';
import arrow from '../images/shared/desktop/arrow.svg'
import Data from '../storyCards'

function StoriesPage(){
  const [stories, Setstories] = React.useState(Data)
  return (
    <>
    <section className='stories-page'>
        <div className='stories-hero'>
          <div className='stories-hero-img'>
              <img className='heroimgd' src={heroimgd} alt='hero img' />
              <img className='heroimgm' src={heroimgm} alt='hero img' />
          </div>
          <div className='stories-hero-text'>
            <h3>last month's featured story</h3>
            <h1>hazy full moon of appalachia</h1>
            <h4>March 2nd 2021 <strong>by Jhon Appleseed</strong></h4>
            <p className='stories-hero-p'>The dissected plateau area,while not actually made up of geological mountains, is 
              popurlarly called "mountains," espacially in eastern kentucky and west virginia, and 
              while the ridges are not high, the terrain is extermely rugged.
            </p>
            <button>
              <p>read the story</p>
              <img src={arrow} alt='arrow' />
            </button>
          </div>
        </div>
        <div className='all-stories'>
        {stories.map((story) =>{
                const {id,image,date,heading,author} = story
                return(
                    <div className='stories-wrapper' key={id}>
                        <div className='story-img'>
                            <img src={image} alt=""></img>
                        </div>
                       <div className='stories-info'>
                       <h3>{date}</h3>
                        <h2>{heading}</h2>
                        <p>{`by  `+author}</p>
                        <div className='stories-line'></div>
                        <button>
                          <p>read the story</p>
                          <img src={arrow} alt='arrow' />
                        </button>
                       </div>
                    </div>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default StoriesPage