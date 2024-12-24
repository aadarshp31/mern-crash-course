import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdOutlineEdit, MdDelete } from 'react-icons/md';
import { useProductStore } from '../store/product';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../component/Model.jsx';

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
	const textColor = useColorModeValue('gray.600', 'gray.200');
	const bg = useColorModeValue('white', 'gray.800');
	const { deleteProduct, updateProduct } = useProductStore();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (success) {
			toast.success(message, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true
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
	const handleUpdatedProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		if (success) {
			toast.success('Product Added Successfully', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true
			});
			setIsModalOpen(false);
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
		<Box
			shadow={'lg'}
			rounded={'lg'}
			overflow={'hidden'}
			transition={'all 0.3s'}
			_hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
			bg={'bg'}
			spacing={8}
		>
			<Image
				src={product.image}
				alt='{product.name}'
				h={48}
				w={'full'}
				objectFit={'cover'}
			></Image>
			<Box p={4}>
				<Heading as={'h3'} size={'md'} mb={2}>
					{product.name}
				</Heading>
				<Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
					${product.price}
				</Text>

				<HStack spacing={2}>
					<Button
						aria-label='Edit Product'
						onClick={() => setIsModalOpen(true)}
					>
						{<MdOutlineEdit style={{ color: '#004afff0' }} />}
					</Button>
					<Button
						aria-label='Delete Product'
						onClick={() => handleDeleteProduct(product._id)}
					>
						{<MdDelete style={{ color: 'red' }} />}
					</Button>
				</HStack>

				{/* Modal */}
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<div
						style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
					>
						<div>
							<label
								htmlFor='name'
								style={{
									display: 'block',
									marginBottom: '8px',
									fontWeight: 'bold',
									fontSize: '14px'
								}}
							>
								Product Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='Enter product name'
								value={updatedProduct.name}
								onChange={(e) =>
									setUpdatedProduct({ ...updatedProduct, name: e.target.value })
								}
								style={{
									width: '100%',
									padding: '10px',
									borderRadius: '4px',
									border: '1px solid #ccc'
								}}
							/>
						</div>
						<div>
							<label
								htmlFor='price'
								style={{
									display: 'block',
									marginBottom: '8px',
									fontWeight: 'bold',
									fontSize: '14px'
								}}
							>
								Price
							</label>
							<input
								type='number'
								id='price'
								name='price'
								placeholder='Enter price'
								value={updatedProduct.price}
								onChange={(e) =>
									setUpdatedProduct({
										...updatedProduct,
										price: e.target.value
									})
								}
								style={{
									width: '100%',
									padding: '10px',
									borderRadius: '4px',
									border: '1px solid #ccc'
								}}
							/>
						</div>
						<div>
							<label
								htmlFor='image'
								style={{
									display: 'block',
									marginBottom: '8px',
									fontWeight: 'bold',
									fontSize: '14px'
								}}
							>
								Image URL
							</label>
							<input
								type='text'
								id='image'
								name='image'
								placeholder='Enter image URL'
								value={updatedProduct.image}
								onChange={(e) =>
									setUpdatedProduct({
										...updatedProduct,
										image: e.target.value
									})
								}
								style={{
									width: '100%',
									padding: '10px',
									borderRadius: '4px',
									border: '1px solid #ccc'
								}}
							/>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<button
								onClick={() =>
									handleUpdatedProduct(product._id, updatedProduct)
								}
								style={{
									padding: '10px 20px',
									borderRadius: '4px',
									background: '#4caf50',
									color: '#fff',
									border: 'none',
									cursor: 'pointer'
								}}
							>
								Update
							</button>
							<button
								onClick={() => setIsModalOpen(false)}
								style={{
									padding: '10px 20px',
									borderRadius: '4px',
									background: '#f44336',
									color: '#fff',
									border: 'none',
									cursor: 'pointer'
								}}
							>
								Cancel
							</button>
						</div>
					</div>
				</Modal>
			</Box>
		</Box>
	);
};

export default ProductCard;
