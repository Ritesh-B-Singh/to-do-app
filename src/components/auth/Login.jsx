import {
    Box,
    Divider,
    Typography,
    Paper,
    List,
    ListItem,
    FormControlLabel,
    Checkbox,
    Button,
    TextField,
    InputAdornment,
    IconButton
} from '@mui/material'
import React from 'react'
import todoImg from '../../assets/auth/todo_img.png'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const theme = useTheme()
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row'
    };
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const users = useSelector((state) => state);

    const handleLogin = (e) => {
        console.log('submit')
        const checkEmail = users.find(user => user.email === email && user.password === password);
        if (checkEmail) {
            navigate(`/projects/${checkEmail.id}`)
            return toast.success('Login Successful!!')
        }
        return toast.warning('Invalid Email or Password')
    }

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
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
                                    selected='true'
                                >
                                    <Typography fontSize='26px' fontWeight='500' >Log In</Typography>
                                </ListItem>
                                <ListItem
                                    button
                                    onClick={() => navigate('/register')}
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
                                display='flex'
                                component='form'
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    handleLogin()
                                }}
                                marginTop={3}
                                gap={3}
                                flexDirection='column' >
                                <TextField
                                    label="Email"
                                    type='email'
                                    variant="outlined"
                                    onChange={e => setEmail(e.target.value)}
                                    fullWidth
                                    autoFocus
                                    required
                                />
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type={showPassword ? "text" : "password"}
                                    fullWidth
                                    onChange={e => setPassword(e.target.value)}
                                    required
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
                                    Login
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
        </>
    )
}

export default Login