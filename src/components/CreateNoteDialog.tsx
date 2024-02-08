'use client'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader } from './ui/dialog'
import { DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const CreateNoteDialog = (props: Props) => {
    const [input, setInput] = React.useState('')
  return (
    <Dialog>
        <DialogTrigger>
            <div className='border-dashed border-2 flex border-orange-600 
            h-full rounded-lg items-center justify-center sm:flex hover:shadow-xl 
            transition hover:-translate-y-1 flex-row p-4'>
                <Plus className='w-6 h-12 text-orange-600' strokeWidth={3} />
                <h2 className='font-semibold text-orange-600 sm:mt-2'>
                    Create a new note
                </h2>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    New Note Book
                </DialogTitle>
                <DialogDescription>
                    click the button below to create a new not or cancel to go back
                </DialogDescription>
            </DialogHeader>
            <form>
                <Input
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                placeholder='Name...' />
                <div className='h-4'></div>
                <div className='flex item-center gap-2'>
                    <Button type='reset' variant={'secondary'}>Cancel</Button>
                    <Button className='bg-orange-600'>Create</Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog