import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from './ProductCard';
import { px } from 'framer-motion';

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	console.log(products);

	return (
		<Container maxWidth={'container.xl'} py={12}>
			<VStack spacing={'8'}>
				<Text
					fontSize={{ base: '22px', sm: '28px' }}
					fontWeight={'bold'}
					textTransform={'uppercase'}
					textAlign={'center'}
					className='text-gradient'
				>
					Current Product
				</Text>
			</VStack>
			<SimpleGrid
				style={{ margin: '20px' }}
				columns={{ base: 1, md: 2, lg: 3 }}
				spacing={8}
				w={'full'}
			>
				{products.map((product) => (
					<ProductCard key={product._id} product={product}></ProductCard>
				))}
			</SimpleGrid>

			{products.length === 0 && (
				<Text
					fontSize='xl'
					fontWeight={'bold'}
					textTransform={'uppercase'}
					textAlign={'center'}
					color={'gray.500'}
				>
					No product found {'  '}
					<Link to={'/create'}>
						<Text
							as={'span'}
							color={'blue.500'}
							_hover={{ textDecoration: 'underline' }}
						>
							Create a product
						</Text>
					</Link>
				</Text>
			)}
		</Container>
	);
};

export default HomePage;
