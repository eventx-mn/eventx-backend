import amqplib from 'amqplib';

const amqp_url = 'amqp://localhost:5672';
const queue = 'product_inventory';

const text = {
  item_id: 'macbook',
  text: 'This is a sample message to send receiver to check the ordered Item Availablility',
};

export const sendMessage = async () => {
  let connection;
  try {
    connection = await amqplib.connect('amqp://localhost');
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(text)));
    console.log(" [x] Sent '%s'", text);
    await channel.close();
  } catch (err) {
    console.warn(err);
  } finally {
    if (connection) await connection.close();
  }
};

export const receiveMessage = async () => {
  try {
    const connection = await amqplib.connect(amqp_url);
    const channel = await connection.createChannel();

    process.once('SIGINT', async () => {
      await channel.close();
      await connection.close();
    });

    await channel.assertQueue(queue, { durable: false });
    await channel.consume(
      queue,
      (message) => {
        if (message) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(message.content.toString())
          );
        }
      },
      { noAck: true }
    );

    console.log(' [*] Waiting for messages. To exit press CTRL+C');
  } catch (err) {
    console.warn(err);
  }
};
