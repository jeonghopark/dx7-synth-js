var SAMPLE_RATE = 44100;
var LFO_RATE = 441;
var LFO_SAMPLE_PERIOD = Math.floor(SAMPLE_RATE / LFO_RATE);
var PERIOD = Math.PI * 2;
var BUFFER_SIZE = 1024;

var Config = {
	sampleRate: SAMPLE_RATE,
	lfoRate: LFO_RATE,
	lfoSamplePeriod: LFO_SAMPLE_PERIOD,
	period: PERIOD,
	bufferSize: BUFFER_SIZE
};

module.exports = Config;