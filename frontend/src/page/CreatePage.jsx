import {
	Box,
	Button,
	Container,
	Heading,
	Input,
	VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useColorModeValue } from '../components/ui/color-mode';
import { useProductStore } from '../store/product';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreatePage() {
	const [newProduct, setNewProduct] = useState({
		name: '',
		price: '',
		image: ''
	});

	const { createProduct } = useProductStore();
	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);

		// Show toast notification
		if (success) {
			toast.success(message, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true
			});

			// Clear the form if successful
			setNewProduct({
				name: '',
				price: '',
				image: ''
			});
		} else {
			toast.error(message, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true
			});
		}
	};

	return (
		<Container maxW={'container.sm'}>
			<VStack spacing={8}>
				<Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
					Create New Product
				</Heading>

				<Box
					w={'full'}
					bg={useColorModeValue('white', 'gray.800')}
					p={'6'}
					rounded={'lg'}
					shadow={'md'}
				>
					<VStack spacing={'md'}>
						<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) =>
								setNewProduct({ ...newProduct, name: e.target.value })
							}
						></Input>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) =>
								setNewProduct({ ...newProduct, price: e.target.value })
							}
						></Input>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) =>
								setNewProduct({ ...newProduct, image: e.target.value })
							}
						></Input>
						<Button
							style={{ backgroundColor: '#00b4ff' }}
							onClick={handleAddProduct}
							w={'full'}
						>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
}

export default CreatePage;
