const formatInput = (input: string) => {
  const sanitizedValue = input.replace(/\D/g, "");

  if (sanitizedValue.length <= 8) {
    const day = sanitizedValue.slice(0, 2);
    const month = sanitizedValue.slice(2, 4);
    const year = sanitizedValue.slice(4, 8);

    if (sanitizedValue.length <= 2) {
      return `${day}`;
    }
    if (sanitizedValue.length <= 4) {
      return `${day}.${month}`;
    }
    return `${day}.${month}.${year}`;
  }

  return sanitizedValue.slice(0, 8);
};

export default formatInput;
