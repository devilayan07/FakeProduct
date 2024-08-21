import React from 'react'
import { DNA} from 'react-loader-spinner'


function Loader() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />

      
    </div>
  )
}

export default Loader
