"use client";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { useState } from "react";
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
	const [cardImgLoaded, setCardImgLoaded] = useState(false);
	const [dialogImgLoaded, setDialogImgLoaded] = useState(false);

	const cardImgRef = (node: HTMLImageElement | null) => {
		if (node?.complete) setCardImgLoaded(true);
	};
	const dialogImgRef = (node: HTMLImageElement | null) => {
		if (node?.complete) setDialogImgLoaded(true);
	};
	return (
		<div className="group h-full transition-colors duration-200">
			<Card className="relative mt-0 flex h-full flex-col overflow-hidden transition-colors duration-200 group-hover:border-[#494949]">
				{/* Image */}
				<div className="relative flex min-h-[260px] w-full shrink-0 items-center justify-center bg-[#181818] sm:min-h-[280px]">
					{!cardImgLoaded && (
						<div className="absolute inset-0 animate-pulse bg-[#202020]" />
					)}
					<img
						ref={cardImgRef}
						src={src}
						alt={name}
						onLoad={() => setCardImgLoaded(true)}
						className={`max-h-[min(300px,60vw)] w-full object-contain object-center p-2 transition-opacity duration-500 ${cardImgLoaded ? "opacity-100" : "opacity-0"}`}
					/>
				</div>

				{/* Content */}
				<CardHeader className="flex-1 p-5">
					<div className="flex flex-col space-y-3">
						<span className="text-[1.5rem] font-normal uppercase leading-tight tracking-normal text-white">
							{name}
						</span>
						<div className="flex flex-wrap gap-1">
							{tags.map((tag, i) => (
								<Badge key={i} variant={i === 0 ? "default" : "secondary"}>
									{tag}
								</Badge>
							))}
						</div>
					</div>
				</CardHeader>

				{/* Footer */}
				<CardFooter className="flex items-center justify-between gap-4 p-5 pt-0">
					<span className="tabular-nums text-sm text-[#7D7D7D]">
						€&nbsp;{eurPrice}&nbsp;·&nbsp;BGN&nbsp;{price}
					</span>
					<Dialog>
						<DialogTrigger asChild>
							<Button className="shrink-0">{t("viewMore")}</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>{name}</DialogTitle>
								<DialogDescription className="text-base leading-normal text-[#7D7D7D]">
									{content}
								</DialogDescription>
							</DialogHeader>
							<div className="relative mt-2 flex min-h-[200px] items-center justify-center bg-[#181818]">
								{!dialogImgLoaded && (
									<div className="absolute inset-0 animate-pulse bg-[#202020]" />
								)}
								<img
									ref={dialogImgRef}
									src={src}
									alt={name}
									onLoad={() => setDialogImgLoaded(true)}
									className={`max-h-[320px] w-full object-contain object-center p-2 transition-opacity duration-500 ${dialogImgLoaded ? "opacity-100" : "opacity-0"}`}
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
								{t("price")}: €&nbsp;{eurPrice}&nbsp;·&nbsp;BGN&nbsp;{price}
							</div>
						</DialogContent>
					</Dialog>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ProductCard;
