import { Box, List, ListItem, Typography, Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { BoardsData } from '../constants/BoardsData'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { toast } from 'react-toastify';
// import EditTask from '../common/EditTask';

const Boards = () => {
    const [state, setState] = useState(false)
    const [add, setAdd] = useState(-1)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    // const [editTask, setEditTask] = useState(false)
    // const [editId, setEditId] = useState(-1)

    const handleAddTask = (id) => {
        const card = BoardsData[id].cards
        const newTask = {
            id: card.length,
            title: title,
            desc: desc,
            userProfilePic: 'https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png'
        }
        card.push(newTask)
        setState(false)
        toast.success('task added successful!!')
    }

    return (
        <Box height='80vh'>
            <List sx={{ display: 'flex', flexDirection: 'row' }}>
                {BoardsData.map((item) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'center' }} >
                        <Card sx={{ maxWidth: 355, width: 355, height: '77vh', background: '#F5F9F9' }}>
                            <CardHeader
                                title={<Typography fontSize='16px' fontWeight='600' letterSpacing='5%' >{item.title}</Typography>}
                                action={
                                    <Typography
                                        borderRadius='9px'
                                        p='0 6px' fontSize='16px'
                                        sx={{ background: '#ECF3F3' }}
                                        color='#329C89'
                                        fontWeight='400'
                                    >
                                        {item.cards.length}
                                    </Typography>
                                }
                            />
                            <CardContent>
                                <Box p={1} display='flex' justifyContent='center' >
                                    {state && (add === item.id) ?
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
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
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
                                                    value={desc}
                                                    onChange={(e) => setDesc(e.target.value)}
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
                                                    onClick={() => handleAddTask(item.id)}
                                                >
                                                    Add
                                                </Button>
                                            </CardActions>
                                        </Card>
                                        :
                                        <Button
                                            borderRadius='9px'
                                            sx={{ background: '#ECF3F3', width: '290px', color: '#329C89', fontSize: '24px', p: '0' }}
                                            textAlign='center'
                                            onClick={() => {
                                                setAdd(item.id)
                                                setState(true)
                                            }}
                                        >+</Button>}
                                </Box>
                                <Box maxHeight='58vh' overflow='auto'>
                                    <List sx={{ p: '0' }} >
                                        {item.cards.map((item) => (
                                            <ListItem
                                                key={item.id}
                                                // onClick={()=>{
                                                //     setEditId(item.id)
                                                //     setEditTask(true)
                                                // }}
                                            >
                                                {/* {editTask && (editId === item.id) ? <EditTask tesk={item} /> : */}
                                                    <Card sx={{ maxWidth: 345, width: 300 }} elevation={0} >
                                                        <CardContent>
                                                            <Typography gutterBottom fontSize='14px' fontWeight='600' component="div">
                                                                {item.title}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                {item.desc}
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions sx={{ p: '0px 10px', paddingBottom: '5px' }} >
                                                            <Box flexGrow={1}>
                                                                <Avatar sx={{ width: '25px', height: '25px' }} src={item.userProfilePic} />
                                                            </Box>
                                                            <IconButton sx={{ width: '10px', height: '10px' }}><ChatBubbleOutlineIcon /></IconButton>
                                                        </CardActions>
                                                    </Card>
                                                {/* } */}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Box >
    )
}

export default Boards