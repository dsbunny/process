// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// Simple helper for measuring elapsed time using process.hrtime.bigint().
//
// Example usage:
//
//	const start = hrtime.bigint();
//	doSomething();
//   	const elapsed = hrtimeElapsed(start);

import { hrtime } from 'node:process';

export function hrtimeElapsed(start: bigint): number {
	return Number(hrtime.bigint() - start) / 1000000;
}
