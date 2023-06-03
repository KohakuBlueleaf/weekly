import { CognitoJwtVerifier } from "aws-jwt-verify";
import awsmobile from "../../aws-exports.js";

// Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
  userPoolId: awsmobile.aws_user_pools_id,
  tokenUse: "id",
  clientId: awsmobile.aws_user_pools_web_client_id,
});

(async () => {
  try {
    const payload = await verifier.verify(
      "eyJraWQiOiJLT1FQZERjZnRwNWt4cVJoMmpHaWthUmpIYXE5K1dNUVU4YncyTnZUeU8wPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2NjI3Y2QwMS00ZTAyLTQwMmEtYTU5YS0wYTI0MGY2NzdhN2MiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfellUcGRRaHZmIiwiY29nbml0bzp1c2VybmFtZSI6ImtibHVlbGVhZiIsIm9yaWdpbl9qdGkiOiJiNGQxMTU1Ni04MjdhLTQ2MGEtOTgwMC0yMTg3ZWRlZTMyYWIiLCJhdWQiOiI2bDBxb2xtamRwa2MxdGcxZ3E4ZDF2N2Q4IiwiZXZlbnRfaWQiOiJlYzZkYWM2Yy02MjkxLTQ4YmItYjhmZS1jMjdiYjY5NGUyZjUiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY4NTc5NzAyMywiZXhwIjoxNjg1ODAwNjIzLCJpYXQiOjE2ODU3OTcwMjMsImp0aSI6ImE5NGQ1NzljLTM5YjItNGNmNy05MTQwLTI2ZGY5NWZmNTlmMCIsImVtYWlsIjoiYXBvbGxveWVoMDEyM0BnbWFpbC5jb20ifQ.icaSzsT2ckB7XCbIQKeB-WGmj7Gf8gkQIknuyK2Oe4cQePTagyIxnugLwSP63Vkj7NLGxT0GZbQV17fWRCMa2z8zto-56OvGcY9ZcSkRctSKlS98v30txf9w4b4l1y6DX-o8gEEPE1CiC5cXAF-00SVSJ7yB8M3HrV2qkPSjVIUp7rjSFKxJlKj5LVE3pkZe2owRuyR6UvjzK1RTgy7q9j28ZlyUWXghLFmIAnYC4Q3V95HMMgYu3Tbdxb0Gg5xWIR0YyBbM83vsFMKWBHTBkl1dhDuWLJkNClL1nNgHmQdLE-1f9WvJVN9locoMuCx_dQlJiICmHvE7kxvSReSMgg"
    );
    console.log("Token is valid. Payload:", payload);
  } catch {
    console.log("Token not valid!");
  }
})()