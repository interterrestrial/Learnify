import React from 'react'
import './Components-CSS/Top-Courses.css'

function Top_Courses() {
  return (
    <div className='top-courses'>

      <div className="heading">
        <p>Top Courses</p>
        <p>Show All →</p>
      </div>

      <div className="course-cards">

        <a href="https://www.udemy.com/course/complete-ai-guide/">
          <img src="././assets/Top-Courses-Course1.png" alt="The Complete AI Guide: Learn ChatGPT, Generative AI & More" />
        </a>

        <a href="https://www.udemy.com/course/natural-language-processing-in-python/">
          <img src="././assets/Top-Courses-Course2.png" alt="Machine Learning: Natural Language Processing in Python...." />
        </a>

        <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">
          <img src="././assets/Top-Courses-Course3.png" alt="The Complete Full Stack Web Development Bootcamp" />
        </a>

      </div>

    </div>
  )
}

export default Top_Courses