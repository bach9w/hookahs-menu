'use client';
import { motion } from 'framer-motion';
import { Card, Ribbon, Button, Badge } from '@rewind-ui/core';
interface ProductCardProps {
	id: number;
	name: string;
	content: string;
	price: number;
	src: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	name,
	content,
	price,
	src,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			transition={{ delay: 0.2 }}
			whileInView={{ opacity: 1, x: 0 }}
		>
			<Card className="max-w-[450px] mt-10 relative">
				<Ribbon
					size="lg"
					shadow="base"
					color="purple"
					shadowColor="purple"
					className="z-20"
				>
					SHISHA
				</Ribbon>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					transition={{ delay: 0.2 }}
					whileInView={{ opacity: 1, x: 0 }}
				>
					<Card.Image caption={content} mode="dark" src={src} />
				</motion.div>

				<Card.Body>
					<div className="flex flex-col space-y-2">
						<div className="flex justify-between items-center">
							<span className="text-xl text-gray-800 font-semibold">
								{name}
							</span>
						</div>
					</div>
				</Card.Body>
				<Card.Footer>
					<Button className="w-full" color="black">
						{price} BGN
					</Button>
				</Card.Footer>
			</Card>
		</motion.div>
	);
};

export default ProductCard;
