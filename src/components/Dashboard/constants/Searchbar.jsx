import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Box, InputBase } from '@mui/material'

export default function SearchBar({ Minwidth, margin }) {
    const [searchKey, setSearchKey] = useState('')
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            px={1}
            py={0.5}
            gap={1}
            m={margin}
            borderRadius={10}
            bgcolor="#F9FAFC"
            color='#3D4756'
        >
            <SearchIcon color='#9A9A9A' />
            <InputBase
                sx={{ fontSize: 13, width: Minwidth }}
                value={searchKey}
                placeholder="Search. . ."
                onChange={(e) => setSearchKey(e.target.value)}
                size='small'
            />
        </Box>
    )
}
