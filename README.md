# EdgeQL Query Builder (possibly) excessive build time and memory Issues

This repository has been created to demonstrate the excessive memory consumption when transpiling the edgeql-js.

|   |   |
|---|---|
| **OS** | Windows 11 |
| **Node** | 20.14.0 |

```bash
npm install
npm run db:reset
npx tsc index.ts
```

Observe that the build takes quite a long time and the memory usage climbs into 4GB+
