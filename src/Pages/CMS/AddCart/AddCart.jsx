import React from 'react'
import {Typography,TextField, Paper,Box,IconButton,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { CART, clearBasket, removeItem } from '../../../ReduxToolkit/ProductSlice';
 

function AddCart() {
    const CARTS=useSelector(state=>state.Product.cart)
    const dispatch=useDispatch()
    console.log(CARTS)

    const handleQuantityChange = (item, value) => {
        const newQuantity = parseInt(value, 10);
    
        if (newQuantity > item.quantity && newQuantity <= item.rating.count) {
            dispatch(CART(item));
        } else if (newQuantity < item.quantity && newQuantity >= 1) {
            dispatch(removeItem(item));
        }
    };

    const handleRemove=(item)=>{
        dispatch(clearBasket(item))

    }
    
  const totalPrice=CARTS.reduce((total,item)=> total+item.price*item.quantity,0)
  return (
    <>
          <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
          {CARTS.length === 0 && <h3>No item in your cart</h3>}
          {CARTS?.length > 0 && (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {CARTS.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ width: 60, height: 60 }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">{item.title}</Typography>
                      </TableCell>
                      <TableCell>${item.price}</TableCell>
                      <TableCell>
                        <TextField
                          type="number"
                          inputProps={{ min: 1 ,max:item.rating.count}}
                          value={item.quantity}
                          onChange={(e) =>handleQuantityChange(item,e.target.value)}
                          sx={{ width: 60 }}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          edge="end"
                          sx={{color:"red"}}
                          onClick={() => handleRemove(item)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
        {CARTS?.length > 0 && (
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="h6">
              Total Price: ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
        )}
      </Box>

      
    </>
  )
}

export default AddCart
