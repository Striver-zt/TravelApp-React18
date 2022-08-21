import React from "react";
import { Image, Typography } from "antd";
import styles from './ProductCollection.module.css'
interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}

export const ProductImage: React.FC<PropsType> = ( { id, size, imageSrc, price, title } ) => {
  return (
    <>
      { size == "large" ? (
        <Image src={ imageSrc } height={ 300 } width={ 590 } />
      ) : (
        <Image src={ imageSrc } height={ 138 } width={ 280 } />
      ) }
      <div>
        <Typography.Text type="secondary">
          <p className={ size === 'large' ? styles[ 'traval-description' ] : '' } style={ { width: size === "large" ? 590 : 280 } }>{ title }
            <Typography.Text type="danger" strong>
              ¥ { price } 起
            </Typography.Text>
          </p>
        </Typography.Text>

      </div>
    </>
  );
}