import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab blanditiis illum quam quod saepe accusantium veritatis quas ipsa error voluptatibus assumenda tenetur recusandae dignissimos, quae, dolorem accusamus inventore quo praesentium aperiam consectetur excepturi consequatur commodi natus? Veritatis architecto dolore, reiciendis debitis quidem aliquam ut obcaecati maiores optio enim dolores autem!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;