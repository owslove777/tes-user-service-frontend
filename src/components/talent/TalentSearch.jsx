import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import TalentList from './TalentList';
import styles from './TalentSearch.module.css'

const TalentSearch = () => {
  return (
    <section className={styles.talentSearch}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <TalentList />
      </div>
      <Footer />
    </section>

  );


}

export default TalentSearch;
