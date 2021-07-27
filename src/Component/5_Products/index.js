import React from 'react';
import test1 from '../../desktop/product1.jpg';
import test2 from '../../desktop/product2.jpg';
import test3 from '../../desktop/product3.jpg';
import test4 from '../../desktop/product4.jpg';
import {
    ProdContainer,
    ProdRow,
    ProdColumn,
    Img1
} from './productElements'


const Product = () => {
    return (
        <ProdContainer>
            <ProdRow>
                <ProdColumn>
                    <Img1 src={test1} alt='ddd1'/>
                    <Img1 src={test2} alt='ddd2' />
                </ProdColumn>
                <ProdColumn>
                    <Img1 src={test3} alt='ddd3'/>
                    <Img1 src={test4} alt='ddd4'/>
                </ProdColumn>
            </ProdRow>           
        </ProdContainer>
    )
}

export default Product
