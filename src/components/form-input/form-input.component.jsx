import React from 'react';
import './form-input.style.scss';

import Card from '../card/card.component';

const FormInput = ({placeholder}) => {
    return(
        <Card>
            <input className="custom-input" type="text" placeholder={placeholder} />
        </Card>
    );
}

export default FormInput;