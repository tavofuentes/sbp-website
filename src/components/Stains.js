import React from 'react'
import stainsStyles from './stains.module.css'

export default function Stains({ children }) {
  return (
    <div className={stainsStyles.stainContainer}>
      <div className={`${stainsStyles.stain} ${stainsStyles.stain01}`}></div>
      <div className={`${stainsStyles.stain} ${stainsStyles.stain02}`}></div>
      <div className={`${stainsStyles.stain} ${stainsStyles.stain03}`}></div>
      <div className={`${stainsStyles.stain} ${stainsStyles.stain04}`}></div>
      <div className={`${stainsStyles.stain} ${stainsStyles.stain05}`}></div>
      <div className={`${stainsStyles.stain} ${stainsStyles.stain06}`}></div>
    </div>
  )
}
