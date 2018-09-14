/** 
 * collector-snmp
 * 
 *
 */
const snmp = require('snmp-native');
const config = require('config');
const cluster = require('cluster');

const numOfCPU = require('os').cpus().length;

if (cluster.isMaster) {
	
}
