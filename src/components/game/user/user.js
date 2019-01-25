import React from 'react';

export default class User extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div id="cardHolder" class="card-holder flex">
     <div  class="card">
       <h3>
         Card 1
       </h3>
       <div class="notes">
         <h4>
           Hints Given
         </h4>

         </div>
       <div class="personal notes">
         <h4>
           Personal Notes
         </h4>
       </div>
     </div>
      <div  class="card">
       <h3>
         Card 2
       </h3>
       <div class="notes">
         <h4>
           Hints Given
         </h4>

         </div>
       <div class="personal notes">
         <h4>
           Personal Notes
         </h4>
       </div>
     </div>
      <div  class="card">
       <h3>
         Card 3
       </h3>
       <div class="notes">
         <h4>
           Hints Given
         </h4>

         </div>
       <div class="personal notes">
         <h4>
           Personal Notes
         </h4>
       </div>
     </div>
      <div  class="card">
       <h3>
         Card 4
       </h3>
       <div class="notes">
         <h4>
           Hints Given
         </h4>

         </div>
       <div class="personal notes">
         <h4>
           Personal Notes
         </h4>
       </div>
     </div>
      <div  id="optional-card" class="card">
       <h3>
         Card 5
       </h3>
       <div class="notes">
         <h4>
           Hints Given
         </h4>

         </div>
       <div class="personal notes">
         <h4>
           Personal Notes
         </h4>
       </div>
     </div>
   </div>
    )
  }
}
