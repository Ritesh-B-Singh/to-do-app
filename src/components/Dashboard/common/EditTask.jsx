import React from 'react'
import { Card, CardHeader, TextField, CardContent, CardActions, Button } from '@mui/material'
import { BoardsData } from '../constants/BoardsData'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const EditTask = ({ id, title, desc, userProfilePic }) => {
    const location = useLocation()
    const [newTitle, setNewTitle] = useState(title)
    const [newDesc, setNewDesc] = useState(desc)

    const handleUpdateTask = () => {
        const newId = parseInt(location.pathname.split('/').pop())
        const card = BoardsData[newId].cards[id]
        const newTask = {
            id: card.length,
            title: title,
            desc: desc,
            userProfilePic: 'https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png'
        }
        card.push(newTask)
        toast.success('task added successful!!')
    }

    return (
        <Card
            sx={{ maxWidth: 300, width: 300 }}
            elevation={0}
        >
            <CardHeader
                title={
                    <TextField
                        variant="standard"
                        margin="none"
                        fullWidth
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
            required
            placeholder="Give your task a title"
                  />
              }
          />
            <CardContent>
                <TextField
                    variant="standard"
                    margin="none"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    fullWidth
                    required
                    placeholder="Description.."
                />
            </CardContent>
            <CardActions sx={{ p: '0px 10px', paddingBottom: '10px' }} >
                <Button type='submit' variant='contained'
                    sx={{
                        background: '#329C89',
                        '&:hover': {
                            backgroundColor: '#329C89',
                            boxShadow: 'none'
                        }
                    }}
                    onClick={() => handleUpdateTask()}
                >
                    Add
                </Button>
            </CardActions>
        </Card>
    )
}

export default EditTask