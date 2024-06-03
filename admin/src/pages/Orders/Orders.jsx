// import React, { useState, useEffect } from 'react';
// import './Orders.css';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { assets } from '../../assets/assets';

// const Orders = ({ url = "http://localhost:4000" }) => {
//   const [orders, setOrders] = useState([]);

//   const fetchAllOrders = async () => {
//     try {
//       const response = await axios.get(url + "/api/order/list");
//       if (response.data.success) {
//         setOrders(response.data.data);
//       } else {
//         toast.error("Error fetching orders");
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       toast.error("Error fetching orders");
//     }
//   };

//   const statusHandler = async (event, orderId) => {
//     try {
//       const response = await axios.post(url + "/api/order/status", {
//         orderId,
//         status: event.target.value
//       });
//       if (response.data.success) {
//         await fetchAllOrders();
//       } else {
//         toast.error("Error updating status");
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//       toast.error("Error updating status");
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, []);

//   return (
//     <div className='order add'>
//       <h3>Order Page</h3>
//       <div className="order-list">
//         {orders.map((order, index) => (
//           <div key={index} className='order-item'>
//             <img src={assets.parcel_icon} alt="Parcel Icon" />
//             <div>
//               <p className="order-item-food">
//                 {order.items.map((item, index) => (
//                   index === order.items.length - 1
//                     ? `${item.name} x ${item.quantity}`
//                     : `${item.name} x ${item.quantity},`
//                 ))}
//               </p>
//               <p className="order-item-name">{`${order.address.firstname} ${order.address.lastname}`}</p>
//               <div className="order-item-address">
//                 <p>{`${order.address.street}, `}</p>
//                 <p>{`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}, `}</p>
//               </div>
//               <p className="order-item-phone">{order.address.phone}</p>
//             </div>
//             <p>Items: {order.items.length}</p>
//             <p>₹{order.amount}</p>
//             <select onChange={(e) => statusHandler(e, order._id)} value={order.status}>
//               <option value="Food Processing">Food Processing</option>
//               <option value="Out for Delivery">Out for Delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;



// import React, { useState, useEffect } from 'react';
// import './Orders.css';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { assets } from '../../assets/assets';

// const Orders = ({ url = "http://localhost:4000" }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchAllOrders = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(url + "/api/order/list");
//       if (response.data.success) {
//         setOrders(response.data.data);
//       } else {
//         toast.error("Error fetching orders");
//         setError("Error fetching orders");
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       toast.error("Error fetching orders");
//       setError("Error fetching orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const statusHandler = async (event, orderId) => {
//     try {
//       const response = await axios.post(url + "/api/order/status", {
//         orderId,
//         status: event.target.value
//       });
//       if (response.data.success) {
//         await fetchAllOrders();
//       } else {
//         toast.error("Error updating status");
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//       toast.error("Error updating status");
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, []);

//   if (loading) return <div>Loading orders...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className='order add'>
//       <h3>Order Page</h3>
//       <div className="order-list">
//         {orders.map((order) => (
//           <div key={order._id} className='order-item'>
//             <img src={assets.parcel_icon} alt="Parcel Icon" />
//             <div>
//               <p className="order-item-food">
//                 {order.items.map((item, index) => (
//                   index === order.items.length - 1
//                     ? `${item.name} x ${item.quantity}`
//                     : `${item.name} x ${item.quantity},`
//                 ))}
//               </p>
//               <p className="order-item-name">{`${order.address.firstname} ${order.address.lastname}`}</p>
//               <div className="order-item-address">
//                 <p>{`${order.address.street}, `}</p>
//                 <p>{`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}, `}</p>
//               </div>
//               <p className="order-item-phone">{order.address.phone}</p>
//             </div>
//             <p>Items: {order.items.length}</p>
//             <p>₹{order.amount}</p>
//             <select onChange={(e) => statusHandler(e, order._id)} value={order.status}>
//               <option value="Food Processing">Food Processing</option>
//               <option value="Out for Delivery">Out for Delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;





// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './Orders.css';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { assets } from '../../assets/assets';

// const Orders = ({ url }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchAllOrders = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(url + "/api/order/list");
//       if (response.data.success) {
//         setOrders(response.data.data);
//       } else {
//         toast.error("Error fetching orders");
//         setError("Error fetching orders");
//       }
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//       toast.error("Error fetching orders");
//       setError("Error fetching orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const statusHandler = async (event, orderId) => {
//     try {
//       const newStatus = event.target.value;
//       const response = await axios.post(url + "/api/order/status", {
//         orderId,
//         status: newStatus
//       });
//       if (response.data.success) {
//         setOrders(prevOrders => 
//           prevOrders.map(order => 
//             order._id === orderId ? { ...order, status: newStatus } : order
//           )
//         );
//       } else {
//         toast.error("Error updating status");
//       }
//     } catch (err) {
//       console.error("Error updating status:", err);
//       toast.error("Error updating status");
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, []);

//   if (loading) return <div>Loading orders...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className='order add'>
//       <h3>Order Page</h3>
//       <div className="order-list">
//         {orders.map((order) => (
//           <div key={order._id} className='order-item'>
//             <img src={assets.parcel_icon} alt="Parcel Icon" />
//             <div>
//               <p className="order-item-food">
//                 {order.items.map((item, index) => (
//                   index === order.items.length - 1
//                     ? `${item.name} x ${item.quantity}`
//                     : `${item.name} x ${item.quantity},`
//                 ))}
//               </p>
//               <p className="order-item-name">{`${order.address.firstname} ${order.address.lastname}`}</p>
//               <div className="order-item-address">
//                 <p>{`${order.address.street}, `}</p>
//                 <p>{`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}, `}</p>
//               </div>
//               <p className="order-item-phone">{order.address.phone}</p>
//             </div>
//             <p>Items: {order.items.length}</p>
//             <p>₹{order.amount}</p>
//             <select onChange={(e) => statusHandler(e, order._id)} value={order.status}>
//               <option value="Food Processing">Food Processing</option>
//               <option value="Out for Delivery">Out for Delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// Orders.propTypes = {
//   url: PropTypes.string.isRequired,
// };

// export default Orders;




import React, { useState, useEffect } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching orders");
    }
  };
  const statusHandler = async (event,orderId) => {
     const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
     })
     if (response.data.success) {
      await fetchAllOrders();
     }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstname + " " + order.address.lastname}</p>
              <div className="order-item-address">
                <p>{order.address.street+", "}</p>
                <p>{order.address.city+", " +order.address.state+", "+order.address.country+", "+order.address.zipcode+", " }</p>
              </div>
              <p className="order-item-phone">
                {order.address.phone}
              </p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>₹{order.amount}</p>
            <select onChange={(e)=>statusHandler(event,order._id)} value={order.status} >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;