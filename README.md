# pnpm-monorepo
pnpm monorepo test
## directory
```
├── apis
├── utils
├── components
├── packages
│   ├── h5-client
│   └── web-client
├── pnpm-workspace.yaml
├── readme.md
└── tsconfig.json
```

## h5-client
- dependency

```angular2html
pnpm add @ueumd/apis
pnpm add @ueumd/utils
pnpm add @ueumd/components
```

- package.json
```
  "dependencies": {
    "@ueumd/apis": "workspace:^0.0.1",
    "@ueumd/components": "workspace:^0.0.1",
    "@ueumd/utils": "workspace:^0.0.1",
    "pinia": "^2.0.16",
    "vue": "^3.2.37",
    "vue-router": "^4.1.2"
  }
```


## install

- pnpm install dayjs to @ueumd/utils
```
pnpm i dayjs -r --filter @ueumd/utils
```


- pnpm install @ueumd/utils to @ueumd/h5-client
```
pnpm i @ueumd/utils -r --filter @ueumd/h5-client
```
