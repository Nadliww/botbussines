if (!text) throw "[!] Masukkan teks."
const configuration = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            m.reply(response.data.choices[0].text)
    }
handler.help = ['ai', 'openai']
handler.tags = ['info', 'fun']
handler.command = /^(ai|openai)$/i
module.exports = handler;
