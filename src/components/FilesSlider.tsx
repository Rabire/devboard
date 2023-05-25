import cn from "classnames";
import generateFile from "../utils/faker/files";
import getFileIcon from "../utils/files";

const files = Array.from({ length: 20 }, generateFile);

const FilesSlider = () => (
  <section className="flex overflow-x-scroll items-center">
    <h2 className="mr-5">
      Mes
      <br />
      fichiers
    </h2>

    {files.map((file) => (
      <button
        key={file.name}
        className={cn(
          "w-28 flex flex-col items-center",
          "px-4 border-white",
          "relative group"
        )}
      >
        {getFileIcon(file.extention)}
        <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden group-hover:block">
          {file.name}
        </p>
      </button>
    ))}
  </section>
);

export default FilesSlider;
