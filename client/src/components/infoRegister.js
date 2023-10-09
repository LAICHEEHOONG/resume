import React, { useState } from "react";
import { TextField, Button, Container, Grid, Typography } from '@mui/material'
import { addData } from "../utils/tools";
import { useDispatch, useSelector } from 'react-redux';
import { pageControl } from "../store/actions";

const InfoRegister = () => {
    // State to store the input values
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('')
    const [birthday, setBirthday] = useState('');

    let [block, setBlock] = useState(true)

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Contact:', contact);
        console.log('address:', address);
        console.log('Birthday:', birthday);

        addData({ name, contact, address, birthday });

        setName('');
        setBirthday('');
        setContact('');
        setAddress('');

    };
    const toRegisterPage = useSelector(state => state.page.page_status);
    const dispatch = useDispatch();

    const namePage = () => {
        dispatch(pageControl(false));
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Coding Test
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (e.target.value !== '') {
                                        setBlock(false)
                                    } else {
                                        setBlock(true);
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Contact"
                                variant="outlined"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Address"
                                variant="outlined"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Birthday"
                                variant="outlined"
                                type="date"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <span>
                                    <Button
                                        disabled={block}
                                        type="submit" variant="contained" color="primary">
                                        Register
                                    </Button>
                                </span>
                                <span>
                                    <Button onClick={namePage} style={{ marginLeft: '20px' }} variant="contained" color="secondary">
                                        Name List
                                    </Button>
                                </span>
                            </div>
                        </Grid>

                        {/* <Grid item xs={6} container justify="flex-start">
                            <Button
                                disabled={block}
                                type="submit" variant="contained" color="primary">
                                Register
                            </Button>

                        </Grid>
                        <Grid item xs={4} container justify="flex-end">
                            <Button onClick={namePage} style={{ marginLeft: '20px' }} variant="contained" color="secondary">
                                Name List
                            </Button>
                        </Grid> */}

                    </Grid>
                </form>
            </Container>
        </div>
    )

}

export default InfoRegister;