import React from 'react'
import styles from './styles.module.css'
import stroller from '../../images/bebekarabasi.svg'
import rightArrow from '../../images/rightArrow.svg'
import wheelchair from '../../images/engel.svg'
import group from '../../images/grup.svg'
import kurumsal from '../../images/kurumsal.svg'
import arastirma from '../../images/arastirma.svg'
import sponsor from '../../images/sponsor.svg'


const Visitor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <p className={styles.header}>Ziyaret biçimini seç</p>
        <p className={styles.text}>bu muhteşem müzeyi nasıl keşfetmek istersin?</p>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.choices}>
          <img src={stroller} alt='family'/>
          <p className={styles.text2}>Aile ile ziyaret</p>
          <button type="button" className={styles.button}>
            <img src={rightArrow} alt='arrow'/>
          </button>
        </div>
        <div className={styles.choices}>
          <img src={wheelchair} alt='family'/>
          <p className={styles.text2}>Engelinize göre ziyaret</p>
          <button type="button" className={styles.button}>
            <img src={rightArrow} alt='arrow'/>
          </button>
        </div>
        <div className={styles.choices}>
          <img src={group} alt='family'/>
          <p className={styles.text2}>Grup olarak ziyaret</p>
          <button type="button" className={styles.button}>
            <img src={rightArrow} alt='arrow'/>
          </button>
        </div>
        <div className={styles.choices}>
          <img src={kurumsal} alt='family'/>
          <p className={styles.text2}>Kurumsal eğitim için ziyaret</p>
          <button type="button" className={styles.button}>
            <img src={rightArrow} alt='arrow'/>
          </button>
        </div>
        <div className={styles.choices}>
          <img src={arastirma} alt='family'/>
          <p className={styles.text2}>Araştırma için ziyaret</p>
          <button type="button" className={styles.button}>
            <img src={rightArrow} alt='arrow'/>
          </button>
        </div>
        <div className={styles.choices}>
          <img src={sponsor} alt='family'/>
          <p className={styles.text2}>Sponsor olmak için ziyaret</p>
          <button type="button" className={styles.button}>
            <img src={rightArrow} alt='arrow'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Visitor
