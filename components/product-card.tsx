"use client";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
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
	name,
	content,
	price,
	src,
}) => {
	const t = useTranslations("ui");
	const eurPrice = (price / 1.95583).toFixed(2);
	const tags = content
		.split(/[,·]/)
		.map((s) => s.trim())
		.filter(Boolean);
	return (
		<div className="transition-opacity duration-300">
			<Card className="relative mt-0 max-w-[450px] overflow-hidden transition-colors duration-200">
				<div className="flex min-h-[200px] w-full items-center justify-center bg-[#181818] sm:min-h-[220px]">
					<img
						src={src}
						alt={name}
						className="max-h-[min(280px,55vw)] w-full object-contain object-center p-2"
					/>
				</div>

				<CardHeader className="p-5">
					<div className="flex flex-col space-y-2">
						<div className="flex items-baseline justify-between">
							<span className="text-[1.125rem] font-normal uppercase leading-[1.37] tracking-normal text-white">
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
				<CardFooter className="flex flex-col gap-4 p-5 pt-0 sm:flex-row sm:items-stretch">
					<div className="flex w-full gap-3">
						<Badge className="flex min-h-11 flex-1 items-center justify-center py-2 text-center tabular-nums">
							€ {eurPrice}
						</Badge>
						<Badge className="flex min-h-11 flex-1 items-center justify-center py-2 text-center tabular-nums">
							BGN {price}
						</Badge>
					</div>
					<Dialog>
						<DialogTrigger asChild>
							<Button className="w-full shrink-0 sm:w-auto">
								{t("viewMore")}
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>{name}</DialogTitle>
								<DialogDescription className="text-base leading-normal text-[#7D7D7D]">
									{content}
								</DialogDescription>
							</DialogHeader>
							<div className="mt-2 flex min-h-[200px] items-center justify-center bg-[#181818]">
								<img
									src={src}
									alt={name}
									className="max-h-[320px] w-full object-contain object-center p-2"
								/>
							</div>
							<div className="mt-3 flex flex-wrap gap-2">
								{tags.map((tag, i) => (
									<Badge key={i} variant={i === 0 ? "default" : "secondary"}>
										{tag}
									</Badge>
								))}
							</div>
							<div className="mt-4 text-sm text-[#7D7D7D]">
								{t("price")}: € {eurPrice} • BGN {price}
							</div>
						</DialogContent>
					</Dialog>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ProductCard;
