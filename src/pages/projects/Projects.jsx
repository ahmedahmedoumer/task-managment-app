import React from 'react'
import { connect } from 'react-redux'
import CardComponent from '../../component/CardComponent'
import Layout from '../../component/Layout'
import { PlusOutlined } from '@ant-design/icons'
function Projects() {
  const array=[1,2,3,4,5,6,7,8]
  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='text-3xl text-ellipsis-gray-850 font-serif mt-20'>List of projects</div>
      <div className='flex justify-between gap-2 items-center bg-gradient-to-br from-gray-700 cursor-pointer to-gray-900 px-4 py-2 font-serif text-xl text-white rounded mt-20  '><PlusOutlined className=''/>create project</div></div>

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
export const mapStateToProps=(state)=>{
  return{
    // listofProjects:
  }
}
export const mapDispatchToProps=(dispatch)=>{
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects);