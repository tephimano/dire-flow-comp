import React from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';

const Default = () => {
    return (<Styled styles={styles}>
        <div className="sample-text">
            Default Page
        </div>
    </Styled> );
}
 
export default Default;