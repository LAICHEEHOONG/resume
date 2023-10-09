import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container, Grid, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { pageControl } from "../store/actions";
import { userData } from "../store/actions/user_action";



const NameList = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(userData());
    }, [dispatch]);
 
    const users = useSelector(state => state.user.users);
    console.log(users, 'users')

    const registerPage = () => {
        dispatch(pageControl(true));
    }

    // const [user, setUser] = useState([])
    // const data = [
    //     { name: 'John Doe', birthday: '1990-01-01', contact: '123-456-7890', address: '123 Main St' },
    // ];

    // const addUser = async() => {
    //     const users = await nameData();
    //     setUser(users.data)

    // }
 
    // addUser();
    return (
        <div style={{ marginTop: '20px' }}>
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Name List
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Birthday</TableCell>
                                <TableCell>Contact</TableCell>
                                <TableCell>Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell>{item.candidate.name}</TableCell>
                                    <TableCell>{item.candidate.birthday}</TableCell>
                                    <TableCell>{item.candidate.contact}</TableCell>
                                    <TableCell>{item.candidate.address}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button style={{ marginTop: '20px' }} onClick={registerPage} variant="contained" color="secondary">
                            Back
                        </Button>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )

}

export default NameList;