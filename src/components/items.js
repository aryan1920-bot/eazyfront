// import React from 'react'
// import Cards from './card'
// import './css/Items.css';
// import { Link } from 'react-router-dom';
// class Items extends React.Component {
//     list =[
//       {
//       "id": 1,
//       "name": "Aryan",
//       "image": "https://assets.vogue.com/photos/6352ccb841ea2bd565be085f/master/w_2560%2Cc_limit/GettyImages-1223580360.jpg",
//       "location": "163 Hanuman Mandir Marg Near Hanuman Mandir",
//       "cuisine_type": "Indian",
//       "createdAt": "2024-01-24T08:04:43.000Z",
//       "updatedAt": "2024-01-24T08:04:43.000Z"
//       },
//       {
//       "id": 2,
//       "name": "The Brew Bar",
//       "image": "https://www.beanscenemag.com.au/wp-content/uploads/2018/09/bs-brewbar-lrg.jpg",
//       "location": "Phase III, Udyog Vihar",
//       "cuisine_type": "italian",
//       "createdAt": "2024-01-24T08:06:23.000Z",
//       "updatedAt": "2024-01-24T08:06:23.000Z"
//       },
//       {
//       "id": 3,
//       "name": "D N Snacks",
//       "image": "https://img.freepik.com/free-photo/top-view-arrangement-with-food-wooden-background_23-2148308806.jpg",
//       "location": "Huda Market Behind Om Sweets",
//       "cuisine_type": "Fast Food",
//       "createdAt": "2024-01-24T08:07:27.000Z",
//       "updatedAt": "2024-01-24T08:07:27.000Z"
//       },
//       {
//       "id": 4,
//       "name": "Delicious Bistro",
//       "image": "https://img.freepik.com/free-photo/top-view-arrangement-with-food-wooden-background_23-2148308806.jpg",
//       "location": "Downtown",
//       "cuisine_type": "French",
//       "createdAt": "2024-01-24T08:09:03.000Z",
//       "updatedAt": "2024-01-24T08:09:03.000Z"
//       },
//       {
//       "id": 5,
//       "name": "China Club",
//       "image": "https://wallpapers.com/images/hd/chinese-food-pictures-n0y85eb3fm4eyazo.jpg",
//       "location": "Global Business Park",
//       "cuisine_type": "Chinese",
//       "createdAt": "2024-01-24T08:15:02.000Z",
//       "updatedAt": "2024-01-24T08:15:02.000Z"
//       }
//       ]
      

    
//     state = {
//       list: this.list,
//     };
  
//     render() {
//       return (
//         <div>
//           <div className="container my-3">
            
//             <div className="row">
//               {this.state.list.map((element) => (
//                 <div className="col-md-3" key={element.id} >
//                     <Cards id={element.id} title={element.name} location={element.location} imageUrl={element.image}/>
//                    </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default Items;


import React from 'react';
import Cards from './card';
import './css/Items.css';
import { Link } from 'react-router-dom';

class Items extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    // Fetch data from the API endpoint
    fetch('http://127.0.0.1:3009/select')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          list: data,
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <div className="row">
            {this.state.list.map((element) => (
              <div className="col-md-3" key={element.id}>
                <Cards
                  id={element.id}
                  title={element.name}
                  location={element.location}
                  imageUrl={element.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
