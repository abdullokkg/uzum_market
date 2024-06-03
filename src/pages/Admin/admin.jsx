import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const Admin = () => {
  const [product, setProduct] = useState(null)
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then(res => setProduct(res.data.products))
  }, [])
  const data = {
    labels:  product?.map(el => el.title),
    datasets: [
      {
        data: product?.map(el => el.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className='chart'>
        <div className='chart__wrapper'>
          <div className='chart__item'>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
