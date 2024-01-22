import {
  AiOutlineClose,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

import { MdDelete, MdDone, MdCloudUpload } from "react-icons/md";

import { GrStatusWarning } from "react-icons/gr";
import { VscFoldDown, VscFoldUp } from "react-icons/vsc";
import { IoCaretBackOutline } from "react-icons/io5";

export const CloseBtn = () => {
  return <AiOutlineClose />;
};

export const LeftBtn = () => {
  return <AiOutlineLeft />;
};

export const RightBtn = () => {
  return <AiOutlineRight />;
};

export const DeleteBtn = () => {
  return <MdDelete />;
};

export const DoneBtn = () => {
  return <MdDone />;
};

export const UploadBtn = () => {
  return <MdCloudUpload />;
};

export const StatusWarninig = () => {
  return <GrStatusWarning />;
};

export const FoldDownBtn = () => {
  return <VscFoldDown />
}

export const FoldUpBtn = () => {
  return <VscFoldUp />
}

export const BrackOutBtn = () => {
  return <IoCaretBackOutline />
}
