import React from 'react'
import styles from './styles.module.css'
import mainImage from '../../images/mainImage.svg'

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <img src={mainImage} alt='mainImage' style={{width: "100%", height: "auto"}}/>
        
      </div>
      <div className={styles.textContainer}>
        <p className={styles.header}>Happy Galeri’ye Hoşgeldiniz</p>
        <p className={styles.paragraph}>bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu yüzden en iyi şekilde yararlanmak için ziyaretinizi önceden planlayın. Temaya dayalı bir turu takip etmek için neden ziyaretçi parkurlarımızdan birini seçmiyorsunuz? Molaya ihtiyacınız olduğunda, müzenin dinlendirici bahçelerinden daha iyi neresi var?</p>
      </div>
    </div>
  )
}

export default Main
