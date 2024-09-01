import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'


function Highlights() {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0, })
    gsap.to('.link', { opacity: 1, y: 0, stagger: 0.25 })
  }, [])
  //Stagger is for deplay one after other of same name element
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full items-end justify-between md:flex'>
          <h1 id='title' className='section-heading'>Get the highlights</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className='link'>
              watch the flim
              <img src={watchImg} alt="watch" className='ml-2' />
            </p>

            <p className='link'>
              watch the event

            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>

    </section>
  )
}

export default Highlights