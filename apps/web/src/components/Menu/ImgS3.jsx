/* eslint-disable */
import Image from 'next/image'
import React from 'react'

export default function ImgS3({ src, alt, className = '', ...props }) {
  return (
    <img
      loading="lazy"
      src={`https://minio-s3.caprover.snotrasys.com/ximbia${src}`}
      alt={alt || ''}
      sizes="100vw"
      className={className}
      {...props}
    />
  )
}

export const getS3Url = (src) => {
  return `https://minio-s3.caprover.snotrasys.com/ximbia${src}`
}
