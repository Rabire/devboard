import generateFile from "../utils/faker/files";
import getFileIcon from "../utils/files";

const files = Array.from({ length: 20 }, generateFile);

// TODO: add search feature

const FilesSlider = () => (
  <section className="p-0 overflow-scroll relative">
    <h2 className="p-5 sticky top-0 bg-secondary">Mes fichiers</h2>

    <div className="grid grid-cols-3 gap-5 px-5 ">
      {files.map((file) => (
        <button
          key={file.name}
          className="overflow-hidden flex flex-col items-center gap-2"
        >
          {getFileIcon(file.extention)}
          {file.name}
        </button>
      ))}
    </div>
  </section>
);

export default FilesSlider;
