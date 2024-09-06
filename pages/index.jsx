import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';
// '/'에 해당하는 페이지 컴포넌트
function ProductPage() {
	const headerTitle = '상품 목록 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList></ProductList>
		</div>
	);
}

export default ProductPage;
