import React from 'react';
import GoogleAuth from '../GoogleAuth';

const LoginPage = () => {
    return (
        <div class="ui one column stackable center aligned page grid">
            <div class="column eight wide">
                <h1 class="ui dividing header">Sign In</h1>
                <div class="ui hidden divider"></div>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default LoginPage;