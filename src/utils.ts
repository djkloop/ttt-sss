export function extend(target : any, ...rest : any[]): Object {
  for(let i = 0; i < rest.length; i++) {
    const source = rest[i];
    for (const key in source) {
      target[key] = source[key]
    }
  }
  return target
}