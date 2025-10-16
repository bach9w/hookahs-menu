"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
		<div className="transition-opacity duration-300">
			<Card className="max-w-[450px] mt-10 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
				<div className=" w-full overflow-hidden">
					<img src={src} alt={name} className="w-full h-full object-cover" />
				</div>

				<CardHeader>
					<div className="flex flex-col space-y-1">
						<div className="flex justify-between items-baseline">
							<span className="text-xl text-gray-800 font-semibold">
								{name}
							</span>
						</div>
						<p className="text-sm text-gray-500">{content}</p>
					</div>
				</CardHeader>
				<CardFooter>
					<div className="flex items-center justify-between w-full">
						<div className="flex gap-2 items-center w-full justify-center">
							<Badge className="w-full text-center flex justify-center">
								BGN {price}
							</Badge>
							<Badge
								className=" w-full text-center flex justify-center"
								variant="destructive"
							>
								€ {eurPrice}
							</Badge>
						</div>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ProductCard;
