const toCamelCase = (s: string) => {
  return s.replace(/(_\w)/g, (m) => m[1].toUpperCase())
}

const isPlainObject = (obj: any): obj is Record<string, any> => {
  return obj !== null && typeof obj === "object" && obj.constructor === Object
}

export const keysToCamel = <T>(obj: T): T => {
  if (Array.isArray(obj)) {
    return obj.map((v) => keysToCamel(v)) as unknown as T
  } else if (isPlainObject(obj)) {
    return Object.keys(obj as Record<string, any>).reduce(
      (result, key) => ({
        ...result,
        [toCamelCase(key)]: keysToCamel((obj as Record<string, any>)[key]),
      }),
      {},
    ) as T
  }
  return obj
}
