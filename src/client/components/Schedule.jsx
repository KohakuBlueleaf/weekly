import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import TimeLineItem from './TimeLineItem';
import TimeLineMonth from './TimeLineMonth';
import ScheduleItem from './ScheduleItem';

import "../style/Schedule.css"



// const Schedule = () => {
//   const [user, authStatus] = useOutletContext();
//   const dispatch = useDispatch();

//   //Will be executed when this component be rendered
//   useEffect(()=>{
//     console.log(user, authStatus);
//   })

//   return (
//     <div className='container'>
//         <div className='row'>
//             <ScheduleItem month={'MAY'}/>
//             <ScheduleItem week={'SUN'} date={21} display-name = {`math`} time-block={1} category={`routine`}/>
//             <ScheduleItem week={'MON'} date={22} display-name = {`eng`} time-block={1} category={`routine`}/>
//             <ScheduleItem week={'TUE'} date={23} display-name = {`PE`} time-block={2} category={`routine`}/>
//             <ScheduleItem week={'WED'} date={24} display-name = {`chinese`} time-block={2} category={`routine`}/>
//             <ScheduleItem week={'THU'} date={25} display-name = {`ss demo3`} time-block={3} category={`event`}/>
//             <ScheduleItem week={'FRI'} date={26} display-name = {`ss demo3`} time-block={3} category={`event`}/>
//             <ScheduleItem week={'SAT'} date={27} display-name = {`ss demo3`} time-block={4} category={`event`}/>
//         </div>
//     </div>
//   );
// };

//export default Schedule;



const Schedule = () => {
    return (
        <Table striped >
          <thead>
            <tr>
              <th>#</th>
              <th>SUN</th>
              <th>MON</th>
              <th>TUE</th>
              <th>WED</th>
              <th>THR</th>
              <th>FRI</th>
              <th>SAT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>POP</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      );
}
  
export default Schedule;