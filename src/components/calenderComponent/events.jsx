const now = new Date();

export default [
	{
		id: 2,
		title: "DTS STARTS",
		start: new Date(2016, 2, 13, 0, 0, 0),
	},

	{
		id: 3,
		title: "DTS ENDS",
		start: new Date(2016, 10, 6, 0, 0, 0),
	},

	{
		id: 4,
		title: "Some Event",
		start: new Date(2015, 3, 9, 0, 0, 0),
		end: new Date(2015, 3, 10, 0, 0, 0),
	},
	{
		id: 5,
		title: "Conference",
		start: new Date(2015, 3, 11),
		end: new Date(2015, 3, 13),
		desc: "Big conference for important people",
	},
	{
		id: 14,
		title: "Today",
		start: new Date(new Date().setHours(new Date().getHours() - 3)),
		end: new Date(new Date().setHours(new Date().getHours() + 3)),
	},
	{
		id: 15,
		title: "Point in Time Event",
		start: now,
		end: now,
		desc: "Big conference for important people",
	},
];
