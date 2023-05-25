import DocX from "../components/svg/files-icon/DocX";
import Mp4 from "../components/svg/files-icon/Mp4";
import Pdf from "../components/svg/files-icon/Pdf";
import Txt from "../components/svg/files-icon/Txt";

const getFileIcon = (extention?: string) => {
  switch (extention) {
    case "json":
      return <Txt />;
    case "docx":
      return <DocX />;
    case "pdf":
      return <Pdf />;
    case "mp4":
      return <Mp4 />;
    default:
      return <Txt />;
  }
};

export default getFileIcon;
