import React, { useState } from 'react';
import { IconButton, Dialog, Fab, DialogActions, Tooltip } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloseIcon from '@mui/icons-material/Close';
import { certificateUdemy } from '../utils/tools'


const ImageDialog = ({ image }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <Tooltip title={'Certificate'} placement='right' arrow>
        <IconButton
          onClick={handleClickOpen}
          style={{ marginTop: '-5px', color: '#ce6464' }} >
          <WorkspacePremiumIcon style={{ fontSize: '1.3rem' }} />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogActions style={{padding: 0, margin: 0}} >
          <Fab size='small' color='default'  style={{position: 'fixed', marginTop: '50px', marginRight: '10px', opacity: 0.8}} onClick={handleClose}>
            <CloseIcon />
          </Fab>
        </DialogActions>
        <img src={certificateUdemy[image]} alt='udemy certificate' />
      </Dialog></>
  )
}

export default ImageDialog;