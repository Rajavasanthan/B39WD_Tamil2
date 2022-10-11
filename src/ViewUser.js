import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function ViewUser() {
    const params = useParams();
    const [searchParams] = useSearchParams();

    useEffect(() => {
      console.log(searchParams.get('status'))
    }, []);
    
  return (
    <div class="container">
        <div className='row'>
            <h1>Id : {params.id}</h1>
            <h2>Id : {searchParams.get("status")}</h2>
            <div className='col-lg-6'>
                Username : Person 1
            </div>
            <div className='col-lg-6'>
                Email : Person 1
            </div>
            <div className='col-lg-6'>
                Country : Person 1
            </div>
            <div className='col-lg-6'>
                State : Person 1
            </div>
            <div className='col-lg-6'>
                City : Person 1
            </div>
            <div className='col-lg-6'>
                Phone : Person 1
            </div>
            <div className='col-lg-6'>
                Dob : Person 1
            </div>
            <div className='col-lg-6'>
                Gender : Person 1
            </div>
        </div>
    </div>
  )
}

export default ViewUser