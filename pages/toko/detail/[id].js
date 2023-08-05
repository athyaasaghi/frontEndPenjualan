import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';



export default function ImgMediaCard() {
  const[postDetail, setPostDetail] = useState([]);

  const route = useRouter()
  console.log(route.query.id);

    const getDetail = async(id_route)=>{
        const res = await axios.get(`http://localhost:3001/produk/${id_route}`)
        console.log(res)
        setPostDetail(res.data.data)
    }

    useEffect(()=>{
        if(route.query.id){
            getDetail(route.query.id);
        }
    }, [route])

  return (
    <>
    <div className='container_detail'>
    <Card sx={{ marginLeft: 10 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_960_720.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {
            postDetail?.nama_produk
          }
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {
            postDetail?.detail_produk
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Beli sekarang</Button>
        <Button size="small">Tambahkan keranjang</Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}
