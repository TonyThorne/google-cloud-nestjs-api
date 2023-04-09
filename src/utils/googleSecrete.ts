'use strict'

export async function main(
  // name = 'projects/396881755897/secrets/mondaykey/versions/',
  name = 'projects/396881755897/secrets/mondaykey/versions/1',
) {
  // Imports the Secret Manager library
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { SecretManagerServiceClient } = require('@google-cloud/secret-manager')

  // Instantiates a client
  const client = new SecretManagerServiceClient()

  async function accessSecretVersion() {
    const [version] = await client.accessSecretVersion({
      name: name,
    })

    // Extract the payload as a string.
    const payload = version.payload.data.toString()
    return payload
    // WARNING: Do not print the secret in a production environment - this
    // snippet is showing how to access the secret material.
    // console.info(`Payload: ${payload}`)
  }

  return accessSecretVersion()
  // [END secretmanager_access_secret_version]
}
