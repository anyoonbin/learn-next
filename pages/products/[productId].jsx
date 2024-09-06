import { fetchProductById, fetchProductDetail } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';
import axios from 'axios';
import React from 'react';

export default function ProductDetailPage({ productDetail }) {
	const headerTitle = '상품 상세 정보 페이지';
	return (
		<div>
			{/* ProductHeader 컴포넌트 등록, title 프롭스에 "상품 상세 정보 페이지" 라고 데이터 전달 */}
			<ProductHeader title={headerTitle} />
			<ProductInfo productDetail={productDetail}></ProductInfo>
		</div>
	);
}

export async function getServerSideProps(context) {
	const id = context.params.productId;
	const { data } = await fetchProductById(id);

	return {
		props: {
			productDetail: data,
		},
	};
}
