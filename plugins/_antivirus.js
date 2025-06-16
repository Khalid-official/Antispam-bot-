/*const handler = (m) => m;

handler.all = async function (m, { isBotAdmin }) {
  // Check if the message is in a personal chat
  if (!m.isGroup && m.messageStubType === 68) {
    const log = {
      key: m.key,
      content: m.msg,
      sender: m.sender,
    };
    // Perform the block operation instead of remove
    await this.modifyChat(m.chat, 'block', {
      includeStarred: false,
    }).catch(console.log);
  }
};

export default handler;
