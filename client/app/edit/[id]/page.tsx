"use client"

import InventoryForm from '@/components/InventoryForm'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getAllInventory } from '@/services/inventoryServices'
import { InventoryEditData, InventoryFormValues } from '@/interface/inventoryInterface'

export default function EditPage() {
  const params = useParams()
  const itemId = params?.id as string
  const router = useRouter()
  const [initialValues, setInitialValues] = useState<InventoryFormValues | null>(null)
  const convetToNuber = Number(itemId)

  useEffect(() => {
    const fetchItem = async () => {
      const res = await getAllInventory()
      const item = res.data.find((i: InventoryEditData) => i.id === convetToNuber)
      console.log('item', item);
      if (item) {
        setInitialValues({
          itemName: item.name,
          quantity: item.quantity,
          price: item.price,
          description: item.description,
        })
      } else {
        router.push("/")
      }
    }

    fetchItem()
  }, [itemId])

  if (!initialValues) return <div>Loading...</div>



  return (
    <InventoryForm
      initialValues={initialValues}
      isEditMode
      itemId={itemId}
      onSubmitSuccess={() => router.push("/")}
    />
  )
}
