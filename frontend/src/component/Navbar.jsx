import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { LuSquarePlus } from 'react-icons/lu';
import { FaGratipay, FaRegMoon } from 'react-icons/fa';
import { AiFillSun } from 'react-icons/ai';
import {
	useColorMode,
	useColorModeValue
} from '../components/ui/color-mode.jsx';

function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Container bg={useColorModeValue('gray.100', 'gray.900')}>
			<Flex
				h={16}
				alignItems={'center'}
				justifyContent={'space-between'}
				flexDir={{ base: 'column', sm: 'row' }}
			>
				<Text
					fontSize={{ base: '22px', sm: '28px' }}
					fontWeight={'bold'}
					textTransform={'uppercase'}
					textAlign={'center'}
				>
					<Link className='text-gradient' to={'/'}>
						Product Store
					</Link>
				</Text>

				<HStack spacing={'2'}>
					<Link to={'create'}>
						<Button>
							<LuSquarePlus />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === 'light' ? <FaRegMoon /> : <AiFillSun />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
}

export default Navbar;
