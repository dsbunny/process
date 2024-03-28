# @dsbunny/process
Utility functions wrapping node:process APIs.

## hrtimeElapsed(start: bigint): number
Convenience function to calculate elapsed time from NodeJS high resolution timer.  Example usage:
```TypeScript
import { hrtimeElapsed } from '@dsbunny/process';

const start = hrtime();
// Perform an operation ...
const elapsed = hrtimeElapsed(start);
console.log(`Operation took ${elapsed} milliseconds.`);
```
