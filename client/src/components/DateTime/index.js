// import React from 'react';
// import Moment from 'react-moment';
// import moment from 'moment';

// export default class DateTime extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             date: moment().format('ll'),
//             time: moment().format('LT')
//         }
//         updateClock = () => {
//             this.setState({
//                 date: moment().format('ll'),
//                 time: moment().format('LT')

//             })
//         }
//         componentDidMount(){
//             this.interval = setInterval(this.updateClock, 1000);
//         };
//         render() {
//             return (
//               <div className="date"> date</div>
//             )
//         }
//     }
// }