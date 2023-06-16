const { CognitoJwtVerifier } = require("aws-jwt-verify");
const awsmobile = require("../../aws-module");

// Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
  userPoolId: awsmobile.aws_user_pools_id,
  tokenUse: "id",
  clientId: awsmobile.aws_user_pools_web_client_id,
});

async function verifyToken(idToken){
  try {
    const payload = await verifier.verify(idToken);
    console.log("Token is valid.");
    return payload;
  } catch {
    console.log("Token not valid!");
    return undefined;
  }
}

module.exports = {
  verifyToken,
  cliId: awsmobile.aws_user_pools_web_client_id
};