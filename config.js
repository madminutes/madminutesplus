var maxPass = 25;

var maxTime = "1:30";  // 1:30 = 1 minute and 30 seconds

data = {
	"Division" : {
			"A" : [ 
					[5,1], [9,1], [3,1], [7,1], [4,1], [6,1], [6,1], [4,1], [8,1], [9,1],
					[9,1], [7,1], [6,1], [7,1], [8,1], [5,1], [6,1], [4,1], [6,1], [8,1],
					[9,1], [9,1], [5,1], [7,1], [2,1], [8,1], [6,1], [1,1], [5,1], [3,1],
					[6,1], [3,1], [5,1], [4,1], [3,1], [5,1], [4,1], [6,1], [7,1], [9,1],
				  ],
			"B" : [ 
					[8,8], [6,6], [7,7], [5,1], [3,3], [1,1], [9,9], [4,1], [7,7], [9,9],
					[9,1], [7,1], [6,6], [7,7], [8,8], [5,5], [6,6], [4,4], [6,6], [8,1],
					[3,1], [9,9], [5,5], [7,7], [2,2], [8,1], [6,6], [1,1], [5,5], [3,3],
					[6,1], [3,3], [5,5], [4,1], [3,1], [9,9], [4,4], [6,6], [7,1], [8,8],
				  ],
			"C" : [ 
					[6,2], [6,3], [7,7], [5,1], [3,3], [9,9], [6,3], [4,2], [7,7], [9,9],
					[9,1], [7,1], [6,2], [4,2], [8,8], [5,5], [6,2], [4,2], [6,3], [8,1],
					[3,3], [9,9], [6,3], [7,7], [4,2], [8,8], [6,2], [1,1], [5,5], [6,3],
					[6,6], [6,3], [5,5], [4,4], [3,1], [9,1], [4,2], [6,2], [6,2], [8,8],
				  ],
			"D" : [ 
					[4,2], [8,2], [3,1], [9,9], [4,4], [6,2], [5,5], [4,1], [8,4], [3,1],
					[6,3], [7,7], [6,1], [7,7], [3,3], [10,5], [6,1], [4,1], [10,2], [8,8],
					[5,1], [3,3], [9,1], [6,3], [8,2], [4,4], [4,2], [6,6], [10,5], [2,1],
					[9,9], [10,2], [5,1], [8,4], [3,1], [6,3], [7,1], [9,1], [7,7], [6,2],
				  ],
			"E" : [ 	[12,2], [8,2], [3,1], [9,9], [4,4], [14,2], [5,5], [4,1], [8,4], [3,1],
					[6,3], [14,7], [6,1], [7,7], [12,6], [10,5], [6,1], [4,1], [10,2], [8,8],
					[5,1], [3,3], [9,9], [6,3], [8,2], [4,4], [4,2], [12,6], [10,5], [2,1],
					[14,2], [10,2], [5,5], [8,4], [3,1], [6,3], [7,1], [9,1], [12,2], [14,7]
				  ],
			"F" : [ 	[12,2], [16,2], [5,5], [16,8], [14,7], [18,9], [18,2], [8,2], [12,6], [14,2],
					[6,2], [18,9], [10,2], [14,2], [18,2], [10,5], [16,2], [12,2], [16,8], [8,4],
					[4,1], [8,4], [16,8], [14,7], [12,6], [16,2], [12,2], [18,2], [10,2], [18,9],
					[18,2], [14,7], [10,5], [18,9], [16,8], [12,6], [12,2], [8,2], [6,3], [14,2]
				  ],
			"G" : [ 
				  ],
			"H" : [ 	[18,9], [8,2], [3,1], [16,2], [36,4], [14,2], [5,5], [4,1], [27,9], [3,1],
					[36,9], [14,7], [18,2], [7,7], [27,3], [10,5], [6,1], [4,1], [10,2], [16,8],
					[5,1], [3,3], [27,9], [18,9], [8,2], [27,3], [16,2], [12,6], [36,9], [2,1],
					[36,4], [10,2], [36,9], [27,3], [3,1], [6,3], [18,2], [9,1], [27,9], [14,7]
				  ],
			"I" : [ 	[36,4], [16,8], [27,9], [9,3], [45,9], [14,7], [45,5], [18,9], [27,3], [12,6],
					[9,3], [36,9], [18,2], [45,9], [27,3], [36,4], [16,2], [45,5], [8,2], [18,9],
					[4,1], [27,9], [9,3], [18,2], [45,5], [10,5], [27,3], [45,9], [10,2], [36,9],
					[45,9], [2,2], [14,2], [27,9], [16,8], [9,3], [36,4], [45,5], [36,9], [18,9]
				  ],
			"J" : [  	[54,6], [8,2], [3,1], [16,4], [36,4], [14,2], [54,9], [4,1], [27,9], [45,9],
					[36,9], [14,7], [18,2], [7,7], [27,3], [10,5], [45,5], [54,6], [10,2], [16,4],
					[45,9], [9,3], [54,9], [16,4], [8,2], [54,6], [16,2], [12,6], [36,9], [2,1],
					[16,4], [10,2], [45,5], [27,3], [3,1], [6,3], [18,2], [9,3], [54,6], [14,7]
				  ],
			"K" : [ 	[63,7], [25,5], [3,1], [16,4], [63,9], [12,2], [54,6], [4,1], [27,9], [45,9],
					[36,9], [14,7], [8,4], [63,9], [27,3], [10,5], [45,5], [25,5], [10,2], [63,9],
					[45,9], [9,3], [54,9], [7,7], [8,2], [25,5], [63,7], [12,6], [36,9], [2,1],
					[16,4], [10,2], [25,5], [63,7], [3,1], [6,3], [18,2], [9,3], [54,6], [14,7]
				  ],
			"L" : [ 	[36,6], [10,5], [3,1], [16,4], [63,9], [72,8], [54,6], [4,1], [45,9], [72,9],
					[45,9], [14,7], [8,4], [63,9], [27,3], [25,5], [45,5], [72,8], [10,2], [36,6],
					[36,9], [9,3], [72,9], [7,7], [8,2], [72,8], [63,7], [12,6], [36,6], [2,1],
					[16,4], [10,2], [25,5], [63,7], [3,1], [36,6], [18,2], [9,3], [9,9], [14,7]
				  ],
			"M" : [ 	[10,2], [10,5], [3,1], [12,4], [63,9], [12,3], [54,6], [4,1], [49,7], [72,9],
					[45,9], [14,7], [8,4], [63,9], [12,3], [25,5], [45,5], [72,8], [49,7], [72,8],
					[36,9], [9,3], [72,9], [7,7], [8,2], [12,4], [63,7], [12,6], [36,6], [2,1],
					[49,7], [10,2], [25,5], [63,7], [3,1], [36,6], [18,2], [12,3], [9,9], [14,7]
				  ],
			"N" : [ 	[64,8], [25,5], [3,1], [12,4], [15,3], [64,8], [36,6], [4,1], [49,7], [72,9],
					[16,8], [14,7], [8,4], [72,9], [12,3], [15,5], [45,5], [72,8], [15,5], [64,8],
					[15,3], [9,3], [63,9], [7,7], [8,2], [12,4], [63,7], [12,6], [16,8], [2,1],
					[15,5], [6,2], [10,5], [63,7], [3,1], [36,6], [18,2], [12,3], [9,9], [14,7]
				  ],
			"O" : [ 	[18,6], [25,5], [3,1], [12,4], [18,3], [81,9], [36,6], [4,1], [49,7], [81,9],
					[16,8], [36,6], [12,4], [72,9], [12,3], [15,5], [45,5], [72,8], [18,6], [64,8],
					[15,3], [18,3], [63,9], [7,7], [8,2], [8,4], [63,7], [12,6], [16,8], [2,1],
					[15,5], [6,2], [10,5], [63,7], [3,1], [18,6], [6,6], [12,3], [81,9], [14,7]
				  ],
			"P" : [ 	[16,8], [25,5], [3,1], [12,4], [18,3], [24,8], [21,3], [4,1], [49,7], [81,9],
					[24,8], [36,6], [12,4], [72,9], [12,3], [24,3], [45,5], [72,8], [21,7], [64,8],
					[21,3], [24,8], [63,9], [7,7], [8,2], [8,4], [63,7], [12,6], [21,7], [72,9],
					[15,5], [6,2], [10,5], [63,7], [3,1], [18,6], [21,7], [12,3], [24,3], [14,7]
				  ],
			"Q" : [ 	[48,8], [18,6], [48,6], [56,7], [21,3], [9,1], [18,3], [56,8], [24,8], [24,3],
					[6,6], [56,8], [81,9], [48,8], [21,7], [18,6], [21,3], [56,7], [24,3], [48,6],
					[48,6], [24,3], [18,3], [56,8], [24,8], [56,7], [14,7], [72,9], [48,8], [21,7],
					[18,2], [56,7], [24,8], [21,7], [48,8], [15,5], [21,3], [56,8], [81,9], [48,6]
				  ],
			"R" : [ 	[32,8], [45,5], [3,1], [12,4], [48,6], [40,8], [21,3], [4,4], [49,7], [81,9],
					[40,5], [36,6], [32,4], [72,9], [12,3], [24,3], [25,5], [56,7], [21,7], [64,8],
					[21,3], [24,8], [7,1], [56,8], [8,2], [32,4], [63,7], [40,8], [32,8], [72,9],
					[48,6], [6,2], [10,5], [32,8], [3,1], [18,6], [21,7], [12,3], [40,5], [14,7]
				  ],
			"S" : [ 	[56,7], [35,7], [42,7], [32,4], [32,8], [42,6], [35,5], [40,8], [48,8], [3,1],
					[42,6], [56,8], [81,9], [40,5], [35,5], [48,6], [21,3], [35,7], [42,7], [32,8],
					[42,7], [40,8], [32,4], [35,5], [48,8], [40,5], [48,6], [35,7], [42,6], [56,7],
					[14,7], [35,5], [40,5], [35,7], [56,8], [32,8], [42,6], [32,4], [40,8], [42,7]
				  ],
			"T" : [ 	[28,7], [25,5], [14,7], [12,4], [48,6], [8,8], [21,3], [28,4], [42,7], [30,5],
					[35,5], [5,1], [28,4], [72,9], [12,3], [9,3], [45,5], [30,6], [21,7], [64,8],
					[21,3], [42,7], [7,7], [56,8], [8,2], [30,5], [42,6], [28,7], [30,6], [35,7],
					[27,9], [30,6], [10,5], [32,8], [3,1], [18,6], [21,7], [28,4], [40,5], [14,7]
				  ],
			"U" : [ 	[28,7], [35,7], [42,7], [20,4], [24,6], [30,6], [20,5], [4,1], [35,5], [24,4],
					[30,6], [20,4], [28,4], [24,4], [42,6], [24,6], [21,3], [20,5], [28,7], [30,5],
					[24,6], [28,4], [24,4], [35,7], [30,6], [20,5], [36,4], [30,5], [20,4], [42,7],
					[24,4], [20,5], [20,4], [28,7], [42,6], [8,8], [30,5], [35,5], [28,4], [24,6]
				  ],
			"V" : [ 	[28,7], [35,7], [49,7], [20,4], [24,6], [27,9], [32,8], [4,4], [15,5], [24,4],
					[30,6], [20,4], [45,5], [24,4], [18,6], [9,1], [9,3], [20,5], [28,7], [30,5],
					[24,6], [28,4], [20,4], [14,7], [30,6], [20,5], [16,4], [10,5], [20,4], [42,7],
					[24,4], [20,5], [40,8], [21,7], [12,6], [6,2], [30,5], [35,5], [28,4], [24,6]
				  ],
			"W" : [		[14,7], [35,7], [49,7], [20,5], [24,6], [27,9], [32,8], [4,4], [16,8], [16,4],
					[36,6], [20,4], [40,8], [24,4], [18,6], [9,1], [9,3], [14,2], [56,8], [81,9],
					[36,9], [28,4], [24,4], [28,7], [27,3], [20,5], [24,4], [40,5], [20,4], [35,7],
					[24,4], [21,3], [40,8], [21,7], [12,6], [6,2], [15,5], [35,5], [28,4], [24,6]
				  ],
			"X" : [ 	[14,7], [35,7], [49,7], [20,5], [24,6], [27,9], [32,8], [4,4], [16,8], [16,4],
					[36,6], [20,4], [40,8], [24,4], [18,6], [9,1], [9,3], [14,2], [56,8], [81,9],
					[36,9], [28,4], [24,4], [28,7], [27,3], [20,5], [24,4], [40,5], [20,4], [35,7],
					[24,4], [21,3], [40,8], [21,7], [12,6], [6,2], [15,5], [35,5], [28,4], [24,6]
				  ],
			"50 A" : [ 	[4,2], 	[30,6], [14,2], [12,2], [20,4], [8,1], [36,9], [6,3], [42,6], [10,5],
					[35,7], [8,2], [36,4], [15,3], [12,6], [9,9], [20,5], [18,9], [24,4], [15,5],
					[18,3], [6,2], [28,7], [56,8], [14,7], [30,5], [16,8], [20,4], [10,2], [24,6],
					[27,9], [18,6], [32,4], [28,4], [32,8], [40,5], [42,7], [8,4], [35,5], [6,1]
				     ],
			"50 B" : [ 
				     ],
	},
	"Multiplication" : {
			"A" : [ 
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

