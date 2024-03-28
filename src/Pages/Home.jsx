import React, { useState } from 'react';

const LoginFalse = () => {
    return (
        <div>
            <h1
            >
                Login please...
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                }}
            >
                <button
                    style={{
                        width: 250,
                        height: 35,
                        backgroundColor: '#de5246',
                        color: 'white',
                    }}
                    // onClick={() => login(google)}
                >
                    Login with Google
                </button>
                <button
                    style={{
                        width: 250,
                        height: 35,
                        backgroundColor: '#3b5998',
                        color: 'white',
                    }}
                    // onClick={() => login(facebook)}
                >
                    Login with Facebook
                </button>
                <button
                    style={{
                        width: 250,
                        height: 35,
                        backgroundColor: '#00acee',
                        color: 'white',
                    }}
                    // onClick={() => login(twitter)}
                >
                    Login with Twitter
                </button>
                <button
                    style={{
                        width: 250,
                        height: 35,
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                    onClick={() => {
                        // login(github);
                    }}
                >
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};
const LoginTrue = () => {
    return <div>Welcome !!</div>;
};

const Home = () => {
    const [IsLogin, setIsLogin] = useState(false);

    return <div>{IsLogin ? <LoginTrue /> : <LoginFalse />}</div>;
};

export default Home;
