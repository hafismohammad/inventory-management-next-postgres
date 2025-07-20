"use client"

import api from "@/lib/api"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from "yup"

const validationSchema = Yup.object({
  itemName: Yup.string().required("Item name is required"),
  quantity: Yup.number().positive("Quantity must be greater than 0").required("Quantity is required"),
  price: Yup.number().positive("Price must be greater than 0").required("Price is required"),
  description: Yup.string().optional(),
})

interface InventoryFormValues {
  itemName: string
  quantity: number
  price: number
  description: string
}

const initialValues: InventoryFormValues = {
  itemName: "",
  quantity: 0,
  price: 0,
  description: "",
}


export default function InventoryForm() { 

  

 const handleSubmit = async (values: InventoryFormValues) => {
    const payload = {
      name: values.itemName,
      quantity: values.quantity,
      price: values.price,
      description: values.description,
    }


    try {
      console.log('payload',payload);
      
      await api.post("/api/inventories", payload)
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
      <Form>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-xl w-full p-6 bg-white shadow rounded">
            <h1 className="text-2xl font-semibold mb-6 text-center">Add Inventory Item</h1>

            {/* Item Name */}
            <div className="mb-4">
              <label htmlFor="itemName" className="block font-medium text-gray-700">
                Item Name
              </label>
              <Field
                id="itemName"
                name="itemName"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              />
              <ErrorMessage name="itemName" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label htmlFor="quantity" className="block font-medium text-gray-700">
                Quantity
              </label>
              <Field
                id="quantity"
                name="quantity"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              />
              <ErrorMessage name="quantity" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label htmlFor="price" className="block font-medium text-gray-700">
                Price
              </label>
              <Field
                id="price"
                name="price"
                type="number"
                step="0.01"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block font-medium text-gray-700">
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
              Add Item
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}
