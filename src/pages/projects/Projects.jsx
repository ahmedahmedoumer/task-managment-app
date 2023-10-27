import React from 'react'
import CardComponent from '../../component/CardComponent'
import Layout from '../../component/Layout'
function Projects() {
  const array=[1,2,3,4,5,6,7,8]
  return (
    <Layout>
        <div className='text-3xl text-ellipsis-gray-850 font-serif '>List of projects</div>
          <div className='grid grid-cols-4 space-x-4 space-y-4 mt-5 mr-5'>
            {array.map((item,index)=>(
                <CardComponent
                    key={index}
                    text="Sample Text"
                    number="42"
                    icon="Icon"
                    startDate="2023-01-01"
                    endDate="2023-12-31"
                />
            ))}
                 
           </div>

    </Layout>

  )
}

export default Projects