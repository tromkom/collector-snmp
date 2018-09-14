/** 
 * collector-snmp
 * 
 *
 */
const snmp = require('snmp-native');
const config = require('config');
const cluster = require('cluster');
const collector = require('./lib/collector');

const numOfCPU = require('os').cpus().length;

if (cluster.isMaster) {
	for (let i = 0; i<numOfCPU; i++) {
  		cluster.fork();
  	}
} else {
	collector.start().then(() => {
		console.log(`Collector ${process.pid} started..`); 
	});
}
