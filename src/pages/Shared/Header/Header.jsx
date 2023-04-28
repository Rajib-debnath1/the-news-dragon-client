import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {

  const {user} = useContext(AuthContext);
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex  p-2 gap-4'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={50}>
                    I can be a React component, multiple React components, or just some text....... I can be a React component, multiple React components, or just some text.......
                </Marquee>
            </div>
      
        </Container>
    );
};

export default Header;