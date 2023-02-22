import React, {useState, useEffect} from 'react'
import axios from 'axios'



export default function Team() {

  const [users, setUsers] = useState([])
  const [width, setWidth] = useState(window.innerWidth)

  console.log(width)

  const fetchUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    if(response){
      setUsers(response.data)
    }
  }

  

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    return window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [width])

  return (
    <section className='min-h-screen bg-gray-50'>
        <div className=' px-0 sm:px-8 lg:pt-32 lg:px-32 '>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-16 ">
              <div className='' >
                  <h2 className='text-4xl font-semibold'>Meet our leadership</h2>
                  <p className='mt-8 text-xl text-gray-700'>Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
              </div>
              <div className='col-span-2 '>
                  <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center">
                        {
                          users.map((user, index) => {
                            return(
                              <div key={index}>{user.email}</div>
                            )
                          })
                        }
                  </div>
              </div>
          </div>
        </div>
    </section>
  )
}
