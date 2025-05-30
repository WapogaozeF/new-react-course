export type Events = {
	events: Array<Event>;
};

export type Event = {
	id: string;
	description: string;
	date: string;
	image: string;
	title: string;
};

export type EventData = {
	title: string;
	image: string;
	date: string;
	description: string;
};