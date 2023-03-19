import React from 'react';

//component imports
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'

//styles import
import styles from './css/form.module.css'

const AgentForm = () => {
    return (
        <div className={styles.container}>
           <div className={styles.content}>
                <Navbar/>
                <div className={styles.form}>
                    
                </div>
            </div>
            <Footer/>
            
        </div>
    );
};

export default AgentForm;