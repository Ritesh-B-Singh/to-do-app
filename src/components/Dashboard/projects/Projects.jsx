import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DashboardLayout from '../DashboardLayout'
import Boards from './Boards'
import FilterListIcon from '@mui/icons-material/FilterList';

const Projects = () => {
    return (
        <DashboardLayout>
            <Box p={4} paddingLeft={6} >
                <Box display='flex' flexDirection='row' alignItems='center' paddingRight={6} >
                    <Box flexGrow={1}>
                        <Typography fontSize='24px' fontWeight='600' letterSpacing='5%' color='#212121' >
                            Projects
                        </Typography>
                    </Box>
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                    <Typography color='#3A3A3A' fontSize='17px' fontWeight='400' >Filter</Typography>
                </Box>
                <Box>
                    <Boards />
                </Box>
            </Box>
        </DashboardLayout>
    )
}

export default Projects