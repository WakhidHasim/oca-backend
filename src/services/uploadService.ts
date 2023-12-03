type UploadParam = {
  file?: Buffer
}
export const uploadService = async (param: UploadParam): Promise<string> => {
  if (!param.file) throw new Error("file is required")

  const base64String = param.file.toString("base64")
  const payload = {
    data: base64String
  }

  // TODO: send to service, bisa pakai axios atau fetch biasa
  // const response = await fetch("https://foo.com", {
  //   body: JSON.stringify(payload),
  //   method: "POST"
  // })

  return base64String
}