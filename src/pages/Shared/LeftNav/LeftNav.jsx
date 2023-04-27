import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [cetegories, setCetegories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/cetegories')
        .then(res => res.json())
        .then(data =>setCetegories(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <h4>All Cetegory</h4>
            <div className="ps-4">
            {
                cetegories.map(cetegory => <p
                key={cetegory.id}

                >
                    <Link to={`/cetegory/${cetegory.id}`} className='text-decoration-none text-black'>{cetegory.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;