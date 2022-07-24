import {
    Box,
    TextField,
    Typography,
    Button,
    FormControlLabel,
    Checkbox,
    InputAdornment,
    IconButton,
    Divider,
    Paper,
    List,
    ListItem
} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import todoImg from '../../assets/auth/todo_img.png'

const SignupStep = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const users = useSelector((state) => state);
    const dispatch = useDispatch();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row'
    };

    const handleSignup = () => {

        const checkEmail = users.find(user => user.email === email);

        if (checkEmail) {
            return toast.warning('Email already exists!')
        }

        const data = {
            id: users[users.length - 1].id + 1,
            name,
            email,
            password,
            profilePic: 'https://png.pngitem.com/pimgs/s/404-4042710_circle-profile-picture-png-transparent-png.png'
        }

        dispatch({ type: "REGISTER_USER", payload: data });
        toast.success("User register successfully!!");
        navigate('/');
    }

    return (
        <Box display='flex' p={0} m={0} height='90vh' flexDirection={isMobile ? 'column' : 'row'} justifyContent='space-evenly' alignItems='center'
            sx={{
                sx: { flexDirection: 'column' },
                md: { flexDirection: 'column' }
            }}
        >
            <Box
                component="img"
                sx={{
                    height: 430,
                    width: 450
                }}
                alt="TO-DO Img"
                src={todoImg}
            />
            <Divider />
            <Paper
                elevation={1}
                sx={{
                    p: '25px 25px',
                    borderRadius: '65px',
                    width: '500px',
                    height: '500px',
                    maxWidth: '5    00px',
                    border: '2px solid rgba(26, 59, 88, 0.24)'
                }}
            >
                <Box
                    gap={1}
                    marginTop={3}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                >
                    <Box
                        display='flex'
                        flexDirection='column'
                        width='100%'
                        maxWidth='400px'
                        borderBottom='2px solid rgba(64, 145, 223, 0.12)'
                        marginBottom={1}
                    >
                        <List style={flexContainer} >
                            <ListItem
                                button
                                onClick={() => navigate('/')}
                            >
                                <Typography fontSize='26px' fontWeight='500' >Log In</Typography>
                            </ListItem>
                            <ListItem
                                button
                                selected='true'
                            >
                                <Typography fontSize='26px' fontWeight='500' >Sign up</Typography>
                            </ListItem>
                        </List>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='column'
                        width='100%'
                        maxWidth='400px'
                    >
                        <Typography fontSize='21px' fontWeight='500' >To Continue</Typography>
                        <Typography fontSize='10px' fontWeight='300' color='#999999' >We need your Email and Password</Typography>
                        <Box
                            component='form'
                            onSubmit={(e) => {
                                e.preventDefault()
                                handleSignup()
                            }}
                            display='flex'
                            marginTop={3}
                            gap={3}
                            flexDirection='column' >
                            <TextField
                                label="Full Name"
                                type='text'
                                variant="outlined"
                                fullWidth
                                value={name}
                                onChange={e => setName(e.target.value)}
                                autoFocus
                                required
                            />
                            <TextField
                                label="Email"
                                type='email'
                                variant="outlined"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                fullWidth
                                required
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                type={showPassword ? "text" : "password"}
                                fullWidth
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Button
                                type='submit'
                                variant="contained"
                                sx={{
                                    background: '#329C89',
                                    textDecoration: 'none',
                                    '&:hover': {
                                        background: '#39a794'
                                    }
                                }} >
                                Sign Up
                            </Button>
                        </Box>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        color: '#329C89',
                                        '&.Mui-checked': {
                                            color: '#329C89',
                                        }
                                    }}
                                />
                            }
                            label="Remember Me"
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default SignupStep