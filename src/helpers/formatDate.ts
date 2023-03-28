const defaultOptions = {
  lang: "en",
  type: "short",
};

const formatTypeOptions: any = {
  short: {},
  long: {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
};

export const formatDate = (date: Date, options: Options = {}) => {
  const { lang, type } = { ...defaultOptions, ...options };
  const formatOptions = formatTypeOptions[type];
  return new Intl.DateTimeFormat(lang, formatOptions).format(date);
};

interface Options {
  lang?: string;
  type?: "short" | "long";
}
