import moment from "moment";

export default function normalizeData(edit) {
  const data = edit || new Date();
  return `${moment(data).format("l")} ${moment(data).format("LT")}`;
}
