import { faker } from "@faker-js/faker";
import FILES_EXTENSION from "../../static/files";

const generateFile = () => {
  const file = faker.system.commonFileName(
    faker.helpers.arrayElement(FILES_EXTENSION)
  );

  return {
    name: file,
    extention: file.split(".").pop(),
  };
};

export default generateFile;
