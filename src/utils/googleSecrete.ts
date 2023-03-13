// Intent: To get the goodle secret for the Monday key.

export function google(): string {

  // const name = 'projects/my-project/secrets/my-secret/versions/5';
  // const name = 'projects/my-project/secrets/my-secret/versions/latest';
  const name = 'projects/396881755897/secrets/mondaykey/versions/1';

  // Imports the Secret Manager library
  const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

  // Instantiates a client
  const client = new SecretManagerServiceClient();

  async function accessSecretVersion() {
    const [version] = await client.accessSecretVersion({
      name: name,
    });

    // Extract the payload as a string.
    const payload = version.payload.data.toString();

    // WARNING: Do not print the secret in a production environment - this
    // snippet is showing how to access the secret material.
    console.info(`Payload: ${payload}`);
  }

  accessSecretVersion();
}
