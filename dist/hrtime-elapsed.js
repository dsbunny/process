"use strict";
// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// Simple helper for measuring elapsed time using process.hrtime.bigint().
//
// Example usage:
//
//	const start = hrtime.bigint();
//	doSomething();
//   	const elapsed = hrtimeElapsed(start);
Object.defineProperty(exports, "__esModule", { value: true });
exports.hrtimeElapsed = void 0;
const node_process_1 = require("node:process");
function hrtimeElapsed(start) {
    return Number(node_process_1.hrtime.bigint() - start) / 1000000;
}
exports.hrtimeElapsed = hrtimeElapsed;
//# sourceMappingURL=hrtime-elapsed.js.map