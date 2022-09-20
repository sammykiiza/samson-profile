import React, { Component } from 'react'
import MainNavigation from '../components/MainNavigation'

export default class Resume extends Component {
  render() {
    return (
      <div className='pageWrap'>
        <MainNavigation />
        <section className='d-block p-5 height-100 contentWrap bg-white'>
          <div className='display-4 w-100'>Skills & Resume</div>
          <hr />
          <p>
            Download my full PDF resume{' '}
            <a
              href='./images/ayesiga_samson_cv.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </p>
          <div className='d-block pb-5'>
            <div className='d-flex bg-light my-1'>
              <img
                src='../images/pixel-perfect.png'
                width='120'
                height='120'
                className=''
                alt='description'
              />
              <span className='ml-4 p-2'>
                <h5>Agile Development</h5>
                <p>
                  I have over 3 years experience working in Agile development
                </p>
              </span>
            </div>
            <div className='d-flex bg-light my-1'>
              <img
                src='../images/team-work.png'
                width='120'
                height='120'
                className=''
                alt='description'
              />
              <span className='ml-4 p-2'>
                <h5>Team work </h5>
                <p>
                  For the last 2 years , I have hard an opportunity to work as
                  part of a team. I have a lot of experience working with other
                  people in a team both in-house and remotely.
                </p>
              </span>
            </div>
            <div className='d-flex bg-light my-1'>
              <img
                src='../images/work-flow.png'
                width='120'
                height='120'
                className=''
                alt='description'
              />
              <span className='ml-4 p-2'>
                <h5>Collaboration Skills</h5>
                <p>
                  I boast off a vast experience in major collaboration tools
                  like Slack for communication,Postman for API documentation and
                  documentation, Git for version control.
                </p>
              </span>
            </div>
            <div className='d-flex bg-light my-1'>
              <img
                src='../images/responsive-web-design-2.png'
                width='120'
                height='120'
                className=''
                alt='description'
              />
              <span className='ml-4 p-2'>
                <h5>Responsive Design</h5>
                <p>
                  All the website apps I build are fully mobile responsive
                  across all devices.
                </p>
              </span>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
