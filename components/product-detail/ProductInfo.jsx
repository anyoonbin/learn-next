import Link from 'next/link';
import styles from './ProductInfo.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	const { id, name, imageUrl, price } = productDetail;

	const addCart = async () => {
		const response = await createCartItem({ id, name, imageUrl, price });
		console.log(response);
		router.push('/cart');
		alert('장바구니에 추가됨');
	};

	return (
		<div className={styles.container}>
			<div>
				<Image src={imageUrl} width={250} height={250} alt={name} />
			</div>
			<div className={styles.description}>
				<p>{name}</p>
				<p>{price}</p>
				<button onClick={addCart}>장바구니에 담기</button>
			</div>
		</div>
	);
}
