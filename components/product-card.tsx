"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
} from "@/components/ui/dialog";
interface ProductCardProps {
	id: number;
	name: string;
	content: string;
	price: number;
	src: string;
	onSelect?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	name,
	content,
	price,
	src,
	onSelect,
}) => {
	const eurPrice = (price / 1.95583).toFixed(2);
	const tags = content
		.split(/[,·]/)
		.map((s) => s.trim())
		.filter(Boolean);
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
						<div className="flex flex-wrap gap-1 mt-1">
							{tags.slice(0, 3).map((tag, i) => (
								<Badge key={i} variant={i === 0 ? "default" : "secondary"}>
									{tag}
								</Badge>
							))}
						</div>
					</div>
				</CardHeader>
				<CardFooter>
					<div className="flex items-center justify-between w-full gap-3">
						<div className="flex gap-2 items-center w-full">
							<Badge className="flex-1 text-center flex justify-center">
								BGN {price}
							</Badge>
							<Badge
								className="flex-1 text-center flex justify-center"
								variant="secondary"
							>
								€ {eurPrice}
							</Badge>
						</div>
						<Dialog>
							<DialogTrigger asChild>
								<Button className="shrink-0">Повече</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>{name}</DialogTitle>
									<DialogDescription>{content}</DialogDescription>
								</DialogHeader>
								<div className="mt-2">
									<img
										src={src}
										alt={name}
										className="w-full rounded-md object-cover"
									/>
								</div>
								<div className="mt-3 flex flex-wrap gap-2">
									{tags.map((tag, i) => (
										<Badge key={i} variant={i === 0 ? "default" : "secondary"}>
											{tag}
										</Badge>
									))}
								</div>
								<div className="mt-4 text-sm text-muted-foreground">
									Цена: BGN {price} • € {eurPrice}
								</div>
							</DialogContent>
						</Dialog>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ProductCard;
