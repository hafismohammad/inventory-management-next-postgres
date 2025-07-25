"use client"

import { useRouter } from "next/navigation"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material"
import { postInventory } from "@/services/inventoryServices"
import { InventoryFormValues, InventoryPayload } from "@/interface/inventoryInterface"

const validationSchema = Yup.object({
  itemName: Yup.string().required("Item name is required"),
  quantity: Yup.number().positive("Quantity must be greater than 0").required("Quantity is required"),
  price: Yup.number().positive("Price must be greater than 0").required("Price is required"),
  description: Yup.string().optional(),
})

const initialValues: InventoryFormValues = {
  itemName: "",
  quantity: 0,
  price: 0,
  description: "",
}

export default function InventoryForm() {
  
    const router = useRouter()

  const handleSubmit = async (values: InventoryFormValues) => {
    const payload: InventoryPayload = {
      name: values.itemName,
      quantity: values.quantity,
      price: values.price,
      description: values.description,
    }


    try {
     const response = await postInventory(payload)
     if(response.status === 201) {
      router.push('/')
     }
      console.log("Item added successfully!")
    } catch (error) {
      console.error("Error adding item:", error)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form>
          <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#fafafa">
            <Paper elevation={3} sx={{background: '#81d4fa', maxWidth: 600, width: '100%', p: 4 }}>
              <Typography variant="h5" align="center" gutterBottom>
                Add Inventory Item
              </Typography>

              {/* Item Name */}
              <Box mb={2}>
                <TextField
                sx={{background: '#fafafa', borderRadius: 1}}
                  fullWidth
                  id="itemName"
                  name="itemName"
                  label="Item Name"
                  value={values.itemName}
                  onChange={handleChange}
                />
                <ErrorMessage name="itemName">
                  {(msg) => <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>}
                </ErrorMessage>
              </Box>

              {/* Quantity */}
              <Box mb={2}>
                <TextField
                 sx={{background: '#fafafa', borderRadius: 1}}
                  fullWidth
                  id="quantity"
                  name="quantity"
                  type="number"
                  label="Quantity"
                  value={values.quantity}
                  onChange={handleChange}
                />
                <ErrorMessage name="quantity">
                  {(msg) => <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>}
                </ErrorMessage>
              </Box>

              {/* Price */}
              <Box mb={2}>
                <TextField
                 sx={{background: '#fafafa',borderRadius: 1}}
                  fullWidth
                  id="price"
                  name="price"
                  type="number"
                  label="Price"
                  value={values.price}
                  onChange={handleChange}
                />
                <ErrorMessage name="price">
                  {(msg) => <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>}
                </ErrorMessage>
              </Box>

              {/* Description */}
              <Box mb={3}>
                <TextField
                 sx={{background: '#fafafa', borderRadius: 1}}
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  multiline
                  rows={3}
                  value={values.description}
                  onChange={handleChange}
                />
                <ErrorMessage name="description">
                  {(msg) => <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>}
                </ErrorMessage>
              </Box>

              {/* Submit Button */}
              <Button variant="contained" color="primary" fullWidth type="submit">
                Add Item
              </Button>
            </Paper>
          </Box>
        </Form>
      )}
    </Formik>
  )
}
