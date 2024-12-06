import { Box, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import BuynowCard from './BuynowCard'

const BuyNowMain = () => {
  let [current, setCurrent] = useState('items');
  let data = [
    {
      id: 1,
      title: "Doe Gown With A Long Cape In Sequins Embroidery, Crafted In Sleeveless With A V Neckline And A Side Zip Closure",
      price: 39.999,
      productno: "SG165266",
      size: "XL",
      mainImage: "https://staticm247.kalkifashion.com/media/catalog/product/d/o/doeskin_cream_gown_in_sequins_embroidery-m001ra631y-sg95951_5_.jpg?w=1200",
      images: [
         "https://staticm247.kalkifashion.com/media/catalog/product/d/o/doeskin_cream_gown_in_sequins_embroidery-m001ra631y-sg95951_2_.jpg?w=1200",
         "https://staticm247.kalkifashion.com/media/catalog/product/d/o/doeskin_cream_gown_in_sequins_embroidery-m001ra631y-sg95951_4_.jpg?w=1200",
         "https://staticm247.kalkifashion.com/media/catalog/product/d/o/doeskin_cream_gown_in_sequins_embroidery-m001ra631y-sg95951_6_.jpg?w=1200",
        ]
    }
    
  ]

  let [filter, setfilter] = useState(data);

  function manageData(item) {
    setfilter(data.filter(el => item === "All" ? data : el.product === item))
    setCurrent(item);
  };

  return (
    <Box sx={{ mt: '100px',mb:'50px' }}>
      {
        filter.map((el,i) => {
            return <BuynowCard Mainimg={el.mainImage} title={el.title}/>
          
        })
      }
    </Box>
  )
}

export default BuyNowMain