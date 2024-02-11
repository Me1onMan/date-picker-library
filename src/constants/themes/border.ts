export interface IBorder {
  line: {
    primary: string;
    [code: string]: string;
  };
  radius: {
    primary: string;
    bottom: string;
    top: string;
    dayRangeStart: string;
    dayRangeEnd: string;
    [code: string]: string;
  };
}

const BORDERS: IBorder = {
  line: {
    primary: "1px solid",
  },
  radius: {
    primary: "8px",
    bottom: "0 0 8px 8px",
    top: "8px 8px 0 0",
    dayRangeStart: "8px 0 0 8px",
    dayRangeEnd: "0 8px 8px 0",
    dayRangeMid: "0",
  },
};

export default BORDERS;
