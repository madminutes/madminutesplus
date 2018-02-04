var maxPass = 25;

var maxTime = "1:30";  // 1:30 = 1 minute and 30 seconds

data = {
	"Multiplication" : {
			"A" : [ 
					[1,5], [2,7], [0,7], [4,6], [9,8], [9,7], [7,7], [5,6], [3,8], [4,2],
					[3,2], [0,6], [5,3], [2,4], [6,4], [3,5], [8,4], [3,7], [7,4], [5,4],
					[6,2], [8,9], [5,2], [6,7], [2,3], [4,8], [4,5], [3,5], [5,8], [4,4],
					[8,7], [7,2], [9,6], [6,5], [8,3], [7,6], [5,9], [2,6], [6,2], [3,9],
				  ],
			"B" : [ 
					[1,5], [2,7], [0,7], [4,6], [9,8], [9,7], [7,7], [5,6], [3,8], [4,2],
					[3,2], [0,6], [5,3], [2,4], [6,4], [3,5], [8,4], [3,7], [7,4], [5,4],
					[6,2], [8,9], [5,2], [6,7], [2,3], [4,8], [4,5], [3,5], [5,8], [4,4],
					[8,7], [7,2], [9,6], [6,5], [8,3], [7,6], [5,9], [2,6], [6,2], [3,9],
				  ],
			"C" : [ 
					[1,5], [2,7], [0,7], [4,6], [9,8], [9,7], [7,7], [5,6], [3,8], [4,2],
					[3,2], [0,6], [5,3], [2,4], [6,4], [3,5], [8,4], [3,7], [7,4], [5,4],
					[6,2], [8,9], [5,2], [6,7], [2,3], [4,8], [4,5], [3,5], [5,8], [4,4],
					[8,7], [7,2], [9,6], [6,5], [8,3], [7,6], [5,9], [2,6], [6,2], [3,9],
				  ],
			"D" : [ 
					[1,5], [2,7], [0,7], [4,6], [9,8], [9,7], [7,7], [5,6], [3,8], [4,2],
					[3,2], [0,6], [5,3], [2,4], [6,4], [3,5], [8,4], [3,7], [7,4], [5,4],
					[6,2], [8,9], [5,2], [6,7], [2,3], [4,8], [4,5], [3,5], [5,8], [4,4],
					[8,7], [7,2], [9,6], [6,5], [8,3], [7,6], [5,9], [2,6], [6,2], [3,9],
				  ],
			"E" : [ 
				  ],
			"F" : [ 
				  ],
			"G" : [ 
				  ],
			"H" : [ 
				  ],
			"I" : [ 
				  ],
			"J" : [ 
				  ],
			"K" : [ 
				  ],
			"L" : [ 
				  ],
			"M" : [ 
				  ],
			"N" : [ 
				  ],
			"O" : [ 
				  ],
			"P" : [ 
				  ],
			"Q" : [ 
				  ],
			"R" : [ 
				  ],
			"S" : [ 
				  ],
			"T" : [ 
				  ],
			"U" : [ 
				  ],
			"V" : [ 
				  ],
			"W" : [ 
				  ],
			"X" : [ 
				  ],
			"2m A" : [ 
				     ],
			"2m B" : [ 
				     ],
	},
	"Division" : {
			"A" : [ 
					[1,100], [5,25], [1,3], [1,16], [1,63], [1,12], [1,54], [1,4], [1,27], [1,45],
					[1,100], [5,25], [1,3], [1,16], [1,63], [1,12], [1,54], [1,4], [1,27], [1,45],
					[1,100], [5,25], [1,3], [1,16], [1,63], [1,12], [1,54], [1,4], [1,27], [1,45],
					[1,100], [5,25], [1,3], [1,16], [1,63], [1,12], [1,54], [1,4], [1,27], [1,45],
				  ],
			"B" : [ 
				  ],
			"C" : [ 
				  ],
			"D" : [ 
				  ],
			"E" : [ 
				  ],
			"F" : [ 
				  ],
			"G" : [ 
				  ],
			"H" : [ 
				  ],
			"I" : [ 
				  ],
			"J" : [ 
				  ],
			"K" : [ 
					[7,63], [5,25], [1,3], [4,16], [9,63], [2,12], [6,54], [1,4], [9,27], [9,45],
					[9,36], [7,14], [4,8], [9,63], [3,27], [5,10], [5,45], [5,25], [2,10], [9,63],
					[9,45], [3,9], [9,54], [7,7], [2,8], [5,25], [7,63], [6,12], [9,36], [1,2],
					[4,16], [2,10], [5,25], [7,63], [1,3], [3,6], [2,18], [3,9], [9,54], [7,14],
				  ],
	},
};

var passedMessages = [ 
						"Awesome, you did great!",
						"You passed!",
						"Quick thinking!",
						"Great job!",
];

var tryAgainMessages = [ 
						"Keep it up, you can do it!",
						"Keep up the hard work!",
						"I know you can do better.",
];
