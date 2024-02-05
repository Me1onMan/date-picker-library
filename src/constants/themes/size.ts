export interface ISize {
  s: string;
  m: string;
  l: string;
  [code: string]: string;
}

const SIZES: ISize = {
  s: "8px",
  m: "16px",
  l: "32px",
};

export default SIZES;
