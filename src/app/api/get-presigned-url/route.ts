// POST /get-presigned-url
import { auth } from "@/auth";
import { S3 } from "@/lib/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest ) {
  const session= await auth()
  if (!session?.user?.id) {
    return Response.json({
      message: "Not authorised"
    }, {status: 400})
  }
  const userId = session?.user?.id
  try {
    const { fileName, fileType } = await req.json();
  if (!fileName && !fileType) {
    return Response.json({
      success: false,
      message: "No file name"
    }, {status: 400})
  }
  const audioKey = `videos/${userId}/voiceovers/${crypto.randomUUID()}.mp3`
  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: audioKey,
    ContentType: fileType,
  });
  const url = await getSignedUrl(S3, command, { expiresIn: 300 }); // expires in 5 mins
  const publicUrl = `${process.env.R2_DOMAIN}/${audioKey}`
  return Response.json({ url, publicUrl }, {status: 200});
  } catch (err) {
    return Response.json({
      success: false,
      message: "Failed to upload file",
    })
  }
}

