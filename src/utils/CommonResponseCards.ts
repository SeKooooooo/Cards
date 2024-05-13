import { CardInfo } from './CardInfo';

export type CommonResponseCards={
	"page": number,
	"per_page": number,
	"total": number,
	"total_pages": number,
	"data": CardInfo[]
}