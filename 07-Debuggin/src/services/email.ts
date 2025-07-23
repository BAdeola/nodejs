async function getBaseEmail(senderName: string) {
    return {
        from: `${senderName} <no-reply@example.com>`,
        subject: "Welcome!",
        text: `Hello ${senderName}, welcome to our service!`
    };
}

export { getBaseEmail };