import React from 'react';

const SignUp = (props) => {

        return (
            <div>
                <h1>Sign Up Page</h1>

                <main>
                    <section>
                        <div className="alert alert-danger" role="alert" id="errorMessage"></div>
                        <form className="form" onSubmit={props.signUpUser}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter Email" required onChange={props.handleEmail}  value={props.email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter Password" required onChange={props.handlePassword} value={props.password}/>
                            </div>
                            <button typeof="submit" className="btn btn-default btn-success" href="/albums">Create Account</button>
                        </form>
                    </section>
                </main>
            </div>
        );
    }

export default SignUp;

// class SignUp extends Component {

    //     componentDidMount() {
    //         // Query doesn't redefine the this pointer, but that's how JavaScript 
    //         // functions work in general. Store a reference to the this pointer under 
    //         // a different name, and use that.
    //         const self = this;
    
    //         $.ajaxSetup({
    //             crossDomain: true,
    //             xhrFields: {
    //                 withCredentials: true
    //             },
    
    //         });
    
    //         $(document).ready(function () {
    //             // get user id from url query
    //             const params = self.parseQuery(window.location.search);
    //             // make a request to the server for the user information
    //             self.getUserInfo(params.id)
    //                 .then(this.addUserInfoToPage)
    //                 .then(this.getImages)
    //                 .then(this.addImages)
    //                 .catch(this.noUserFound);
    //             // show user information
    //             // make a request to server for the stickers for the user with that id
    //             // show user stickers
    //         });
    
    //         //sign up jquery
    //         $(() => {
    //             console.log("Hello from jquery")
    //             $('form').submit((event) => {
    //                 event.preventDefault();
    
    //                 console.log("submitted")
    //                 const email = $('#email').val();
    //                 const password = $('#password').val();
    
    //                 const user = {
    //                     email,
    //                     password
    //                 }
    
    //                 console.log('User', user)
    
    //                 self.signup(user)
    //                     .then(result => {
    //                         console.log(result)
    //                         window.location = `user.html?id=${result.id}`
    //                     }).catch(error => {
    //                         console.error(error)
    
    //                         const $errorMessage = $('#errorMessage');
    //                         $errorMessage.text(error.responseJSON.message);
    //                         $errorMessage.show();
    //                     })
    
    //             })
    //         })
    //     }
    
    
    //     signup = (user) => {
    //         console.log('User', user)
    //         const API_URL = this.getHostURL();
    //         const AUTH_URL = `${API_URL}/auth`;
    
    //         return $.post(`${AUTH_URL}/signup`, user)
    //     }
    
    //     parseQuery = (query) => {
    //         return query.substr(1).split('&').reduce((params, keyValue) => {
    //             const parts = keyValue.split('=');
    //             params[parts[0]] = parts[1];
    //             return params
    //         }, {});
    //     }
    
    //     getUserInfo = (id) => {
    //         const API_URL = this.getHostURL();
    
    //         return $.get(`${API_URL}/users/${id}`)
    //     }
    
    //     getImages = (id) => {
    //         const API_URL = this.getHostURL();
    
    //         return $.get(`${API_URL}/users/${id}/images`)
    //     }
    
    //     addUserInfoToPage = (user) => {
    //         // let source = $("#user-template").html();
    //         // let template = Handlebars.compile(source);
    //         // let context = user;
    //         // let html = template(context);
    //         // $('.user').html(html);
    //         // return user.id;
    //     }
    
    //     addImages = (images) => {
    //         // let source = $("#sticker-template").html();
    //         // let template = Handlebars.compile(source);
    //         // let context = { images };
    //         // yay more variations!! abstraction rocks!
    //         // let context = {images: images};
    //         // let html = template(context);
    //         // $('.images').html(html);
    //     }
    
    //     getHostURL = () => {
    //         if (window.location.host.indexOf('localhost') !== -1) {
    //             return 'http://localhost:3001';
    //         } else {
    //             return 'https://collage-entourage.com';
    //         }
    //     }
    
    //     noUserFound = () => {
    //         alert('user not found...')
    //     }
    
    //     render() {
    //         const divStyle = {
    //             display: 'none'
    //         };
    