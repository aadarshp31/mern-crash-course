import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';

const Modal = ({ isOpen, onClose, children }) => {
	const modalBg = useColorModeValue('white', 'gray.800');
	const modalTextColor = useColorModeValue('gray.800', 'white');

	if (!isOpen) return null;

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 1000
			}}
		>
			<div
				style={{
					backgroundColor: modalBg,
					color: modalTextColor,
					padding: '20px',
					borderRadius: '8px',
					width: '90%',
					maxWidth: '400px',
					boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
				}}
			>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<h2 style={{ margin: 0, fontSize: '1.5rem' }}>Edit Product</h2>
					<button
						onClick={onClose}
						style={{
							background: 'transparent',
							border: 'none',
							fontSize: '1.2rem',
							cursor: 'pointer',
							color: modalTextColor
						}}
					>
						✖
					</button>
				</div>
				<div style={{ marginTop: '20px' }}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
