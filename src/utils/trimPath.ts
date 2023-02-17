export const trimPath = (filename: string) => {
  return filename.replace(/(.)[^\/]*\//g, '$1/').replace(/\.[jt]sx?$/, '');
};
