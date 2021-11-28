const TelegramBot = require('node-telegram-bot-api');
const token = '2102216686:AAF4Y3hwMGcBoAARfvhNscI7Fh_Gg0O3vLE';
const bot = new TelegramBot(token, { polling: true });
const start = () => {
    bot.on("message", async (message) => {
        const { chat, message_id } = message;
        const chatId = message.chat.id;
        const name = message.from.first_name;
        const text = message.text;
        const lastname = message.from.last_name;
        const id = message.from.id;
        const username = message.from.username;
        if (text == "/info" || text == "/info@beta_tests_bot") {
            bot.getUserProfilePhotos(id, 0, 1).then(function (data) {
                bot.sendPhoto(
                    chatId,
                    data.photos[0][0].file_id,
                    {
                        caption: `Ваше имя : ${name}\nВаше фамилия : ${lastname}\nВаш ID : ${id}\n Ваш user : @${username}\n`,
                        // Прошёл тест  : ${count} раза\n Ваш уровен Англ. яз : ${lvl}
                    },
                    {
                        reply_to_message_id: message_id,
                    }
                );
            });
        }
        else if (
            text == "/start" ||
            text == "start" ||
            text == "начать" ||
            text == "/start@Your_diary_Robot"
        ) {
            bot.sendMessage(
                chatId,
                `Привет <b>${name}</b>! 😊



Этот бот поможет определить твой уровень английского языка 🧠. В тесте всего 20 вопросов разной сложности, ты сможешь пройти его за 3-5 минут. 

Во всех вопросах нужно заполнить пропуск. У тебя будет два варианта ответа и возможность пропустить вопрос. 

Это не школьная контрольная, поэтому не бойся отвечать неправильно или пропускать вопросы с помощью кнопки «Я не знаю». Удачи!😇
                
                `,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `Да, готовь.`,
                                    callback_data: `Да, готовь.`,
                                },
                            ],
                            [
                                {
                                    text: `Нет, я не знаю.`,
                                    callback_data: `Нет, я не знаю.`,
                                },
                            ],
                        ],
                    },
                }
            );
        }
    }
    )
    bot.on("callback_query", async (query) => {
        const { chat, message_id, text } = query.message;
        switch (query.data) {
            case "Нет, я не знаю.":
                bot.deleteMessage(chat.id, message_id);
                bot.sendMessage(chat.id, `
                Ты уверень что ты не знаешь ? Может всё таки попробуешь ?`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "Попробовать",
                                    callback_data: "Да, готовь.",
                                },
                            ],
                        ],
                    },
                })
                break
            case "Да, готовь.":
                bot.deleteMessage(chat.id, message_id);
                bot.sendMessage(chat.id, `1. He advised me … the heavy furniture.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "not to lift",
                                    callback_data: "not to lift",
                                },
                            ],
                            [
                                {
                                    text: "isn't lift",
                                    callback_data: "isn't lift",
                                },
                            ],
                            [
                                {
                                    text: "to not lift",
                                    callback_data: "to not lift",
                                },
                            ],
                            [
                                {
                                    text: "Не знаю",
                                    callback_data: "Не знаю",
                                },
                            ]
                        ],
                    },
                });
                break
            case "not to lift":
            case "isn't lift":
            case "to not lift":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `2. My brother says he'll never forget … the Niagara Falls for the first time.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "he saw",
                                    callback_data: "he saw",
                                },
                            ],
                            [
                                {
                                    text: "to see",
                                    callback_data: "to see",
                                },
                            ],
                            [
                                {
                                    text: "seeing",
                                    callback_data: "seeing",
                                },
                            ],
                        ],
                    },
                });
                break
            case "he saw":
            case "to see":
            case "seeing":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `3. She says that when she was a child bananas … her least favorite fruit.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "have been",
                                    callback_data: "have been",
                                },
                            ],
                            [
                                {
                                    text: "are",
                                    callback_data: "are",
                                },
                            ],
                            [
                                {
                                    text: "were",
                                    callback_data: "were",
                                },
                            ],
                        ],
                    },
                });
                break
            case "have been":
            case "are":
            case "were":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `4. Rita wanted to change her hairstyle, so she … by a professional stylist.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "had cut it",
                                    callback_data: "had cut it",
                                },
                            ],
                            [
                                {
                                    text: "had it cut",
                                    callback_data: "had it cut",
                                },
                            ],
                            [
                                {
                                    text: "have to cut it",
                                    callback_data: "have to cut it",
                                },
                            ],
                        ],
                    },
                });
                break
            case "had cut it":
            case "had it cut":
            case "have to cut it":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `5. Mr. Halls reads … than anyone I know.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "faster",
                                    callback_data: "faster",
                                },
                            ],
                            [
                                {
                                    text: "fastly",
                                    callback_data: "fastly",
                                },
                            ],
                            [
                                {
                                    text: "more fast",
                                    callback_data: "more fast",
                                },
                            ],
                        ],
                    },
                });
                break
            case "faster":
            case "fastly":
            case "more fast":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `6. Neither my mom … me have ever been to Rome.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "but",
                                    callback_data: "but",
                                },
                            ],
                            [
                                {
                                    text: "or",
                                    callback_data: "or",
                                },
                            ],
                            [
                                {
                                    text: "nor",
                                    callback_data: "nor",
                                },
                            ],
                        ],
                    },
                });
                break
            case "but":
            case "or":
            case "nor":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `7. What time does the bus … London?`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "arrive",
                                    callback_data: "arrive",
                                },
                            ],
                            [
                                {
                                    text: "comes",
                                    callback_data: "comes",
                                },
                            ],
                            [
                                {
                                    text: "reach",
                                    callback_data: "reach",
                                },
                            ],
                        ],
                    },
                });
                break
            case "arrive":
            case "comes":
            case "reach":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `8. She must … on the phone. His line is constatnly busy.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "talked",
                                    callback_data: "talked",
                                },
                            ],
                            [
                                {
                                    text: "be talking",
                                    callback_data: "be talking",
                                },
                            ],
                            [
                                {
                                    text: "have talked",
                                    callback_data: "have talked",
                                },
                            ],
                        ],
                    },
                });
                break
            case "talked":
            case "be talking":
            case "have talked":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `9. They said they … a wonderful time in Istanbul the previous spring.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "had had",
                                    callback_data: "had had",
                                },
                            ],
                            [
                                {
                                    text: "were having",
                                    callback_data: "were having",
                                },
                            ],
                            [
                                {
                                    text: "would have",
                                    callback_data: "would have",
                                },
                            ],
                        ],
                    },
                });
                break
            case "had had":
            case "were having":
            case "would have":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `10. After working at the hospltal for a year, Bob finally … to sleepless nights.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "was used to",
                                    callback_data: "was used to",
                                },
                            ],
                            [
                                {
                                    text: "got used to",
                                    callback_data: "got used to",
                                },
                            ],
                            [
                                {
                                    text: "used to",
                                    callback_data: "used to",
                                },
                            ],
                        ],
                    },
                });
                break
            case "was used to":
            case "got used to":
            case "used to":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `11. The athletes … for two hours before they decided to have a break.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "have been training",
                                    callback_data: "have been training",
                                },
                            ],
                            [
                                {
                                    text: "had been training",
                                    callback_data: "had been training",
                                },
                            ],
                            [
                                {
                                    text: "must have training",
                                    callback_data: "must have training",
                                },
                            ],
                        ],
                    },
                });
                break
            case "have been training":
            case "had been training":
            case "must have training":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `12. If John … them, they wouldn't have opened the café on time.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "haven't helped",
                                    callback_data: "haven't helped",
                                },
                            ],
                            [
                                {
                                    text: "wouldn't help",
                                    callback_data: "wouldn't help",
                                },
                            ],
                            [
                                {
                                    text: "hadn't helped",
                                    callback_data: "hadn't helped",
                                },
                            ],
                        ],
                    },
                });
                break
            case "haven't helped":
            case "wouldn't help":
            case "hadn't helped":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `13. Bill asked his new neighbors where … from.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "are they",
                                    callback_data: "are they",
                                },
                            ],
                            [
                                {
                                    text: "they were",
                                    callback_data: "they were",
                                },
                            ],
                            [
                                {
                                    text: "were they",
                                    callback_data: "were they",
                                },
                            ],
                        ],
                    },
                });
                break
            case "are they":
            case "they were":
            case "were they":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `14. Liza didn't mean … you. It was just a bad joke.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "offend",
                                    callback_data: "offend",
                                },
                            ],
                            [
                                {
                                    text: "offending",
                                    callback_data: "offending",
                                },
                            ],
                            [
                                {
                                    text: "to offend",
                                    callback_data: "to offend",
                                },
                            ],
                        ],
                    },
                });
                break
            case "offend":
            case "offending":
            case "to offend":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `15. Debora tells the … stories I have ever heard.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "better",
                                    callback_data: "better",
                                },
                            ],
                            [
                                {
                                    text: "best",
                                    callback_data: "best",
                                },
                            ],
                            [
                                {
                                    text: "most good",
                                    callback_data: "most good",
                                },
                            ],
                        ],
                    },
                });
                break
            case "better":
            case "best":
            case "most good":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `16. Wendy is … shy to ask what he thinks about her present.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "enough",
                                    callback_data: "enough",
                                },
                            ],
                            [
                                {
                                    text: "too",
                                    callback_data: "too",
                                },
                            ],
                            [
                                {
                                    text: "very",
                                    callback_data: "very",
                                },
                            ],
                        ],
                    },
                });
                break
            case "enough":
            case "too":
            case "very":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `17. Our health has greatly … ever since we stopped eating sugar.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "developed",
                                    callback_data: "developed",
                                },
                            ],
                            [
                                {
                                    text: "increased",
                                    callback_data: "increased",
                                },
                            ],
                            [
                                {
                                    text: "improved",
                                    callback_data: "improved",
                                },
                            ],
                        ],
                    },
                });
                break
            case"developed":
            case"increased":
            case"improved":
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `18. Fred … have painted such a winderful picture. He has never liked drawing!`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "shouldn't",
                                callback_data: "shouldn't",
                            },
                        ],
                        [
                            {
                                text: "needn't",
                                callback_data: "needn't",
                            },
                        ],
                        [
                            {
                                text: "can't",
                                callback_data: "can't",
                            },
                        ],
                    ],
                },
            });
            break
        }
    });
}
start();