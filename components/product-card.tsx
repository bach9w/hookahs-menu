"use client";
import { motion } from "framer-motion";
import { Card, Ribbon, Badge } from "@rewind-ui/core";
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
	const eurPrice = (price / 1.95583).toFixed(2);
	return (
		<motion.div
			initial={{ opacity: 0, x: -60 }}
			transition={{ delay: 0.15 }}
			whileInView={{ opacity: 1, x: 0 }}
		>
			<Card className="max-w-[450px] mt-10 relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
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
					initial={{ opacity: 0, scale: 0.98 }}
					transition={{ delay: 0.1 }}
					whileInView={{ opacity: 1, scale: 1 }}
				>
					<div className=" w-full overflow-hidden">
						<Card.Image mode="dark" src={src} />
					</div>
				</motion.div>

				<Card.Body>
					<div className="flex flex-col space-y-1">
						<div className="flex justify-between items-baseline">
							<span className="text-xl text-gray-800 font-semibold">
								{name}
							</span>
						</div>
						<p className="text-sm text-gray-500">{content}</p>
					</div>
				</Card.Body>
				<Card.Footer>
					<div className="flex items-center justify-center w-full">
						<div className="flex gap-2 items-center bg-black rounded-xl ">
							<Badge color="red" size="md" tone="solid">
								BGN {price}
							</Badge>

							<Badge color="red" size="md" tone="solid">
								€ {eurPrice}
							</Badge>
						</div>
					</div>
				</Card.Footer>
			</Card>
		</motion.div>
	);
};

export default ProductCard;
