import { randFileName, rand } from "@ngneat/falso";
import FILES_EXTENSION from "../../static/files";

const generateFile = () => {
  const file = randFileName().split(".")[0];
  const extention = rand(FILES_EXTENSION);

  return {
    name: `${file}.${extention}`,
    extention,
  };
};

export default generateFile;
