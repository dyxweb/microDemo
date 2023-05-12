declare module '*.css' {
  const classes: { readonly [key: string]: string }
  export default classes;
}
declare module '*.scss' {
  const classes: { readonly [key: string]: string }
  export default classes;
}

declare interface Window {
  __POWERED_BY_QIANKUN__: any;
}


