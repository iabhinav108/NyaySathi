import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center', bgcolor:'#1A1A19',color:'white',p: 1}}>
      <Box sx={{my: 2, "& svg":{
            fontSize:"60px",
            cursor: "pointer",
            mr: 1,
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:'translateX(Spx)',
            transition:'all 400ms'
        }
        }}>
          <Typography variant="h5" sx={{"@media (max-width:600px)":{
            fontSize:"1rem",
        }}}>
        All Rights Reserved &copy; SIH Team
        </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer
