"use client"

import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  // Container,
} from "@mui/material"
import { postInventory } from "@/services/inventoryServices"
import { InventoryFormValues, InventoryPayload } from "@/interface/inventoryInterface"

const validationSchema = Yup.object({
  itemName: Yup.string().required("Item name is required"),
  quantity: Yup.number().positive("Quantity must be greater than 0").required("Quantity is required"),
  price: Yup.number().positive("Price must be greater than 0").required("Price is required"),
  description: Yup.string().optional(),
})

// interface InventoryFormValues {
//   itemName: string
//   quantity: number
//   price: number
//   description: string
// }

const initialValues: InventoryFormValues = {
  itemName: "",
  quantity: 0,
  price: 0,
  description: "",
}

export default function InventoryForm() {
  const handleSubmit = async (values: InventoryFormValues) => {
    const payload: InventoryPayload = {
      name: values.itemName,
      quantity: values.quantity,
      price: values.price,
      description: values.description,
    }

    try {
   
      await postInventory(payload)
      // await api.post("/api/inventories", payload)
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
          <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f3f4f6">
            <Paper elevation={3} sx={{ maxWidth: 600, width: '100%', p: 4 }}>
              <Typography variant="h5" align="center" gutterBottom>
                Add Inventory Item
              </Typography>

              <Box mb={2}>
                <TextField
                  fullWidth
                  id="itemName"
                  name="itemName"
                  label="Item Name"
                  value={values.itemName}
                  onChange={handleChange}
                />
                <ErrorMessage name="email">
  {(msg) => <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>}
</ErrorMessage>

              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  id="quantity"
                  name="quantity"
                  type="number"
                  label="Quantity"
                  value={values.quantity}
                  onChange={handleChange}
                />
                <ErrorMessage name="email">
  {(msg) => <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>}
</ErrorMessage>

              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  id="price"
                  name="price"
                  type="number"
                  // step="0.01"
                  label="Price"
                  value={values.price}
                  onChange={handleChange}
                />
                <ErrorMessage name="email">
  {(msg) => <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>}
</ErrorMessage>

              </Box>

              <Box mb={3}>
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  multiline
                  rows={3}
                  value={values.description}
                  onChange={handleChange}
                />
                <ErrorMessage name="email">
  {(msg) => <div style={{ color: 'red', fontSize: '12px' }}>{msg}</div>}
</ErrorMessage>

              </Box>

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
