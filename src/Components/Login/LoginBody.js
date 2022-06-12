import { CheckMeOutChanged, PasswordChanged, UserNameChanged } from '../../Stores/Reducers/Login/Login';
import { UserLoginModule } from '../../Modules/Login/Login';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";

export const LoginBody = (state) => {
    state = state.props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const HandleUserLogin = (event) => {
        event.preventDefault();
        const isLogin = UserLoginModule({ UserName: state.UserName, Password: state.Password });
        if (isLogin) {
            navigate("/");
        }
    };
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={HandleUserLogin} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="UserName"
                    label="Username"
                    name="UserName"
                    autoComplete="UserName"
                    autoFocus
                    onChange={(e) => dispatch(UserNameChanged(e.currentTarget.value))}
                    value={state.UserName}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Password"
                    label="Password"
                    type="password"
                    id="Password"
                    autoComplete="current-password"
                    onChange={(e) => dispatch(PasswordChanged(e.currentTarget.value))}
                    value={state.Password}
                />
                <FormControlLabel
                    control={<Checkbox value={state.CheckMeOut} color="primary" onChange={() => dispatch(CheckMeOutChanged())} />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default LoginBody;