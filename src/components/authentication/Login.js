import React, { Component, Fragment } from 'react';
import FirebaseService from '../../services/firebase';
import { withRouter } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            userLogged: false
        }
    }

    componentDidMount() {
        if (FirebaseService.getUser()) {
            this.setState({
                userLogged: true
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        FirebaseService.signIn(this.state.email, this.state.password);

        this.setState({
            userLogged: true
        })
     
    }

    handleLogout = () => {
        FirebaseService.signOut();

        this.setState({
            userLogged: false
        });
    }

    render() {

        return(
            <Fragment>
                <h1>Login</h1>
                {/* <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    {this.state.userLogged
                    ?
                        <Button type="submit" onClick={this.handleLogout}>
                            Logout
                        </Button>
                    :
                        <Button type="submit" >
                            Login
                        </Button>
                    }
                     */}
                {/* </form> */}


            </Fragment>
        )
    }
}

export default withRouter(Login);