import React from 'react';
import '../App.css';
import Left from './Left';
import Intstruction from './Intstruction';
import NavL from './NavL';
import Gmail from './Gmail';
import Regist from './Regist';
import Footer from './Footer';
// import axios from 'axios';
const Login = () => {
    // const [Data, setData] = useState([]);
    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await axios.get('/details/user');
    //         console.log('LOGIN data', data.data);
    //         setData(data.data);
    //     };
    //     getData();
    // }, []);
    return (
        <div>
            <div className="App">
                <NavL />
                <div className="d-flex flex-sm-row flex-column justify-content-center ">
                    <div>
                        <Left />
                    </div>
                    <div className="right">
                        <Intstruction />
                        <Regist />
                        <Gmail />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Login;
