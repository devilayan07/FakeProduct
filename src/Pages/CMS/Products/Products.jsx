import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CART, fetchProduct } from '../../../ReduxToolkit/ProductSlice'
import {  Typography, Card, CardMedia, CardContent, CardActions, Button, CardActionArea, Grid, Box, Pagination } from '@mui/material'
import Loader from '../../../Components/Loader/Loader'


function Products() {
    const{isLoading,products}=useSelector(state=>state.Product)
    console.log(products)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])

    const handleClick=(item)=>{
        dispatch(CART(item))

    }
  return (
    <>
      {
        isLoading ?(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  <Loader/>  </div>
        ):(
          <Box sx={{marginTop:"20px"}}>
            <Grid container  >
            {
              Array.isArray(products) && products?.map((item, index) =>
                <Grid item xs={12} md={4} sm={6} sx={{ marginTop: "30px", paddingLeft: "10px"}}>
                  <Card sx={{ marginTop: "20px", maxWidth: 350, height: "500px" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200px"
                        image={item?.image} 
                        sx={{ objectFit: "fill" }}

                        />
                      <CardContent>
                        <Typography variant='h6' component="div" >{item?.title}</Typography>
                        <Typography variant='body1'  >${item?.price.toFixed(2)}</Typography>
                        <Typography variant='body2'>{item?.description.slice(0,240)}</Typography>
      
                      </CardContent>
                    </CardActionArea>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <Button variant='contained' onClick={()=>handleClick(item)}> Add to cart </Button>
                    </CardActions>
      
                  </Card>
                </Grid>
              )
            }
      
          </Grid>
          </Box>
      

        )
      }
    </>
  )
}

export default Products
